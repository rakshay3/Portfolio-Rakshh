//--before left right update
// import React from "react";
// import { motion } from "framer-motion";
// import profileImg from "../assets/profile.jpg";

// export default function Hero() {
//   return (
//     <section id="hero" className="grid md:grid-cols-2 gap-6 items-center">
//       {/* Left Side (Text Content) */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="card"
//       >
//         <h1 className="text-3xl font-bold mb-2">Hello — I’m Rakshitha</h1>
//         <p className="text-gray-600 mb-4">
//           Chartered Accounting Finalist • B.Com (2023–26) • Advanced Excel • TallyPrime with GST
//         </p>
//         <p className="text-gray-700 mb-4">
//           A young woman into Accounting, Auditing, Taxation and Management Studies — enthusiastic and a quick learner, eager to grow and contribute in finance and auditing roles.
//         </p>
//         <div className="flex gap-3">
//           <a href="/RakshithaDResume (1).pdf" className="btn bg-emerald-600 text-white">
//             Download Resume
//           </a>
//           <a href="https://linkedin.com/in/rakshitha-d-934124325" target="_blank" rel="noreferrer" className="btn border">
//             LinkedIn
//           </a>
//           <a href="#" className="btn border">
//             Excel Project
//           </a>
//         </div>
//       </motion.div>

//       {/* Right Side (Profile Image) */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="card flex flex-col items-center text-center"
//       >
//         <img src={profileImg} alt="Profile" className="w-32 h-32 rounded-full mb-3" />
//         <h2 className="text-lg font-semibold">Edayarpalayam, Coimbatore</h2>
//         <p className="text-gray-600">63855 92115 • kala.raksha1527@gmail.com</p>
//       </motion.div>
//     </section>
//   );
// }


//after
// import React from "react";
// import { motion } from "framer-motion";
// import profileImg from "../assets/profile.png";

// export default function Hero() {
//   return (
//     <section id="hero" className="grid md:grid-cols-2 gap-6 items-center">
//       {/* Left Side (Text Content) */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="card"
//       >
//         <h1 className="text-3xl font-bold mb-2">Hello — I’m Rakshitha</h1>
//         <p className="text-gray-600 mb-4">
//           Chartered Accounting Finalist • B.Com (2023–26) • Advanced Excel •
//           TallyPrime with GST
//         </p>
//         <p className="text-gray-700 mb-4">
//           A young woman into Accounting, Auditing, Taxation and Management
//           Studies — enthusiastic and a quick learner, eager to grow and
//           contribute in finance and auditing roles.
//         </p>
//         <div className="flex gap-3">
//           <a
//             href="/RakshithaDResume (1).pdf"
//             className="btn bg-emerald-600 text-white"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Download Resume
//           </a>
//           <a
//             href="https://linkedin.com/in/rakshitha-d-934124325"
//             target="_blank"
//             rel="noreferrer"
//             className="btn border"
//           >
//             LinkedIn
//           </a>
//         </div>
//       </motion.div>

//       {/* Right Side (Profile Image Only) */}
// <motion.div
//         initial={{ opacity: 0, scale: 0.96 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="flex items-center justify-center h-full"
//         style={{ minHeight: '100%' }}
//       >
//         <img
//           src={profileImg}
//           alt="Rakshitha standing"
//           className="object-contain max-h-[420px] min-h-[320px] lg:max-h-[500px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
//           style={{ background: "transparent" }}
//         />
//       </motion.div>

//     </section>
//   );
// }

//pre-port

// import React from "react";
// import { motion } from "framer-motion";
// import profileImg from "../assets/profile.png";
// import { FaLinkedin } from "react-icons/fa";
// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="grid md:grid-cols-2 gap-6 items-center sm:grid-cols-1 sm:gap-12"
//     >
//       {/* Left Side (Text Content) */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//         className="card"
//       >
//         <h1 className="text-3xl font-bold mb-2">Hello — I’m Rakshitha</h1>
//         <p className="text-gray-600 mb-4">
//            • Chartered Accounting Finalist • B.Com (2023–26) <br></br>  • Advanced Excel •
//           TallyPrime with GST
//         </p>
//         <p className="text-gray-700 mb-4">
//           A young woman into Accounting, Auditing, Taxation and Management Studies
//           — enthusiastic and a quick learner, eager to grow and contribute in
//           finance and auditing roles.
//         </p>
//         <div className="flex gap-3 flex-wrap">
//           <a
//             href="/RakshithaDResume (1).pdf"
//             className="btn bg-emerald-500 text-white flex items-center gap-2 transition-transform transform hover:scale-110 hover:bg-emerald-600"
//             target="_blank"
//             rel="noreferrer"
//           >
//             Download Resume
//           </a>
//           <a
//           href="https://linkedin.com/in/rakshitha-d-934124325"
//           target="_blank"
//           rel="noreferrer"
//           className="btn border flex items-center gap-2 transition-transform transform hover:text-[#0A66C2] hover:scale-110"
//             >
//             <FaLinkedin className="text-lg" />
//           LinkedIn
//         </a>

