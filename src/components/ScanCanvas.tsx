"use client";
import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };

export default function ScanCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let nodes: Node[] = [];
    let mouseX = -9999;
    let mouseY = -9999;
    let visible = true;
    let rafId = 0;

    const LINK_DIST = 150;

    function resize() {
      const el = canvas!.parentElement;
      width = el ? el.clientWidth : window.innerWidth;
      height = el ? el.clientHeight : window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      const count = Math.round(Math.min(width, 1600) / 22);
      nodes = Array.from({ length: Math.max(18, Math.min(count, 70)) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }

    function onMouseLeave() {
      mouseX = -9999;
      mouseY = -9999;
    }

    function step() {
      rafId = requestAnimationFrame(step);
      if (document.hidden || !visible) return;

      ctx!.clearRect(0, 0, width * dpr, height * dpr);
      ctx!.save();
      ctx!.scale(dpr, dpr);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        const dx = mouseX - n.x;
        const dy = mouseY - n.y;
        const distToMouse = Math.hypot(dx, dy);
        if (distToMouse < 140) {
          const force = (140 - distToMouse) / 140;
          n.x -= (dx / (distToMouse || 1)) * force * 0.6;
          n.y -= (dy / (distToMouse || 1)) * force * 0.6;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < LINK_DIST) {
            const o = (1 - d / LINK_DIST) * 0.35;
            ctx!.strokeStyle = `rgba(220,38,38,${o})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        const distToMouse = Math.hypot(mouseX - n.x, mouseY - n.y);
        const lit = distToMouse < 140;
        ctx!.fillStyle = lit ? "rgba(255,255,255,0.85)" : "rgba(220,38,38,0.6)";
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, lit ? 2.2 : 1.6, 0, Math.PI * 2);
        ctx!.fill();
      }

      ctx!.restore();
    }

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    canvas.addEventListener("mouseleave", onMouseLeave, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none ${className}`}
    />
  );
}
