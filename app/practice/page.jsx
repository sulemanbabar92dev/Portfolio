// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaEnvelope,
//   FaMoon,
//   FaSun,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";

// function useTheme() {
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     const saved =
//       typeof window !== "undefined" ? localStorage.getItem("theme") : null;
//     if (saved) setTheme(saved);
//     else {
//       const prefers =
//         typeof window !== "undefined" &&
//         window.matchMedia &&
//         window.matchMedia("(prefers-color-scheme: light)").matches;
//       setTheme(prefers ? "light" : "dark");
//     }
//   }, []);

//   useEffect(() => {
//     if (typeof document === "undefined") return;
//     document.documentElement.classList.toggle("dark", theme === "dark");
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return [theme, setTheme];
// }

// function ThemeToggle({ theme, setTheme }) {
//   return (
//     <button
//       aria-label="Toggle theme"
//       onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//       className="p-2 rounded-lg border border-gray-700 dark:border-gray-200/10 hover:scale-105 transition"
//     >
//       {theme === "dark" ? <FaSun /> : <FaMoon />}
//     </button>
//   );
// }

// function Nav({ theme, setTheme }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <header className="sticky top-0 z-50 backdrop-blur bg-white/40 dark:bg-gray-900/40 border-b border-gray-200/10 dark:border-gray-700/20">
//       <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
//         <a
//           href="#hero"
//           className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500"
//         >
//           Salman
//         </a>

//         <nav className="hidden md:flex items-center gap-6 text-sm">
//           <a href="#projects" className="hover:underline">
//             Projects
//           </a>
//           <a href="#skills" className="hover:underline">
//             Skills
//           </a>
//           <a href="#contact" className="hover:underline">
//             Contact
//           </a>
//           <ThemeToggle theme={theme} setTheme={setTheme} />
//         </nav>

//         <div className="md:hidden flex items-center gap-4">
//           <ThemeToggle theme={theme} setTheme={setTheme} />
//           <button
//             onClick={() => setOpen(!open)}
//             aria-label="menu"
//             className="p-2 rounded-md"
//           >
//             {open ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {open && (
//         <div className="md:hidden px-6 pb-6">
//           <div className="flex flex-col gap-3">
//             <a href="#projects" onClick={() => setOpen(false)} className="py-2">
//               Projects
//             </a>
//             <a href="#skills" onClick={() => setOpen(false)} className="py-2">
//               Skills
//             </a>
//             <a href="#contact" onClick={() => setOpen(false)} className="py-2">
//               Contact
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// export default function PortfolioPage() {
//   const [theme, setTheme] = useTheme();

//   const projects = [
//     {
//       title: "User Management System",
//       desc: "CRUD app with React, local state and validations.",
//       tech: ["React", "Tailwind"],
//     },
//     {
//       title: "Portfolio Website",
//       desc: "This portfolio built with Next.js and Tailwind.",
//       tech: ["Next.js", "Tailwind", "Framer Motion"],
//     },
//     {
//       title: "Todo App",
//       desc: "A small project with localStorage sync and filters.",
//       tech: ["React", "LocalStorage"],
//     },
//   ];

//   const skills = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "React",
//     "Next.js",
//     "TailwindCSS",
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
//       <Nav theme={theme} setTheme={setTheme} />

//       <main className="max-w-6xl mx-auto px-6 py-16">
//         <section id="hero" className="text-center mt-6">
//           <motion.h1
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-5xl md:text-6xl font-extrabold leading-tight"
//           >
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
//               Salman Babar
//             </span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.25 }}
//             className="mt-4 text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
//           >
//             Frontend developer building modern, accessible, and responsive user
//             interfaces using React and Next.js.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 8 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//             className="flex items-center justify-center gap-4 mt-8"
//           >
//             <a
//               href="#contact"
//               className="px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:opacity-95"
//             >
//               Contact Me
//             </a>
//             <a
//               href="#projects"
//               className="px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 dark:border-gray-700"
//             >
//               View Projects
//             </a>
//           </motion.div>

//           <div className="flex items-center justify-center gap-6 mt-8 text-2xl">
//             <a href="#" aria-label="github" className="hover:opacity-80">
//               <FaGithub />
//             </a>
//             <a href="#" aria-label="linkedin" className="hover:opacity-80">
//               <FaLinkedin />
//             </a>
//             <a
//               href="mailto:youremail@gmail.com"
//               aria-label="email"
//               className="hover:opacity-80"
//             >
//               <FaEnvelope />
//             </a>
//           </div>
//         </section>

//         <section id="skills" className="mt-20">
//           <h2 className="text-3xl font-bold">Skills</h2>
//           <p className="mt-2 text-gray-600 dark:text-gray-300">
//             Technologies I use regularly
//           </p>

//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
//             {skills.map((s) => (
//               <div
//                 key={s}
//                 className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-center font-medium shadow-sm"
//               >
//                 {s}
//               </div>
//             ))}
//           </div>
//         </section>

//         <section id="projects" className="mt-16">
//           <h2 className="text-3xl font-bold">Projects</h2>

//           <div className="grid md:grid-cols-2 gap-6 mt-6">
//             {projects.map((p) => (
//               <motion.article
//                 key={p.title}
//                 whileHover={{ y: -6 }}
//                 className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 bg-white dark:bg-gray-900 shadow"
//               >
//                 <h3 className="text-xl font-semibold">{p.title}</h3>
//                 <p className="mt-2 text-gray-600 dark:text-gray-300">
//                   {p.desc}
//                 </p>
//                 <div className="mt-4 flex gap-2 flex-wrap text-sm">
//                   {p.tech.map((t) => (
//                     <span
//                       key={t}
//                       className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </section>

//         <section id="contact" className="mt-20 text-center">
//           <h2 className="text-3xl font-bold">Contact</h2>
//           <p className="mt-2 text-gray-600 dark:text-gray-300">
//             I'm open to internships and junior roles - let's connect.
//           </p>

//           <form className="max-w-xl mx-auto mt-6 grid gap-3">
//             <input
//               name="name"
//               placeholder="Your name"
//               className="px-4 py-3 text-gray-400 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
//             />
//             <input
//               name="email"
//               placeholder="Your email"
//               className="px-4 py-3 text-gray-400 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
//             />
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Message"
//               className="px-4 py-3 text-gray-400 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
//             />
//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </section>

//         <footer className="mt-20 text-center text-sm text-gray-500 dark:text-gray-400">
//           © {new Date().getFullYear()} Salman Babar - Built with Next.js &
//           Tailwind
//         </footer>
//       </main>
//     </div>
//   );
// }
