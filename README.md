# ARIA Lab Website

Official website of the **ARIA (Align Robust Interactive Autonomy) Lab**  
A static frontend web app built using Vite.  
- Live Site: https://aria-lab.cs.utah.edu/

## Management Guide

- **Data**: Update the Google Sheet to refresh site data (Google Sheet is configured in `.env`).
- **Deploy**: On each commit, the site is automatically redeployed; alternatively, re-run all jobs for the latest deployment in the Actions tab.

For more detailed information, please ask to [Seongil Heo](https://github.com/SeongilHeo).

## Tech Stack

- **Frontend**: [React](https://react.dev/), [Vite](https://vitejs.dev/), [TailwindCSS](https://tailwindcss.com/)
- **CI/CD**: GitHub Actions (Static build & GitHub Pages deployment)
- **Data Source**: Google Spreadsheet → JSON transformation script

## Project Structure

```
├── .github/workflows/      # GitHub Actions CI/CD workflows
├── README.md               # Project documentation
├── index.css               # TailwindCSS global styles
├── index.html              # HTML entry point for Vite
├── package-lock.json       # Auto-generated lockfile for npm dependencies
├── package.json            # Project metadata and dependencies
├── vite.config.js          # Vite build and server configuration
├── public/                 # Static assets served directly
│   ├── 404.html                # Custom 404 page for GitHub Pages
│   ├── manifest.json           # PWA manifest (optional)
│   ├── robots.txt              # Web crawler rules
│   └── images                  # Image folders
│       ├── placeholder.png         # Default placeholder image
│       ├── banner                  # Banner images
│       ├── people                  # Member profile images
│       ├── publications            # Publication figures
│       └── videos                  # Video preview thumbnails
├── scripts                 # Utility scripts
│   ├── download-images.js      # Script to download images from URLs in JSON data
│   └── fetch-sheet.js          # Script to fetch and convert Google Sheet to JSON
└── src/                    # Source code
    ├── App.jsx             # App wrapper component
    ├── main.jsx            # App entry point for rendering
    ├── components/         # Reusable UI components
    ├── data/               # Preprocessed JSON data files
    ├── icons/              # Custom SVG icons
    ├── layout/             # Shared layout elements (Header, Footer, etc.)
    ├── pages/              # Route-specific page components
    ├── routes/             # App route definitions
    └── App.jsx             # (Duplicate entry; can be removed if redundant)
```

## Features

- Responsive layout
- Google Spreadsheet data integration (`npm run fetch-sheet && download-image`)
- GitHub Pages auto-deployment
- Environment variable configuration via `.env`
- Client-side routing with React Router  
- Custom 404 handling on GitHub Pages (static-hosting limitation)

## GitHub Actions Deployment

The `.github/workflows/deploy.yaml` workflow performs:

- Reads `.env` upon push to `main`
- Runs `npm run fetch-sheet` to convert spreadsheet to JSON
- Runs `npm run download-images` to download images from Google Drive
- Builds static site via `npm run build`
- Deploys to GitHub Pages

> Based on [Vite’s static deployment guide](https://vite.dev/guide/static-deploy.html)

## License

This project is licensed under the MIT License.