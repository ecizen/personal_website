'use client';

import { useEffect, useRef } from 'react';

const ParticleStars = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars: Star[] = [];

  class Star {
    x: number;
    y: number;
    radius: number;
    alpha: number;
    flicker: number;

    constructor() {
      this.x = Math.random() * window.innerWidth;
      this.y = Math.random() * window.innerHeight;
      this.radius = Math.random() * 1.5 + 0.5;
      this.alpha = Math.random();
      this.flicker = Math.random() * 0.02;
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.shadowColor = 'white';
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();

      // Update flickering
      this.alpha += this.flicker;
      if (this.alpha <= 0.1 || this.alpha >= 1) {
        this.flicker *= -1;
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Buat banyak bintang
    for (let i = 0; i < 200; i++) {
      stars.push(new Star());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => star.draw(ctx));
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default ParticleStars;
