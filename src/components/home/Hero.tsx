// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { ArrowDownRight, ArrowUpRight } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Hero() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     const handleLoadingComplete = () => {
//       setIsLoaded(true);
//     };

//     window.addEventListener("loadingComplete", handleLoadingComplete);

//     return () => {
//       window.removeEventListener("loadingComplete", handleLoadingComplete);
//     };
//   }, []);

//   return (
//     <section
//       id="about"
//       className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 sm:px-8 lg:px-12"
//     >
//       {/* Background */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

//         <div className="absolute inset-0 opacity-[0.045] dark:opacity-[0.09] [background-image:linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] [background-size:80px_80px]" />
//       </div>

//       <div className="relative mx-auto w-full max-w-7xl">
//         <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
//           {/* ==================== LEFT CONTENT ==================== */}
//           <motion.div
//             initial={{ opacity: 0, y: 35 }}
//             animate={
//               isLoaded
//                 ? { opacity: 1, y: 0 }
//                 : { opacity: 0, y: 35 }
//             }
//             transition={{
//               duration: 0.8,
//               ease: "easeOut",
//             }}
//           >
//             {/* Intro */}
//             <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">
//               Hello, I&apos;m
//             </p>

//             {/* Name */}
//             <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">
//               Sumaya
//               <span className="block text-muted-foreground">Islam.</span>
//             </h1>

//             {/* Role */}
//             <h2 className="mt-7 text-xl font-medium tracking-tight sm:text-2xl">
//               Full-Stack Developer{" "}
//               <span className="text-muted-foreground">|</span>{" "}
//               <span className="text-primary">
//                 Frontend & Backend
//               </span>
//             </h2>

//             {/* Description */}
//             <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
//               I build modern, responsive and scalable web applications across
//               the frontend and backend using React, Next.js, TypeScript,
//               Node.js and PostgreSQL.
//             </p>

//             {/* CTA */}
//             <div className="mt-9 flex flex-wrap items-center gap-3">
//               <Link
//                 href="#work"
//                 className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
//               >
//                 View My Work

//                 <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </Link>

//               <Link
//                 href="#contact"
//                 className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-primary hover:bg-muted"
//               >
//                 Let&apos;s Talk

//                 <ArrowDownRight className="h-4 w-4" />
//               </Link>
//             </div>

//             {/* Social Links */}
//             <div className="mt-9 flex items-center gap-4">
//               <Link
//                 href="https://github.com/sumayaislamm"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="GitHub"
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-[9px] font-semibold text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-muted hover:text-foreground"
//               >
//                 GitHub
//               </Link>

//               <Link
//                 href="https://www.linkedin.com/in/sumayaislamm"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//                 className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-[9px] font-semibold text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-muted hover:text-foreground"
//               >
//                 LinkedIn
//               </Link>

//               <span className="h-px w-12 bg-border" />

//               <span className="text-xs text-muted-foreground">
//                 Dhaka, Bangladesh
//               </span>
//             </div>
//           </motion.div>

