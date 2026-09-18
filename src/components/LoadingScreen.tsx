// "use client";

// import { useEffect, useState } from "react";

// const codeSnippets = [
//   "<React />",
//   "const app = {}",
//   "npm run dev",
//   "git push",
//   "async / await",
//   "useState()",
//   "Next.js",
//   "TypeScript",
//   "{ code }",
//   "API",
//   "return ()",
//   "function App()",
//   "</div>",
//   "=> {}",
// ];

// export default function LoadingScreen() {
//   const [progress, setProgress] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const duration = 1200;
//     const interval = 20;
//     const increment = 100 / (duration / interval);

//     const progressTimer = setInterval(() => {
//       setProgress((prev) => {
//         const next = prev + increment;

//         if (next >= 100) {
//           clearInterval(progressTimer);

//           setTimeout(() => {
//             setIsVisible(false);
//           }, 150);

//           return 100;
//         }

//         return next;
//       });
//     }, interval);

//     return () => clearInterval(progressTimer);
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <div
//       className={`fixed inset-0 z-9999 overflow-hidden bg-background text-foreground transition-opacity duration-500 ${
//         progress === 100 ? "opacity-0" : "opacity-100"
//       }`}
//     >
//       {/* Floating Code Background */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {codeSnippets.map((code, index) => (
//           <span
//             key={index}
//             className="absolute whitespace-nowrap font-mono text-xs font-medium text-primary/50 animate-[float_8s_ease-in-out_infinite]"
//             style={{
//               left: `${(index * 17) % 100}%`,
//               top: `${(index * 23) % 100}%`,
//               animationDelay: `${index * -0.7}s`,
//             }}
//           >
//             {code}
//           </span>
//         ))}
//       </div>

//       {/* Center Content */}
//       <div className="relative z-10 flex h-full items-center justify-center">
//         <div className="flex w-70 flex-col items-center">
//           <h1 className="text-2xl font-semibold tracking-[0.25em]">SUMAYA</h1>

//           <div className="mt-10 w-full">
//             <div className="mb-3 flex items-center justify-between text-xs">
//               <span className="uppercase tracking-[0.2em] text-muted-foreground">
//                 Loading
//               </span>

//               <span className="tabular-nums text-muted-foreground">
//                 {Math.round(progress)}%
//               </span>
//             </div>

//             <div className="h-px w-full overflow-hidden bg-muted">
//               <div
//                 className="h-full bg-foreground transition-[width] duration-75 ease-linear"
//                 style={{ width: `${progress}%` }}
//               />
//             </div>
//           </div>

//           <p className="mt-6 whitespace-nowrap text-[10px] tracking-wide text-muted-foreground sm:text-xs">
//             FULL STACK DEVELOPER | FRONTEND DEVELOPER | BACKEND DEVELOPER
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";

// const codeSnippets = [
//   "<React />",
//   "const app = {}",
//   "npm run dev",
//   "git push",
//   "async / await",
//   "useState()",
//   "Next.js",
//   "TypeScript",
//   "{ code }",
//   "API",
//   "return ()",
//   "function App()",
//   "</div>",
//   "=> {}",
// ];

// export default function LoadingScreen() {
//   const [progress, setProgress] = useState(0);
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     const duration = 1200;
//     const interval = 20;
//     const increment = 100 / (duration / interval);

//     const progressTimer = setInterval(() => {
//       setProgress((prev) => {
//         const next = prev + increment;

//         if (next >= 100) {
//           clearInterval(progressTimer);

//           // Tell the rest of the page that loading is complete
//           window.dispatchEvent(new Event("loadingComplete"));

//           // Start fade-out
//           setTimeout(() => {
//             setIsVisible(false);
//           }, 150);

//           return 100;
//         }

//         return next;
//       });
//     }, interval);

//     return () => {
//       clearInterval(progressTimer);
//     };
//   }, []);

//   if (!isVisible) return null;

