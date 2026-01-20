import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header, Footer } from './page.jsx';

const Chapters = () => {
  const chapters = [
    { id: 'dublin', name: 'Dublin' },
    { id: 'pleasanton', name: 'Pleasanton' },
    { id: 'san-ramon', name: 'San Ramon' },
    { id: 'livermore', name: 'Livermore' }
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
          Chapters
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              className="bg-[var(--bg-secondary)] rounded-2xl p-8 border border-[var(--accent-primary)]/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                {chapter.name}
              </h3>
              <p className="text-[var(--text-secondary)] mb-6">
                Each chapter is a local hub for collaboration, leadership, and building.
              </p>
              <Link
                to={`/chapters/${chapter.id}`}
                className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
              >
                View Chapter Page
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chapters;
