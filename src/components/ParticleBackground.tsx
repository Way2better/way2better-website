import { useEffect, useRef } from 'react';

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; r: number; s: number }[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      particles = [];
      const particleCount = window.innerWidth < 768 ? 150 : 300;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.4 + 0.4,
          s: Math.random() * 1.0 + 0.4,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
      
      particles.forEach((p) => {
        p.y -= p.s;
        if (p.y < 0) p.y = canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    init();
    drawParticles();

    window.addEventListener('resize', init);

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-[120vh] md:h-[150vh] z-0 pointer-events-none opacity-60"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
