import React from 'react';
import { motion } from 'framer-motion';
import { Header, Footer } from './page.jsx';

const GalleryPage = () => {
  const cards = [
    {
      title: "Workshops",
      image: "https://via.placeholder.com/600x400?text=Workshop+Highlights"
    },
    {
      title: "App and Website Demos",
      image: "https://via.placeholder.com/600x400?text=App+%26+Website+Demos"
    },
    {
      title: "Mentorship Sessions",
      image: "https://via.placeholder.com/600x400?text=Mentorship+Sessions"
    },
    {
      title: "Community Outreach",
      image: "https://via.placeholder.com/600x400?text=Community+Outreach"
    },
    {
      title: "Chapter Meetings",
      image: "https://via.placeholder.com/600x400?text=Chapter+Meetings"
    },
    {
      title: "Behind-the-Scenes Moments",
      image: "https://via.placeholder.com/600x400?text=Behind-the-Scenes"
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
          Gallery
        </motion.h1>
        <motion.p
          className="text-[var(--text-secondary)] text-lg max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Take a look at what we've been building. From workshops to app launches to behind-the-scenes moments, here's a glimpse into life at Tri-Valley Tech.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="bg-[var(--bg-secondary)] rounded-2xl overflow-hidden border border-[var(--accent-primary)]/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{card.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">Placeholder photo. Final images will be tagged by event or chapter.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
