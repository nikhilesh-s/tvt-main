import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header, Footer } from './page.jsx';

const ImpactPage = () => {
  const highlights = [
    {
      title: "Interns",
      description: "40+ interns across Dublin, Pleasanton, and Fremont building real projects through local chapters."
    },
    {
      title: "Consulting",
      description: "15+ projects completed with nonprofits, schools, and youth organizations to deliver practical technology solutions."
    },
    {
      title: "Events",
      description: "Workshops, speaker sessions, and community impact experiences designed to keep students building and collaborating year-round."
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
          Our Mission
        </motion.h1>
        <motion.p
          className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tri-Valley Tech exists for one purpose: empowering young innovators to turn ideas into real impact. Every project we launch and every student we mentor brings us closer to a future shaped by students who are ready to take action today.
        </motion.p>

        <motion.h2
          className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Impact at a Glance
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-[var(--bg-secondary)] rounded-2xl p-8 border border-[var(--accent-primary)]/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                {item.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/chapters"
            className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors mr-6"
          >
            Explore Chapters
          </Link>
          <Link
            to="/community-initiatives"
            className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
          >
            Community Initiatives
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ImpactPage;
