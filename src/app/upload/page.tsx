"use client";

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import './upload.css';

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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

    const formData = new FormData();
    files.forEach(file => formData.append('images', file));

    try {
      const response = await fetch('/api/analyze-image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const result = await response.json();
      console.log('Analysis Result:', result);
      
      // Navigate to inventory after successful upload
      router.push('/inventory');
    } catch (err) {
      console.error(err);
      setError('Failed to analyze image. Please try again.');
      setIsAnalyzing(false);
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
              <>
                <span className="spinner"></span> Analyzing...
              </>
            ) : (
              'Analyze with AI ✨'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
