import React from 'react';
import { motion } from 'framer-motion';
import { Header, Footer } from './page.jsx';

const resources = [
  {
    id: "digital-footprint",
    title: "Digital Footprint Guide",
    description: "How to build a positive online presence and manage what stays public."
  },
  {
    id: "email-safety",
    title: "Email Safety Tips",
    description: "Simple habits that keep your inbox and accounts secure."
  },
  {
    id: "online-privacy",
    title: "Online Privacy Guide",
    description: "Protect personal information with smart, practical settings."
  },
  {
    id: "password-security",
    title: "Password Security Guide",
    description: "Create strong passwords and store them safely."
  },
  {
    id: "phishing-prevention",
    title: "Phishing Prevention Guide",
    description: "Spot and avoid common scams targeting students."
  }
];

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-5"></div>
      <Header />
      <main className="container mx-auto px-4 py-20 mt-20 relative z-10">
        <motion.h1
          className="text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Digital Resources
        </motion.h1>
        <motion.p
          className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Quick guides to help students stay safe, smart, and confident online.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <motion.section
              key={resource.id}
              id={resource.id}
              className="bg-[var(--bg-secondary)] rounded-2xl p-6 border border-[var(--accent-primary)]/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{resource.title}</h2>
              <p className="text-[var(--text-secondary)] mb-4">{resource.description}</p>
              <button className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors">
                Download coming soon ->
              </button>
            </motion.section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourcesPage;
