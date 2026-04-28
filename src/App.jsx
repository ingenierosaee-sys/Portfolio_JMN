import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { detectLanguage, translations } from './i18n';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { InspirationsPage } from './pages/InspirationsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { HiddenNav } from './components/HiddenNav';
import { CustomCursor } from './components/CustomCursor';

export function App() {
  const [lang, setLang] = useState(detectLanguage());
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <div className="app-shell">
      <CustomCursor />
      <HiddenNav lang={lang} setLang={setLang} t={t} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage t={t} lang={lang} />} />
          <Route path="/about" element={<AboutPage t={t} lang={lang} />} />
          <Route path="/projects" element={<ProjectsPage t={t} lang={lang} />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage t={t} lang={lang} />} />
          <Route path="/inspirations" element={<InspirationsPage t={t} />} />
          <Route path="/contact" element={<Navigate to="/about" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
