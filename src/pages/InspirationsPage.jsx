import { PageShell } from '../components/PageShell';

const blocks = Array.from({ length: 9 }).map((_, i) => i + 1);

export function InspirationsPage({ t }) {
  return (
    <PageShell>
      <section>
        <h1>{t.inspirations.title}</h1>
        <p className="muted">{t.inspirations.subtitle}</p>
        <div className="inspiration-grid">
          {blocks.map((n) => <article key={n} className={`insp insp-${n} interactive`} />)}
        </div>
      </section>
    </PageShell>
  );
}
