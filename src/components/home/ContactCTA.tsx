"use client";

import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border/70 py-4"
    >
      <div  data-cursor="Contact" className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
          {/* Decorative grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
            >
              Let&apos;s Work Together
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-semibold tracking-tight sm:text-6xl"
            >
              Have a project
              <br />
              <span className="text-muted-foreground">in mind?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base"
            >
              I&apos;m open to frontend, backend and full-stack development
              opportunities. Feel free to reach out and let&apos;s discuss what
              we can build together.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sheikhsumaya622@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:scale-[1.02]"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-foreground/30 hover:bg-muted"
              >
                <Download className="h-4 w-4" />
                Resume
              </Link>
            </motion.div>
          </div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 mt-14 flex items-center gap-3 border-t border-border/70 pt-6"
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

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-between gap-5"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Dhaka, Bangladesh
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/sumayaislamm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </Link>

            <Link
              href="https://www.linkedin.com/in/sumayaislamm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </Link>

            <Link
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sheikhsumaya622@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Email
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
