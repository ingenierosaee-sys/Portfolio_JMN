import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageShell } from '../components/PageShell';
import { LandingHero } from '../components/LandingHero';
import { assetPath } from '../utils/assetPath';

const INTRO_IMAGE = assetPath('/media/hero/foto_inicio.png');
const BRAND_WORDMARK = assetPath('/media/logo/marjal-studio-wordmark-clean.png');
const HOME_PRODUCTS = [
  {
    id: 'bella-noir',
    title: 'BELLA NOIR',
    year: '2025',
    large: assetPath('/media/projects/Botella_BellaNoir/Packaging_completo.01.png'),
    small: assetPath('/media/projects/Botella_BellaNoir/Vista_Detallada_Base.02.png'),
  },
  {
    id: 'varona',
    title: 'VARONA LA VELLA',
    year: '2025',
    large: assetPath('/media/projects/Branding_Varona/Productos_Varona.01.png'),
    small: assetPath('/media/projects/Branding_Varona/Vista_Detalle_Botella.02.png'),
  },
  {
    id: 'capvespre',
    title: 'CAPVESPRE',
    year: '2026',
    large: assetPath('/media/projects/Capvespre/Lampara_CapvespreC.01.png'),
    small: assetPath('/media/projects/Capvespre/Lampara_CapvespreB.02.png'),
  },
];

export function HomePage({ t, lang }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    document.body.dataset.landing = showIntro ? 'true' : 'false';

    return () => {
      delete document.body.dataset.landing;
    };
  }, [showIntro]);

  const services = t.home.services;
  const products = HOME_PRODUCTS;

  return (
    <PageShell>
      <AnimatePresence>
        {showIntro && <LandingHero t={t} onEnter={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <div className="home-story">
          <section className="home-intro-panel">
            <div className="home-intro-media">
              <img src={INTRO_IMAGE} alt="" aria-hidden="true" />
              <div className="home-intro-overlay">
                <p className="home-section-label home-section-label-on-image">{t.home.kicker}</p>
                <h1 className="home-mask-title">
                  {t.home.maskTitleLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h1>
                <p className="home-intro-text">{t.home.intro}</p>
              </div>
            </div>
          </section>

          <section className="home-overview-panel">
            <span className="home-accent-dot" aria-hidden="true" />
            <div className="home-overview-grid">
              <div className="home-overview-head">
                <p className="home-section-label">{t.nav.home}</p>
                <div className="home-overview-brand">
                  <img src={BRAND_WORDMARK} alt="Marjal" />
                </div>
              </div>
              <div className="home-overview-side">
                <div className="home-overview-brand-copy">
                  <p>{t.home.overviewBrandText}</p>
                  <p>{t.home.overviewBrandText2}</p>
                </div>
                <Link className="home-origin-link interactive" to="/inspirations">
                  {t.nav.inspirations}
                </Link>
              </div>
            </div>
          </section>

          <section className="home-services-panel">
            <div className="home-services-head">
              <p className="home-section-label">{t.home.servicesLabel}</p>
              <h2>{t.home.servicesTitle}</h2>
            </div>
            <div className="home-service-list">
              {services.map((service, index) => (
                <article key={service.title} className="home-service-row">
                  <span className="home-service-index">0{index + 1}</span>
                  <div className="home-service-body">
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <span className="home-service-mark" aria-hidden="true">
                    +
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section className="home-projects-panel">
            <div className="home-projects-head">
              <p className="home-section-label">{t.home.previewsLabel}</p>
              <h2>{t.home.previewsTitle}</h2>
            </div>
            <div className="home-product-showcase">
              {products.map((product, index) => (
                <Link
                  key={product.id}
                  to="/projects"
                  className={`home-product-pair home-product-pair-${index % 2 === 0 ? 'forward' : 'reverse'} home-product-${product.id} interactive`}
                >
                  <figure className="home-product-figure home-product-figure-large">
                    <img src={product.large} alt={product.title} loading="lazy" />
                  </figure>
                  <div className="home-product-side">
                    <div className="home-product-copy">
                      <h3>{product.title}</h3>
                      <span className="home-product-year">{product.year}</span>
                    </div>
                    <figure className="home-product-figure home-product-figure-small">
                      <img src={product.small} alt="" aria-hidden="true" loading="lazy" />
                    </figure>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="home-closing-panel">
            <div>
              <p className="home-section-label">{lang === 'es' ? 'Siguiente' : 'Next'}</p>
              <h2>{t.home.closingTitle}</h2>
            </div>
            <div className="home-closing-side">
              <p>{t.home.closingText}</p>
              <div className="home-links">
                <Link className="interactive home-link-projects" to="/projects">
                  {t.nav.projects}
                </Link>
                <Link className="interactive home-link-about" to="/about">
                  {t.nav.about}
                </Link>
              </div>
            </div>
          </section>
        </div>
      )}
    </PageShell>
  );
}
