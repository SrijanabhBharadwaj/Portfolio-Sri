"use client";

import { useEffect, useRef } from "react";

type Shard = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  angle: number;
  spin: number;
  depth: number;
};

export function AeroShards() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -1000, y: -1000, active: false, gathering: false };
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let shards: Shard[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(170, Math.max(70, Math.floor((width * height) / 13000)));
      shards = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        size: 5 + Math.random() * 17,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.006,
        depth: 0.35 + Math.random() * 0.65,
      }));
    };

    const updatePointer = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      for (const shard of shards) {
        const dx = shard.x - pointer.x;
        const dy = shard.y - pointer.y;
        const distance = Math.sqrt(dx * dx + dy * dy) || 1;
        const radius = Math.min(width, height) * 0.34;
        if (pointer.active && distance < radius) {
          const force = ((radius - distance) / radius) * 0.045;
          const direction = pointer.gathering ? -1 : 1;
          shard.vx += (dx / distance) * force * direction;
          shard.vy += (dy / distance) * force * direction;
        }
        shard.vx += (0.1 - shard.vx) * 0.002;
        shard.vy += (0.06 - shard.vy) * 0.002;
        shard.vx *= 0.995;
        shard.vy *= 0.995;
        shard.x += shard.vx;
        shard.y += shard.vy;
        shard.angle += shard.spin;
        if (shard.x < -40) shard.x = width + 40;
        if (shard.x > width + 40) shard.x = -40;
        if (shard.y < -40) shard.y = height + 40;
        if (shard.y > height + 40) shard.y = -40;

        const length = shard.size * 1.8;
        const halfWidth = shard.size * 0.48;
        const cos = Math.cos(shard.angle);
        const sin = Math.sin(shard.angle);
        const points = [
          [shard.x + cos * length, shard.y + sin * length],
          [shard.x - sin * halfWidth, shard.y + cos * halfWidth],
          [shard.x - cos * length * 0.55, shard.y - sin * length * 0.55],
          [shard.x + sin * halfWidth * 0.6, shard.y - cos * halfWidth * 0.6],
        ];
        context.beginPath();
        context.moveTo(points[0][0], points[0][1]);
        points.slice(1).forEach(([x, y]) => context.lineTo(x, y));
        context.closePath();
        context.fillStyle = `rgba(137, 106, 189, ${0.07 + shard.depth * 0.13})`;
        context.fill();
        context.strokeStyle = `rgba(168, 85, 247, ${0.08 + shard.depth * 0.2})`;
        context.lineWidth = 0.6;
        context.stroke();
      }
      if (!reduceMotion) animationFrame = requestAnimationFrame(draw);
    };

    const stopPointer = () => { pointer.active = false; };
    const startGather = () => { pointer.gathering = true; };
    const stopGather = () => { pointer.gathering = false; };
    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("pointerleave", stopPointer);
    window.addEventListener("pointerdown", startGather);
    window.addEventListener("pointerup", stopGather);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("pointerleave", stopPointer);
      window.removeEventListener("pointerdown", startGather);
      window.removeEventListener("pointerup", stopGather);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="aero-shards-wash" />
      <canvas ref={canvasRef} className="absolute inset-0 opacity-90" />
      <div className="aero-shards-grain" />
    </div>
  );
}