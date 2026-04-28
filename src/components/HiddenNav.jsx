import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function HiddenNav({ t, lang, setLang }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onMove = (e) => {
      if (e.clientX < 40) setOpen(true);
      if (e.clientX > 360) setOpen(false);
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const links = [
    ['/', t.nav.home],
    ['/inspirations', t.nav.inspirations],
    ['/about', t.nav.about],
    ['/projects', t.nav.projects],
  ];

  return (
    <>
      <button
        className="edge-trigger"
        onFocus={() => setOpen(true)}
        onClick={() => setOpen((value) => !value)}
        aria-label={t.ui.menu}
      />
      <AnimatePresence>
        {open && (
          <motion.aside
            className="hidden-nav"
            initial={{ x: -260, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -260, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav>
              {links.map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  className={location.pathname === to ? 'active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="lang-switch" role="group" aria-label={t.ui.languageSelector}>
              <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button>
              <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
