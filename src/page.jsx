import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Rocket, Menu, X, Lightbulb, Send, Globe, ArrowRight, MessageCircle, Star, FileText, BarChart, Sun, Moon, Facebook, Twitter, Instagram, Linkedin, Book } from 'lucide-react';
import ScrollFadeIn from './Fade.jsx';
import { Link, useNavigate } from 'react-router-dom';
import logo from './images/logo2.svg';
import whyJoinPhoto from './images/oliver.jpg';

import { useTheme } from './ThemeContext';

// Add CSS animations
const styles = document.createElement('style');
styles.textContent = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  .animate-blob {
    animation: blob 7s infinite;
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
document.head.appendChild(styles);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionNav = (sectionId) => {
    const onHome = window.location.hash === '#/' || window.location.hash === '' || window.location.hash === '#';
    if (onHome) {
      scrollToSection(sectionId);
      return;
    }
    navigate('/');
    setTimeout(() => scrollToSection(sectionId), 150);
  };

  const navItems = [
    { name: 'Why Join TVT?', icon: <Users size={20} />, onClick: () => handleSectionNav('why') },
    { name: 'Impact', icon: <BarChart size={20} />, onClick: () => handleSectionNav('impact') },
    { name: 'Articles', icon: <FileText size={20} />, to: '/articles' },
    { name: 'Gallery', icon: <FileText size={20} />, to: '/gallery' },
    {
      name: 'Digital Resources',
      icon: <FileText size={20} />,
      to: '/resources',
      children: [
        { name: 'Digital Footprint Guide', to: '/resources?section=digital-footprint' },
        { name: 'Email Safety Tips', to: '/resources?section=email-safety' },
        { name: 'Online Privacy Guide', to: '/resources?section=online-privacy' },
        { name: 'Password Security Guide', to: '/resources?section=password-security' },
        { name: 'Phishing Prevention Guide', to: '/resources?section=phishing-prevention' }
      ]
    },
    { name: 'Team', icon: <Users size={20} />, to: '/team' },
    { name: 'Contact', icon: <MessageCircle size={20} />, to: '/contact' },
  ];

  const NavLink = ({ item, onClick, isMobile }) => {
    if (item.children) {
      if (isMobile) {
        return (
          <div className="px-4 py-2 rounded-2xl bg-[var(--bg-secondary)]/60 border border-[var(--accent-primary)]/10">
            <Link
              to={item.to}
              className="flex items-center text-[var(--text-secondary)] mb-2 hover:text-[var(--accent-primary)] transition-colors"
              onClick={onClick}
            >
              {React.cloneElement(item.icon, { className: "mr-2" })}
              {item.name}
            </Link>
            <div className="flex flex-col gap-2">
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  to={child.to}
                  className="px-3 py-2 rounded-lg text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/5 transition-all duration-200"
                  onClick={onClick}
                >
                  {child.name}
                </Link>
              ))}
            </div>
          </div>
        );
      }

      return (
        <div className="relative group">
          <Link
            to={item.to}
            className="px-4 py-2 rounded-full transition-all duration-200 flex items-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/5"
          >
            {React.cloneElement(item.icon, { className: "mr-2" })}
            {item.name}
          </Link>
          <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-[var(--bg-primary)] border border-[var(--accent-primary)]/10 shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200">
            <div className="p-3 flex flex-col gap-1">
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  to={child.to}
                  className="px-3 py-2 rounded-lg text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/5 transition-all duration-200"
                >
                  {child.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      );
    }
    if (item.onClick) {
      return (
        <button 
          className="px-4 py-2 rounded-full transition-all duration-200 flex items-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/5"
          onClick={(e) => {
            e.preventDefault();
            item.onClick();
            if (onClick) onClick();
          }}
        >
          {React.cloneElement(item.icon, { className: "mr-2" })}
          {item.name}
        </button>
      );
    }
    return (
      <Link 
        to={item.to} 
        className="px-4 py-2 rounded-full transition-all duration-200 flex items-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/5"
        onClick={onClick}
      >
        {React.cloneElement(item.icon, { className: "mr-2" })}
        {item.name}
      </Link>
    );
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <motion.nav 
        className={`
          ${isScrolled ? 'bg-[var(--nav-bg)]/90' : 'bg-[var(--nav-bg)]'} 
          backdrop-blur-md rounded-full px-6 py-3
          border border-[var(--accent-primary)]/5
          flex items-center justify-between gap-6
          max-w-6xl w-full transition-all duration-300
          mt-4 shadow-sm
        `}
      >
        <motion.a
          className="flex-shrink-0"
          href="/"
          whileHover={{ scale: 1.05 }}
        >
          <img src={logo} alt="Tri-Valley Tech Logo" className="h-10 w-auto" />
        </motion.a>

        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <NavLink item={item} onClick={() => setIsMenuOpen(false)} />
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button
            className="p-2 rounded-full transition-all duration-200 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--text-primary)]/5"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          <motion.button 
            className="md:hidden p-2 rounded-full transition-all duration-200 text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--text-primary)]/5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed top-24 left-4 right-4 rounded-2xl shadow-xl bg-[var(--bg-primary)] border border-[var(--text-primary)]/10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="p-4">
              <ul className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.li 
                    key={item.name} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink 
                      item={item}
                      isMobile
                      onClick={() => setIsMenuOpen(false)}
                    />
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const RotatingCube = () => {
  const { isDark } = useTheme();
  const textClass = isDark ? 'text-white' : 'text-[var(--text-primary)]';

  return (
    <div className="scene">
      <div className="cube">
        <div className={`cube__face cube__face--front ${textClass}`}>
          <Users size={48} />
          <p>Collaborative Community</p>
        </div>
        <div className={`cube__face cube__face--back ${textClass}`}>
          <Rocket size={48} />
          <p>Innovative Projects</p>
        </div>
        <div className={`cube__face cube__face--right ${textClass}`}>
          <Lightbulb size={48} />
          <p>Skill Development</p>
        </div>
        <div className={`cube__face cube__face--left ${textClass}`}>
          <Globe size={48} />
          <p>Global Impact</p>
        </div>
        <div className={`cube__face cube__face--top ${textClass}`}>
          <img src={logo} alt="Tri-Valley Tech Logo" className="w-150 h-150" />
        </div>
        <div className={`cube__face cube__face--bottom ${textClass}`}>
          <img src={logo} alt="Tri-Valley Tech Logo" className="w-150 h-150" />
        </div>
      </div>
    </div>
  );
};


