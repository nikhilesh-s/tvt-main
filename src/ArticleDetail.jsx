import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header, Footer } from './page.jsx';
import { articles } from './data/articles.js';

const ArticleDetail = () => {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)]">
        <Header />
        <main className="container mx-auto px-4 py-20 mt-20 text-center">
          <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-6">Article not found</h1>
          <Link to="/articles" className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)]">
            Back to Articles
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
        <Link to="/articles" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
          Back to Articles
        </Link>
        <motion.h1
          className="text-5xl font-bold mt-6 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {article.title}
        </motion.h1>
        <p className="text-[var(--text-secondary)] mb-10">By {article.contributors?.join(", ") || "Tri-Valley Tech"}</p>
        <div className="prose prose-lg max-w-none text-[var(--text-secondary)] whitespace-pre-wrap leading-relaxed">
          {article.content}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticleDetail;
