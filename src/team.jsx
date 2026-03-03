import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header, Footer } from './page.jsx';
import { useState } from 'react';

const nikImage = 'https://i.imgur.com/BjjzPXF.jpeg';
const divaImage = 'https://i.imgur.com/9wrRYYT.jpeg';
const elijahImage = 'https://i.imgur.com/sNX90Dy.jpeg';


// Split data into Leadership Team
const chiefSuiteData = [
  {
    id: 1,
    name: "Nikhilesh Suravarjjala",
    role: "President & CEO",
    image: nikImage,
    description: "Hey, I'm Nikhilesh Suravarjjala. Tri-Valley Tech is the space where I bring ideas to life; from websites and apps to full community projects. I've always enjoyed building things that blend creativity with real impact, and TVT lets me do that while leading a team that's learning and growing alongside me. What matters to me most is creating tools and experiences that genuinely help people; whether that's a clean user interface, a simple app that solves a real problem, or an event that brings young people together. TVT is where I get to explore design, development, and leadership all at once, and I'm proud of the direction we're heading.",
    badges: ["Leadership", "Design", "Development"]
  },
  {
    id: 2,
    name: "Diva Rawal",
    role: "Treasurer & CFO",
    image: divaImage,
    imagePosition: "center 62%",
    description: "Hi, I'm Diva Rawal and at Tri-Valley Tech I lead financial planning and stewardship as Treasurer & CFO. I focus on budgeting, long-term sustainability, and making sure our programs have the resources they need to deliver real outcomes. I work closely with our chapter leads and interns to align financial decisions with mission impact, and I care deeply about helping students grow through structured, well-supported opportunities.",
    badges: ["Finance", "Strategy", "Leadership"]
  },
  {
    id: 3,
    name: "Elijah Guan",
    role: "Secretary & CLO",
    image: elijahImage,
    imagePosition: "center 38%",
    description: "I'm Elijah Guan. As Secretary & CLO at Tri-Valley Tech, I oversee organizational records and legal operations while supporting the integrity of our programs and partnerships. I work on documentation, compliance, and policy clarity so our teams can build with confidence. My goal is to keep our structure strong, transparent, and aligned with our mission as we continue expanding opportunities for students.",
    badges: ["Legal Operations", "Governance", "Organization"]
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
          style={{ objectPosition: officer.imagePosition || 'center' }}
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
          Board of Directors
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start">
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
