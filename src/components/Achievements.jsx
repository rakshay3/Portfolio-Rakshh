//pre-port

// // src/components/Achievements.jsx
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaCertificate } from 'react-icons/fa';

// const certificates = [
//   {
//     title: "Microsoft Excel MOS Certified — 950/1000",
//     thumb: "/certificates/logos/excel-logo.jpeg",
//     full: "/certificates/excel.pdf"
//   },
//   {
//     title: "Tally Prime with GST — MSME Training Certificate",
//     thumb: "/certificates/logos/tally-logo.png",
//     full: "/certificates/tally.pdf"
//   },

//   {
//     title: "CA Foundation — 1st Attempt (Marksheet)",
//     thumb: "/certificates/logos/ca1-logo.png",
//     full: "/certificates/ca-foundation.pdf"
//   },
//   {
//     title: "CA Intermediate — 1st Attempt (Marksheet)",
//     thumb: "/certificates/logos/ca-inter.jpg",
//     full: "/certificates/ca-inter.pdf"
//   },
//   {
//     title: "Internship at Sakthi Financial Services — Completion Proof",
//     thumb: "/certificates/logos/internship-logo.jpeg",
//     full: "/certificates/internship.pdf"
//   },
//   {
//     title: "ICITSS Certificate",
//     isPlaceholder: true,
//     full: "/certificates/itt.pdf"
//   }
// ];

// function CertificateCard({ cert, onClick }) {
//   if (cert.isPlaceholder) {
//     return (
//       <motion.button
//         onClick={onClick}
//         className="card flex flex-col items-center justify-center space-y-3 p-6 bg-emerald-100 rounded-lg cursor-pointer"
//         whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(34, 197, 94, 0.5)" }}
//         transition={{ type: "spring", stiffness: 300 }}
//       >
//         <FaCertificate className="text-5xl text-emerald-600" />
//         <span className="text-center font-semibold text-slate-800">{cert.title}</span>
//       </motion.button>
//     );
//   }

//   return (
//     <motion.button
//       onClick={onClick}
//       className="card overflow-hidden cursor-pointer rounded-lg"
//       whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(34, 197, 94, 0.5)" }}
//       transition={{ type: "spring", stiffness: 300 }}
//     >
//       <img
//         src={cert.thumb}
//         alt={cert.title}
//         className="w-full h-32 object-contain p-4 bg-white"
//       />
//       <span className="block text-center text-sm px-2 py-2">{cert.title}</span>
//     </motion.button>
//   );
// }


// export default function Achievements() {
//   const [selected, setSelected] = useState(null);

//   return (
//     <section id="achievements" className="my-12">
//       <h3 className="text-2xl font-semibold mb-6">Achievements</h3>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {certificates.map((cert, i) => (
//           <CertificateCard key={i} cert={cert} onClick={() => setSelected(cert)} />
//         ))}
//       </div>

//       <AnimatePresence>
//         {selected && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelected(null)}
//           >
//             <motion.div
//               className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6 max-w-xl mx-4 sm:mx-auto cursor-pointer"
//               initial={{ scale: 0.9 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.9 }}
//               onClick={e => e.stopPropagation()}
//               whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               {selected.isPlaceholder ? (
//                 <motion.div className="flex flex-col items-center space-y-4">
//                   <FaCertificate className="text-8xl text-emerald-600" />
//                   <h4 className="text-lg font-semibold">{selected.title}</h4>
//                 </motion.div>
//               ) : (
//                 <motion.img
//                   src={selected.thumb}
//                   alt={selected.title}
//                   className="w-full h-64 sm:h-96 object-contain rounded"
//                   whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(34, 197, 94, 0.5)" }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 />
//               )}
//               <h4 className="mt-4 font-semibold text-center">{selected.title}</h4>
//               <div className="mt-4 flex justify-center space-x-4">
//                 <motion.a
//                   href={selected.full}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="btn bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   View Full Certificate
//                 </motion.a>
//                 <motion.button
//                   onClick={() => setSelected(null)}
//                   className="btn border px-6 py-2 rounded hover:bg-slate-200 transition"
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Close
//                 </motion.button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }


