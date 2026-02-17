import React from 'react';
import { motion } from 'framer-motion';
import { Header, Footer } from './page.jsx';
import logoPlaceholder from './images/logo2.svg';

const demoFolderUrl = 'https://drive.google.com/drive/folders/1F8N9Ix7C04YoO0TwYrMuVaAqB-d74mbH?usp=drive_link';

const gallerySections = [
  {
    id: 'mentorship-outreach',
    title: 'Mentorship and Community Outreach',
    description: 'Combined highlights from workshops and outreach events.',
    entries: [
      {
        title: 'DHS GirlsWhoCode Workshop',
        images: [
          { src: 'https://i.imgur.com/nkvYjWt.jpeg', alt: 'DHS GirlsWhoCode Workshop photo 1' },
          { src: 'https://i.imgur.com/Q2ExD16.jpeg', alt: 'DHS GirlsWhoCode Workshop photo 2' }
        ]
      },
      {
        title: 'East Dublin Local Girls in STEM Workshop',
        images: [
          { src: 'https://i.imgur.com/Ac5zk7A.jpeg', alt: 'East Dublin Local Girls in STEM Workshop photo 1' },
          { src: 'https://i.imgur.com/OTuMn4X.jpeg', alt: 'East Dublin Local Girls in STEM Workshop photo 2' },
          { src: 'https://i.imgur.com/KoAJzkz.jpeg', alt: 'East Dublin Local Girls in STEM Workshop photo 3' },
          { src: 'https://i.imgur.com/G5e1ONp.jpeg', alt: 'East Dublin Local Girls in STEM Workshop photo 4' }
        ]
      }
    ]
  },
  {
    id: 'app-website-demos',
    title: 'App & Website Demos',
    description: 'Images are coming soon.',
    entries: [
      {
        title: 'Coming Soon',
        detail:
          'Diva Rawal will collect/upload images here. Upload folder is linked below.',
        images: [
          { src: logoPlaceholder, alt: 'App and website demos placeholder', isPlaceholder: true }
        ]
      }
    ]
  },
  {
    id: 'chapter-meetings',
    title: 'Chapter Meetings',
    description: 'We will add a Zoom screenshot with chapter leads soon.',
    entries: [
      {
        title: 'Coming Soon',
        images: [
          { src: logoPlaceholder, alt: 'Chapter meetings placeholder', isPlaceholder: true }
        ]
      }
    ]
  }
];

const GalleryPage = () => {
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
          Take a look at what we&apos;ve been building through workshops, mentorship, and community outreach.
        </motion.p>

        <div className="space-y-12">
          {gallerySections.map((section, sectionIndex) => (
            <motion.section
              key={section.id}
              className="bg-[var(--bg-secondary)] rounded-2xl p-6 md:p-8 border border-[var(--accent-primary)]/10 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: sectionIndex * 0.08 }}
            >
              <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">{section.title}</h2>
              <p className="text-[var(--text-secondary)] mb-6">{section.description}</p>

              {section.id === 'app-website-demos' && (
                <p className="text-sm text-[var(--text-secondary)] mb-6">
                  Contact: <span className="font-semibold">diva.rawal@gmail.com</span> | Upload folder:{' '}
                  <a
                    href={demoFolderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)]"
                  >
                    Open Google Drive Folder
                  </a>
                </p>
              )}

              <div className="space-y-8">
                {section.entries.map((entry) => (
                  <div key={entry.title}>
                    <h3 className="text-xl font-semibold text-[var(--accent-primary)] mb-2">{entry.title}</h3>
                    {entry.detail && <p className="text-sm text-[var(--text-secondary)] mb-4">{entry.detail}</p>}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {entry.images.map((image) => (
                        <div
                          key={`${entry.title}-${image.src}`}
                          className="rounded-xl overflow-hidden border border-[var(--accent-primary)]/10 bg-[var(--bg-primary)]"
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className={`w-full h-56 ${image.isPlaceholder ? 'object-contain p-6' : 'object-cover'}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
