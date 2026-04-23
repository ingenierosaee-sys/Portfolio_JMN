export const translations = {
  es: {
    nav: { home: 'Home', about: 'About', projects: 'Projects', inspirations: 'Inspirations', contact: 'Contact' },
    intro: {
      line: 'Calma mediterránea, materia honesta, diseño con intención.',
      enter: 'Entrar',
      skip: 'Saltar intro',
      soundOn: 'Sonido ON',
      soundOff: 'Sonido OFF',
    },
    home: {
      role: 'Industrial Design Engineer',
      statement: 'Diseño productos, espacios y atmósferas donde la luz, el uso y los materiales hablan con naturalidad.',
    },
    about: {
      title: 'Sobre mí',
      text: 'Soy Jorge Mas Navalón, Industrial Design Engineer. Entiendo el diseño como una forma de conectar territorio, material y experiencia humana. Mi práctica se mueve entre producto, interiorismo y narrativa atmosférica, con una mirada mediterránea contemporánea: clara, cálida y rigurosa.',
      cta: 'Descargar CV',
    },
    projects: {
      title: 'Proyectos',
      soon: 'Más proyectos próximamente',
      explore: 'Explorar proyecto',
    },
    inspirations: {
      title: 'Inspiraciones',
      subtitle: 'Un archivo visual de materia, luz y memoria.',
    },
    contact: {
      title: 'Contacto',
      text: 'Disponible para colaboraciones, encargos y conversaciones sobre diseño, producto y atmósferas.',
      form: { name: 'Nombre', email: 'Email', message: 'Mensaje', submit: 'Enviar mensaje' },
      cv: 'Descargar CV',
    },
    project: {
      context: 'Contexto e idea', process: 'Desarrollo y proceso', materials: 'Materiales y decisiones', result: 'Resultado final', extras: 'Galería y extras',
      readMore: 'Ver detalle',
    },
  },
  en: {
    nav: { home: 'Home', about: 'About', projects: 'Projects', inspirations: 'Inspirations', contact: 'Contact' },
    intro: {
      line: 'Mediterranean calm, honest matter, design with intention.',
      enter: 'Enter',
      skip: 'Skip intro',
      soundOn: 'Sound ON',
      soundOff: 'Sound OFF',
    },
    home: {
      role: 'Industrial Design Engineer',
      statement: 'I design products, spaces and atmospheres where light, use and materials speak naturally.',
    },
    about: {
      title: 'About',
      text: 'I am Jorge Mas Navalón, an Industrial Design Engineer. I see design as a way to connect territory, material and human experience. My practice moves across product, interiors and atmospheric storytelling, through a contemporary Mediterranean lens: clear, warm and rigorous.',
      cta: 'Download CV',
    },
    projects: {
      title: 'Projects',
      soon: 'More coming soon',
      explore: 'Explore project',
    },
    inspirations: {
      title: 'Inspirations',
      subtitle: 'A visual archive of matter, light and memory.',
    },
    contact: {
      title: 'Contact',
      text: 'Available for collaborations, commissions and conversations around design, product and atmospheres.',
      form: { name: 'Name', email: 'Email', message: 'Message', submit: 'Send message' },
      cv: 'Download CV',
    },
    project: {
      context: 'Context and idea', process: 'Development and process', materials: 'Materials and decisions', result: 'Final outcome', extras: 'Gallery and extras',
      readMore: 'Read detail',
    },
  },
};

export const detectLanguage = () => {
  if (typeof window === 'undefined') return 'en';
  const saved = localStorage.getItem('lang');
  if (saved === 'es' || saved === 'en') return saved;
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
};
