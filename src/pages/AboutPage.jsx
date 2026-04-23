import { PageShell } from '../components/PageShell';

export function AboutPage({ t }) {
  return (
    <PageShell>
      <section className="split about">
        <div className="portrait interactive" aria-hidden="true" />
        <div>
          <h1>{t.about.title}</h1>
          <h2>Jorge Mas Navalón</h2>
          <p className="role">Industrial Design Engineer</p>
          <p>{t.about.text}</p>
          <div className="socials">
            <a href="mailto:jorge@example.com">jorge@example.com</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="/cv-jorge-mas-navalon.pdf" download>{t.about.cta}</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
