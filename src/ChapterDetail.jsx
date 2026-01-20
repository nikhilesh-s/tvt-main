import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Header, Footer } from './page.jsx';

const chapterData = {
  dublin: {
    name: 'Dublin',
    city: 'Dublin, CA'
  },
  pleasanton: {
    name: 'Pleasanton',
    city: 'Pleasanton, CA'
  },
  'san-ramon': {
    name: 'San Ramon',
    city: 'San Ramon, CA'
  },
  livermore: {
    name: 'Livermore',
    city: 'Livermore, CA'
  }
};

const ChapterDetail = () => {
  const { chapterId } = useParams();
  const chapter = chapterData[chapterId];

  if (!chapter) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)]">
        <Header />
        <main className="container mx-auto px-4 py-20 mt-20 text-center">
          <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">Chapter not found</h1>
          <Link to="/chapters" className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)]">
            Back to Chapters
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

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
          {chapter.name} Chapter
        </motion.h1>
        <motion.p
          className="text-[var(--text-secondary)] text-lg text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {chapter.city}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Chapter Leads",
              description: "Chapter leads will be announced soon."
            },
            {
              title: "Photos",
              description: "Photo gallery for chapter meetings and events will be added here."
            },
            {
              title: "Local Initiatives and Events",
              description: "Local initiatives and upcoming events will be highlighted here."
            }
          ].map((section, index) => (
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

        <div className="text-center mt-12">
          <Link to="/chapters" className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)]">
            Back to Chapters
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ChapterDetail;
