# TCG Card Builder

> [!WARNING]
> **This project is deprecated and no longer maintained.**
> It has been replaced by **[Lorcana Card Maker](https://lorcanacardmaker.com)** — use that instead.
>
> The repository is archived and read-only. No further updates, bug fixes, or
> dependency upgrades are planned, and issues and pull requests are closed.
> The code remains available for reference — feel free to fork it.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

**TCG Card Builder** is a React application for creating custom trading card game cards for **Lorcana** and **Yu-Gi-Oh**. Pick a template, customize attributes like card type, name, abilities, power levels and rarity, upload your own artwork, then export the finished card as an image or PDF.

## Live Demo

[https://tcgbuilder.netlify.app/](https://tcgbuilder.netlify.app/)

The demo may go offline at any time now that the project is no longer maintained. Use [lorcanacardmaker.com](https://lorcanacardmaker.com) instead.

## Features

- **Template Options**: Character, Action, Magic, Trap and Fusion card types.
- **Customization**: Custom card names and abilities, adjustable power levels and rarity, and custom uploaded artwork.
- **Export Options**: Save cards as images or generate PDFs for sharing and printing.

### Supported Card Games

- [x] **Lorcana**
- [x] **Yu-Gi-Oh** (legacy, unmaintained)

Pokémon and Magic: The Gathering support were planned but never implemented, and no longer will be.

## Running Locally

The project still builds and runs, but dependencies are pinned to versions from 2024 and are not receiving security updates.

1. Clone the repository:
   `git clone https://github.com/johnuberbacher/react-card-builder.git`
2. Navigate to the project directory:
   `cd react-card-builder`
3. Install dependencies:
   `npm install`
4. Start the development server:
   `npm start`

### Docker Setup

With [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/) installed:

1. `git clone https://github.com/johnuberbacher/react-card-builder.git`
2. `cd react-card-builder`
3. `docker-compose up --build`

This builds the app, installs dependencies, and serves it with Nginx on port 3000. Open [http://localhost:3000](http://localhost:3000).

## Build

Run `npm run build` for a production build, or `docker-compose up --build` to build and serve it via Docker on `http://localhost:3000`.

## Dependencies

The project uses the following key libraries:

- [React](https://reactjs.org/) - Core framework for building the application.
- [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) and [@react-three/drei](https://github.com/pmndrs/drei) - For 3D rendering and custom effects.
- [html-to-image](https://github.com/bubkoo/html-to-image) and [html2canvas](https://github.com/niklasvh/html2canvas) - For exporting cards as images.
- [jspdf](https://github.com/parallax/jsPDF) - For exporting cards as PDFs.
- [tailwindcss](https://tailwindcss.com/) - For styling components.

## Scripts

- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm test`: Runs the test suite.

## License

This project is licensed under the [MIT License](LICENSE). It is provided as-is, with no support or maintenance.
