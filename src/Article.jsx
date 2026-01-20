import React from 'react';
import { motion } from 'framer-motion';
import { Header, Footer } from './page.jsx';
import { articles as additionalArticles } from './data/articles.js';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => (
  <motion.div
    className="bg-[var(--bg-secondary)] p-6 rounded-2xl shadow-lg border border-[var(--accent-primary)]/10 flex flex-col justify-between"
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
  >
    <div>
      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{article.title}</h3>
      <p className="text-[var(--text-secondary)] mb-4">{article.excerpt}</p>
      <p className="text-sm text-[var(--text-secondary)]">By {article.contributors?.join(", ") || "Tri-Valley Tech"}</p>
    </div>
    <div className="mt-6">
      <Link
        to={`/articles/${article.slug}`}
        className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
      >
        Read article ->
      </Link>
    </div>
  </motion.div>
);

const Article = () => {
  const articles = additionalArticles;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-5"></div>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-20 mt-20"
      >
        <div className="flex justify-between items-center mb-12 relative z-20">
          <motion.h1
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Tri-Valley Tech Articles
          </motion.h1>
        </div>
        <div className="bg-[var(--bg-secondary)] rounded-2xl p-6 border border-[var(--accent-primary)]/10 shadow-lg mb-10">
          <p className="text-[var(--text-secondary)] text-lg mb-4">
            Showcase thinking, projects, and education pathways.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--text-secondary)]">
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Articles</h3>
              <ul className="space-y-1">
                <li>Project launches</li>
                <li>Event recaps</li>
                <li>Build breakdowns</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">Educational Blog</h3>
              <ul className="space-y-1">
                <li>Cyber education pathways for high school students</li>
                <li>ML and data learning platforms</li>
                <li>Introductory guides to technology and engineering</li>
                <li>How students can start building early</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-[var(--text-secondary)] mt-4">
            Admin panel: same setup as the current website; create, edit, and publish articles.
          </p>
        </div>
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[var(--text-secondary)] text-lg">No articles found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </motion.div>
      <Footer />
    </div>
  );
};

export default Article;
