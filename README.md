# Jorge Mas Navalón · Portfolio

Portfolio web bilingüe (ES/EN) diseñado con una dirección artística mediterránea contemporánea: cálida, orgánica y narrativa.

## Stack
- React + Vite
- React Router
- Framer Motion

## Ejecutar
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Estructura
- `src/components`: navegación lateral inmersiva, cursor custom, contenedor de transición
- `src/pages`: Home, About, Projects, Inspirations, Contact + detalle de proyecto
- `src/data/projects.js`: catálogo inicial y narrativas de proyectos
- `src/i18n.js`: textos ES/EN y detección de idioma del navegador

## Decisiones principales
- Navegación oculta por proximidad al lateral para mantener foco visual.
- Intro sensorial saltable con sonido ambiente opcional.
- Cursor orgánico contextual para reforzar interacción refinada.
- Sistema de páginas y datos preparado para escalar con más proyectos.
