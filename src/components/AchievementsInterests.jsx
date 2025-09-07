//pre-port
// import React from "react";
// import { FaSpotify } from "react-icons/fa";
// export default function AchievementsInterests() {
//   return (
//     <section id="achievements-interests" className="space-y-8">
//       <h3 className="text-2xl font-semibold mb-6">Key Achievements & Interests</h3>

//       <div className="card p-6 bg-white/80 rounded-2xl shadow-md">
//         <h4 className="font-semibold text-lg mb-3">Athletic Achievement</h4>
//         <p className="text-slate-700">
//           Secured 1st place in 800mts running at the Coimbatore District level
//           and participated at the State level.
//         </p>
//       </div>

//       <div className="card p-6 bg-white/80 rounded-2xl shadow-md">
//         <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">Podcast on Spotify
//             <a
//             href="https://open.spotify.com/show/6SUDAXUtfTFyQIv3KpCuAo?si=f81f13f0f0bc4c69"  // replace with your podcast link
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Spotify Podcast"
//             className="text-green-600 hover:text-green-800 transition transform hover:scale-110"
//           >
//             <FaSpotify className="text-2xl" />
//           </a>

//         </h4>
//         <p className="text-slate-700">
//           Maintained a podcast on Spotify sharing insights on life,
//           demonstrating creativity and communication skills.
//         </p>
//       </div>

//       <div className="card p-6 bg-white/80 rounded-2xl shadow-md">
//         <h4 className="font-semibold text-lg mb-3">Interests</h4>
//         <ul className="list-disc list-inside text-slate-700 space-y-1">
//           <li>Digital Art - Logo and poster design, contributing to college magazine</li>
//           <li>Podcasting - Maintaining a podcast sharing insights and happiness</li>
//           <li>Sports - Active participation in District-level Hockey and Athletics</li>
//           <li>Public Speaking - Conducted seminars and guest lectures improving public speaking skills</li>
//         </ul>
//       </div>
//     </section>
//   );
// }

//before-toggle:
import React from "react";
import { motion } from "framer-motion";
import { FaSpotify } from "react-icons/fa";

export default function AchievementsInterests() {
  return (
    <section id="achievements-interests" className="space-y-8">
      <h3 className="text-2xl font-semibold mb-6">Key Achievements & Interests</h3>

      <motion.div
        className="card p-6 bg-white/80 rounded-2xl shadow-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <h4 className="font-semibold text-lg mb-3">Athletic Achievement</h4>
        <p className="text-slate-700">
          Secured 1st place in 800mts running at the Coimbatore District level and
          participated at the State level.
        </p>
      </motion.div>

      <motion.div
        className="card p-6 bg-white/80 rounded-2xl shadow-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
          Podcast on Spotify
          <a
            href="https://open.spotify.com/show/6SUDAXUtfTFyQIv3KpCuAo?si=f81f13f0f0bc4c69"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify Podcast"
            className="text-green-600 hover:text-green-800 transition transform hover:scale-110"
          >
            <FaSpotify className="text-2xl" />
          </a>
        </h4>
        <p className="text-slate-700">
          Maintained a podcast on Spotify sharing insights on life, demonstrating creativity and
          communication skills.
        </p>
      </motion.div>

      <motion.div
        className="card p-6 bg-white/80 rounded-2xl shadow-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h4 className="font-semibold text-lg mb-3">Interests</h4>
        <ul className="list-disc list-inside text-slate-700 space-y-1">
          <li>Digital Art - Logo and poster design, contributing to college magazine</li>
          <li>Podcasting - Maintaining a podcast sharing insights and happiness</li>
          <li>Sports - Active participation in District-level Hockey and Athletics</li>
          <li>Public Speaking - Conducted seminars and guest lectures improving public speaking skills</li>
        </ul>
      </motion.div>
    </section>
  );
}


