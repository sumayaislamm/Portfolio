"use client";

import {
  type MouseEvent,
  type ReactNode,
  useRef,
} from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
};

export default function MagneticButton({
  children,
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.12}px, ${
      y * 0.12
    }px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;

    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}