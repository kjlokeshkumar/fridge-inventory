"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import './upload.css';

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progressMsg, setProgressMsg] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const compressImage = async (file: File, maxWidth = 800): Promise<File> => {
    
    // First, Check if we need to convert HEIC to JPEG.
    let fileToCompress = file;
    if (file.type === 'image/heic' || file.name.toLowerCase().endsWith('.heic')) {
       try {
         // Dynamically import heic2any ONLY on the client to avoid SSR "window is not defined" crashes
         const heic2anyModule = (await import('heic2any')).default;
         const conversionResult = await heic2anyModule({ blob: file, toType: "image/jpeg", quality: 0.8 });
         const jpegBlob = Array.isArray(conversionResult) ? conversionResult[0] : conversionResult;
         
         // Create a new file object for the Canvas
         fileToCompress = new File([jpegBlob], file.name.replace(/\.[^/.]+$/, ".jpg"), {
            type: 'image/jpeg',
            lastModified: Date.now(),
         });
       } catch (err) {
         console.error(`HEIC conversion failed for ${file.name}. Falling back to raw file.`, err);
         return file; 
       }
    }

    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = URL.createObjectURL(fileToCompress);
      image.onload = () => {
        const canvas = document.createElement('canvas');
        let width = image.width;
        let height = image.height;
        
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error("Could not get canvas context"));
          return;
        }
        
        // Fill white background for transparent images turning to JPEG
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(image, 0, 0, width, height);
        
        // Compress to JPEG with 0.7 quality
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Canvas to Blob failed"));
            return;
          }
          const compressedFile = new File([blob], file.name.replace(/\.[^/.]+$/, ".jpg"), {
            type: 'image/jpeg',
            lastModified: Date.now(),
          });
          resolve(compressedFile);
        }, 'image/jpeg', 0.5);
      };
      
      // If the image fails to load into the canvas (e.g. unsupported metadata 
      // or CORS taint), we log the error and just return the originally processed file.
      // This prevents the entire upload batch from failing.
      image.onerror = (err) => {
        console.warn(`Failed to compress image ${fileToCompress.name}, using original file instead:`, err);
        resolve(fileToCompress);
      };
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length > 0) {
      setFiles(selectedFiles);
      setPreviews(selectedFiles.map(f => URL.createObjectURL(f)));
      setError(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFiles = Array.from(e.dataTransfer.files || []).filter(f => f.type.startsWith('image/') || f.name.toLowerCase().match(/\.(jpg|jpeg|png|webp|heic)$/));
    if (droppedFiles.length > 0) {
      setFiles(droppedFiles);
      setPreviews(droppedFiles.map(f => URL.createObjectURL(f)));
      setError(null);
    } else {
      setError('Please upload valid image files.');
    }
  };

  const handleUpload = async () => {
    if (files.length === 0) return;

    setIsAnalyzing(true);
    setError(null);
    setProgressMsg('Compressing images...');

    try {
      // 1. Compress all files
      const compressedFiles = await Promise.all(files.map(f => compressImage(f)));
      
      // 2. Chunk files to stay under 2MB limit to safely pass Vercel's proxy
      const MAX_CHUNK_SIZE = 2 * 1024 * 1024; // 2MB
      const chunks: File[][] = [];
      let currentChunk: File[] = [];
      let currentChunkSize = 0;

      for (const file of compressedFiles) {
        if (currentChunkSize + file.size > MAX_CHUNK_SIZE && currentChunk.length > 0) {
          chunks.push(currentChunk);
          currentChunk = [];
          currentChunkSize = 0;
        }
        currentChunk.push(file);
        currentChunkSize += file.size;
      }
      if (currentChunk.length > 0) {
        chunks.push(currentChunk);
      }

      // 3. Upload chunks sequentially to avoid rate limits
      let totalAnalyzed = 0;
      for (let i = 0; i < chunks.length; i++) {
        setProgressMsg(`Analyzing batch ${i + 1} of ${chunks.length}...`);
        
        // Convert chunk files to base64 Data URLs so we bypass Next.js buggy FormData parser entirely
        const base64Images = await Promise.all(chunks[i].map(file => {
          return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        }));

        const response = await fetch('/api/analyze-image', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ images: base64Images }),
        });

        if (!response.ok) {
          const errText = await response.text();
          console.error("Vercel API raw response:", errText);
          let errData: Record<string, string> = {};
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          try { errData = JSON.parse(errText); } catch(e) {}
          throw new Error(errData.error || errData.message || `API rejected batch ${i + 1} with status ${response.status}. See console for raw response.`);
        }

        const result = await response.json();
        totalAnalyzed += result.items?.length || 0;
      }
      
      setProgressMsg('Analysis complete! Redirecting...');
      // Small delay to show completion message
      await new Promise(r => setTimeout(r, 800));
      router.push('/inventory');
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Failed to analyze images. Please try again.');
    } finally {
      setIsAnalyzing(false);
      setProgressMsg('');
    }
  };

  return (
    <div className="upload-container">
      <header className="dashboard-header">
        <h1 className="page-title">Scan Inventory</h1>
        <p className="page-subtitle">Upload a photo of your fridge, pantry, or grocery receipt</p>
      </header>

      <div className="upload-content">
        {previews.length === 0 ? (
          <div 
            className="drop-zone glass-pane"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <div className="drop-zone-icon">📷</div>
            <h3>Click or drag images here</h3>
            <p>Supports JPG, PNG, WEBP (Max 10MB)</p>
            <input 
              type="file" 
              accept="image/*"
              multiple
              className="hidden-input" 
              ref={fileInputRef}
              onChange={handleFileSelect}
            />
          </div>
        ) : (
          <div className="preview-container glass-pane" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', padding: '20px' }}>
            {previews.map((preview, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '10px', borderRadius: '12px' }}>
                <img 
                  src={preview} 
                  alt={`Upload preview ${index + 1}`} 
                  className="preview-image" 
                  style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }} 
                  onError={(e) => {
                    // Fallback for formats browser doesn't support rendering (like HEIC)
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                  }}
                />
                <div className="fallback-icon hidden" style={{ width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', border: '1px dashed rgba(255,255,255,0.3)', fontSize: '2rem' }}>
                  📄
                </div>
                <span style={{ fontSize: '0.75rem', marginTop: '10px', maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', opacity: 0.8 }}>
                  {files[index]?.name}
                </span>
              </div>
            ))}
            <div className="preview-overlay" style={{ width: '100%', marginTop: '15px' }}>
              <button 
                className="btn-secondary btn-icon" 
                onClick={() => {
                  setFiles([]);
                  setPreviews([]);
                }}
                disabled={isAnalyzing}
              >
                ✕ Retake All
              </button>
            </div>
          </div>
        )}

        {error && <div className="error-message">{error}</div>}

        <div className="action-buttons">
          <button 
            className="btn-primary btn-large" 
            onClick={handleUpload}
            disabled={files.length === 0 || isAnalyzing}
          >
            {isAnalyzing ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="spinner"></span> Analyzing...
                </div>
                {progressMsg && <span style={{ fontSize: '0.85rem', opacity: 0.9 }}>{progressMsg}</span>}
              </div>
            ) : (
              'Analyze with AI ✨'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
