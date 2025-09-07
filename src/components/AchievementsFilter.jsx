//before-toggle
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate, FaSpotify } from "react-icons/fa";

const certificates = [
  {
    id: 1,
    title: "Microsoft Excel MOS Certified — 950/1000",
    thumb: "/certificates/logos/excel-logo.jpeg",
    full: "/certificates/excel.pdf",
    category: "Certification",
  },
  {
    id: 2,
    title: "Tally Prime with GST — MSME Training Certificate",
    thumb: "/certificates/logos/tally-logo.png",
    full: "/certificates/tally.pdf",
    category: "Certification",
  },
  {
    id: 3,
    title: "CA Foundation — 1st Attempt (Marksheet)",
    thumb: "/certificates/logos/ca1-logo.png",
    full: "/certificates/ca-foundation.pdf",
    category: "Certification",
  },
  {
    id: 4,
    title: "CA Intermediate — 1st Attempt (Marksheet)",
    thumb: "/certificates/logos/ca-inter.jpg",
    full: "/certificates/ca-inter.pdf",
    category: "Certification",
  },
  {
    id: 5,
    title: "Internship at Sakthi Financial Services — Completion Proof",
    thumb: "/certificates/logos/internship-logo.jpeg",
    full: "/certificates/internship.pdf",
    category: "Internship",
  },
  {
    id: 6,
    title: "Sports Achievement",
    isPlaceholder: true,
    category: "Sports",
    full: "#",
  },
  {
    id: 7,
    title: "Podcast on Spotify",
    category: "Others",
    spotifyLink: "https://open.spotify.com/show/6SUDAXUtfTFyQIv3KpCuAo?si=f81f13f0f0bc4c69",
  },
];

const categories = ["All", "Certification", "Internship", "Sports", "Others"];

function CertificateCard({ cert, onClick, isAll }) {
  if (cert.spotifyLink) {
  return (
    <motion.a
      href={cert.spotifyLink}
      target="_blank"
      rel="noopener noreferrer"
      key={cert.id}
      className="card overflow-hidden cursor-pointer rounded-lg bg-white text-black"
      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(34, 197, 94, 0.7)" }}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      layout
    >
      {/* Logo area (like image placeholder) */}
      <div className="w-full h-32 flex items-center justify-center bg-white">
        <FaSpotify className="text-6xl text-green-500" />
      </div>

      {/* Show "Spotify" text always */}
      <span className="block text-center font-bold text-black">Spotify</span>

      {/* Show title below */}
      <span className="block text-center text-sm px-2 py-2">{cert.title}</span>
    </motion.a>
  );
}


  if (cert.isPlaceholder) {
    return (
      <motion.button
        onClick={onClick}
        className="card flex flex-col items-center justify-center space-y-3 p-6 bg-emerald-100 rounded-lg cursor-pointer"
        whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(34, 197, 94, 0.5)" }}
        transition={{ type: "spring", stiffness: 300 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        layout
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
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      layout
    >
      <img src={cert.thumb} alt={cert.title} className="w-full h-32 object-contain p-4 bg-white" />
      <span className="block text-center text-sm px-2 py-2">{cert.title}</span>
    </motion.button>
  );
}

export default function AchievementsFilter() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedCert, setSelectedCert] = React.useState(null);

  const filteredCertificates =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((cert) => cert.category === selectedCategory);

  return (
    <section id="achievements" className="my-12 max-w-5xl mx-auto p-6">
      <h3 className="text-2xl font-semibold mb-6">Achievements</h3>

      <div className="flex flex-wrap gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`btn px-4 py-2 rounded ${
              selectedCategory === cat
                ? "bg-emerald-600 text-white border-emerald-600"
                : "border text-emerald-600 border-emerald-600 hover:bg-emerald-100"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredCertificates.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} onClick={() => setSelectedCert(cert)} isAll={selectedCategory === "All"} />
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6 max-w-xl mx-4 sm:mx-auto cursor-pointer"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {selectedCert.isPlaceholder ? (
                <motion.div className="flex flex-col items-center space-y-4">
                  <FaCertificate className="text-8xl text-emerald-600" />
                  <h4 className="text-lg font-semibold">{selectedCert.title}</h4>
                </motion.div>
              ) : selectedCert.spotifyLink ? (
                <motion.a
                  href={selectedCert.spotifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center block text-emerald-700 font-semibold underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Listen on Spotify
                </motion.a>
              ) : (
                <motion.img
                  src={selectedCert.thumb}
                  alt={selectedCert.title}
                  className="w-full h-64 sm:h-96 object-contain rounded"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(34, 197, 94, 0.5)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              )}
              <h4 className="mt-4 font-semibold text-center">{selectedCert.title}</h4>
              <div className="mt-4 flex justify-center space-x-4">
                {selectedCert.full && selectedCert.full !== "#" && (
                  <motion.a
                    href={selectedCert.full}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Full Certificate
                  </motion.a>
                )}
                <motion.button
                  onClick={() => setSelectedCert(null)}
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

