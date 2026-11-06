"use client";

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import './upload.css';
import { UI_TRANSLATIONS } from '@/lib/translations';

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [progressMsg, setProgressMsg] = useState<string>('');
  const [language, setLanguage] = useState('English');
  const [isNativePlatform, setIsNativePlatform] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('appLanguage') || 'English';
    setLanguage(stored);
    setIsNativePlatform(Capacitor.isNativePlatform());
  }, []);

  const handleTakePhoto = async () => {
    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      if (!photo.webPath) {
        throw new Error('The camera did not return a photo.');
      }

      const response = await fetch(photo.webPath);
      if (!response.ok) {
        throw new Error('Could not read the captured photo.');
      }

      const blob = await response.blob();
      const file = new File(
        [blob],
        `fridge-photo-${Date.now()}.${photo.format}`,
        { type: blob.type || `image/${photo.format}` }
      );
      setFiles((current) => [...current, file]);
      setPreviews((current) => [...current, URL.createObjectURL(file)]);
      setError(null);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Camera access failed.';
      if (!/cancel/i.test(message)) {
        setError(`Could not take a photo: ${message}`);
      }
    }
  };

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
    setProgressMsg(t.compressing);

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
      for (let i = 0; i < chunks.length; i++) {
        setProgressMsg(`${t.analyzingBatch} ${i + 1} ${t.of} ${chunks.length}...`);
        
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
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ images: base64Images }),
        });

        if (!response.ok) {
          const errText = await response.text();
          console.error("Vercel API raw response:", errText);
          let errData: Record<string, string> = {};
          try { errData = JSON.parse(errText); } catch {}
          if (response.status === 422 || errData.error === 'no_food_detected') {
            throw new Error(t.noFoodDetected || errData.message || 'No edible food items or groceries detected.');
          }
          throw new Error(errData.error || errData.message || `API rejected batch ${i + 1} with status ${response.status}. See console for raw response.`);
        }

        const batchResult = await response.json();
        if (Array.isArray(batchResult.suggestions) && batchResult.suggestions.length > 0) {
          try {
            const existing = JSON.parse(localStorage.getItem('pendingFridgeSuggestions') || '[]');
            const existingNames = new Set(existing.map((s: { name: string }) => s.name.toLowerCase()));
            const toAdd = batchResult.suggestions.filter((s: { name: string }) => !existingNames.has(s.name.toLowerCase()));
            localStorage.setItem('pendingFridgeSuggestions', JSON.stringify([...existing, ...toAdd]));
          } catch {
            localStorage.setItem('pendingFridgeSuggestions', JSON.stringify(batchResult.suggestions));
          }
        }
      }
      
      setProgressMsg(t.completeRedirecting);
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

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.English;

  return (
    <div className="upload-container">
      <header className="dashboard-header">
        <h1 className="page-title">{t.scanTitle}</h1>
        <p className="page-subtitle">{t.scanSub}</p>
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
            <h3>{t.clickOrDrag}</h3>
            <p>{t.supports}</p>
            <input 
              type="file" 
              accept="image/*"
              multiple
              className="hidden-input" 
              ref={fileInputRef}
              onChange={handleFileSelect}
            />
            {isNativePlatform && (
              <button
                type="button"
                className="btn-secondary"
                style={{ marginTop: '16px' }}
                onClick={(event) => {
                  event.stopPropagation();
                  void handleTakePhoto();
                }}
              >
                📷 {t.takePhoto}
              </button>
            )}
          </div>
        ) : (
          <div className="preview-container glass-pane">
            <div className="preview-grid">
              {previews.map((preview, index) => (
                <div key={index} className="preview-item-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={preview} 
                    alt={`Upload preview ${index + 1}`} 
                    className="preview-image" 
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                    }}
                  />
                  <div className="fallback-icon hidden" style={{ width: '96px', height: '96px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.06)', borderRadius: '8px', border: '1px dashed rgba(45,110,119,0.3)', fontSize: '2rem' }}>
                    📄
                  </div>
                  <span className="preview-filename">
                    {files[index]?.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="preview-action-row">
              <button 
                type="button"
                className="btn-secondary" 
                onClick={() => fileInputRef.current?.click()}
                disabled={isAnalyzing}
              >
                ➕ Add More
              </button>
              {isNativePlatform && (
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => void handleTakePhoto()}
                  disabled={isAnalyzing}
                >
                  📷 {t.takePhoto}
                </button>
              )}
              <button 
                type="button"
                className="btn-danger" 
                onClick={() => {
                  setFiles([]);
                  setPreviews([]);
                }}
                disabled={isAnalyzing}
              >
                🗑️ {t.retakeAll}
              </button>
            </div>

            <input 
              type="file" 
              accept="image/*"
              multiple
              className="hidden-input" 
              ref={fileInputRef}
              onChange={(e) => {
                const newFiles = Array.from(e.target.files || []);
                if (newFiles.length > 0) {
                  setFiles(prev => [...prev, ...newFiles]);
                  setPreviews(prev => [...prev, ...newFiles.map(f => URL.createObjectURL(f))]);
                }
              }}
            />
          </div>
        )}

        {error && <div className="error-message">{error}</div>}

        {previews.length > 0 && (
          <div className="upload-submit-container">
            {isAnalyzing ? (
              <div className="analyzing-progress-banner" role="status" aria-live="polite">
                <span className="spinner" aria-hidden="true" />
                <div className="analyzing-progress-text">
                  <strong>{t.analyzingBatch}...</strong>
                  {progressMsg ? (
                    <p>{progressMsg}</p>
                  ) : (
                    <p>Identifying ingredients, categories, and freshness with AI…</p>
                  )}
                </div>
              </div>
            ) : (
              <button 
                type="button"
                className="btn-primary scan-analyze-btn" 
                onClick={handleUpload}
                disabled={files.length === 0}
              >
                ✨ {t.analyzeWithAi} ({previews.length})
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
