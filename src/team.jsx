import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header, Footer } from './page.jsx';
import { useState } from 'react';

// Import officer images
import officer1Image from './images/amir.png';
import siddharthImage from './images/siddharth.jpg';
import officer3Image from './images/nik.webp';
import elijahImage from './images/logo2.svg';

// Import officer images
import divaImage from './images/diva.jpg';


// Split data into Leadership Team
const chiefSuiteData = [
  {
    id: 1,
    name: "Nikhilesh Suravarjjala",
    role: "CEO",
    image: officer3Image,
    description: "Hey, I'm Nikhilesh Suravarjjala. Tri-Valley Tech is the space where I bring ideas to life; from websites and apps to full community projects. I've always enjoyed building things that blend creativity with real impact, and TVT lets me do that while leading a team that's learning and growing alongside me. What matters to me most is creating tools and experiences that genuinely help people; whether that's a clean user interface, a simple app that solves a real problem, or an event that brings young people together. TVT is where I get to explore design, development, and leadership all at once, and I'm proud of the direction we're heading.",
    badges: ["Leadership", "Design", "Development"]
  },
  {
    id: 2,
    name: "Amir Eftekhar",
    role: "Co-CEO",
    image: officer1Image,
    description: "I'm Amir Eftekhar, and I focus on turning ideas into well-built, scalable technology. At Tri-Valley Tech, I lead development across projects, mentor students through real technical work, and help shape systems that actually function beyond demos. I've worked extensively in web and app development, curriculum design, and teaching coding, and I enjoy helping students move from curiosity to competence. TVT is about building seriously; my role is to make sure what we ship is thoughtful, functional, and impactful.",
    badges: ["Engineering", "Mentorship", "Systems"]
  },
  {
    id: 3,
    name: "Diva Rawal",
    role: "COO",
    image: divaImage,
    description: "Hi, I'm Diva Rawal and at Tri-Valley Tech I focus on operations and executing our team's ideas. My primary role involves working closely with our chapter leads and interns to set structure, align goals, and support teams as they move from planning to real outcomes. I enjoy mentoring others and seeing individuals grow into confident leaders, which is what makes this work meaningful to me. I'm excited to continue growing Tri-Valley Tech and supporting students as we expand our impact.",
    badges: ["Operations", "Leadership", "Mentorship"]
  },
  {
    id: 4,
    name: "Elijah Guan",
    role: "CTO",
    image: elijahImage,
    description: "I'm Elijah Guan. As the CTO of Tri-Valley Tech, I'm in charge of the creation of Tri-Valley Tech's technical resources, from downloadable resources to full course modules. I believe that having access to high-quality, organized information is the foundation of learning anything, and my goal is to create those resources for everyone to learn. I work with the TVT team to make sure that our educational materials are practical, up-to-date, and designed to help students transition smoothly and thrive in the new technological world.",
    badges: ["Education", "Technical Resources", "Curriculum"]
  },
  {
    id: 5,
    name: "Siddharth Alluri",
    role: "CFO",
    image: siddharthImage,
    description: "I'm Siddharth Alluri, the CFO at Tri-Valley Tech. I manage finances, budgeting, and resource allocation to make sure our projects are sustainable and well-supported. My role is to ensure that strong ideas have the structure and funding they need to succeed. I work closely with the leadership team to align financial decisions with our mission, so students can focus on building meaningful work without unnecessary barriers.",
    badges: ["Finance", "Strategy", "Operations"]
  }
];

const OfficerCard = ({ officer, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-[var(--card-bg)] rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col border border-[var(--card-border)] backdrop-blur-sm hover:bg-[var(--hover-bg)]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        <img 
          src={officer.image} 
          alt={officer.name} 
          className="w-full h-[16rem] md:h-[20rem] lg:h-[24rem] object-cover transition duration-300 transform hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <p className="text-white text-lg font-semibold px-4 text-center">{officer.role}</p>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-[var(--accent-primary)] mb-2">{officer.name}</h3>
        {officer.badges && (
          <div className="flex flex-wrap gap-2 mb-3">
            {officer.badges.map((badge, i) => (
              <span key={i} className="px-2 py-1 text-xs rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)]">
                {badge}
              </span>
            ))}
          </div>
        )}
        <AnimatePresence>
          {isExpanded ? (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[var(--text-secondary)] text-sm flex-grow overflow-hidden"
            >
              {officer.description}
            </motion.div>
          ) : (
            <motion.div
              key="collapsed"
              initial={{ opacity: 1, height: 'auto' }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[var(--text-secondary)] text-sm line-clamp-3 flex-grow overflow-hidden"
            >
              {officer.description}
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors duration-300 self-start"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </motion.div>
  );
};

const OfficersPage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-5"></div>
      <Header />
      <div className="container mx-auto px-4 py-20 mt-20 relative z-10">
        {/* Chief Suite Section */}
        <motion.h1
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Leadership Team
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {chiefSuiteData.map((officer, index) => (
            <OfficerCard key={officer.id} officer={officer} index={index} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfficersPage;
