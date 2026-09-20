// "use client";

// import { motion } from "framer-motion";

// const skillGroups = [
//   {
//     title: "Frontend",
//     skills: [
//       "React.js",
//       "Next.js",
//       "TypeScript",
//       "JavaScript",
//       "Tailwind CSS",
//       "HTML5",
//       "CSS3",
//     ],
//   },
//   {
//     title: "Backend",
//     skills: [
//       "Node.js",
//       "Express.js",
//       "NestJS",
//       "REST APIs",
//       "JWT",
//       "Authentication",
//     ],
//   },
//   {
//     title: "Database",
//     skills: [
//       "PostgreSQL",
//       "Prisma",
//       "MongoDB",
//     ],
//   },
//   {
//     title: "Tools",
//     skills: [
//       "Git",
//       "GitHub",
//       "Postman",
//       "VS Code",
//       "Figma",
//       "Vercel",
//     ],
//   },
// ];

// export default function TechStack() {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden border-t border-border/70 py-4 "
//     >
//       <div  data-cursor="Technology" className="mx-auto max-w-6xl px-6 sm:px-8">
//         {/* Header */}
//         <div className="mb-14 sm:mb-20">
//           <motion.p
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
//           >
//             Technical Stack
//           </motion.p>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl"
//           >
//             Tools I use to turn
//             <br />
//             <span className="text-muted-foreground">
//               ideas into products.
//             </span>
//           </motion.h2>
//         </div>

//         {/* Skill Groups */}
//         <div className="grid border-l border-t border-border/70 sm:grid-cols-2">
//           {skillGroups.map((group, index) => (
//             <motion.div
//               key={group.title}
//               initial={{ opacity: 0, y: 25 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.5,
//                 delay: index * 0.08,
//               }}
//               className="border-b border-r border-border/70 p-6 sm:p-8"
//             >
//               <div className="mb-8 flex items-center justify-between">
//                 <h3 className="text-lg font-medium">
//                   {group.title}
//                 </h3>

//                 <span className="font-mono text-xs text-muted-foreground">
//                   0{index + 1}
//                 </span>
//               </div>

//               <div className="flex flex-wrap gap-2">
//                 {group.skills.map((skill) => (
//                   <span
//                     key={skill}
//                     className="rounded-full border border-border bg-background px-3 py-2 text-xs text-muted-foreground transition-all duration-300 hover:border-foreground/30 hover:text-foreground"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom statement */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="mt-10 max-w-2xl"
//         >
//           <p className="text-sm leading-7 text-muted-foreground">
//             I focus on building maintainable applications with modern
//             JavaScript technologies, clean architecture, responsive
//             interfaces, and reliable backend systems.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";

// const skillGroups = [
//   {
//     number: "01",
//     title: "Frontend",
//     description:
//       "Building responsive, accessible and polished user interfaces.",
//     skills: [
//       "React.js",
//       "Next.js",
//       "TypeScript",
//       "JavaScript",
//       "Tailwind CSS",
//       "HTML5",
//       "CSS3",
//     ],
//   },
//   {
//     number: "02",
//     title: "Backend",
//     description:
//       "Developing reliable APIs, authentication and application logic.",
//     skills: [
//       "Node.js",
//       "Express.js",
//       "NestJS",
//       "REST APIs",
//       "JWT",
//       "Authentication",
//     ],
//   },
//   {
//     number: "03",
//     title: "Database",
//     description:
//       "Working with structured data, ORM systems and database design.",
//     skills: [
//       "PostgreSQL",
//       "Prisma",
//       "MongoDB",
//     ],
//   },
//   {
//     number: "04",
//     title: "Tools",
//     description:
//       "Using modern tools to build, test, version and deploy applications.",
//     skills: [
//       "Git",
//       "GitHub",
//       "Postman",
//       "VS Code",
//       "Figma",
//       "Vercel",
//     ],
//   },
// ];

// export default function TechStack() {
//   return (
//     <section
//       id="about"
//       className="relative overflow-hidden border-b border-border/70"
//     >
//       <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

//         {/* =====================================
//             HEADER
//         ====================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 30,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             margin: "-100px",
//           }}
//           transition={{
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="mb-16 max-w-2xl"
//         >
//           <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
//             03 / Expertise
//           </p>

//           <h2 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
//             Tech Stack
//           </h2>

