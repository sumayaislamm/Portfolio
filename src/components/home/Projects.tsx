// "use client";

// import Link from "next/link";
// import { ArrowUpRight } from "lucide-react";
// import { motion } from "framer-motion";

// const projects = [
//   {
//     number: "02",
//     title: "ServerPulse",
//     category: "Backend / API",
//     description:
//       "A scalable backend application built with Express.js and TypeScript, featuring REST APIs, JWT authentication, password hashing, and PostgreSQL database integration.",
//     technologies: [
//       "Express.js",
//       "TypeScript",
//       "PostgreSQL",
//       "JWT",
//       "REST API",
//     ],
//     github: "https://github.com/sumayaislamm",
//     live: "",
//   },
//   {
//     number: "03",
//     title: "Handy Works",
//     category: "Full-Stack Web Application",
//     description:
//       "A service-focused web application designed to connect users with practical services through a clean interface and structured application flow.",
//     technologies: ["React", "Node.js", "MongoDB", "REST API"],
//     github: "https://github.com/sumayaislamm",
//     live: "",
//   },
// ];

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       className="relative overflow-hidden border-t border-border/70 pt-2"
//     >
//       <div  data-cursor="Projects" className="mx-auto max-w-6xl px-6 sm:px-8">
//         {/* Section Header */}
//         <div className="mb-14 flex flex-col justify-between gap-6 sm:mb-20 md:flex-row md:items-end">
//           <div>
//             <motion.p
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5 }}
//               className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
//             >
//               Selected Work
//             </motion.p>

//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl"
//             >
//               More projects,
//               <br />
//               <span className="text-muted-foreground">
//                 built with purpose.
//               </span>
//             </motion.h2>
//           </div>

//           <motion.p
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="max-w-sm text-sm leading-7 text-muted-foreground"
//           >
//             A selection of applications and backend systems showcasing my
//             experience across modern frontend and backend development.
//           </motion.p>
//         </div>

//         {/* Projects */}
//         <div className="grid gap-6 lg:grid-cols-2">
//           {projects.map((project, index) => (
//             <motion.article
//               key={project.title}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.1,
//               }}
//               className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl sm:p-8"
//             >
//               {/* Top */}
//               <div className="mb-12 flex items-center justify-between">
//                 <span className="font-mono text-xs text-muted-foreground">
//                   {project.number}
//                 </span>

//                 <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
//                   {project.category}
//                 </span>
//               </div>

//               {/* Content */}
//               <div>
//                 <h3 className="text-3xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
//                   {project.title}
//                 </h3>

//                 <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
//                   {project.description}
//                 </p>
//               </div>

//               {/* Technologies */}
//               <div className="mt-8 flex flex-wrap gap-2">
//                 {project.technologies.map((technology) => (
//                   <span
//                     key={technology}
//                     className="rounded-full bg-muted px-3 py-1.5 font-mono text-[10px] text-muted-foreground"
//                   >
//                     {technology}
//                   </span>
//                 ))}
//               </div>

//               {/* Links */}
//               <div className="mt-10 flex items-center gap-3">
//                 {project.live && (
//                   <Link
//                     href={project.live}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-xs font-medium text-background transition-all duration-300 hover:scale-[1.02]"
//                   >
//                     Live Demo
//                     <ArrowUpRight className="h-3.5 w-3.5" />
//                   </Link>
//                 )}

//                 <Link
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs font-medium transition-all duration-300 hover:border-foreground/30 hover:bg-muted"
//                 >
                 
//                   GitHub
//                 </Link>
//               </div>

//               {/* Decorative number */}
//               <span className="pointer-events-none absolute -bottom-10 -right-4 select-none font-mono text-[140px] font-bold leading-none text-foreground/[0.025] transition-all duration-500 group-hover:text-foreground/[0.05]">
//                 {project.number}
//               </span>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

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
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "REST API",
    ],
    github: "https://github.com/sumayaislamm",
    live: "",
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  const spotlightX = useTransform(
    smoothX,
    [-1, 1],
    ["-15%", "15%"]
  );

  const spotlightY = useTransform(
    smoothY,
    [-1, 1],
    ["-15%", "15%"]
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
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
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
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
      }}
      className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-card transition-shadow duration-500 hover:shadow-xl"
    >
      {/* Spotlight */}

      <motion.div
        aria-hidden="true"
        style={{
          x: spotlightX,
          y: spotlightY,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-3xl"
      />

      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative z-10 p-7 sm:p-8 lg:p-9"
      >
        {/* Top row */}

        <div className="flex items-start justify-between gap-5">
          <motion.span
            className="font-mono text-xs text-muted-foreground"
            whileHover={{
              x: 5,
            }}
          >
            {project.number}
          </motion.span>

          <span className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground">
            {project.category}
          </span>
        </div>

        {/* Title */}

        <div className="mt-12">
          <motion.h3
            className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl"
            whileHover={{
              x: 4,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {project.title}
          </motion.h3>

          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
            {project.description}
          </p>
        </div>

        {/* Technologies */}

        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map(
            (technology, index) => (
              <motion.span
                key={technology}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                }}
                whileHover={{
                  y: -2,
                }}
                className="rounded-full border border-border px-3 py-1.5 font-mono text-[10px] text-muted-foreground transition-colors duration-300 hover:border-primary hover:text-foreground"
              >
                {technology}
              </motion.span>
            )
          )}
        </div>

        {/* Bottom */}

        <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
            {project.title}
          </span>

          <div className="flex items-center gap-3">
            {/* GitHub */}

            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GITHUB"
              className="group/link inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub

              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </Link>

            {/* Live */}

            {project.live ? (
              <Link
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LIVE"
                className="group/link inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background"
              >
                Live

                <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      {/* Bottom animated line */}

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
          duration: 0.8,
          delay: 0.15,
        }}
        className="h-px origin-left bg-foreground/20"
      />
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative border-b border-border/70"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

        {/* Header */}

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
          className="mb-14"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            02 / Selected Work
          </p>

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              More Projects
            </h2>

            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              A selection of backend and full-stack
              applications built with modern web
              technologies.
            </p>
          </div>
        </motion.div>

        {/* Project grid */}

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}