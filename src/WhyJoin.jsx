import React from 'react';
import { motion } from 'framer-motion';
import { Header, Footer } from './page.jsx';

const WhyJoin = () => {
  const sections = [
    {
      title: "Real-World Projects",
      description: "Projects that address real community needs; engineering solutions, software platforms, cyber tools, and outreach initiatives with tangible outcomes."
    },
    {
      title: "Skill Development",
      description: "Technical skills, leadership, project management, communication, and design thinking; skills that transfer directly into college and careers."
    },
    {
      title: "Mentorship and Peer Learning",
      description: "Guidance from experienced leads and collaboration with students who genuinely want to build and improve."
    },
    {
      title: "Volunteer Hours",
      description: "Earn volunteer hours through real contribution and collaboration; not filler tasks."
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-5"></div>
      <Header />
      <main className="container mx-auto px-4 py-20 mt-20 relative z-10">
        <motion.h1
          className="text-5xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Join Tri-Valley Tech
        </motion.h1>
        <motion.p
          className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tri-Valley Tech exists to give students the chance to do real work, not just learn about it. Everything we build is meant to be practical, meaningful, and student-driven.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              className="bg-[var(--bg-secondary)] rounded-2xl p-8 border border-[var(--accent-primary)]/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                {section.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{section.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center text-xl text-[var(--text-secondary)] max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          If you've ever wanted to create something meaningful, TVT gives you the tools, the team, and the momentum to make it happen.
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default WhyJoin;
