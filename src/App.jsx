// import React, { useEffect, useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa"; // add icons
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Experience from "./components/Experience";
// import Achievements from "./components/Achievements";
// import Contact from "./components/Contact";
// import Projects from "./components/Projects";
// import AchievementsInterests from "./components/AchievementsInterests";
// import SkillBadges from "./components/SkillBadges";
// import AchievementsFilter from "./components/AchievementsFilter";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const navLinks = [
//     { id: "about", label: "About" },
//     { id: "experience", label: "Experience" },
//     { id: "projects", label: "Projects" },
//     { id: "skillbadges", label: "Skills" },
//     { id: "achievements", label: "Achievements" },
//     { id: "achievements-interests", label: "Others" },
//     { id: "contact", label: "Contact" },
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500">
//       {/* HEADER */}
//       <header className="max-w-5xl mx-auto p-6 flex justify-between items-center relative">
//         <h1 className="text-xl font-semibold">Rakshitha D</h1>

//         {/* Desktop nav */}
//         <nav className="hidden md:flex items-center space-x-6">
//           {navLinks.map((link) => (
//             <a
//               key={link.id}
//               href={`#${link.id}`}
//               className="text-sm hover:underline"
//             >
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         {/* Mobile menu button */}
//         <button
//           className="md:hidden text-2xl focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Mobile dropdown */}
//         {isOpen && (
//           <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-md flex flex-col items-center space-y-4 py-6 md:hidden z-50">
//             {navLinks.map((link) => (
//               <a
//                 key={link.id}
//                 href={`#${link.id}`}
//                 className="text-sm hover:underline"
//                 onClick={() => setIsOpen(false)} // close after click
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>
//         )}
//       </header>

//       {/* MAIN */}
//       <main className="max-w-5xl mx-auto p-6 space-y-12">
//         <Hero />
//         <About />
//         <Experience />
//         <Projects />
//         <SkillBadges />
//         <Achievements />
//         <AchievementsInterests />
//         <AchievementsFilter />
//         <Contact />
//       </main>

//       {/* FOOTER */}
//       <footer className="text-center text-sm p-6 text-slate-500">
//         © {new Date().getFullYear()} Rakshitha D — Built by Akshh for Rakshhh❤️
//       </footer>
//     </div>
//   );
// }


//before - toggle
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa"; // add moon/sun icons
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import AchievementsInterests from "./components/AchievementsInterests";
import SkillBadges from "./components/SkillBadges";
import AchievementsFilter from "./components/AchievementsFilter";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    // Load theme preference
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // toggle function
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  const navLinks = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skillbadges", label: "Skills" },
    { id: "achievements", label: "Achievements" },
    { id: "achievements-interests", label: "Others" },
    { id: "contact", label: "Contact" },
  ];

// Hide/show header on scroll
// const [showHeader, setShowHeader] = useState(true);
// const [lastScrollY, setLastScrollY] = useState(0);

// useEffect(() => {
//   const handleScroll = () => {
//     if (window.scrollY > lastScrollY) {
//       // scrolling down → hide header
//       setShowHeader(false);
//     } else {
//       // scrolling up → show header
//       setShowHeader(true);
//     }
//     setLastScrollY(window.scrollY);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, [lastScrollY]);

// Optional: Change header style on scroll(shadow)
// const [scrolled, setScrolled] = useState(false);

// useEffect(() => {
//   const handleScroll = () => {
//     setScrolled(window.scrollY > 0);
//   };

//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

{/* // Add framer-motion for slide in/out(while scrolling)
<motion.header
  initial={{ y: 0 }}
  animate={{ y: showHeader ? 0 : "-100%" }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
  className="fixed top-0 left-0 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-md z-50"
  
  // Add shadow on scroll
  // className={`fixed top-0 left-0 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md z-50 transition-shadow ${
  //   scrolled ? "shadow-md" : "shadow-none"
  // }`}

> */}

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500">
      {/* //frosted glass blur effect */}
      {/* <header className="fixed top-0 left-0 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-md z-50"> */}

{/* // Optional: Animated header on Pageload using Framer Motion
      {/* <motion.header
  initial={{ y: -50, opacity: 0 }}      // start above & invisible
  animate={{ y: 0, opacity: 1 }}        // slide down & fade in
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900 shadow-md z-50"
  ></motion.header> */}

  {/* HEADER */}
<header className="fixed top-0 left-0 w-full bg-white dark:bg-slate-900 shadow-md z-50">
  <div className="max-w-5xl mx-auto p-6 flex justify-between items-center relative">
    <div className="flex items-center gap-4">
      <h1 className="text-xl font-semibold">Rakshitha D</h1>
      {/* Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        className="text-xl p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>

    {/* Desktop nav */}
    <nav className="hidden md:flex items-center space-x-6">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="text-sm hover:underline"
        >
          {link.label}
        </a>
      ))}
    </nav>

    {/* Mobile menu button */}
    <button
      className="md:hidden text-2xl focus:outline-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
  </div>

  {/* Mobile dropdown (keep absolute so it attaches below header) */}
  {isOpen && (
    <div className="absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-md flex flex-col items-center space-y-4 py-6 md:hidden z-40">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="text-sm hover:underline"
          onClick={() => setIsOpen(false)} // close after click
        >
          {link.label}
        </a>
      ))}
    </div>
  )}
  </header>

  {/* Optional: Animated mobile dropdown using Framer Motion */}
  {/* <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="absolute top-full left-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md flex flex-col items-center space-y-4 py-6 md:hidden z-40"
    >
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="text-sm hover:underline"
          onClick={() => setIsOpen(false)} // close after click
        >
          {link.label}
        </a>
      ))}
    </motion.div>
  )}
</AnimatePresence> */}


      {/* MAIN */}
      <main className="max-w-5xl mx-auto p-6 space-y-12 pt-32">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SkillBadges />
        <Achievements />
        <AchievementsInterests />
        <AchievementsFilter />
        <Contact />
      </main>

      {/* FOOTER */}
      <footer className="text-center text-sm p-6 text-slate-500">
        © {new Date().getFullYear()} Rakshitha D — Built by Akshh for Rakshhh❤️
      </footer>
    </div>
  );
}


