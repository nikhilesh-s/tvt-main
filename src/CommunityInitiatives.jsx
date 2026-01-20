import React from 'react';
import { motion } from 'framer-motion';
import { Header, Footer } from './page.jsx';

const CommunityInitiatives = () => {
  const initiatives = [
    {
      title: "Girls in STEM Initiative",
      description: "Photos from mentoring sessions with you, Sid, and Amir."
    },
    {
      title: "Jr. FLL and FLL Mentorship",
      description: "Photos from team mentoring; awards earned; competition involvement."
    },
    {
      title: "AI and Web Development Presentations",
      description: "Girls Who Code workshop photos and summaries."
    },
    {
      title: "Cyber-Ed Presentations",
      description: "Cyber education workshops and school presentations; photos included."
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-5"></div>
      <Header />
      <main className="container mx-auto px-4 py-20 mt-20 relative z-10">
        <motion.h1
          className="text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Community Initiatives
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              className="bg-[var(--bg-secondary)] rounded-2xl p-8 border border-[var(--accent-primary)]/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                {initiative.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{initiative.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityInitiatives;
