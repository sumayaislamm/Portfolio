"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    period: "Jan 2023 — Jul 2023",
    role: "Software Development Intern",
    company: "Texium Solutions",
    type: "Internship",
    description:
      "Worked on web development tasks and gained practical experience with modern development workflows, frontend technologies, APIs, debugging, and collaborative software development.",
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "REST API",
      "Git",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-border/70 py-4"
    >
      <div  data-cursor="Experience" className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            Experience
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Where I&apos;ve
            <br />
            <span className="text-muted-foreground">
              built experience.
            </span>
          </motion.h2>
        </div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="border-y border-border/70"
        >
          <div className="grid gap-10 py-8 sm:py-10 lg:grid-cols-[220px_1fr_auto] lg:gap-12">
            {/* Period */}
            <div>
              <p className="font-mono text-xs text-muted-foreground">
                {experiences[0].period}
              </p>
            </div>

            {/* Main */}
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {experiences[0].role}
                </h3>

                <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {experiences[0].type}
                </span>
              </div>

              <p className="mt-2 text-sm font-medium text-primary">
                {experiences[0].company}
              </p>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
                {experiences[0].description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {experiences[0].technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-muted px-3 py-1.5 font-mono text-[10px] text-muted-foreground"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            {/* <div className="hidden lg:block">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all duration-300 hover:border-foreground/30 hover:bg-muted">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div> */}
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-xl text-sm leading-7 text-muted-foreground"
        >
          I&apos;m continuously expanding my experience through real-world
          projects and hands-on development.
        </motion.p>
      </div>
    </section>
  );
}