//           {/* ==================== RIGHT VISUAL ==================== */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.92 }}
//             animate={
//               isLoaded
//                 ? { opacity: 1, scale: 1 }
//                 : { opacity: 0, scale: 0.92 }
//             }
//             transition={{
//               duration: 0.9,
//               ease: "easeOut",
//             }}
//             className="relative hidden lg:block"
//           >
//             <div className="relative mx-auto w-full max-w-[440px]">
//               {/* Main Visual */}
//               <div className="relative aspect-square">
//                 {/* Top Decorative Code */}
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={
//                     isLoaded
//                       ? { opacity: 1, y: 0 }
//                       : { opacity: 0, y: -10 }
//                   }
//                   transition={{
//                     duration: 0.8,
//                     delay: 0.45,
//                   }}
//                   className="absolute left-1/2 top-0 -translate-x-1/2"
//                 >
//                   <div className="flex flex-col items-center">
//                     <div className="rounded-full border border-border bg-background/80 px-4 py-2 font-mono text-[10px] text-muted-foreground shadow-sm backdrop-blur-md dark:border-foreground/25">
//                       <span className="text-primary">const</span> developer ={" "}
//                       <span className="text-foreground">
//                         &quot;Sumaya&quot;
//                       </span>
//                     </div>

//                     <div className="mt-3 flex items-center gap-2">
//                       <span className="h-px w-10 bg-border" />
//                       <span className="h-1.5 w-1.5 rounded-full bg-primary" />
//                       <span className="h-px w-10 bg-border" />
//                     </div>
//                   </div>
//                 </motion.div>

//                 {/* Small Floating Code */}
//                 <motion.div
//                   animate={{
//                     y: [0, -5, 0],
//                     opacity: [0.55, 0.8, 0.55],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute right-[14%] top-[4%] font-mono text-[10px] text-muted-foreground/60"
//                 >
//                   {"< />"}
//                 </motion.div>

//                 {/* Outer Ring */}
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{
//                     duration: 35,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="absolute inset-8 rounded-full border border-foreground/15 dark:border-foreground/25"
//                 />

//                 {/* Inner Ring */}
//                 <motion.div
//                   animate={{ rotate: -360 }}
//                   transition={{
//                     duration: 25,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="absolute inset-16 rounded-full border border-primary/25 dark:border-primary/40"
//                 />

//                 {/* Avatar */}
//                 <motion.div
//                   animate={{
//                     y: [0, -8, 0],
//                   }}
//                   transition={{
//                     duration: 5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute inset-[17%] overflow-hidden rounded-full border-2 border-foreground/15 bg-muted shadow-2xl dark:border-foreground/30"
//                 >
//                   <img
//                     src="/avatar.png"
//                     alt="Sumaya Islam"
//                     className="h-full w-full object-cover"
//                   />
//                 </motion.div>

//                 {/* SI Branding */}
//                 <motion.div
//                   animate={{
//                     y: [0, -5, 0],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute bottom-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-foreground/15 bg-background/90 text-lg font-semibold shadow-xl backdrop-blur-md dark:border-foreground/30"
//                 >
//                   SI
//                 </motion.div>

//                 {/* React */}
//                 <motion.div
//                   animate={{ y: [0, -7, 0] }}
//                   transition={{
//                     duration: 4.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: 0.3,
//                   }}
//                   className="absolute left-0 top-[20%] rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md dark:border-foreground/25"
//                 >
//                   React.js
//                 </motion.div>

//                 {/* Next */}
//                 <motion.div
//                   animate={{ y: [0, 7, 0] }}
//                   transition={{
//                     duration: 5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: 0.8,
//                   }}
//                   className="absolute right-0 top-[27%] rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md dark:border-foreground/25"
//                 >
//                   Next.js
//                 </motion.div>

//                 {/* TypeScript */}
//                 <motion.div
//                   animate={{ y: [0, -6, 0] }}
//                   transition={{
//                     duration: 5.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: 1.2,
//                   }}
//                   className="absolute left-4 top-[48%] rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md dark:border-foreground/25"
//                 >
//                   TypeScript
//                 </motion.div>

//                 {/* Node */}
//                 <motion.div
//                   animate={{ y: [0, 6, 0] }}
//                   transition={{
//                     duration: 4.8,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: 1.6,
//                   }}
//                   className="absolute right-2 top-[52%] rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md dark:border-foreground/25"
//                 >
//                   Node.js
//                 </motion.div>

//                 {/* NestJS */}
//                 <motion.div
//                   animate={{ y: [0, -6, 0] }}
//                   transition={{
//                     duration: 5.2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: 2,
//                   }}
//                   className="absolute bottom-[20%] left-8 rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md dark:border-foreground/25"
//                 >
//                   NestJS
//                 </motion.div>

//                 {/* PostgreSQL */}
//                 <motion.div
//                   animate={{ y: [0, 6, 0] }}
//                   transition={{
//                     duration: 4.6,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: 2.4,
//                   }}
//                   className="absolute bottom-[13%] right-5 rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md dark:border-foreground/25"
//                 >
//                   PostgreSQL
//                 </motion.div>

//                 {/* Accent Dot */}
//                 <motion.div
//                   animate={{
//                     scale: [1, 1.5, 1],
//                     opacity: [0.7, 1, 0.7],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                   className="absolute right-1/4 top-10 h-3 w-3 rounded-full bg-primary shadow-[0_0_30px_var(--primary)]"
//                 />
//               </div>

//               {/* Availability */}
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={
//                   isLoaded
//                     ? { opacity: 1, y: 0 }
//                     : { opacity: 0, y: 10 }
//                 }
//                 transition={{
//                   duration: 0.7,
//                   delay: 0.65,
//                 }}
//                 className="mt-1 flex justify-center"
//               >
//                 <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3.5 py-2 text-xs text-muted-foreground shadow-sm backdrop-blur-md dark:border-foreground/25">
//                   <span className="relative flex h-2 w-2">
//                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
//                     <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
//                   </span>

//                   Available for opportunities
//                 </div>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
//           transition={{
//             delay: 0.9,
//             duration: 0.6,
//           }}
//           className="mt-20 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex"
//         >
//           <span className="h-px w-10 bg-border" />
//           Scroll to explore
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

const techBadges = [
  { name: "React.js", x: "-8%", y: "8%", delay: 0 },
  { name: "Next.js", x: "76%", y: "4%", delay: 0.15 },
  { name: "TypeScript", x: "86%", y: "38%", delay: 0.3 },
  { name: "Node.js", x: "-12%", y: "42%", delay: 0.45 },
  { name: "NestJS", x: "4%", y: "76%", delay: 0.6 },
  { name: "PostgreSQL", x: "70%", y: "78%", delay: 0.75 },
];

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  /* --------------------------------
     Mouse movement
  --------------------------------- */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  /* --------------------------------
     Parallax values
  --------------------------------- */

  const backgroundX = useTransform(
    smoothX,
    [-1, 1],
    [-18, 18]
  );

  const backgroundY = useTransform(
    smoothY,
    [-1, 1],
    [-18, 18]
  );

  const avatarX = useTransform(
    smoothX,
    [-1, 1],
    [-10, 10]
  );

  const avatarY = useTransform(
    smoothY,
    [-1, 1],
    [-10, 10]
  );

  const codeX = useTransform(
    smoothX,
    [-1, 1],
    [-5, 5]
  );

  const codeY = useTransform(
    smoothY,
    [-1, 1],
    [-5, 5]
  );

  const spotlightX = useTransform(
    smoothX,
    [-1, 1],
    ["-15%", "15%"]
  );

  const spotlightY = useTransform(
    smoothY,
    [-1, 1],
    ["-15%", "15%"]
  );

  /* --------------------------------
     Loading
  --------------------------------- */

  useEffect(() => {
    const handleLoadingComplete = () => {
      setIsLoaded(true);
    };

    window.addEventListener(
      "loadingComplete",
      handleLoadingComplete
    );

    return () => {
      window.removeEventListener(
        "loadingComplete",
        handleLoadingComplete
      );
    };
  }, []);

  /* --------------------------------
     Mouse handlers
  --------------------------------- */

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width) * 2 - 1;

    const y =
      ((event.clientY - rect.top) / rect.height) * 2 - 1;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen overflow-hidden border-b border-border/70"
    >
      {/* =====================================
          INTERACTIVE BACKGROUND
      ====================================== */}

      <motion.div
        aria-hidden="true"
        style={{
          x: backgroundX,
          y: backgroundY,
        }}
        className="pointer-events-none absolute -inset-10 opacity-40"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </motion.div>

      {/* Mouse-following spotlight */}

      <motion.div
        aria-hidden="true"
        style={{
          x: spotlightX,
          y: spotlightY,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-3xl"
      />

      {/* =====================================
          MAIN CONTENT
      ====================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-16 pt-32 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

          {/* =================================
              LEFT CONTENT
          ================================== */}

          <div className="max-w-2xl">

            {/* Code pill */}

            <motion.div
              style={{
                x: codeX,
                y: codeY,
              }}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                isLoaded
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 font-mono text-xs text-muted-foreground backdrop-blur-md"
            >
              <span className="text-primary">
                const
              </span>

              <span>developer</span>

              <span>=</span>

              <span className="text-foreground">
                &quot;Sumaya&quot;
              </span>
            </motion.div>

            {/* Main heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={
                isLoaded
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 35,
                    }
              }
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.08,
              }}
              className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
            >
              Full-Stack
              <br />

              <span className="text-muted-foreground">
                Developer
              </span>
            </motion.h1>

            {/* Role */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={
                isLoaded
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 25,
                    }
              }
              transition={{
                duration: 0.7,
                delay: 0.18,
                ease: "easeOut",
              }}
              className="mt-6 text-lg font-medium tracking-tight sm:text-xl"
            >
              Frontend & Backend
            </motion.p>

            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={
                isLoaded
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 25,
                    }
              }
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base"
            >
              I build modern, responsive and scalable web
              applications across the frontend and backend
              using React, Next.js, TypeScript, Node.js and
              PostgreSQL.
            </motion.p>

            {/* =================================
                CTA BUTTONS
            ================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={
                isLoaded
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 25,
                    }
              }
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease: "easeOut",
              }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              {/* Primary CTA */}

              <motion.div
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
              >
                <Link
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
                >
                  View My Work

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </motion.div>

              {/* Secondary CTA */}

              <motion.div
                whileHover={{
                  x: 4,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
              >
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors duration-300 hover:bg-muted"
                >
                  Let&apos;s Talk

                  <ArrowDownRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Availability */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: isLoaded ? 1 : 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.55,
              }}
              className="mt-9 flex items-center gap-3"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>

              <span className="text-xs text-muted-foreground">
                Available for remote opportunities
              </span>
            </motion.div>
          </div>

          {/* =================================
              RIGHT VISUAL
          ================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={
              isLoaded
                ? {
                    opacity: 1,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    scale: 0.92,
                  }
            }
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative mx-auto aspect-square w-full max-w-[520px]"
          >
            {/* Outer rotating ring */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[5%] rounded-full border border-dashed border-foreground/15"
            />

            {/* Inner rotating ring */}

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-[15%] rounded-full border border-border/70"
            />

            {/* Avatar parallax */}

            <motion.div
              style={{
                x: avatarX,
                y: avatarY,
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-border bg-background/80 p-3 shadow-2xl backdrop-blur-md sm:h-64 sm:w-64">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <img
                    src="/avatar.png"
                    alt="Sumaya Islam"
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>

                {/* SI badge */}

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="absolute -bottom-2 -right-2 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-sm font-semibold shadow-lg"
                >
                  SI
                </motion.div>
              </div>
            </motion.div>

            {/* =================================
                FLOATING TECH BADGES
            ================================== */}

            {techBadges.map((tech) => (
              <motion.div
                key={tech.name}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={
                  isLoaded
                    ? {
                        opacity: 1,
                        scale: 1,
                        y: [0, -8, 0],
                      }
                    : {
                        opacity: 0,
                        scale: 0.8,
                      }
                }
                transition={{
                  opacity: {
                    duration: 0.5,
                    delay: 0.4 + tech.delay,
                  },
                  scale: {
                    duration: 0.5,
                    delay: 0.4 + tech.delay,
                  },
                  y: {
                    duration: 4 + tech.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                whileHover={{
                  scale: 1.08,
                  y: -4,
                }}
                className="absolute z-20 rounded-full border border-border bg-background/85 px-3 py-2 font-mono text-[10px] font-medium shadow-lg backdrop-blur-md transition-colors hover:border-primary sm:px-4 sm:py-2.5 sm:text-xs"
                style={{
                  left: tech.x,
                  top: tech.y,
                }}
              >
                {tech.name}
              </motion.div>
            ))}

            {/* =================================
                CENTER CODE
            ================================== */}

            <div className="absolute left-1/2 top-[7%] -translate-x-1/2 rounded-full border border-border bg-background/80 px-4 py-2 font-mono text-[10px] text-muted-foreground shadow-sm backdrop-blur-md">
              &lt;build /&gt;
            </div>
          </motion.div>
        </div>

        {/* =================================
            SCROLL INDICATOR
        ================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: isLoaded ? 1 : 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
            Scroll
          </span>

          <motion.div
            animate={{
              y: [0, 7, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-8 w-px bg-foreground/30"
          />
        </motion.div>
      </div>
    </section>
  );
}