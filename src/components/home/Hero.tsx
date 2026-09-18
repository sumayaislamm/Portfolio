"use client";

import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 sm:px-8 lg:px-12"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-xs text-muted-foreground backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for opportunities
            </div>

            {/* Name */}
            <p className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">
              Hello, I&apos;m
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-8xl">
              Sumaya
              <span className="block text-muted-foreground">Islam.</span>
            </h1>

            {/* Role */}
            <h2 className="mt-7 text-xl font-medium tracking-tight sm:text-2xl">
              Frontend Developer{" "}
              <span className="text-muted-foreground">|</span>{" "}
              <span className="text-primary">React.js & Next.js</span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              I build modern, responsive and user-focused web applications with
              React, Next.js, TypeScript and a strong focus on clean UI,
              performance and real-world functionality.
            </p>

            {/* Actions */}
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

            {/* Socials */}
            {/* Socials */}
            <div className="mt-9 flex items-center gap-4">
              <Link
                href="https://github.com/sumayaislamm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-muted hover:text-foreground"
              >
                GH
              </Link>

              <Link
                href="https://www.linkedin.com/in/sumayaislamm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-xs font-semibold text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-muted hover:text-foreground"
              >
                in
              </Link>

              <span className="h-px w-16 bg-border" />

              <span className="text-xs text-muted-foreground">
                Dhaka, Bangladesh
              </span>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto aspect-square max-w-[440px]">
              {/* Outer ring */}
              <div className="absolute inset-8 rounded-full border border-border/60" />

              <div className="absolute inset-16 rounded-full border border-primary/20" />

              {/* Center */}
              <div className="absolute inset-[22%] flex flex-col items-center justify-center rounded-full border border-border bg-background/80 text-center shadow-2xl backdrop-blur-xl">
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Developer
                </span>

                <span className="mt-3 text-4xl font-semibold tracking-tight">
                  SI
                </span>

                <span className="mt-3 text-xs text-muted-foreground">
                  React · Next · TypeScript
                </span>
              </div>

              {/* Floating labels */}
              <div className="absolute left-0 top-1/4 rounded-full border border-border bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md">
                React.js
              </div>

              <div className="absolute right-0 top-1/3 rounded-full border border-border bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md">
                Next.js
              </div>

              <div className="absolute bottom-1/4 left-8 rounded-full border border-border bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md">
                TypeScript
              </div>

              <div className="absolute bottom-10 right-8 rounded-full border border-border bg-background/80 px-4 py-2 text-xs shadow-lg backdrop-blur-md">
                Full-Stack
              </div>

              {/* Decorative dot */}
              <div className="absolute right-1/4 top-10 h-3 w-3 rounded-full bg-primary shadow-[0_0_30px_var(--primary)]" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex"
        >
          <span className="h-px w-10 bg-border" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