//           <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
//             Technologies and tools I use to build modern,
//             maintainable and production-ready web
//             applications.
//           </p>
//         </motion.div>

//         {/* =====================================
//             SKILL GROUPS
//         ====================================== */}

//         <div className="grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-2">
//           {skillGroups.map((group, groupIndex) => (
//             <motion.div
//               key={group.title}
//               initial={{
//                 opacity: 0,
//                 y: 30,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//                 margin: "-80px",
//               }}
//               transition={{
//                 duration: 0.6,
//                 delay: groupIndex * 0.08,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               whileHover="hover"
//               className="group relative overflow-hidden bg-background p-7 sm:p-9 lg:p-10"
//             >
//               {/* Hover glow */}

//               <motion.div
//                 variants={{
//                   hover: {
//                     opacity: 1,
//                     scale: 1,
//                   },
//                 }}
//                 initial={{
//                   opacity: 0,
//                   scale: 0.8,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                 }}
//                 className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/[0.07] blur-3xl"
//               />

//               {/* Top */}

//               <div className="relative z-10 flex items-start justify-between">
//                 <motion.span
//                   variants={{
//                     hover: {
//                       x: 5,
//                     },
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 300,
//                     damping: 20,
//                   }}
//                   className="font-mono text-xs text-muted-foreground"
//                 >
//                   {group.number}
//                 </motion.span>

//                 <motion.div
//                   variants={{
//                     hover: {
//                       rotate: 45,
//                     },
//                   }}
//                   transition={{
//                     duration: 0.3,
//                   }}
//                   className="h-3 w-3 border-r border-t border-foreground/50"
//                 />
//               </div>

//               {/* Title */}

//               <div className="relative z-10 mt-12">
//                 <motion.h3
//                   variants={{
//                     hover: {
//                       x: 4,
//                     },
//                   }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 300,
//                     damping: 20,
//                   }}
//                   className="text-2xl font-semibold tracking-tight sm:text-3xl"
//                 >
//                   {group.title}
//                 </motion.h3>

//                 <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
//                   {group.description}
//                 </p>
//               </div>

//               {/* Skills */}

//               <div className="relative z-10 mt-8 flex flex-wrap gap-2">
//                 {group.skills.map((skill, index) => (
//                   <motion.span
//                     key={skill}
//                     initial={{
//                       opacity: 0,
//                       y: 8,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     viewport={{
//                       once: true,
//                     }}
//                     transition={{
//                       duration: 0.35,
//                       delay:
//                         groupIndex * 0.08 +
//                         index * 0.04,
//                     }}
//                     whileHover={{
//                       y: -3,
//                       scale: 1.03,
//                     }}
//                     className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[10px] text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary/[0.06] hover:text-foreground"
//                   >
//                     {skill}
//                   </motion.span>
//                 ))}
//               </div>

//               {/* Bottom line */}

//               <motion.div
//                 variants={{
//                   hover: {
//                     scaleX: 1,
//                   },
//                 }}
//                 initial={{
//                   scaleX: 0,
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="relative z-10 mt-10 h-px origin-left bg-foreground/20"
//               />
//             </motion.div>
//           ))}
//         </div>

//         {/* =====================================
//             BOTTOM STATEMENT
//         ====================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//           }}
//           transition={{
//             duration: 0.7,
//             delay: 0.2,
//           }}
//           className="mt-12 flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-start sm:justify-between"
//         >
//           <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
//             How I work
//           </span>

