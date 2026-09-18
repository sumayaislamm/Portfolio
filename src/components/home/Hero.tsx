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
//               Frontend Developer{" "}
//               <span className="text-muted-foreground">|</span>{" "}
//               <span className="text-primary">React.js & Next.js</span>
//             </h2>

//             {/* Description */}
//             <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
//               I build modern, responsive and user-focused web applications
//               with React, Next.js, TypeScript and a strong focus on clean UI,
//               performance and real-world functionality.
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

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoadingComplete = () => {
      setIsLoaded(true);
    };

    window.addEventListener("loadingComplete", handleLoadingComplete);

    return () => {
      window.removeEventListener("loadingComplete", handleLoadingComplete);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.045] dark:opacity-[0.09] [background-image:linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* ==================== LEFT CONTENT ==================== */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={
              isLoaded
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 35 }
            }
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            {/* Intro */}
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Hello, I&apos;m
            </p>

            {/* Name */}
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">
              Sumaya
              <span className="block text-muted-foreground">Islam.</span>
            </h1>

            {/* Role */}
            <h2 className="mt-7 text-xl font-medium tracking-tight sm:text-2xl">
              Full-Stack Developer{" "}
              <span className="text-muted-foreground">|</span>{" "}
              <span className="text-primary">
                Frontend & Backend
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              I build modern, responsive and scalable web applications across
              the frontend and backend using React, Next.js, TypeScript,
              Node.js and PostgreSQL.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                View My Work

                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-primary hover:bg-muted"
              >
                Let&apos;s Talk

                <ArrowDownRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-9 flex items-center gap-4">
              <Link
                href="https://github.com/sumayaislamm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-[9px] font-semibold text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-muted hover:text-foreground"
              >
                GitHub
              </Link>

              <Link
                href="https://www.linkedin.com/in/sumayaislamm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-[9px] font-semibold text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-muted hover:text-foreground"
              >
                LinkedIn
              </Link>

              <span className="h-px w-12 bg-border" />

              <span className="text-xs text-muted-foreground">
                Dhaka, Bangladesh
              </span>
            </div>
          </motion.div>

          {/* ==================== RIGHT VISUAL ==================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={
              isLoaded
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.92 }
            }
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto w-full max-w-[440px]">
              {/* Main Visual */}
              <div className="relative aspect-square">
                {/* Top Decorative Code */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={
                    isLoaded
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: -10 }
                  }
                  transition={{
                    duration: 0.8,
                    delay: 0.45,
                  }}
                  className="absolute left-1/2 top-0 -translate-x-1/2"
                >
                  <div className="flex flex-col items-center">
                    <div className="rounded-full border border-border bg-background/80 px-4 py-2 font-mono text-[10px] text-muted-foreground shadow-sm backdrop-blur-md dark:border-foreground/25">
                      <span className="text-primary">const</span> developer ={" "}
                      <span className="text-foreground">
                        &quot;Sumaya&quot;
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="h-px w-10 bg-border" />
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="h-px w-10 bg-border" />
                    </div>
                  </div>
                </motion.div>

                {/* Small Floating Code */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0.55, 0.8, 0.55],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-[14%] top-[4%] font-mono text-[10px] text-muted-foreground/60"
                >
                  {"< />"}
                </motion.div>

                {/* Outer Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-8 rounded-full border border-foreground/15 dark:border-foreground/25"
                />

                {/* Inner Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-16 rounded-full border border-primary/25 dark:border-primary/40"
                />

                {/* Avatar */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-[17%] overflow-hidden rounded-full border-2 border-foreground/15 bg-muted shadow-2xl dark:border-foreground/30"
                >
                  <img
                    src="/avatar.png"
                    alt="Sumaya Islam"
                    className="h-full w-full object-cover"
                  />
                </motion.div>

                {/* SI Branding */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-8 left-1/2 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border border-foreground/15 bg-background/90 text-lg font-semibold shadow-xl backdrop-blur-md dark:border-foreground/30"
                >
                  SI
                </motion.div>

                {/* React */}
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3,
                  }}
                  className="absolute left-0 top-[20%] rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md dark:border-foreground/25"
                >
                  React.js
                </motion.div>

                {/* Next */}
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                  className="absolute right-0 top-[27%] rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md dark:border-foreground/25"
                >
                  Next.js
                </motion.div>

                {/* TypeScript */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2,
                  }}
                  className="absolute left-4 top-[48%] rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md dark:border-foreground/25"
                >
                  TypeScript
                </motion.div>

                {/* Node */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 4.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.6,
                  }}
                  className="absolute right-2 top-[52%] rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md dark:border-foreground/25"
                >
                  Node.js
                </motion.div>

                {/* NestJS */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 5.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute bottom-[20%] left-8 rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md dark:border-foreground/25"
                >
                  NestJS
                </motion.div>

                {/* PostgreSQL */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{
                    duration: 4.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2.4,
                  }}
                  className="absolute bottom-[13%] right-5 rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md dark:border-foreground/25"
                >
                  PostgreSQL
                </motion.div>

                {/* Accent Dot */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-1/4 top-10 h-3 w-3 rounded-full bg-primary shadow-[0_0_30px_var(--primary)]"
                />
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isLoaded
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 10 }
                }
                transition={{
                  duration: 0.7,
                  delay: 0.65,
                }}
                className="mt-1 flex justify-center"
              >
                <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-3.5 py-2 text-xs text-muted-foreground shadow-sm backdrop-blur-md dark:border-foreground/25">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>

                  Available for opportunities
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.6,
          }}
          className="mt-20 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex"
        >
          <span className="h-px w-10 bg-border" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