const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-40 md:pt-32 polka-pattern">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern z-0"></div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/5 via-transparent to-[var(--accent-secondary)]/5"></div>
      
      {/* Background blobs */}
      <div className="absolute top-20 -left-4 w-96 h-96 bg-[var(--accent-primary)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute top-20 -right-4 w-96 h-96 bg-[var(--accent-secondary)]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <motion.h1
            className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Empowering young innovators to build real things.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-[var(--text-secondary)] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Bring your ideas to life with Tri-Valley Tech.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://discord.gg/n6TCxpCGqM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--accent-primary)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--accent-secondary)] transition-colors duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2" />
            </a>
            <Link
              to="/why-join"
              className="border border-[var(--accent-primary)] text-[var(--accent-primary)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--accent-primary)]/10 transition-colors duration-300 flex items-center gap-2"
            >
              Why Join
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <RotatingCube />
        </div>
      </div>
    </section>
  );
};

  const Why = () => {
    const features = [
      {
        title: "Hands-on Projects",
        description: "Work on real ideas that solve real problems; projects you can showcase in portfolios, competitions, and college applications.",
        icon: <Rocket />
      },
      {
        title: "Mentorship & Guidance",
        description: "Learn directly from leads, college mentors, and peers who have already built apps, launched startups, and led community events.",
        icon: <Book />
      },
      {
        title: "A Supportive Community",
        description: "Meet people who push you forward, hype you up, and help you grow.",
        icon: <Users />
      },
      {
        title: "Future Opportunities",
        description: "Leadership roles, paid projects, internships, and long-term initiatives; doors many students never even know exist.",
        icon: <Star />
      }
    ];

    return (
      <section id="why-join" className="py-20 bg-[var(--bg-primary)] relative overflow-hidden polka-subtle">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--accent-primary)]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-[var(--accent-secondary)]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-64 h-64 bg-[var(--accent-primary)]/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--accent-primary)]">
              Why Join Tri-Valley Tech?
            </h2>
            <p className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed">
              At Tri-Valley Tech, you're not just joining a club or a nonprofit; you're joining a community of people who actually want to build things. Apps, websites, engineering ideas, cyber tools, or full social impact projects; TVT gives you the space and support to create something real.
            </p>
            <p className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed mt-4">
              We focus on three things: learning, building, and making an impact.
            </p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-3xl overflow-hidden border border-[var(--accent-primary)]/20 shadow-2xl">
              <img
                src={whyJoinPhoto}
                alt="Tri-Valley Tech students working on a project"
                className="w-full h-[320px] md:h-[420px] object-cover"
              />
            </div>
          </motion.div>

          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-[var(--text-primary)]">What You'll Get</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-[var(--bg-primary)] shadow-xl border border-[var(--accent-primary)]/10 hover:border-[var(--accent-primary)]/30 transition-all duration-300 relative overflow-hidden group backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="p-4 rounded-full bg-[var(--accent-primary)]/10 inline-block mb-6">
                    {React.cloneElement(feature.icon, { size: 32, className: 'text-[var(--accent-primary)]' })}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/why-join"
              className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
            >
              Explore the full Why Join page
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    );
  };
  


  const CTA = () => (
    <section id="join" className="py-20 bg-[var(--bg-secondary)] circuit-pattern">
      <div className="container mx-auto text-center px-4">
        <motion.h2 
          className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to Build Something Real?
        </motion.h2>
        <motion.p 
          className="text-xl text-[var(--text-secondary)] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          If you've ever wanted to create something meaningful, TVT gives you the tools, the team, and the momentum to make it happen.
        </motion.p>
        <motion.a
          href="https://discord.gg/n6TCxpCGqM"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-[var(--accent-primary)] text-white rounded-full font-semibold hover:bg-[var(--accent-secondary)] transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );

  const ImpactPreview = () => (
    <section className="py-20 bg-[var(--bg-secondary)] text-[var(--text-primary)] relative overflow-hidden polka-subtle">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6bTEyIDEyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnptLTI0IDBjMy4zMSAwIDYgMi42OSA2IDZzLTIuNjkgNi02IDYtNi0yLjY5LTYtNiAyLjY5LTYgNi02eiIgc3Ryb2tlPSIjNzMyOWJlIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">Impact Preview</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Chapters",
              description: "4 chapters across 4 cities. Dublin, Pleasanton, San Ramon, and Livermore. Each chapter is a local hub for collaboration, leadership, and building."
            },
            {
              title: "Consulting",
              description: "Real partnerships. Real problems. Real solutions. TVT collaborates with nonprofits, schools, and youth organizations to design and deliver technology that makes a difference."
            },
            {
              title: "Events",
              description: "A growing calendar of youth-focused innovation events. Workshops, speaker sessions, and community impact experiences; with more planned throughout 2026."
            }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              className="p-8 rounded-2xl bg-[var(--bg-primary)] shadow-xl border border-[var(--accent-primary)]/10 hover:border-[var(--accent-primary)]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{item.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                {item.description}
              </p>
              <Link to="/impact" className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors">
                Learn more
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const GalleryCarousel = () => {
    const slides = [
      { title: "Workshops", image: "https://via.placeholder.com/1200x700?text=Workshops" },
      { title: "App Launches", image: "https://via.placeholder.com/1200x700?text=App+Launches" },
      { title: "Mentorship Sessions", image: "https://via.placeholder.com/1200x700?text=Mentorship+Sessions" },
      { title: "Community Outreach", image: "https://via.placeholder.com/1200x700?text=Community+Outreach" }
    ];
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = slides.length;
    const activeSlide = slides[activeIndex];

    const goNext = () => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    };

    const goPrev = () => {
      setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
            Gallery Preview
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
            Take a look at what we've been building. From workshops to app launches to behind-the-scenes moments, here's a glimpse into life at Tri-Valley Tech.
          </p>
        </div>
        <div className="relative rounded-3xl overflow-hidden border border-[var(--accent-primary)]/20 shadow-2xl bg-[var(--bg-secondary)]">
          <img
            src={activeSlide.image}
            alt={activeSlide.title}
            className="w-full h-[360px] sm:h-[460px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/70">Preview</p>
              <h3 className="text-3xl font-bold text-white">{activeSlide.title}</h3>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={goPrev}
                className="h-11 w-11 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center hover:bg-white/20 transition"
                aria-label="Previous slide"
              >
                <ArrowRight className="rotate-180" size={18} />
              </button>
              <button
                onClick={goNext}
                className="h-11 w-11 rounded-full bg-white/10 border border-white/30 text-white flex items-center justify-center hover:bg-white/20 transition"
                aria-label="Next slide"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${index === activeIndex ? 'bg-[var(--accent-primary)]' : 'bg-[var(--text-secondary)]/40'}`}
              aria-label={`Go to ${slide.title}`}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-[var(--accent-primary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--accent-secondary)] transition-colors"
          >
            Visit Our Gallery
            <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
    );
  };

  const GalleryPreview = () => (
    <section className="py-20 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden polka-subtle">
      <div className="container mx-auto px-4">
        <GalleryCarousel />
      </div>
    </section>
  );

  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      //implement message sending here once backend is implemented
      console.log('Form submitted:', formData);
      
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    };
  
    return (
      <section className="py-20 bg-[var(--bg-secondary)] contact-section polka-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">Send Us a Message</h2>
          <p className="text-center text-[var(--text-secondary)] mb-6">
            Tri-Valley Tech is a 501(c)(3) nonprofit organization based in the East Bay.
          </p>
          <div className="text-center text-[var(--text-secondary)] mb-10">
            <p>Email: trivalleytechnology@gmail.com</p>
            <p>Phone: (470) 609-2206</p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto contact-form relative z-10">
            <div className="mb-6">
              <label htmlFor="name" className="block text-purple-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-[var(--text-secondary)] bg-[var(--bg-primary)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] border border-[var(--accent-primary)]/10"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-purple-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 text-[var(--text-secondary)] bg-[var(--bg-primary)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] border border-[var(--accent-primary)]/10"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-purple-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-3 py-2 text-[var(--text-secondary)] bg-[var(--bg-primary)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)] border border-[var(--accent-primary)]/10"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-[var(--accent-primary)] text-white py-2 px-4 rounded-md hover:bg-[var(--accent-secondary)] transition duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
              <Send size={20} className="ml-2" />
            </motion.button>
          </form>
        </div>
      </section>
    );
  };

  const Footer = () => (
    <footer className="bg-[var(--bg-secondary)] text-[var(--text-secondary)] py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[var(--accent-primary)] mb-4">Tri-Valley Tech</h3>
            <p className="text-sm">Empowering high school innovators to create real-world impact through collaborative projects.</p>
            <p className="text-sm mt-2">Tri-Valley Tech is a 501(c)(3) nonprofit organization based in the East Bay.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[var(--accent-primary)] mb-4">Quick Links</h4>
            <div className="space-y-8">
              <ul className="space-y-2">
                <li><Link to="/articles" className="hover:text-purple-300 transition duration-300">Articles</Link></li>
                <li><Link to="/gallery" className="hover:text-purple-300 transition duration-300">Gallery</Link></li>
                <li><Link to="/resources" className="hover:text-purple-300 transition duration-300">Digital Resources</Link></li>
                <li><Link to="/team" className="hover:text-purple-300 transition duration-300">Team</Link></li>
                <li><Link to="/projects" className="hover:text-purple-300 transition duration-300">Projects</Link></li>
                <li><Link to="/contact" className="hover:text-purple-300 transition duration-300">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[var(--accent-primary)] mb-4">Contact Us</h4>
            <p className="text-sm">Email: trivalleytechnology@gmail.com</p>
            <p className="text-sm">Phone: (470) 609-2206</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-[var(--accent-primary)] mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook size={20} />, href: "https://www.facebook.com/trivalleytech" },
                { icon: <Twitter size={20} />, href: "https://x.com/trivalleytech" },
                { icon: <Instagram size={20} />, href: "https://www.instagram.com/trivalleytech/" },
                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/tri-valley-tech" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2026 Tri-Valley Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  const AppContent = () => {
    return (
      <div className="font-sans transition-colors duration-300 bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <ScrollFadeIn delay={0.2}>
          <Header />
        </ScrollFadeIn>
        <main>
          <ScrollFadeIn delay={0.4}>
            <section id="home">
              <Hero />
            </section>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <section id="why">
              <Why />
            </section>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <section id="impact">
              <ImpactPreview />
            </section>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <section id="gallery">
              <GalleryPreview />
            </section>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <section id="join">
              <CTA />
            </section>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <section id="contact">
              <ContactForm />
            </section>
          </ScrollFadeIn>
        </main>
        <ScrollFadeIn>
          <Footer />
        </ScrollFadeIn>
      </div>
    );
  };

  const Web = () => {
    return <AppContent />;
  };

export { Header, Footer, ContactForm };
export default Web;
