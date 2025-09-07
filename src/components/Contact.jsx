//pre-port
// import React from 'react'
// import { motion } from 'framer-motion'


// export default function Contact(){
// return (
// <section id="contact">
// <h3 className="text-2xl font-semibold mb-4">Contact</h3>
// <motion.div className="card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
// <p className="text-sm">Email: <a href="mailto:kala.raksha1527@gmail.com" className="text-sky-600 hover:underline">kala.raksha1527@gmail.com</a></p>
// <p className="text-sm mt-1">Phone: 63855 92115</p>
// <p className="text-sm mt-1">Address: Edayarpalayam, Coimbatore</p>


// <form className="mt-4 grid sm:grid-cols-2 gap-3">
// <input className="p-3 border rounded-md" placeholder="Your name" />
// <input className="p-3 border rounded-md" placeholder="Your email" />
// <textarea className="p-3 border rounded-md sm:col-span-2" placeholder="Message" rows={4}></textarea>
// <button className="btn bg-emerald-600 text-white sm:col-span-2">Send message</button>
// </form>


// <p className="mt-4 text-xs text-slate-500">LinkedIn: <a href="https://www.linkedin.com/in/rakshitha-d-934124325" target="_blank" rel="noreferrer" className="text-sky-600">linkedin.com/in/rakshitha-d-934124325</a></p>
// </motion.div>
// </section>
// )
// }

//before-toggle
// import React from 'react';
// import { motion } from 'framer-motion';

// export default function Contact() {
//   return (
//     <section id="contact">
//       <h3 className="text-2xl font-semibold mb-4">Contact</h3>
//       <motion.div
//         className="card"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.4 }}
//         transition={{ duration: 0.6 }}
//       >
//         <p className="text-sm">
//           Email: <a href="mailto:kala.raksha1527@gmail.com" className="text-sky-600 hover:underline">kala.raksha1527@gmail.com</a>
//         </p>
//         <p className="text-sm mt-1">Phone: 63855 92115</p>
//         <p className="text-sm mt-1">Address: Edayarpalayam, Coimbatore</p>

//         <form className="mt-4 grid sm:grid-cols-2 gap-3">
//           <input className="p-3 border rounded-md" placeholder="Your name" />
//           <input className="p-3 border rounded-md" placeholder="Your email" />
//           <textarea className="p-3 border rounded-md sm:col-span-2" placeholder="Message" rows={4}></textarea>
//           <motion.button
//             className="btn bg-emerald-600 text-white sm:col-span-2"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//           >
//             Send message
//           </motion.button>
//         </form>

//         <p className="mt-4 text-xs text-slate-500">
//           LinkedIn: <a href="https://www.linkedin.com/in/rakshitha-d-934124325" target="_blank" rel="noreferrer" className="text-sky-600">linkedin.com/in/rakshitha-d-934124325</a>
//         </p>
//       </motion.div>
//     </section>
//   );
// }


import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_ak7721',      // Your Service ID
      'template_b2j4aoq',    // Your Template ID (get this from EmailJS dashboard)
      form.current,
      'HGHrSw2n6lVEDwTSy'    // Your Public Key
    ).then(
      () => {
        setStatusMessage('Message sent successfully!');
        e.target.reset();
      },
      () => {
        setStatusMessage('Failed to send. Please try again later.');
      }
    );
  };

  return (
    <section id="contact">
      <h3 className="text-2xl font-semibold mb-4">Contact</h3>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm">
          Email: <a href="mailto:kala.raksha1527@gmail.com" className="text-sky-600 hover:underline">kala.raksha1527@gmail.com</a>
        </p>
        <p className="text-sm mt-1">Phone: 63855 92115</p>
        <p className="text-sm mt-1">Address: Edayarpalayam, Coimbatore</p>

        {/* Add name attributes for EmailJS variables */}
<form ref={form} onSubmit={sendEmail} className="mt-4 grid sm:grid-cols-2 gap-3">
  <input
    className="p-3 border rounded-md"
    placeholder="Your name"
    name="name"
    required
  />
  <input
    className="p-3 border rounded-md"
    placeholder="Your email"
    name="email"
    type="email"
    required
  />
  <input
    className="p-3 border rounded-md sm:col-span-2"
    placeholder="Subject"
    name="title"
    required
  />
  <textarea
    className="p-3 border rounded-md sm:col-span-2"
    placeholder="Message"
    name="message"
    rows={4}
    required
  ></textarea>
  <motion.button
    className="btn bg-emerald-600 text-white sm:col-span-2"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    type="submit"
  >
    Send message
  </motion.button>
</form>


        {/* Show status message after submit */}
        {statusMessage && (
          <p className="mt-4 text-sm font-medium text-emerald-700">{statusMessage}</p>
        )}

        <p className="mt-4 text-xs text-slate-500">
          LinkedIn: <a href="https://www.linkedin.com/in/rakshitha-d-934124325" target="_blank" rel="noreferrer" className="text-sky-600">linkedin</a>
        </p>
      </motion.div>
    </section>
  );
}

