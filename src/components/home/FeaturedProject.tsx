// "use client";

// import Link from "next/link";
// import { ArrowUpRight, ExternalLink } from "lucide-react";
// import { motion } from "framer-motion";

// const technologies = [
//   "Next.js",
//   "TypeScript",
//   "Tailwind CSS",
//   "Node.js",
//   "Prisma",
//   "PostgreSQL",
// ];

// export default function FeaturedProject() {
//   return (
//     <section
//       id="work"
//       className="relative overflow-hidden px-6 sm:px-8 lg:px-12 "
//     >
//       <div className="mx-auto w-full max-w-7xl">
//         {/* Section Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//         >
//           <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
//             Featured Project
//           </p>

//           <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
//             <div>
//               <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
//                 Nestora
//               </h2>

//               <p className="mt-3 text-lg text-muted-foreground">
//                 Full-Stack Rental Platform
//               </p>
//             </div>

//             <span className="font-mono text-xs text-muted-foreground">
//               01 / Featured
//             </span>
//           </div>
//         </motion.div>

//         {/* Project Card */}
//         <motion.div 
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
//         >
//           {/* Project Preview */}
//           <div   data-cursor="NESTORA" className="relative aspect-[16/9] overflow-hidden bg-muted">
//             <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-foreground/5" />

//             <img
//               src="nestora.png"
//               alt="Nestora rental platform"
//               className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

//             {/* Project Label */}
//             <div className="absolute bottom-5 left-5">
//               <span className="rounded-full border border-border/60 bg-background/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider backdrop-blur-md">
//                 Full-Stack Web Application
//               </span>
//             </div>
//           </div>

//           {/* Project Content */}
//           <div className="grid gap-10 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
//             {/* Left */}
//             <div>
//               <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
//                 Nestora is a modern rental platform designed to connect property
//                 seekers with landlords through a clean and user-focused
//                 experience. It includes property discovery, detailed listings,
//                 authentication, and a structured backend for managing rental
//                 data.
//               </p>

//               {/* Technologies */}
//               <div className="mt-7 flex flex-wrap gap-2">
//                 {technologies.map((technology) => (
//                   <span
//                     key={technology}
//                     className="rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-foreground"
//                   >
//                     {technology}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Right */}
//             <div className="flex flex-col justify-between gap-8 lg:min-w-[190px]">
//               <div>
//                 <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
//                   Built with
//                 </p>

//                 <p className="mt-2 text-sm">
//                   React ecosystem
//                   <br />
//                   REST API
//                   <br />
//                   PostgreSQL database
//                 </p>
//               </div>

//               <div className="flex flex-wrap gap-3">
//                 <Link
//                   href="https://nestora-frontend.vercel.app"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
//                 >
//                   Live Demo
//                   <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                 </Link>

//                 <Link
//                   href="https://github.com/sumayaislamm/Nestora_Frontend"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Nestora GitHub repository"
//                   className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
//                 >
//                   GitHub
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Bottom Link */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="mt-8 flex justify-end"
//         >
//           <Link
//             href="#projects"
//             className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
//           >
//             View all projects
//             <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Prisma",
  "PostgreSQL",
];

export default function FeaturedProject() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  const imageX = useTransform(
    smoothX,
    [-1, 1],
    [-8, 8]
  );

  const imageY = useTransform(
    smoothY,
    [-1, 1],
    [-8, 8]
  );

  const spotlightX = useTransform(
    smoothX,
    [-1, 1],
    ["-12%", "12%"]
  );

  const spotlightY = useTransform(
    smoothY,
    [-1, 1],
    ["-12%", "12%"]
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
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
      id="work"
      className="relative overflow-hidden border-b border-border/70"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-4 ">

        {/* =====================================
            SECTION HEADER
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-14 flex items-end justify-between gap-6"
        >
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              01 / Featured
            </p>

            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Featured Project
            </h2>
          </div>

          <span className="hidden font-mono text-xs text-muted-foreground sm:block">
            FULL-STACK WEB APPLICATION
          </span>
        </motion.div>

        {/* =====================================
            PROJECT CONTAINER
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative overflow-hidden rounded-[2rem] border border-border bg-card"
        >
          {/* =================================
              IMAGE AREA
          ================================== */}

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            data-cursor="VIEW PROJECT"
            className="relative aspect-[16/9] overflow-hidden border-b border-border bg-muted"
          >
            {/* Image parallax */}

            <motion.div
              style={{
                x: imageX,
                y: imageY,
              }}
              className="absolute -inset-3"
            >
              <img
                src="/nestora.png"
                alt="Nestora rental platform"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </motion.div>

            {/* Dark overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-50" />

            {/* Mouse spotlight */}

            <motion.div
              aria-hidden="true"
              style={{
                x: spotlightX,
                y: spotlightY,
              }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.10] blur-3xl"
            />

            {/* Project label */}

            <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
              <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
                Nestora
              </span>
            </div>

            {/* Number */}

            <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7">
              <motion.span
                initial={{
                  opacity: 0.6,
                }}
                whileHover={{
                  opacity: 1,
                }}
                className="font-mono text-xs text-white/70"
              >
                01
              </motion.span>
            </div>
          </div>

          {/* =================================
              CONTENT
          ================================== */}

          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">

            {/* LEFT */}

            <div>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="mb-4 text-sm font-medium text-muted-foreground"
              >
                Full-Stack Rental Platform
              </motion.p>

              <motion.h3
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.05,
                }}
                className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl"
              >
                Nestora
              </motion.h3>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                }}
                className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base"
              >
                Nestora is a modern rental platform designed
                to connect property seekers with landlords
                through a clean and user-focused experience.
                It includes property discovery, detailed
                listings, authentication, and a structured
                backend for managing rental data.
              </motion.p>

              {/* =================================
                  TECHNOLOGIES
              ================================== */}

              <div className="mt-8 flex flex-wrap gap-2">
                {technologies.map((technology, index) => (
                  <motion.span
                    key={technology}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.12 + index * 0.05,
                    }}
                    whileHover={{
                      y: -2,
                    }}
                    className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[10px] text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-foreground"
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* RIGHT */}

            <div className="flex flex-col justify-between">

              {/* Project details */}

              <div className="grid grid-cols-2 gap-6 border-y border-border py-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    Type
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    Full-Stack
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    Stack
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    Modern Web
                  </p>
                </div>
              </div>

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap gap-3">

                {/* Live Demo */}

                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Link
                    href="https://nestora-frontend.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="LIVE"
                    className="group/link inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
                  >
                    Live Demo

                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </Link>
                </motion.div>

                {/* GitHub */}

                <motion.div
                  whileHover={{
                    x: 4,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Link
                    href="https://github.com/sumayaislamm/Nestora_Frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="GITHUB"
                    className="group/link inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors duration-300 hover:bg-muted"
                  >
                    GitHub

                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* =================================
              BOTTOM ACCENT
          ================================== */}

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
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-px origin-left bg-foreground/20"
          />
        </motion.div>

        {/* =====================================
            MORE PROJECTS LINK
        ====================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-8 flex justify-end"
        >
          <Link
            href="#projects"
            data-cursor="VIEW"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View more projects

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
