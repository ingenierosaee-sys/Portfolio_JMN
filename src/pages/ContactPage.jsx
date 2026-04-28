import { PageShell } from '../components/PageShell';
import { assetPath } from '../utils/assetPath';

export function ContactPage({ t }) {
  return (
    <PageShell>
      <section className="contact-layout">
        <div>
          <h1>{t.contact.title}</h1>
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
