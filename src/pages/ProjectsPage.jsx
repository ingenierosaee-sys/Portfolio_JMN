import { Link } from 'react-router-dom';
import { PageShell } from '../components/PageShell';
import { projects } from '../data/projects';

export function ProjectsPage({ t, lang }) {
  return (
    <PageShell>
      <section>
        <h1>{t.projects.title}</h1>
        <div className="project-grid">
          {projects.map((project) => (
            <Link key={project.id} to={`/projects/${project.id}`} className="project-card interactive">
              <div className="card-hero" style={{ background: project.hero }} />
              <div className="card-body">
                <small>{project.year}</small>
                <h3>{project.title[lang]}</h3>
                <p>{project.subtitle[lang]}</p>
                <span>{t.projects.explore}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="soon-block">{t.projects.soon}</div>
      </section>
    </PageShell>
  );
}
