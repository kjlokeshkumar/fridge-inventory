// src/lib/sparkles.ts - High-Performance HTML5 Canvas 2D Particle Engine
export type SparkleType = 'add' | 'remove' | 'open' | 'close' | 'celebrate';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  rotation: number;
  rotSpeed: number;
  shape: 'star' | 'circle' | 'emoji';
  emoji?: string;
  twinklePhase: number;
}

let activeCanvas: HTMLCanvasElement | null = null;
let activeCtx: CanvasRenderingContext2D | null = null;
const particles: Particle[] = [];
let animFrameId: number | null = null;

function ensureCanvas(): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } | null {
  if (typeof window === 'undefined' || !document?.body) return null;

  if (!activeCanvas || !document.body.contains(activeCanvas)) {
    activeCanvas = document.createElement('canvas');
    activeCanvas.className = 'html5-sparkles-canvas';
    activeCanvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 999999;
    `;
    document.body.appendChild(activeCanvas);
    activeCtx = activeCanvas.getContext('2d');
  }

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const displayWidth = window.innerWidth;
  const displayHeight = window.innerHeight;

  if (activeCanvas.width !== displayWidth * dpr || activeCanvas.height !== displayHeight * dpr) {
    activeCanvas.width = displayWidth * dpr;
    activeCanvas.height = displayHeight * dpr;
    activeCanvas.style.width = `${displayWidth}px`;
    activeCanvas.style.height = `${displayHeight}px`;
    if (activeCtx) {
      activeCtx.scale(dpr, dpr);
    }
  }

  return activeCtx ? { canvas: activeCanvas, ctx: activeCtx } : null;
}

function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, spikes: number, outerRadius: number, innerRadius: number, color: string, alpha: number) {
  let rot = (Math.PI / 2) * 3;
  let cx = x;
  let cy = y;
  const step = Math.PI / spikes;

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    cx = x + Math.cos(rot) * outerRadius;
    cy = y + Math.sin(rot) * outerRadius;
    ctx.lineTo(cx, cy);
    rot += step;

    cx = x + Math.cos(rot) * innerRadius;
    cy = y + Math.sin(rot) * innerRadius;
    ctx.lineTo(cx, cy);
    rot += step;
  }
  ctx.lineTo(x, y - outerRadius);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.globalAlpha = Math.max(0, alpha);
  ctx.shadowColor = color;
  ctx.shadowBlur = 8;
  ctx.fill();
  ctx.restore();
}

function updateAndRender() {
  if (!activeCtx || !activeCanvas) return;

  activeCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];

    // Physics update
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.18; // gravity
    p.vx *= 0.96; // air resistance
    p.vy *= 0.96;
    p.rotation += p.rotSpeed;
    p.alpha -= p.decay;
    p.twinklePhase += 0.2;

    if (p.alpha <= 0 || p.y > window.innerHeight + 50) {
      particles.splice(i, 1);
      continue;
    }

    const currentAlpha = Math.max(0, p.alpha * (0.8 + 0.2 * Math.sin(p.twinklePhase)));

    if (p.shape === 'star') {
      drawStar(activeCtx, p.x, p.y, 4, p.size, p.size * 0.35, p.color, currentAlpha);
    } else if (p.shape === 'emoji' && p.emoji) {
      activeCtx.save();
      activeCtx.font = `${Math.round(p.size * 1.4)}px "Segoe UI Emoji", "Apple Color Emoji", sans-serif`;
      activeCtx.globalAlpha = currentAlpha;
      activeCtx.textAlign = 'center';
      activeCtx.textBaseline = 'middle';
      activeCtx.translate(p.x, p.y);
      activeCtx.rotate(p.rotation);
      activeCtx.fillText(p.emoji, 0, 0);
      activeCtx.restore();
    } else {
      // Glowing orb with radial gradient
      activeCtx.save();
      activeCtx.globalAlpha = currentAlpha;
      activeCtx.beginPath();
      activeCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      activeCtx.fillStyle = p.color;
      activeCtx.shadowColor = p.color;
      activeCtx.shadowBlur = 10;
      activeCtx.fill();
      activeCtx.restore();
    }
  }

  if (particles.length > 0) {
    animFrameId = requestAnimationFrame(updateAndRender);
  } else {
    // Clean up when idle to save CPU/battery
    if (activeCanvas && document.body.contains(activeCanvas)) {
      activeCanvas.remove();
      activeCanvas = null;
      activeCtx = null;
    }
    animFrameId = null;
  }
}

export function triggerSparkles(x: number, y: number, type: SparkleType = 'celebrate') {
  if (typeof window === 'undefined') return;

  // Respect user preference for reduced motion
  try {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
  } catch {
    // ignore
  }

  const canvasSetup = ensureCanvas();
  if (!canvasSetup) return;

  // Viewport-relative coordinates
  const screenX = Math.min(Math.max(20, x), window.innerWidth - 20);
  const screenY = Math.min(Math.max(20, y), window.innerHeight - 20);

  const count = type === 'open' ? 24 : type === 'celebrate' ? 28 : type === 'remove' ? 14 : 18;
  const emojis = type === 'add'
    ? ['✨', '🌱', '⭐', '🌟', '🥬']
    : type === 'remove'
    ? ['💨', '✨', '🍃', '💫']
    : type === 'open'
    ? ['✨', '🍲', '⭐', '✨', '🥣']
    : type === 'close'
    ? ['✨', '💫', '⭐']
    : ['✨', '🎉', '⭐', '🌟', '💖'];

  const colors = [
    '#2dd4bf', // Teal
    '#fbbf24', // Amber gold
    '#f87171', // Coral red
    '#34d399', // Emerald green
    '#a78bfa', // Lavender
    '#fef08a', // Light yellow
    '#ffffff'  // Crisp white
  ];

  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.7;
    const speed = (type === 'open' ? 4 : 3) + Math.random() * 5.5;
    const isEmoji = i % 3 === 0;
    const isStar = i % 3 === 1;

    particles.push({
      x: screenX,
      y: screenY,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - (type === 'add' || type === 'open' ? 2.5 : 0.5),
      size: isEmoji ? 14 + Math.random() * 8 : 4 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
      decay: 0.016 + Math.random() * 0.018,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.18,
      shape: isEmoji ? 'emoji' : isStar ? 'star' : 'circle',
      emoji: isEmoji ? emojis[Math.floor(Math.random() * emojis.length)] : undefined,
      twinklePhase: Math.random() * Math.PI * 2,
    });
  }

  if (!animFrameId) {
    animFrameId = requestAnimationFrame(updateAndRender);
  }
}

export function triggerSparklesAtElement(element: HTMLElement | null, type: SparkleType = 'celebrate') {
  if (!element || typeof window === 'undefined') return;
  const rect = element.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  triggerSparkles(x, y, type);
}
