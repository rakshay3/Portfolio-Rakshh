// pre-port
//import React from 'react'
// import { motion } from 'framer-motion'


// export default function About(){
// return (
// <section id="about">
// <h3 className="text-2xl font-semibold mb-4">About</h3>
// <motion.div className="card" initial={{ x: -40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
// <p className="text-slate-700 leading-relaxed">Considering hurdles as gifts that expand my professional horizon, I'm excited to learn, enrich and grow toward meaningful goals. I'm enthusiastic, quick to learn, and eager to apply my training in Excel, TallyPrime, and accounting practices to real-world finance tasks.</p>


// <div className="mt-4 grid sm:grid-cols-2 gap-4">
// <div>
// <h4 className="font-semibold">Education</h4>
// <ul className="text-sm text-slate-600 mt-2">
// <li>CA Finalist • Chartered Accountancy (Intermediate passed)</li>
// <li>B.Com — PSGR Krishnammal College for Women (2023–26)</li>
// </ul>
// </div>
// <div>
// <h4 className="font-semibold">Certifications & Training</h4>
// <ul className="text-sm text-slate-600 mt-2">
// <li>Microsoft Excel (Office 2019) — MOS Certified (950/1000)</li>
// <li>TallyPrime with GST — MSME & PSGR training</li>
// <li>ITT program — Tirupur ICAI (June 2025)</li>
// </ul>
// </div>
// </div>
// </motion.div>
// </section>
// )
// }

//before toggle


import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about">
      <h3 className="text-2xl font-semibold mb-4">About</h3>
      <motion.div
        className="card"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-slate-700 leading-relaxed">
          Considering hurdles as gifts that expand my professional horizon,
          I'm excited to learn, enrich and grow toward meaningful goals. I'm enthusiastic,
          quick to learn, and eager to apply my training in Excel, TallyPrime,
          and accounting practices to real-world finance tasks.
        </p>

        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold">Education</h4>
            <ul className="text-sm text-slate-600 mt-2">
              <li>CA Finalist • Chartered Accountancy (Intermediate passed)</li>
              <li>B.Com — PSGR Krishnammal College for Women (2023–26)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Certifications & Training</h4>
            <ul className="text-sm text-slate-600 mt-2">
              <li>Microsoft Excel (Office 2019) — MOS Certified (950/1000)</li>
              <li>TallyPrime with GST — MSME & PSGR training</li>
              <li>ITT program — Tirupur ICAI (June 2025)</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


