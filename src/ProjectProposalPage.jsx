import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck, Lightbulb, Rocket, Users } from 'lucide-react';
import { Header, Footer } from './page.jsx';

const processSteps = [
  {
    title: 'Step 1: Idea Submission',
    description: 'Propose an app idea, business opportunity, client project, or internal tool.',
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
    title: 'Step 4: Build → Ship → Iterate',
    description: 'We execute quickly, launch when possible, and continuously improve.',
    icon: <Rocket size={28} />
  }
];

const initialFormState = {
  fullName: '',
  email: '',
  discord: '',
  proposalType: '',
  projectTitle: '',
  problem: '',
  summary: '',
  monetizationPotential: '',
  timeline: '',
  teamFit: '',
  requestedSupport: '',
  firstMilestone: '',
  notes: ''
};

const ProjectProposalPage = () => {
  const [formData, setFormData] = useState(initialFormState);
  const teamEmail = 'trivalleytechnology@gmail.com';
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${teamEmail}`;

  const submittedAt = useMemo(
    () => new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
    []
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const buildMailtoLink = () => {
    const subject = encodeURIComponent(
      `Project Proposal: ${formData.projectTitle || 'New Submission'}`
    );

    const bodyLines = [
      'Tri-Valley Tech Project Proposal',
      `Submitted: ${submittedAt}`,
      '',
      `Full Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Discord: ${formData.discord || 'N/A'}`,
      `Proposal Type: ${formData.proposalType}`,
      `Project Title: ${formData.projectTitle}`,
      '',
      'Problem / Opportunity',
      formData.problem,
      '',
      'Project Summary',
      formData.summary,
      '',
      'Monetization Potential',
      formData.monetizationPotential,
      '',
      'Timeline',
      formData.timeline,
      '',
      'Team Fit',
      formData.teamFit,
      '',
      'Requested Support',
      formData.requestedSupport,
      '',
      'First Milestone',
      formData.firstMilestone,
      '',
      'Additional Notes',
      formData.notes || 'N/A'
    ];

    const body = encodeURIComponent(bodyLines.join('\n'));
    return `mailto:${teamEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = buildMailtoLink();
  };

  const scrollToProposalForm = () => {
    const section = document.getElementById('proposal-form');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
            Pitch your idea and launch with the team. Use the form below and we will review based on
            feasibility, potential impact, timeline, and fit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={scrollToProposalForm}
              className="inline-flex items-center gap-2 bg-[var(--accent-primary)] text-white px-7 py-3 rounded-full font-semibold hover:bg-[var(--accent-secondary)] transition-colors"
            >
              Start Proposal
              <ArrowRight size={18} />
            </button>
            <a
              href={gmailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[var(--accent-primary)] text-[var(--accent-primary)] px-7 py-3 rounded-full font-semibold hover:bg-[var(--accent-primary)]/10 transition-colors"
            >
              Email Team
            </a>
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
          id="proposal-form"
          className="max-w-5xl mx-auto rounded-3xl p-8 md:p-10 bg-[var(--bg-secondary)] border border-[var(--accent-primary)]/20 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[var(--text-primary)]">
            Submit Your Proposal
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            This opens a pre-filled email to <strong>trivalleytechnology@gmail.com</strong> with your
            full proposal details.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full rounded-xl px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-primary)]/15 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-primary)]/15 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label htmlFor="discord" className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
                Discord (Optional)
              </label>
              <input
                id="discord"
                name="discord"
                value={formData.discord}
                onChange={handleChange}
                className="w-full rounded-xl px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-primary)]/15 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                placeholder="@username"
              />
            </div>
            <div>
              <label htmlFor="proposalType" className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
                Proposal Type
              </label>
              <select
                id="proposalType"
                name="proposalType"
                value={formData.proposalType}
                onChange={handleChange}
                required
                className="w-full rounded-xl px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-primary)]/15 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
              >
                <option value="">Select one</option>
                <option value="App Idea">App Idea</option>
                <option value="Business Opportunity">Business Opportunity</option>
                <option value="Client Project">Client Project</option>
                <option value="Internal Tool">Internal Tool</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="projectTitle" className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
                Project Title
              </label>
              <input
                id="projectTitle"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                required
                className="w-full rounded-xl px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-primary)]/15 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                placeholder="Name your project"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="problem" className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
                Problem / Opportunity
              </label>
              <textarea
                id="problem"
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-xl px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-primary)]/15 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                placeholder="What specific problem are you solving?"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="summary" className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
                Project Summary
              </label>
              <textarea
                id="summary"
                name="summary"
                value={formData.summary}
                onChange={handleChange}
                required
                rows={4}
                className="w-full rounded-xl px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-primary)]/15 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                placeholder="What are you building and who benefits?"
              />
            </div>

            <div>
              <label htmlFor="monetizationPotential" className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
                Monetization Potential
              </label>
              <textarea
                id="monetizationPotential"
                name="monetizationPotential"
                value={formData.monetizationPotential}
                onChange={handleChange}
                required
                rows={3}
                className="w-full rounded-xl px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-primary)]/15 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                placeholder="How can this become sustainable?"
              />
            </div>
            <div>
              <label htmlFor="timeline" className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
                Timeline
              </label>
              <textarea
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                required
                rows={3}
                className="w-full rounded-xl px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-primary)]/15 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                placeholder="MVP date and checkpoints"
              />
            </div>

            <div>
              <label htmlFor="teamFit" className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
                Team Fit
              </label>
              <textarea
                id="teamFit"
                name="teamFit"
                value={formData.teamFit}
                onChange={handleChange}
                required
                rows={3}
                className="w-full rounded-xl px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-primary)]/15 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                placeholder="Roles needed and where you can contribute"
              />
            </div>
            <div>
              <label htmlFor="requestedSupport" className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
                Requested Support
              </label>
              <textarea
                id="requestedSupport"
                name="requestedSupport"
                value={formData.requestedSupport}
                onChange={handleChange}
                required
                rows={3}
                className="w-full rounded-xl px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-primary)]/15 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                placeholder="Mentors, design help, engineering, outreach, etc."
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="firstMilestone" className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
                First Milestone
              </label>
              <textarea
                id="firstMilestone"
                name="firstMilestone"
                value={formData.firstMilestone}
                onChange={handleChange}
                required
                rows={3}
                className="w-full rounded-xl px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-primary)]/15 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                placeholder="What can the team ship first?"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="notes" className="block mb-2 text-sm font-semibold text-[var(--text-secondary)]">
                Additional Notes (Optional)
              </label>
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-xl px-4 py-3 bg-[var(--bg-primary)] border border-[var(--accent-primary)]/15 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
                placeholder="Anything else we should know?"
              />
            </div>

            <div className="md:col-span-2 flex flex-wrap items-center gap-4 pt-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[var(--accent-primary)] text-white px-7 py-3 rounded-full font-semibold hover:bg-[var(--accent-secondary)] transition-colors"
              >
                Send Proposal by Email
                <ArrowRight size={18} />
              </button>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
              >
                View Existing Projects
              </Link>
            </div>
          </form>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectProposalPage;
