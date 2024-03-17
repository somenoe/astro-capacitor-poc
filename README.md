# Astro + Capacitor (Proof of Concept)

I have conducted a proof of concept testing various features of Capacitor utilizing the Astro framework.

### Concepts

The following concepts have been explored and implemented successfully:

- [x] Network
- [x] Camera
- [x] Filesystem
- [x] Geolocation
- [x] Toast
- [x] Share
- [x] Map
- [x] Chart
- [x] Build: Android
- [x] Build: PWA
- [ ] Build: iOS
- [ ] Push Notification
- [ ] Local Notification
- [ ] Log In with Social Media Provider
- [ ] Chart: Candlestick

## Tech Stack

Below is the technology stack utilized in this project:

- [Capacitor](https://capacitorjs.com/)
- [Astro](https://astro.build/)
- [Alpine.js](https://alpinejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com/)
- [Iconify](https://iconify.design/)
- [Leaflet Map](https://leafletjs.com/)
- [Chart.js](https://www.chartjs.org/)
- [Vite PWA](https://vite-pwa-org.netlify.app/)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
