import React from 'react';
import { motion } from 'framer-motion';
import { Header, Footer } from './page.jsx';

const ProjectsPage = () => {
  const portfolioItems = [
    "Finished apps",
    "Websites",
    "Tools",
    "Slide-style project showcases"
  ];

  const consultingSummaries = [
    {
      problem: "Community organizations lacking modern, student-friendly tools.",
      solution: "Custom web platforms and workflow automation.",
      impact: "Improved access to services and stronger community engagement."
    },
    {
      problem: "Nonprofits with manual, time-consuming processes.",
      solution: "Lightweight apps and dashboards tailored to staff needs.",
      impact: "Faster operations and clearer reporting for stakeholders."
    }
  ];

  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] min-h-screen flex flex-col dot-pattern">
      <Header />
      
      <main className="flex-grow py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-12">Projects</h1>

          <div className="space-y-12 max-w-5xl mx-auto">
            <motion.section
              className="bg-[var(--bg-secondary)] rounded-2xl p-8 border border-[var(--accent-primary)]/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-[var(--accent-primary)]">Portfolio</h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Purpose; show quality work.
              </p>
              <div className="flex flex-wrap gap-3">
                {portfolioItems.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 bg-[var(--accent-primary)]/20 text-[var(--accent-primary)] rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.section>

            <motion.section
              className="bg-[var(--bg-secondary)] rounded-2xl p-8 border border-[var(--accent-primary)]/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-[var(--accent-primary)]">Dev Vault</h2>
              <p className="text-[var(--text-secondary)] mb-4">
                Dev Vault is where interns work on real projects under mentorship from Amir Eftekhar, Diva Rawal, Nikhilesh Suravarjjala, and Siddharth Alluri. It's focused on learning by doing; building skills through actual execution.
              </p>
              <p className="text-[var(--text-secondary)]">
                Admin panel needed: project uploads, intern attribution, category filters.
              </p>
            </motion.section>

            <motion.section
              className="bg-[var(--bg-secondary)] rounded-2xl p-8 border border-[var(--accent-primary)]/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-[var(--accent-primary)]">Consulting</h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Projects completed with external partners; nonprofits, schools, and youth programs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {consultingSummaries.map((summary, index) => (
                  <div
                    key={index}
                    className="bg-[var(--bg-primary)] rounded-xl p-6 border border-[var(--accent-primary)]/10"
                  >
                    <p className="text-sm text-[var(--text-secondary)] mb-2"><strong>Problem:</strong> {summary.problem}</p>
                    <p className="text-sm text-[var(--text-secondary)] mb-2"><strong>Solution:</strong> {summary.solution}</p>
                    <p className="text-sm text-[var(--text-secondary)]"><strong>Impact:</strong> {summary.impact}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
