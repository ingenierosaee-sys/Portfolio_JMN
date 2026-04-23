import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PageShell } from '../components/PageShell';
import { projectNarratives, projects } from '../data/projects';

export function ProjectDetailPage({ t, lang }) {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  const narrative = projectNarratives[projectId];
  const [openSection, setOpenSection] = useState('context');

  if (!project || !narrative) {
    return <PageShell><p>Project not found.</p></PageShell>;
  }

  const sections = ['context', 'process', 'materials', 'result'];

  return (
    <PageShell>
      <section className="project-detail">
        <header className="detail-hero" style={{ background: project.hero }}>
          <h1>{project.title[lang]}</h1>
          <p>{project.subtitle[lang]}</p>
        </header>
        <div className="story-panels">
          {sections.map((key) => (
            <article key={key} className={`story-card ${openSection === key ? 'open' : ''}`}>
              <button onClick={() => setOpenSection(key)}>
                {t.project[key]} <span>{t.project.readMore}</span>
              </button>
              <div className="story-content">
                <p>{narrative[key][lang]}</p>
              </div>
            </article>
          ))}
        </div>
        <section className="gallery-grid" aria-label={t.project.extras}>
          <div className="visual-block interactive" />
          <div className="visual-block interactive" />
          <div className="visual-block interactive" />
        </section>
      </section>
    </PageShell>
  );
}
