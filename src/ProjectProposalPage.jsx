import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck, Lightbulb, Rocket, Users } from 'lucide-react';
import { Header, Footer } from './page.jsx';

const proposalFormUrl = 'https://forms.gle/59vwtas3gjbyibA1A';

const processSteps = [
  {
    title: 'Step 1: Idea Submission',
    description: 'Share your project using the Google form linked below.',
    icon: <Lightbulb size={28} />
  },
  {
    title: 'Step 2: Proposal Review',
    description: 'We evaluate feasibility, monetization potential, timeline, and team fit.',
    icon: <ClipboardCheck size={28} />
  },
  {
    title: 'Step 3: Team Assignment',
    description: 'Clear roles, defined deliverables, and structured deadlines are assigned.',
    icon: <Users size={28} />
  },
  {
    title: 'Step 4: Build -> Ship -> Iterate',
    description: 'We execute quickly, launch when possible, and continuously improve.',
    icon: <Rocket size={28} />
  }
];

const proposalRequirements = [
  {
    title: 'Basic Information',
    items: [
      'Full name',
      'Email',
      'Discord username (optional)',
      'Proposal type'
    ]
  },
  {
    title: 'Project Definition',
    items: [
      'Project title',
      'Problem or opportunity',
      'Project summary',
      'Who benefits from this project'
    ]
  },
  {
    title: 'Execution Plan',
    items: [
      'Monetization potential',
      'Timeline and key checkpoints',
      'Team fit and needed roles',
      'Requested support',
      'First milestone'
    ]
  },
  {
    title: 'Optional Notes',
    items: [
      'Any extra details that help reviewers understand your idea'
    ]
  }
];

const ProjectProposalPage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-10"></div>
      <Header />

      <main className="container mx-auto px-4 py-20 mt-20 relative z-10">
        <motion.section
          className="text-center max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
            Project Proposal
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
            Pitch your idea and launch with the team. Review the required info below, then submit using the Google form.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={proposalFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--accent-primary)] text-white px-7 py-3 rounded-full font-semibold hover:bg-[var(--accent-secondary)] transition-colors"
            >
              Open Proposal Form
              <ArrowRight size={18} />
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-[var(--accent-primary)] text-[var(--accent-primary)] px-7 py-3 rounded-full font-semibold hover:bg-[var(--accent-primary)]/10 transition-colors"
            >
              View Existing Projects
            </Link>
          </div>
        </motion.section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              className="rounded-2xl p-7 bg-[var(--bg-secondary)] border border-[var(--accent-primary)]/15 shadow-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[var(--accent-primary)]/15 text-[var(--accent-primary)] mb-4">
                {step.icon}
              </div>
              <h2 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]">
                {step.title}
              </h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
            </motion.article>
          ))}
        </section>

        <motion.section
          className="max-w-6xl mx-auto rounded-3xl p-8 md:p-10 bg-[var(--bg-secondary)] border border-[var(--accent-primary)]/20 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--text-primary)]">
            What to Include in Your Submission
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Use this checklist before opening the form so your proposal is complete on first submit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proposalRequirements.map((section, index) => (
              <motion.article
                key={section.title}
                className="rounded-2xl p-6 bg-[var(--bg-primary)] border border-[var(--accent-primary)]/15"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.12 + index * 0.06 }}
              >
                <h3 className="text-xl font-semibold mb-3 text-[var(--accent-primary)]">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="text-[var(--text-secondary)] leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={proposalFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--accent-primary)] text-white px-7 py-3 rounded-full font-semibold hover:bg-[var(--accent-secondary)] transition-colors"
            >
              Submit Through Google Form
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectProposalPage;
