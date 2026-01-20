import './App.css';
import Web from './page.jsx'
import ProjectsPage from './projects.jsx';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ArticlesPage from './Article.jsx';
import ArticleDetail from './ArticleDetail.jsx';
import TeamPage from './team.jsx';
import { ThemeProvider } from './ThemeContext';
import WhyJoin from './WhyJoin.jsx';
import ImpactPage from './ImpactPage.jsx';
import GalleryPage from './GalleryPage.jsx';
import CommunityInitiatives from './CommunityInitiatives.jsx';
import Chapters from './Chapters.jsx';
import ChapterDetail from './ChapterDetail.jsx';
import ContactPage from './ContactPage.jsx';
import ResourcesPage from './ResourcesPage.jsx';

function App() {
     if (sessionStorage.redirect) {
      var redirect = sessionStorage.redirect;
      sessionStorage.removeItem('redirect');
      if (redirect && redirect !== "/" && redirect !== "/index.html") {
        window.history.replaceState(null, null, redirect);
      }
    }
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Web />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/why-join" element={<WhyJoin />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/community-initiatives" element={<CommunityInitiatives />} />
          <Route path="/chapters" element={<Chapters />} />
          <Route path="/chapters/:chapterId" element={<ChapterDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
