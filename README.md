# Portfolio Fullstack – Jean Pierre Galarreta Vega

Este es un portfolio profesional desarrollado con [Astro](https://astro.build/), React, Material UI, Zustand y Framer Motion. Incluye presentación personal, CV descargable, proyectos destacados con páginas individuales y un sistema de tema oscuro/claro persistente.

## Características principales

- **Home:** Presentación, sobre mí y tecnologías dominadas (frontend, backend, herramientas/devops) en carruseles animados.
- **CV:** Visualización y descarga de CV en PDF, con diseño profesional y responsivo.
- **Proyectos:** Cards animadas de proyectos, cada una con página individual detallada.
- **Tema oscuro/claro:** Conmutador con iconos, persistente entre recargas y navegación.
- **Animaciones:** Carrusel infinito de tecnologías y animaciones de entrada/hover con Framer Motion.

## Tecnologías usadas

- **Astro** (framework principal)
- **React** (componentes interactivos)
- **Material UI** (estilos y componentes visuales)
- **Zustand** (estado global para el tema)
- **Framer Motion** (animaciones)
- **Bootstrap** (en algunos proyectos)
- **MongoDB, Node.js, Express** (en proyectos destacados)

## Estructura del proyecto

```
portfolio-Fullstack/
├── public/
│   ├── favicon.svg
│   ├── cv-jeanpierre.pdf
│   ├── finanzas-personales.png
│   └── blog.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── NavbarToggle.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── AnimatedTechIcon.jsx
│   │   └── InfiniteCarousel.jsx
│   ├── pages/
│   │   ├── index.astro
│   │   ├── cv.astro
│   │   ├── proyecto/
│   │   │   ├── finanzas-personales.astro
│   │   │   ├── blog-mern.astro
│   │   │   └── administrador-tareas.astro
│   └── store/
│       └── useThemeStore.js
├── package.json
└── README.md
```

## Instalación y uso

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repo>
   cd portfolio-Fullstack
   ```
2. **Instala las dependencias:**
   ```bash
   npm install
   ```
3. **Agrega tus imágenes y CV:**
   - Coloca tu foto, imágenes de proyectos y `cv-jeanpierre.pdf` en la carpeta `public/`.
4. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
5. **Abre en tu navegador:**
   - [http://localhost:4321](http://localhost:4321)

## Personalización

- **Proyectos:** Edita el array `proyectos` en `src/pages/index.astro` para agregar, quitar o modificar proyectos.
- **Tecnologías:** Modifica los arrays `techFrontend`, `techBackend` y `techTools` en el mismo archivo.
- **CV:** Cambia el archivo PDF en `public/` y ajusta el contenido en `cv.astro` si lo deseas.
- **Colores y animaciones:** Puedes modificar los estilos en los componentes React y `.astro` según tu preferencia.

## Agradecimientos

- [Astro](https://astro.build/)
- [Material UI](https://mui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Devicon](https://devicon.dev/)

---

Desarrollado por **Jean Pierre Galarreta Vega**

```