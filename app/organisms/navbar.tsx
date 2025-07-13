"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItem = [
  { id: 1, label: "Home", href: "#" },
  { id: 2, label: "About", href: "#about" },
  { id: 4, label: "Skills", href: "#skills"},
  { id: 3, label: "Projects", href: "#" },
  { id: 5, label: "Contact", href: "#" },
];

const Navbar = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleArray: any[] = [];
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 100;

    let mouse = { x: 0, y: 0 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      for (let i = 0; i < 3; i++) particleArray.push(new Particle());
    });

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 4 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = "white";
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size -= 0.1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].draw();
        if (particleArray[i].size <= 0.3) {
          particleArray.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="w-full fixed top-0 flex items-center justify-center z-50 py-6 bg-black/20 backdrop-blur-md border-b border-white/10">
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 w-full h-[100px] z-0 pointer-events-none"
        />
        <nav className="w-full lg:max-w-[70%] max-w-[100%] flex items-center justify-between relative z-10 px-6">
          <h1 className="text-sm text-white font-bold tracking-wide">
            Hardiek Tatendra
          </h1>
          <ul className="lg:flex hidden items-center gap-6">
            {navItem.map((item) => (
              <li
                key={item.id}
                className="text-sm text-white hover:text-[#B6F500] transition-all"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden ">
            <button
              className="text-white"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-full h-full bg-black/80 backdrop-blur-lg border-l border-white/20 z-60 px-6 py-10 flex flex-col items-start gap-6"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-white z-50"
            >
              <X size={28} />
            </button>
            {navItem.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-white font-medium hover:text-[#B6F500] transition"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
