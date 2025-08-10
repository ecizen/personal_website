"use client";

import { useEffect, useRef } from "react";

export default function ParticleHover() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: any[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = { x: 0, y: 0 };
    let lastMouse = { x: 0, y: 0 };

    const colors = [
      "#ff5f6d", "#ffc371", "#4facfe", "#43e97b",
      "#fa709a", "#9b5de5", "#00f5d4"
    ];

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Hitung kecepatan gerak mouse
      const dx = mouse.x - lastMouse.x;
      const dy = mouse.y - lastMouse.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      // Jumlah partikel menyesuaikan kecepatan
      const count = Math.min(15, Math.max(5, speed / 2));
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }

      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
    };

    window.addEventListener("mousemove", handleMouseMove);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      gravity: number;

      constructor() {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 200; // Spread luas
        this.x = mouse.x + Math.cos(angle) * distance;
        this.y = mouse.y + Math.sin(angle) * distance;

        this.size = Math.random() * 8 + 3;
        this.speedX = (Math.random() - 0.5) * 4;
        this.speedY = (Math.random() - 0.5) * 4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = 1;
        this.gravity = 0.05;
      }

      update() {
        this.speedY += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.97;
        this.opacity -= 0.015;
      }

      draw() {
        if (!ctx) return;

        // Glow gradasi
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 2
        );
        gradient.addColorStop(0, `${this.color}aa`);
        gradient.addColorStop(1, `${this.color}00`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const animate = () => {
      if (!ctx) return;

      // Clear dengan putih transparan untuk efek trail di background terang
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter"; // warna nyampur

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        if (particles[i].size <= 0.3 || particles[i].opacity <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[5]"
    />
  );
}