//         </div>
//       </motion.div>

//       {/* Right Side (Full-body Photo with all touches) */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.96 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="flex flex-col items-center justify-end relative min-h-[320px] md:min-h-[420px]"
//       >
//         {/* Subtle colored background glow */}
//         <span className="absolute bottom-14 left-1/2 -translate-x-1/2 w-72 h-44 bg-emerald-100/40 rounded-full blur-2xl -z-10"></span>

//         <img
//           src={profileImg}
//           alt="Rakshitha standing"
//           className="object-contain max-h-[480px] transition-transform duration-500 hover:scale-105 drop-shadow-2xl rounded-lg"
//           style={{ background: "transparent" }}
//         />

//         {/* “Floor” shadow under image */}
//         <span className="block w-36 h-5 bg-black/10 rounded-full mt-[-18px] blur-sm"></span>
//       </motion.div>
//     </section>
//   );
// }

//before toggle

import React, { useState } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";
import { FaLinkedin } from "react-icons/fa";
function ResumeDownloadButton() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2500); // Hide message after 2.5 seconds
  };

  return (
    <div className="relative inline-block">
      <motion.a
        href="/RakshithaDResume (1).pdf"
        className="btn bg-emerald-500 text-white flex items-center gap-2 transition-transform transform hover:bg-emerald-600"
        target="_blank"
        rel="noreferrer"
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        download
      >
        Download Resume
      </motion.a>

{/* prev :
{showMessage && (
  <div className="absolute left-0 top-full mt-2 text-black text-xs">
    Resume download started
  </div>
)} 

 {showMessage && (
  <div className="absolute left-0 top-full mt-2 bg-white text-black text-xs rounded-lg px-4 py-2 shadow whitespace-nowrap">
    Resume download started
  </div>
)}
*/}

    {showMessage && (
  <span className="block mt-2 text-black text-xs">
    Resume download started
  </span>
)}



    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid md:grid-cols-2 gap-6 items-center sm:grid-cols-1 sm:gap-12"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
        className="card"
      >
        <h1 className="text-3xl font-bold mb-2">Hello — I’m Rakshitha</h1>
        <p className="text-gray-600 mb-4">
          • Chartered Accounting Finalist • B.Com (2023–26) <br /> • Advanced Excel •
          TallyPrime with GST
        </p>
        <p className="text-gray-700 mb-4">
          A young woman into Accounting, Auditing, Taxation and Management Studies —
          enthusiastic and a quick learner, eager to grow and contribute in finance and auditing roles.
        </p>
        <div className="flex gap-3 flex-wrap">
          <ResumeDownloadButton />
          <motion.a
            href="https://linkedin.com/in/rakshitha-d-934124325"
            target="_blank"
            rel="noreferrer"
            className="btn border flex items-center gap-2 transition-transform transform hover:text-[#0A66C2] "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col items-center justify-end relative min-h-[320px] md:min-h-[420px]"
      >
        <span className="absolute bottom-14 left-1/2 -translate-x-1/2 w-72 h-44 bg-emerald-100/40 rounded-full blur-2xl -z-10"></span>

        <video
          src="/fun-profile.mp4"  // put your video file inside "public" folder
          autoPlay
          
          muted
          playsInline

          className="object-contain max-h-[480px] transition-transform duration-500 hover:scale-105 drop-shadow-2xl rounded-lg"
          style={{ background: "transparent" }}
        />

        <span className="block w-36 h-5 bg-black/10 rounded-full mt-[-18px] blur-sm"></span>
      </motion.div>
    </section>
  );
}

