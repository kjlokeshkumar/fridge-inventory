"use client";

import { useEffect } from 'react';
import { getIngredientImage } from '@/lib/produce-styles';
import { getIngredientVisualInfo } from '@/lib/ingredient-guide';
import { toTamilItemName } from '@/lib/translations';

interface IngredientInspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  ingredientName: string;
  language?: string;
}

export default function IngredientInspectionModal({
  isOpen,
  onClose,
  ingredientName,
  language = 'English'
}: IngredientInspectionModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !ingredientName) return null;

  const imageSrc = getIngredientImage(ingredientName);
  const visualInfo = getIngredientVisualInfo(ingredientName);
  const tamilTitle = toTamilItemName(ingredientName);

  return (
    <div
      className="ingredient-inspect-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inspect-ingredient-title"
    >
      <div
        className="ingredient-inspect-modal glass-pane"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="ingredient-inspect-close"
          onClick={onClose}
          aria-label="Close ingredient preview"
        >
          ✕
        </button>

        <div className="ingredient-inspect-content">
          {/* Large High-Res Porcelain Ramekin Photo */}
          <div className="ingredient-inspect-bowl-wrap">
            <div className="ingredient-inspect-porcelain-bowl">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt={ingredientName}
                  className="ingredient-inspect-photo"
                />
              ) : (
                <span className="ingredient-inspect-fallback">🍲</span>
              )}
            </div>
            <span className="ingredient-inspect-badge">Authentic Food Photo</span>
          </div>

          {/* Names & Language Translations */}
          <div className="ingredient-inspect-titles">
            <h3 id="inspect-ingredient-title" className="ingredient-inspect-main-title">
              {language === 'Tamil' ? tamilTitle : ingredientName}
            </h3>
            {language !== 'Tamil' && tamilTitle && tamilTitle !== ingredientName && (
              <span className="ingredient-inspect-tamil-sub">{tamilTitle}</span>
            )}
            {visualInfo.tamilName && (
              <span className="ingredient-inspect-trad-name">{visualInfo.tamilName}</span>
            )}
          </div>

          {/* Visual Distinction & Identifier Cards */}
          <div className="ingredient-inspect-details">
            <div className="inspect-info-card cue-card">
              <div className="inspect-card-header">
                <span className="inspect-card-icon" aria-hidden="true">🔍</span>
                <h4>Visual Cue (What to look for)</h4>
              </div>
              <p>{visualInfo.visualCue}</p>
            </div>

            {visualInfo.visualDifferenceNote && (
              <div className="inspect-info-card diff-card">
                <div className="inspect-card-header">
                  <span className="inspect-card-icon" aria-hidden="true">💡</span>
                  <h4>How to Tell Them Apart</h4>
                </div>
                <p className="inspect-diff-text">{visualInfo.visualDifferenceNote}</p>
              </div>
            )}

            {visualInfo.culinaryUse && (
              <div className="inspect-info-card role-card">
                <div className="inspect-card-header">
                  <span className="inspect-card-icon" aria-hidden="true">🍳</span>
                  <h4>Culinary Role</h4>
                </div>
                <p>{visualInfo.culinaryUse}</p>
              </div>
            )}
          </div>

          <button
            type="button"
            className="btn-primary ingredient-inspect-done-btn"
            onClick={onClose}
          >
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
}
