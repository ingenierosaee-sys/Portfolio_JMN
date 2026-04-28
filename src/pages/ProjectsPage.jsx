import { useEffect, useState } from 'react';
import { PageShell } from '../components/PageShell';
import { assetPath } from '../utils/assetPath';

const PROJECTS_SHOWCASE = [
  {
    id: 'bella-noir',
    year: '2025',
    title: 'BELLA NOIR',
    category: { es: 'Packaging', en: 'Packaging' },
    summary: {
      es: 'Una propuesta de packaging donde materialidad, contraste y presencia escenica construyen una identidad mas sensorial.',
      en: 'A packaging proposal where materiality, contrast and scenic presence build a more sensory identity.',
    },
    images: [
      assetPath('/media/projects/Botella_BellaNoir/Packaging_completo.01.png'),
      assetPath('/media/projects/Botella_BellaNoir/Vista_Detallada_Base.02.png'),
      assetPath('/media/projects/Botella_BellaNoir/Packagin_Insertado.png'),
      assetPath('/media/projects/Botella_BellaNoir/Vista_Ampliada.png'),
    ],
  },
  {
    id: 'varona',
    year: '2025',
    title: 'VARONA LA VELLA',
    category: { es: 'Branding', en: 'Branding' },
    summary: {
      es: 'Un sistema visual para aceite de oliva que une raiz mediterranea, linealidad grafica y calidez comercial.',
      en: 'A visual system for olive oil that brings together Mediterranean roots, graphic clarity and commercial warmth.',
    },
    images: [
      assetPath('/media/projects/Branding_Varona/Productos_Varona.01.png'),
      assetPath('/media/projects/Branding_Varona/Vista_Detalle_Botella.02.png'),
      assetPath('/media/projects/Branding_Varona/Latas_Varona.png'),
      assetPath('/media/projects/Branding_Varona/Lata_Varona.png'),
      assetPath('/media/projects/Branding_Varona/Packaging_Varona.png'),
      assetPath('/media/projects/Branding_Varona/Varona_Detalle_2.png'),
    ],
  },
  {
    id: 'capvespre',
    year: '2026',
    title: 'CAPVESPRE',
    category: { es: 'Iluminacion', en: 'Lighting' },
    summary: {
      es: 'Una pieza de iluminacion con acento escultorico, pensada desde la atmosfera domestica y el gesto lento.',
      en: 'A lighting piece with a sculptural accent, shaped through domestic atmosphere and slow gesture.',
    },
    images: [
      assetPath('/media/projects/Capvespre/Lampara_CapvespreC.01.png'),
      assetPath('/media/projects/Capvespre/Lampara_CapvespreB.02.png'),
      assetPath('/media/projects/Capvespre/Lampara_Capvespre.png'),
      assetPath('/media/projects/Capvespre/Lampara_CapvespreD.png'),
    ],
  },
  {
    id: 'coming-soon',
    year: '',
    title: 'COMING SOON',
    category: { es: 'Proximamente', en: 'Coming soon' },
    summary: {
      es: 'Coming soon...',
      en: 'Coming soon...',
    },
    blurred: true,
    images: [
      assetPath('/media/projects/Botella_BellaNoir/Packaging_completo.01.png'),
      assetPath('/media/projects/Branding_Varona/Productos_Varona.01.png'),
      assetPath('/media/projects/Capvespre/Lampara_CapvespreC.01.png'),
      assetPath('/media/projects/Branding_Varona/Packaging_Varona.png'),
    ],
  },
];

export function ProjectsPage({ t, lang }) {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <PageShell>
      <section className="projects-showcase-page">
        <div className="projects-page-intro">
          <p className="home-section-label">{t.nav.projects}</p>
          <h1>{t.projects.title}</h1>
        </div>

        <div className="projects-sections">
          {PROJECTS_SHOWCASE.map((project, index) => (
            <section
              key={project.id}
              className={`projects-showcase-section projects-showcase-${index % 2 === 0 ? 'forward' : 'reverse'}`}
            >
              <button
                type="button"
                className="projects-showcase-trigger"
                onClick={() => setSelectedProject(project)}
                aria-label={project.blurred ? project.summary[lang] : `${project.title} ${project.category[lang]}`}
              >
                <div className={`projects-mosaic projects-mosaic-${project.id} ${project.blurred ? 'projects-mosaic-blurred' : ''}`}>
                  {project.images.map((image, imageIndex) => (
                    <figure
                      key={image}
                      className={`projects-mosaic-item projects-mosaic-item-${imageIndex + 1}`}
                    >
                      <img src={image} alt={`${project.title} ${imageIndex + 1}`} loading="lazy" />
                    </figure>
                  ))}
                </div>
              </button>
            </section>
          ))}
        </div>

        {selectedProject ? (
          <div
            className="projects-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="projects-modal-title"
            onClick={() => setSelectedProject(null)}
          >
            <div className="projects-modal-card" onClick={(event) => event.stopPropagation()}>
              <button
                type="button"
                className="projects-modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar"
              >
                x
              </button>
              {!selectedProject.blurred ? (
                <>
                  <p className="projects-modal-category">{selectedProject.category[lang]}</p>
                  <div className="projects-modal-title-row">
                    <h2 id="projects-modal-title">{selectedProject.title}</h2>
                    <span>{selectedProject.year}</span>
                  </div>
                </>
              ) : (
                <h2 id="projects-modal-title" className="projects-modal-coming-soon">
                  {selectedProject.summary[lang]}
                </h2>
              )}
              {!selectedProject.blurred ? (
                <p className="projects-modal-summary">{selectedProject.summary[lang]}</p>
              ) : null}
            </div>
          </div>
        ) : null}
      </section>
    </PageShell>
  );
}
