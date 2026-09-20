"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "NestJS",
      "REST APIs",
      "JWT",
      "Authentication",
    ],
  },
  {
    title: "Database",
    skills: [
      "PostgreSQL",
      "Prisma",
      "MongoDB",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Figma",
      "Vercel",
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border/70 py-4 "
    >
      <div  data-cursor="Technology" className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
          >
            Technical Stack
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Tools I use to turn
            <br />
            <span className="text-muted-foreground">
              ideas into products.
            </span>
          </motion.h2>
        </div>

        {/* Skill Groups */}
        <div className="grid border-l border-t border-border/70 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="border-b border-r border-border/70 p-6 sm:p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <h3 className="text-lg font-medium">
                  {group.title}
                </h3>

                <span className="font-mono text-xs text-muted-foreground">
                  0{index + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background px-3 py-2 text-xs text-muted-foreground transition-all duration-300 hover:border-foreground/30 hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 max-w-2xl"
        >
          <p className="text-sm leading-7 text-muted-foreground">
            I focus on building maintainable applications with modern
            JavaScript technologies, clean architecture, responsive
            interfaces, and reliable backend systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}