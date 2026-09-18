"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Prisma",
  "PostgreSQL",
];

export default function FeaturedProject() {
  return (
    <section
      id="work"
      className="relative overflow-hidden px-6 sm:px-8 lg:px-12 "
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Featured Project
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Nestora
              </h2>

              <p className="mt-3 text-lg text-muted-foreground">
                Full-Stack Rental Platform
              </p>
            </div>

            <span className="font-mono text-xs text-muted-foreground">
              01 / Featured
            </span>
          </div>
        </motion.div>

        {/* Project Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
        >
          {/* Project Preview */}
          <div className="relative aspect-[16/9] overflow-hidden bg-muted">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-foreground/5" />

            <img
              src="/images/projects/nestora/hero.png"
              alt="Nestora rental platform"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            {/* Project Label */}
            <div className="absolute bottom-5 left-5">
              <span className="rounded-full border border-border/60 bg-background/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider backdrop-blur-md">
                Full-Stack Web Application
              </span>
            </div>
          </div>

          {/* Project Content */}
          <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
            {/* Left */}
            <div>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                Nestora is a modern rental platform designed to connect property
                seekers with landlords through a clean and user-focused
                experience. It includes property discovery, detailed listings,
                authentication, and a structured backend for managing rental
                data.
              </p>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-between gap-8 lg:min-w-[190px]">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Built with
                </p>

                <p className="mt-2 text-sm">
                  React ecosystem
                  <br />
                  REST API
                  <br />
                  PostgreSQL database
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://nestora-frontend.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Live Demo
                  <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <Link
                  href="https://github.com/sumayaislamm/Nestora_Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nestora GitHub repository"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex justify-end"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