//before-toggle:
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const certificates = [
  {
    title: "Microsoft Excel MOS Certified — 950/1000",
    thumb: "/certificates/logos/excel-logo.jpeg",
    full: "/certificates/excel.pdf"
  },
  {
    title: "Tally Prime with GST — MSME Training Certificate",
    thumb: "/certificates/logos/tally-logo.png",
    full: "/certificates/tally.pdf"
  },
  {
    title: "CA Foundation — 1st Attempt (Marksheet)",
    thumb: "/certificates/logos/ca1-logo.png",
    full: "/certificates/ca-foundation.pdf"
  },
  {
    title: "CA Intermediate — 1st Attempt (Marksheet)",
    thumb: "/certificates/logos/ca-inter.jpg",
    full: "/certificates/ca-inter.pdf"
  },
  {
    title: "Internship at Sakthi Financial Services — Completion Proof",
    thumb: "/certificates/logos/internship-logo.jpeg",
    full: "/certificates/internship.pdf"
  },
  {
    title: "ICITSS Certificate",
    isPlaceholder: true,
    full: "/certificates/itt.pdf"
  }
];

// Simple skeleton loader component
function SkeletonLoader() {
  return (
    <div className="animate-pulse p-6 bg-gray-200 rounded-lg">
      <div className="h-32 bg-gray-300 rounded mb-4"></div>
      <div className="h-5 bg-gray-300 rounded w-3/4 mx-auto"></div>
    </div>
  );
}

function CertificateCard({ cert, onClick, isLoading }) {
  if (isLoading) return <SkeletonLoader />;

  if (cert.isPlaceholder) {
    return (
      <motion.button
        onClick={onClick}
        className="card flex flex-col items-center justify-center space-y-3 p-6 bg-emerald-100 rounded-lg cursor-pointer"
        whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(34, 197, 94, 0.5)" }}
        transition={{ type: "spring", stiffness: 300 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <FaCertificate className="text-5xl text-emerald-600" />
        <span className="text-center font-semibold text-slate-800">{cert.title}</span>
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className="card overflow-hidden cursor-pointer rounded-lg"
      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(34, 197, 94, 0.5)" }}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <img
        src={cert.thumb}
        alt={cert.title}
        className="w-full h-32 object-contain p-4 bg-white"
      />
      <span className="block text-center text-sm px-2 py-2">{cert.title}</span>
    </motion.button>
  );
}

export default function Achievements() {
  const [selected, setSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay for certificates
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="achievements" className="my-12">
      <h3 className="text-2xl font-semibold mb-6">Achievements</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading
          ? Array(6).fill(0).map((_, idx) => <SkeletonLoader key={idx} />)
          : certificates.map((cert, i) => (
              <CertificateCard
                key={i}
                cert={cert}
                onClick={() => setSelected(cert)}
                isLoading={isLoading}
              />
            ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6 max-w-xl mx-4 sm:mx-auto cursor-pointer"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={e => e.stopPropagation()}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {selected.isPlaceholder ? (
                <motion.div className="flex flex-col items-center space-y-4">
                  <FaCertificate className="text-8xl text-emerald-600" />
                  <h4 className="text-lg font-semibold">{selected.title}</h4>
                </motion.div>
              ) : (
                <motion.img
                  src={selected.thumb}
                  alt={selected.title}
                  className="w-full h-64 sm:h-96 object-contain rounded"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(34, 197, 94, 0.5)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              )}
              <h4 className="mt-4 font-semibold text-center">{selected.title}</h4>
              <div className="mt-4 flex justify-center space-x-4">
                <motion.a
                  href={selected.full}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Full Certificate
                </motion.a>
                <motion.button
                  onClick={() => setSelected(null)}
                  className="btn border px-6 py-2 rounded hover:bg-slate-200 transition"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
