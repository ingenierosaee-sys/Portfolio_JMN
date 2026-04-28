import { PageShell } from '../components/PageShell';
import { assetPath } from '../utils/assetPath';

const ABOUT_MOSAIC = {
  main: assetPath('/media/about/Imagen_Jorge_Origen.jpeg'),
  top: assetPath('/media/about/Imagen_Jorge_Origen_3.png'),
  fire: assetPath('/media/about/Imagen_Jorge_Origen_2.jpeg'),
  cv: assetPath('/media/about/Foto_Curriculum.jpg'),
};

export function AboutPage({ t }) {
  return (
    <PageShell>
      <section className="about-layout">
        <figure className="about-mosaic-item about-mosaic-item-main">
          <img className="about-portrait" src={ABOUT_MOSAIC.main} alt={t.ui.fullName} />
        </figure>
        <figure className="about-mosaic-item about-mosaic-item-top">
          <img className="about-portrait" src={ABOUT_MOSAIC.top} alt="" aria-hidden="true" />
        </figure>
        <div className="about-copy">
          <h1>{t.about.title}</h1>
          <h2>{t.ui.fullName}</h2>
          <p className="about-role">{t.ui.role}</p>
          <p>{t.about.text}</p>
          <p className="about-commitment">
            Diseno con implicacion real en cada fase: concepto, desarrollo, narrativa visual y decision material.
          </p>
          <div className="socials about-actions">
            <a href={assetPath('/cv/CV_jorge_mas_navalon.pdf')} download>{t.about.cta}</a>
          </div>
        </div>
        <figure className="about-mosaic-item about-mosaic-item-fire">
          <img className="about-portrait" src={ABOUT_MOSAIC.fire} alt="" aria-hidden="true" />
        </figure>
        <figure className="about-mosaic-item about-mosaic-item-cv">
          <img className="about-portrait" src={ABOUT_MOSAIC.cv} alt="" aria-hidden="true" />
        </figure>
      </section>

      <section className="contact-layout about-contact">
        <div>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
          <div className="socials">
            <a href="mailto:jorgemasn64@gmail.com">jorgemasn64@gmail.com</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href={assetPath('/cv/CV_jorge_mas_navalon.pdf')} download>{t.contact.cv}</a>
          </div>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>{t.contact.form.name}<input type="text" required /></label>
          <label>{t.contact.form.email}<input type="email" required /></label>
          <label>{t.contact.form.message}<textarea rows="4" required /></label>
          <button type="submit">{t.contact.form.submit}</button>
        </form>
      </section>
    </PageShell>
  );
}
