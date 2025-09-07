//pre-port

// import React from "react";

// const projects = [
//   {
//     title: "Website Design Project",
//     period: "06/2025 - 06/2025",
//     description:
//       "Tiruppur ITT Program project conducted by Tiruppur ICAI. Designed a website-look in Excel for a safety deposit locker business. Maintained customer register and analyzed data using Macros, Pivot Tables & Charts, and automated PAN verification.",
//     excelLink: "https://link-to-excel-project.com", // Replace with actual link
//   },
//   {
//     title: "SSY Scheme Study",
//     period: "07/2025 - ongoing",
//     description:
//       "Analysis of awareness and benefits of the Sukanya Samridhi Yojana Scheme. Conducted an insightful study, calculated awareness levels through Primary and Secondary data using PSPP.",
//     excelLink: null,
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects">
//       <h3 className="text-2xl font-semibold mb-6">Projects</h3>
//       <div className="space-y-6">
//         {projects.map((project, i) => (
//           <div key={i} className="card p-6 bg-white/80 rounded-2xl shadow-md">
//             <h4 className="font-semibold text-lg mb-1">
//               {project.title} <span className="text-sm text-slate-500">({project.period})</span>
//             </h4>
//             <p className="text-slate-700 mb-3">{project.description}</p>
//             {project.excelLink && (
//               <a
//                 href={project.excelLink}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="btn border px-4 py-2 rounded hover:bg-slate-100 transition"
//               >
//                 View Excel Project
//               </a>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


//before - toggle 

import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Website Design Project",
    period: "06/2025 - 06/2025",
    description:
      "Tiruppur ITT Program project conducted by Tiruppur ICAI. Designed a website-look in Excel for a safety deposit locker business. Maintained customer register and analyzed data using Macros, Pivot Tables & Charts, and automated PAN verification.",
    excelLink: "https://link-to-excel-project.com"
  },
  {
    title: "SSY Scheme Study",
    period: "07/2025 - ongoing",
    description:
      "Analysis of awareness and benefits of the Sukanya Samridhi Yojana Scheme. Conducted an insightful study, calculated awareness levels through Primary and Secondary data using PSPP.",
    excelLink: null
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <h3 className="text-2xl font-semibold mb-6">Projects</h3>
      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="card p-6 bg-white/80 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <h4 className="font-semibold text-lg mb-1">
              {project.title} <span className="text-sm text-slate-500">({project.period})</span>
            </h4>
            <p className="text-slate-700 mb-3">{project.description}</p>
            {project.excelLink ? (
              <motion.a
                href={project.excelLink}
                target="_blank"
                rel="noreferrer"
                className="btn border px-4 py-2 rounded hover:bg-slate-100 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Excel Project
              </motion.a>
            ) : (
              <span className="text-slate-400 italic">No project link available</span>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