//           <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
//             I focus on building maintainable applications
//             with modern JavaScript technologies, clean
//             architecture, responsive interfaces, and
//             reliable backend systems.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Database,
  Server,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    icon: Code2,
    description:
      "Building responsive, accessible and polished user interfaces.",
    detail:
      "I use modern frontend technologies to create fast, scalable and responsive interfaces with a strong focus on usability.",
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
    number: "02",
    title: "Backend",
    icon: Server,
    description:
      "Developing reliable APIs, authentication and application logic.",
    detail:
      "I build structured backend systems with REST APIs, authentication, business logic and scalable application architecture.",
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
    number: "03",
    title: "Database",
    icon: Database,
    description:
      "Working with structured data, ORM systems and database design.",
    detail:
      "I work with relational and document databases while using ORM tools to keep data access structured and maintainable.",
    skills: [
      "PostgreSQL",
      "Prisma",
      "MongoDB",
    ],
  },
  {
    number: "04",
    title: "Tools",
    icon: Wrench,
    description:
      "Using modern tools to build, test, version and deploy applications.",
    detail:
      "I use a modern development workflow for version control, API testing, design collaboration and production deployment.",
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

function SkillCard({
  group,
  index,
  isOpen,
  onToggle,
}: {
  group: (typeof skillGroups)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const Icon = group.icon;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 250,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 250,
    damping: 25,
  });

  const rotateX = useTransform(smoothY, [-100, 100], [2, -2]);
  const rotateY = useTransform(smoothX, [-100, 100], [-2, 2]);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    mouseX.set(
      event.clientX -
        rect.left -
        rect.width / 2
    );

    mouseY.set(
      event.clientY -
        rect.top -
        rect.height / 2
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 30,
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
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <motion.button
        type="button"
        layout
        onClick={onToggle}
        data-cursor={isOpen ? "CLOSE" : "EXPLORE"}
        aria-expanded={isOpen}
        className={`relative w-full overflow-hidden rounded-[1.75rem] border text-left transition-all duration-500 ${
          isOpen
            ? "border-foreground/30 bg-muted/30"
            : "border-border bg-background hover:border-foreground/25 hover:bg-muted/20"
        }`}
      >
        {/* Spotlight */}

        <motion.div
          className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/[0.08] blur-3xl"
          animate={{
            opacity: isOpen ? 1 : 0,
            scale: isOpen ? 1 : 0.7,
          }}
          transition={{
            duration: 0.5,
          }}
        />

        {/* Header */}

        <div className="relative z-10 px-7 sm:px-8">

          {/* Top Row */}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">

              <span className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                {group.number}
              </span>

              <span className="h-px w-6 bg-border" />

              <motion.div
                animate={{
                  rotate: isOpen ? 8 : 0,
                  scale: isOpen ? 1.05 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-background"
              >
                <Icon className="h-4 w-4" />
              </motion.div>
            </div>

            <motion.div
              animate={{
                rotate: isOpen ? 45 : 0,
                scale: isOpen ? 1.05 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border"
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.div>
          </div>

          {/* Title */}

          <div className="mt-10">
            <motion.h3
              layout="position"
              className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl"
            >
              {group.title}
            </motion.h3>

            <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
              {group.description}
            </p>
          </div>

          {/* Expanded Content */}

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                transition={{
                  height: {
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  },
                  opacity: {
                    duration: 0.25,
                  },
                }}
                className="overflow-hidden"
              >
                <div className="pt-7">

                  {/* Divider */}

                  <div className="mb-6 h-px w-full bg-border" />

                  {/* Detail */}

                  <p className="max-w-lg text-sm leading-7 text-muted-foreground">
                    {group.detail}
                  </p>

                  {/* Skills */}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map(
                      (skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{
                            opacity: 0,
                            y: 8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.3,
                            delay:
                              skillIndex * 0.045,
                          }}
                          className="rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[10px] text-muted-foreground"
                        >
                          {skill}
                        </motion.span>
                      )
                    )}
                  </div>

                  {/* Close Hint */}

                  <div className="mt-7 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground/50" />
                    Click to collapse
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Progress Line */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          animate={{
            scaleX: isOpen ? 1 : 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-foreground/50"
        />
      </motion.button>
    </motion.div>
  );
}

export default function TechStack() {
  const [openIndex, setOpenIndex] = useState<
    number | null
  >(null);

  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-border/70"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 sm:px-8 lg:px-12 ">

        {/* Section Header */}

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
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14"
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            03 / Expertise
          </p>

          <h2 className="text-4xl font-semibold tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Tech Stack
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Technologies and tools I use to design,
            build and ship modern web applications.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="grid gap-5 md:grid-cols-2"
          style={{
            perspective: "1200px",
          }}
        >
          {skillGroups.map((group, index) => (
            <SkillCard
              key={group.title}
              group={group}
              index={index}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) =>
                  current === index ? null : index
                )
              }
            />
          ))}
        </div>

        {/* Bottom */}

        <motion.div
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
            delay: 0.25,
          }}
          className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-start sm:justify-between"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            How I work
          </span>

          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
            I focus on maintainable architecture,
            responsive interfaces, clean code and reliable
            backend systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}