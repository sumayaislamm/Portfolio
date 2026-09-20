"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  LayoutDashboard,
  Server,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: LayoutDashboard,
    title: "Frontend Development",
    description:
      "Responsive, accessible and modern interfaces built with React, Next.js, TypeScript and Tailwind CSS.",
  },
  {
    number: "02",
    icon: Server,
    title: "Backend Development",
    description:
      "Reliable server-side applications, REST APIs, authentication and business logic using Node.js and modern backend tools.",
  },
  {
    number: "03",
    icon: Database,
    title: "Database & APIs",
    description:
      "Structured database solutions and API integrations using PostgreSQL, Prisma, MongoDB and REST APIs.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Full-Stack Applications",
    description:
      "Complete web applications connecting polished frontend experiences with scalable backend systems and databases.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden border-t border-border/70 py-4">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 sm:mb-20 lg:flex-row lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
            >
              What I Do
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              From interface
              <br />
              <span className="text-muted-foreground">
                to infrastructure.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-md text-sm leading-7 text-muted-foreground"
          >
            I build complete web experiences with a focus on clean
            architecture, usability, performance and maintainability.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid border-l border-t border-border/70 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden border-b border-r border-border/70 p-7 transition-colors duration-500 hover:bg-muted/40 sm:p-9"
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-4 w-4" />
                  </div>

                  <span className="font-mono text-xs text-muted-foreground">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-14">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </div>

                {/* Decorative number */}
                <span className="pointer-events-none absolute -bottom-10 -right-2 select-none font-mono text-[130px] font-bold leading-none text-foreground/[0.025] transition-all duration-500 group-hover:text-foreground/[0.05]">
                  {service.number}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}