"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverLabel, setHoverLabel] = useState("");

  const cursorRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.4,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.4,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const updateDevice = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateDevice();

    mediaQuery.addEventListener("change", updateDevice);

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      setIsVisible(true);

      const target = event.target as HTMLElement | null;

      const interactiveElement =
        target?.closest<HTMLElement>(
          "a, button, [data-cursor]"
        );

      if (interactiveElement) {
        setIsHovering(true);

        const customLabel =
          interactiveElement.dataset.cursor;

        if (customLabel) {
          setHoverLabel(customLabel);
        } else if (
          interactiveElement.tagName.toLowerCase() ===
          "button"
        ) {
          setHoverLabel("CLICK");
        } else {
          setHoverLabel("VIEW");
        }
      } else {
        setIsHovering(false);
        setHoverLabel("");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );
    document.documentElement.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
    };
  }, [isDesktop, mouseX, mouseY]);

  useEffect(() => {
    if (!isDesktop) return;

    const handlePointerDown = () => {
      if (!cursorRef.current) return;

      cursorRef.current.animate(
        [
          {
            transform: "translate(-50%, -50%) scale(1)",
          },
          {
            transform: "translate(-50%, -50%) scale(0.75)",
          },
          {
            transform: "translate(-50%, -50%) scale(1)",
          },
        ],
        {
          duration: 180,
          easing: "ease-out",
        }
      );
    };

    window.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    return () => {
      window.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
    };
  }, [isDesktop]);

  if (!isDesktop) {
    return null;
  }

  return (
    <motion.div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[99999] hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Outer ring */}

      <motion.div
        animate={{
          width: isHovering ? 72 : 34,
          height: isHovering ? 72 : 34,
          borderWidth: isHovering ? 1 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
          mass: 0.4,
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/50"
      />

      {/* Center dot */}

      <motion.div
        animate={{
          width: isHovering ? 5 : 7,
          height: isHovering ? 5 : 7,
          opacity: isHovering ? 0.7 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
      />

      {/* Crosshair */}

      <motion.div
        animate={{
          opacity: isHovering ? 0 : 0.7,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2"
      >
        <span className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-foreground/60" />

        <span className="absolute bottom-0 left-1/2 h-2 w-px -translate-x-1/2 bg-foreground/60" />

        <span className="absolute left-0 top-1/2 h-px w-2 -translate-y-1/2 bg-foreground/60" />

        <span className="absolute right-0 top-1/2 h-px w-2 -translate-y-1/2 bg-foreground/60" />
      </motion.div>

      {/* Hover label */}

      <motion.div
        initial={false}
        animate={{
          opacity: isHovering ? 1 : 0,
          scale: isHovering ? 1 : 0.7,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
        }}
        className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
      >
        <span className="font-mono text-[8px] font-medium uppercase tracking-[0.15em] text-foreground">
          {hoverLabel}
        </span>
      </motion.div>
    </motion.div>
  );
}