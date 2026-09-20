"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "02",
    title: "ServerPulse",
    category: "Backend / API",
    description:
      "A scalable backend application built with Express.js and TypeScript, featuring REST APIs, JWT authentication, password hashing, and PostgreSQL database integration.",
    technologies: [
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "REST API",
    ],
    github: "https://github.com/sumayaislamm",
    live: "",
  },
  {
    number: "03",
    title: "Handy Works",
    category: "Full-Stack Web Application",
    description:
      "A service-focused web application designed to connect users with practical services through a clean interface and structured application flow.",
    technologies: ["React", "Node.js", "MongoDB", "REST API"],
    github: "https://github.com/sumayaislamm",
    live: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-border/70 pt-2"
    >
      <div  data-cursor="Projects" className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 sm:mb-20 md:flex-row md:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
            >
              Selected Work
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              More projects,
              <br />
              <span className="text-muted-foreground">
                built with purpose.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-sm text-sm leading-7 text-muted-foreground"
          >
            A selection of applications and backend systems showcasing my
            experience across modern frontend and backend development.
          </motion.p>
        </div>

        {/* Projects */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl sm:p-8"
            >
              {/* Top */}
              <div className="mb-12 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {project.number}
                </span>

                <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-muted px-3 py-1.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-10 flex items-center gap-3">
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-all duration-300 hover:scale-[1.02]"
                  >
                    Live Demo
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                )}

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-medium transition-all duration-300 hover:border-foreground/30 hover:bg-muted"
                >
                 
                  GitHub
                </Link>
              </div>

              {/* Decorative number */}
              <span className="pointer-events-none absolute -bottom-10 -right-4 select-none font-mono text-[140px] font-bold leading-none text-foreground/[0.025] transition-all duration-500 group-hover:text-foreground/[0.05]">
                {project.number}
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}