"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  Layers3,
  MonitorSmartphone,
} from "lucide-react";

const stats = [
  {
    value: "3+",
    label: "Featured Projects",
    icon: Layers3,
  },
  {
    value: "7 mo",
    label: "Industry Experience",
    icon: BriefcaseBusiness,
  },
  {
    value: "10+",
    label: "Core Technologies",
    icon: Code2,
  },
  {
    value: "100%",
    label: "Remote Focus",
    icon: MonitorSmartphone,
  },
];

export default function Stats() {
  return (
    <section className="relative border-b border-border/70">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative flex min-h-[150px] flex-col justify-center px-5 py-8 sm:min-h-[170px] sm:px-8 ${
                  index % 2 !== 0
                    ? "border-l border-border/70 md:border-l"
                    : ""
                } ${
                  index >= 2
                    ? "border-t border-border/70 md:border-t-0"
                    : ""
                }`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                    0{index + 1}
                  </span>

                  <Icon className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>

                <div className="flex items-end gap-3">
                  <motion.span
                    whileHover={{
                      x: 2,
                    }}
                    className="text-3xl font-semibold tracking-[-0.05em] sm:text-4xl"
                  >
                    {stat.value}
                  </motion.span>
                </div>

                <span className="mt-2 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </span>

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + index * 0.08,
                  }}
                  className="absolute bottom-0 left-0 h-px w-full origin-left bg-foreground/20"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}