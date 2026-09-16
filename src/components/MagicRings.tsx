"use client";

import { useEffect, useRef } from "react";

type MagicRingsProps = {
  color?: string;
  colorTwo?: string;
  ringCount?: number;
  speed?: number;
  attenuation?: number;
  lineThickness?: number;
  baseRadius?: number;
  radiusStep?: number;
  scaleRate?: number;
  opacity?: number;
  blur?: number;
  noiseAmount?: number;
  rotation?: number;
  ringGap?: number;
  fadeIn?: number;
  fadeOut?: number;
  followMouse?: boolean;
  mouseInfluence?: number;
  hoverScale?: number;
  parallax?: number;
  clickBurst?: boolean;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const hexToRgba = (hex: string, alpha: number) => {
  const normalized = hex.replace("#", "");
  const value = normalized.length === 3
    ? normalized.split("").map((char) => char + char).join("")
    : normalized;

  const numeric = Number.parseInt(value, 16);
  const r = (numeric >> 16) & 255;
  const g = (numeric >> 8) & 255;
  const b = numeric & 255;

  return `rgba(${r}, ${g}, ${b}, ${clamp(alpha, 0, 1)})`;
};

export default function MagicRings({
  color = "#A855F7",
  colorTwo = "#6366F1",
  ringCount = 6,
  speed = 1,
  attenuation = 10,
  lineThickness = 2,
  baseRadius = 0.35,
  radiusStep = 0.1,
  scaleRate = 0.1,
  opacity = 1,
  blur = 0,
  noiseAmount = 0.1,
  rotation = 0,
  ringGap = 1.5,
  fadeIn = 0.7,
  fadeOut = 0.5,
  followMouse = false,
  mouseInfluence = 0.2,
  hoverScale = 1.2,
  parallax = 0.05,
  clickBurst = false,
}: MagicRingsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let burst = 0;
    const pointer = { x: 0, y: 0, active: false };

    const resize = () => {
      const rect = wrapper.getBoundingClientRect();
      width = Math.max(rect.width, 1);
      height = Math.max(rect.height, 1);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const updatePointer = (event: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const resetPointer = () => {
      pointer.active = false;
    };

    const handleClick = () => {
      if (clickBurst) {
        burst = 1;
      }
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const motionX = followMouse && pointer.active ? (pointer.x - centerX) * mouseInfluence * parallax : 0;
      const motionY = followMouse && pointer.active ? (pointer.y - centerY) * mouseInfluence * parallax : 0;
      const driftX = centerX + motionX;
      const driftY = centerY + motionY;
      burst *= 0.92;

      for (let index = 0; index < ringCount; index += 1) {
        const ratio = index / Math.max(ringCount - 1, 1);
        const radiusBase = Math.min(width, height) * (baseRadius + index * radiusStep);
        const oscillation = Math.sin(time * 0.001 * speed + index * 1.6 + rotation) * (scaleRate * 60);
        const expansion = (pointer.active && followMouse ? (Math.hypot(pointer.x - centerX, pointer.y - centerY) / Math.max(Math.min(width, height), 1)) * mouseInfluence * 80 : 0);
        const ringRadius = radiusBase + oscillation + index * ringGap * 8 + expansion + burst * 18 * (index + 1) / ringCount;
        const pulse = 0.55 + ((Math.sin(time * 0.0013 * speed + index * 1.3) + 1) / 2) * 0.65;
        const alpha = clamp(
          opacity * pulse * (1 - ratio * (1 / Math.max(attenuation, 1))) * (0.35 + (1 - ratio) * 0.65),
          0.1,
          1,
        );
        const glow = blur > 0 ? blur : 0;
        const ringRotation = rotation + time * 0.00025 * speed * (index + 1);
        const xOffset = Math.sin(time * 0.0011 * speed + index) * noiseAmount * 30;
        const yOffset = Math.cos(time * 0.0012 * speed + index * 1.2) * noiseAmount * 22;

        context.beginPath();
        context.arc(driftX + xOffset, driftY + yOffset, ringRadius * (hoverScale + (pointer.active && followMouse ? 0.05 * mouseInfluence : 0)), ringRotation, ringRotation + Math.PI * 2);
        context.strokeStyle = hexToRgba(index % 2 === 0 ? color : colorTwo, alpha);
        context.lineWidth = lineThickness + index * 0.18;
        context.shadowBlur = glow;
        context.shadowColor = hexToRgba(index % 2 === 0 ? color : colorTwo, alpha * 0.9);
        context.stroke();

        if (index < ringCount - 1) {
          const innerAlpha = clamp(alpha * (1 - fadeIn * 0.25), 0.06, 1);
          context.beginPath();
          context.arc(driftX + xOffset * 0.65, driftY + yOffset * 0.65, ringRadius * 0.72, 0, Math.PI * 2);
          context.strokeStyle = hexToRgba(index % 2 === 0 ? colorTwo : color, innerAlpha * 0.5);
          context.lineWidth = Math.max(lineThickness * 0.5, 1);
          context.stroke();
        }
      }

      context.shadowBlur = 0;
      context.closePath();
    };

    const tick = (time: number) => {
      draw(time);
      animationFrame = window.requestAnimationFrame(tick);
    };

    resize();
    animationFrame = window.requestAnimationFrame(tick);
    window.addEventListener("resize", resize);
    wrapper.addEventListener("pointermove", updatePointer);
    wrapper.addEventListener("pointerleave", resetPointer);
    wrapper.addEventListener("click", handleClick);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      wrapper.removeEventListener("pointermove", updatePointer);
      wrapper.removeEventListener("pointerleave", resetPointer);
      wrapper.removeEventListener("click", handleClick);
    };
  }, [
    attenuation,
    baseRadius,
    blur,
    clickBurst,
    color,
    colorTwo,
    fadeIn,
    fadeOut,
    followMouse,
    hoverScale,
    lineThickness,
    mouseInfluence,
    noiseAmount,
    opacity,
    parallax,
    radiusStep,
    ringCount,
    ringGap,
    rotation,
    scaleRate,
    speed,
  ]);

  return (
    <div ref={wrapperRef} className="relative h-full w-full" aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
