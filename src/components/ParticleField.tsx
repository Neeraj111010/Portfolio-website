import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  r: number;
  vy: number;
  vx: number;
  alpha: number;
  twinkleSpeed: number;
  phase: number;
};

const ParticleField = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const count = Math.min(80, Math.max(30, Math.floor(w / 22)));
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 0.8 + Math.random() * 2.2,
      vy: -(0.12 + Math.random() * 0.35),
      vx: (Math.random() - 0.5) * 0.12,
      alpha: 0.15 + Math.random() * 0.35,
      twinkleSpeed: 0.004 + Math.random() * 0.014,
      phase: Math.random() * Math.PI * 2,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.phase += p.twinkleSpeed;
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.phase) * 0.08;
        if (p.y < -12) {
          p.y = h + 12;
          p.x = Math.random() * w;
        }
        if (p.x < -12) p.x = w + 12;
        if (p.x > w + 12) p.x = -12;

        const a = p.alpha * (0.55 + 0.45 * Math.sin(p.phase * 2));
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 5);
        g.addColorStop(0, `rgba(96, 165, 250, ${a})`);
        g.addColorStop(0.5, `rgba(59, 130, 246, ${a * 0.35})`);
        g.addColorStop(1, "rgba(59, 130, 246, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 5, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    if (!reduced) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 z-[5] pointer-events-none"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default ParticleField;
