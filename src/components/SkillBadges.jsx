//pre-port

// import React from "react";
// import { FaFileExcel, FaDatabase, FaFileAlt, FaChartBar } from "react-icons/fa";

// const skillsWithIcons = [
//   { name: "IBM SPSS Statistics (Basics)", icon: <FaChartBar /> },
//   { name: "Advanced MS Excel", icon: <FaFileExcel /> },
//   { name: "ZoHo Books", icon: <FaFileAlt /> },
//   { name: "Microsoft Access", icon: <FaDatabase /> },
//   { name: "TallyPrime with GST", icon: <FaFileAlt /> },
//   { name: "Microsoft Word", icon: <FaFileAlt /> },
//   { name: "IDEA", icon: <FaDatabase /> },
//   { name: "mysql", icon: <FaDatabase /> },
// ];

// export default function SkillBadges() {
//   return (
//     <section className="mb-12 max-w-5xl mx-auto">
//       {/* Header aligned left + scroll animation */}
//       <h3 
//         className="text-2xl font-semibold mb-6"
//         data-aos="fade-right"
//       >
//         Skills
//       </h3> 
      
//       {/* Badges centered with padding */}
//       <div className="flex flex-wrap justify-center gap-4 p-6">
//         {skillsWithIcons.map((skill, idx) => (
//           <div
//             key={idx}
//             className="flex items-center gap-2 bg-slate-100 rounded-full px-6 py-3 cursor-pointer transition transform hover:scale-110 hover:bg-emerald-100"
//             title={skill.name}
//             data-aos="zoom-in"
//           >
//             <span className="text-emerald-600 text-xl">{skill.icon}</span>
//             <span className="whitespace-nowrap font-medium">{skill.name}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

//before toggle
import React from "react";
import { motion } from "framer-motion";
import { FaFileExcel, FaDatabase, FaFileAlt, FaChartBar } from "react-icons/fa";

const skillsWithIcons = [
  { name: "IBM SPSS Statistics (Basics)", icon: <FaChartBar /> },
  { name: "Advanced MS Excel", icon: <FaFileExcel /> },
  { name: "ZoHo Books", icon: <FaFileAlt /> },
  { name: "Microsoft Access", icon: <FaDatabase /> },
  { name: "TallyPrime with GST", icon: <FaFileAlt /> },
  { name: "Microsoft Word", icon: <FaFileAlt /> },
  { name: "IDEA", icon: <FaDatabase /> },
  { name: "MySQL", icon: <FaDatabase /> },
];

// Variants for animations
const fadeRightVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const zoomInVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: i => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1 }
  }),
};

export default function SkillBadges() {
  return (
    <section className="mb-12 max-w-5xl mx-auto">
      {/* Header with fade-right on scroll */}
      <motion.h3
        className="text-2xl font-semibold mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeRightVariant}
      >
        Skills
      </motion.h3>

      {/* Badges with zoom-in as you scroll */}
      <div className="flex flex-wrap justify-center gap-4 p-6">
        {skillsWithIcons.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex items-center gap-2 bg-slate-100 rounded-full px-6 py-3 cursor-pointer transition hover:bg-emerald-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            custom={idx}
            variants={zoomInVariant}
          >
            <span className="text-emerald-600 text-xl">{skill.icon}</span>
            <span className="whitespace-nowrap font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


