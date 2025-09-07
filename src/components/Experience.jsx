// pre-port

// import React from 'react'
// import { motion } from 'framer-motion'


// const experiences = [
// {
// role: 'Account Intern',
// org: 'Sakthi Financial Services Pvt. Ltd',
// period: '04/2025 - 05/2025',
// bullets: [
// 'Prepared Bank Reconciliation Statements (BRS)',
// 'Handled Debenture-Holders TDS Form filings',
// 'Book-keeping and verification tasks'
// ]
// }
// ]


// export default function Experience(){
// return (
// <section id="experience">
// <h3 className="text-2xl font-semibold mb-4">Experience</h3>
// <div className="space-y-4">
// {experiences.map((e, i) => (
// <motion.div key={i} className="card" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: i * 0.2 }}>
// <div className="flex justify-between items-start">
// <div>
// <h4 className="font-semibold">{e.role} — {e.org}</h4>
// <p className="text-sm text-slate-600">{e.period}</p>
// </div>
// </div>
// <ul className="mt-3 text-sm text-slate-700 list-disc list-inside">
// {e.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
// </ul>
// </motion.div>
// ))}
// </div>
// </section>
// )
// }

//before toggle
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Account Intern',
    org: 'Sakthi Financial Services Pvt. Ltd',
    period: '04/2025 - 05/2025',
    bullets: [
      'Prepared Bank Reconciliation Statements (BRS)',
      'Handled Debenture-Holders TDS Form filings',
      'Book-keeping and verification tasks'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience">
      <h3 className="text-2xl font-semibold mb-4">Experience</h3>
      <div className="space-y-4">
        {experiences.map((e, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">{e.role} — {e.org}</h4>
                <p className="text-sm text-slate-600">{e.period}</p>
              </div>
            </div>
            <ul className="mt-3 text-sm text-slate-700 list-disc list-inside">
              {e.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