//   return (
//     <div
//       className={`fixed inset-0 z-[9999] overflow-hidden bg-background text-foreground transition-opacity duration-500 ${
//         progress === 100 ? "opacity-0" : "opacity-100"
//       }`}
//     >
//       {/* Floating Code Background */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         {codeSnippets.map((code, index) => (
//           <span
//             key={index}
//             className="absolute whitespace-nowrap font-mono text-xs font-medium text-primary/50 animate-[float_8s_ease-in-out_infinite]"
//             style={{
//               left: `${(index * 17) % 100}%`,
//               top: `${(index * 23) % 100}%`,
//               animationDelay: `${index * -0.7}s`,
//             }}
//           >
//             {code}
//           </span>
//         ))}
//       </div>

//       {/* Center Content */}
//       <div className="relative z-10 flex h-full items-center justify-center">
//         <div className="flex w-70 flex-col items-center">
//           {/* Name */}
//           <h1 className="text-2xl font-semibold tracking-[0.25em]">
//             SUMAYA
//           </h1>

//           {/* Progress */}
//           <div className="mt-10 w-full">
//             <div className="mb-3 flex items-center justify-between text-xs">
//               <span className="uppercase tracking-[0.2em] text-muted-foreground">
//                 Loading
//               </span>

//               <span className="tabular-nums text-muted-foreground">
//                 {Math.round(progress)}%
//               </span>
//             </div>

//             <div className="h-px w-full overflow-hidden bg-muted">
//               <div
//                 className="h-full bg-foreground transition-[width] duration-75 ease-linear"
//                 style={{
//                   width: `${progress}%`,
//                 }}
//               />
//             </div>
//           </div>

//           {/* Role */}
//           <p className="mt-6 whitespace-nowrap text-[10px] tracking-wide text-muted-foreground sm:text-xs">
//             FULL STACK DEVELOPER | FRONTEND DEVELOPER | BACKEND DEVELOPER
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";

const codeSnippets = [
  "<React />",
  "const app = {}",
  "npm run dev",
  "git push",
  "async / await",
  "useState()",
  "Next.js",
  "TypeScript",
  "{ code }",
  "API",
  "return ()",
  "function App()",
  "</div>",
  "=> {}",
];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 1200;
    const interval = 20;
    const increment = 100 / (duration / interval);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;

        return next >= 100 ? 100 : next;
      });
    }, interval);

    // Wait until the progress animation is complete
    const completeTimer = setTimeout(() => {
      clearInterval(progressTimer);
      setProgress(100);

      // Small delay so the 100% state renders first
      setTimeout(() => {
        // Tell Hero that the loader is finished
        window.dispatchEvent(new Event("loadingComplete"));

        // Start loader fade-out
        setTimeout(() => {
          setIsVisible(false);
        }, 500);
      }, 150);
    }, duration);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden bg-background text-foreground transition-opacity duration-500 ${
        progress === 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Floating Code Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {codeSnippets.map((code, index) => (
          <span
            key={index}
            className="absolute whitespace-nowrap font-mono text-xs font-medium text-primary/50 animate-[float_8s_ease-in-out_infinite]"
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${(index * 23) % 100}%`,
              animationDelay: `${index * -0.7}s`,
            }}
          >
            {code}
          </span>
        ))}
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="flex w-70 flex-col items-center">
          {/* Name */}
          <h1 className="text-2xl font-semibold tracking-[0.25em]">
            SUMAYA
          </h1>

          {/* Progress */}
          <div className="mt-10 w-full">
            <div className="mb-3 flex items-center justify-between text-xs">
              <span className="uppercase tracking-[0.2em] text-muted-foreground">
                Loading
              </span>

              <span className="tabular-nums text-muted-foreground">
                {Math.round(progress)}%
              </span>
            </div>

            <div className="h-px w-full overflow-hidden bg-muted">
              <div
                className="h-full bg-foreground transition-[width] duration-75 ease-linear"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>

          {/* Role */}
          <p className="mt-6 whitespace-nowrap text-[10px] tracking-wide text-muted-foreground sm:text-xs">
            FULL STACK DEVELOPER | FRONTEND DEVELOPER | BACKEND DEVELOPER
          </p>
        </div>
      </div>
    </div>
  );
}
