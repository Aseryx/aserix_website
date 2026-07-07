import { useEffect, useRef, useState } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let isPaused = false;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particleCount = Math.min(window.innerWidth / 12, 60);
    const connectionDistance = 130;
    const cellSize = connectionDistance;
    const speed = 0.35;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;
        this.size = Math.random() * 2 + 1;
        this.color = `rgba(235, 94, 40, ${Math.random() * 0.5 + 0.1})`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles = Array.from({ length: particleCount }, () => new Particle());
    };

    const getCellKey = (x, y) => {
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      return `${col},${row}`;
    };

    const buildGrid = () => {
      const grid = new Map();
      for (let i = 0; i < particles.length; i++) {
        const key = getCellKey(particles[i].x, particles[i].y);
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key).push(i);
      }
      return grid;
    };

    const drawConnections = (grid) => {
      const checked = new Set();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const col = Math.floor(p.x / cellSize);
        const row = Math.floor(p.y / cellSize);

        for (let dc = -1; dc <= 1; dc++) {
          for (let dr = -1; dr <= 1; dr++) {
            const neighbors = grid.get(`${col + dc},${row + dr}`);
            if (!neighbors) continue;

            for (const j of neighbors) {
              if (j <= i) continue;
              const pairKey = i < j ? `${i}-${j}` : `${j}-${i}`;
              if (checked.has(pairKey)) continue;
              checked.add(pairKey);

              const dx = p.x - particles[j].x;
              const dy = p.y - particles[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < connectionDistance) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(235, 94, 40, ${1 - (distance / connectionDistance) * 0.08})`;
                ctx.lineWidth = 0.5;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
              }
            }
          }
        }
      }
    };

    const animate = () => {
      if (!isPaused) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const grid = buildGrid();
        drawConnections(grid);
        particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleVisibilityChange = () => {
      isPaused = document.hidden;
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 dark:opacity-40 mix-blend-multiply dark:mix-blend-screen"
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground;