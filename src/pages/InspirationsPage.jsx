import { PageShell } from '../components/PageShell';
import { assetPath } from '../utils/assetPath';

const ORIGIN_HERO = assetPath('/media/origin/marjal.jpg');
const ORIGIN_PORTRAIT = assetPath('/media/about/Imagen_Jorge_Origen.jpeg');
const ORIGIN_GALLERY = [
  assetPath('/media/projects/Botella_BellaNoir/Vista_Ampliada.png'),
  assetPath('/media/projects/Branding_Varona/Productos_Varona.01.png'),
  assetPath('/media/projects/Capvespre/Lampara_CapvespreC.01.png'),
];
const ORIGIN_PILLAR_IMAGES = [
  assetPath('/media/origin/castellon-map.png'),
  assetPath('/media/projects/Botella_BellaNoir/Vista_Detallada_Base.02.png'),
  assetPath('/media/origin/calma-contemporanea.png'),
];
const TERRITORIO_CERCANO_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Camino+Donacion+257%2C+12100+Castellon';

export function InspirationsPage({ t }) {
  return (
    <PageShell>
      <section className="origin-page">
        <header className="origin-hero">
          <div className="origin-hero-copy">
            <p className="home-section-label">{t.inspirations.kicker}</p>
            <h1>{t.inspirations.title}</h1>
            <p className="origin-hero-subtitle">{t.inspirations.subtitle}</p>
          </div>
          <figure className="origin-hero-media">
            <img src={ORIGIN_HERO} alt="" aria-hidden="true" />
          </figure>
        </header>

        <section className="origin-intro-panel">
          <div className="origin-intro-lead">
            <p className="home-section-label">{t.inspirations.originLabel}</p>
            <h2>{t.inspirations.introTitle}</h2>
          </div>
          <p className="origin-intro-text">{t.inspirations.introText}</p>
        </section>

        <section className="origin-story-grid">
          <figure className="origin-story-portrait">
            <img src={ORIGIN_PORTRAIT} alt="" aria-hidden="true" />
          </figure>
          <div className="origin-story-copy">
            <p className="home-section-label">{t.inspirations.originLabel}</p>
            <h2>{t.inspirations.originTitle}</h2>
            <p>{t.inspirations.originBody}</p>
            <p>{t.inspirations.originBody2}</p>
          </div>
        </section>

        <section className="origin-gallery-strip" aria-label={t.inspirations.title}>
          {ORIGIN_GALLERY.map((image, index) => (
            <figure key={image} className={`origin-gallery-card origin-gallery-card-${index + 1}`}>
              <img src={image} alt="" aria-hidden="true" loading="lazy" />
            </figure>
          ))}
        </section>

        <section className="origin-pillars-panel">
          <div className="origin-pillars-head">
            <p className="home-section-label">{t.inspirations.pillarsLabel}</p>
            <h2>{t.inspirations.closingTitle}</h2>
          </div>
          <div className="origin-pillars-grid">
            {t.inspirations.pillars.map((pillar, index) => (
              <article key={pillar.title} className="origin-pillar-card">
                {index === 0 ? (
                  <a
                    className="origin-pillar-link"
                    href={TERRITORIO_CERCANO_MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${pillar.title} Google Maps`}
                  >
                    <figure className={`origin-pillar-media origin-pillar-media-${index + 1}`}>
                      <img src={ORIGIN_PILLAR_IMAGES[index]} alt={pillar.title} loading="lazy" />
                      <figcaption>{pillar.title}</figcaption>
                    </figure>
                  </a>
                ) : (
                  <figure className={`origin-pillar-media origin-pillar-media-${index + 1}`}>
                    <img src={ORIGIN_PILLAR_IMAGES[index]} alt={pillar.title} loading="lazy" />
                    <figcaption>{pillar.title}</figcaption>
                  </figure>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="origin-timeline-panel">
          <div className="origin-timeline-head">
            <p className="home-section-label">{t.inspirations.timelineLabel}</p>
            <p className="origin-timeline-intro">{t.inspirations.closingText}</p>
          </div>
          <div className="origin-timeline-list">
            {t.inspirations.timeline.map((item) => (
              <article key={item.title} className="origin-timeline-card">
                <span className="origin-timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </PageShell>
  );
}
