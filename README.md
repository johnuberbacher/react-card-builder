# TCG Card Builder
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

**TCG Card Builder** is a React-based application that allows users to create custom trading card game (TCG) cards for games like **Lorcana** and **Yu-Gi-Oh**. Users can select templates, customize attributes such as card type, names, abilities, power levels, rarity, and upload custom artwork. Finished cards can be exported as images or PDFs for easy sharing and printing.

## Live Demo
[https://tcgbuilder.netlify.app/](https://tcgbuilder.netlify.app/)

## Features

- **Template Options**: Choose from various card types such as:
  - Character
  - Action
  - Magic
  - Trap
  - Fusion
- **Customization**:
  - Enter custom card names and abilities.
  - Adjust power levels, rarity, and other attributes.
  - Upload custom artwork for your cards.
- **Export Options**:
  - Save your cards as images.
  - Generate PDF versions for easy sharing or printing.

### Supported Card Games

- [x] **Lorcana**
- [x] **Yu-Gi-Oh**
- [ ] **Pokémon** (Coming Soon!)
- [ ] **Magic: The Gathering** (Coming Soon!)

## Installation

To run the project locally, follow these steps:

1. Clone the repository:  
   `git clone https://github.com/your-username/tcg-card-builder.git`  
2. Navigate to the project directory:  
   `cd tcg-card-builder`  
3. Install dependencies:  
   `npm install`  
4. Start the development server:  
   `npm start`

## Build

To create a production-ready build:  
`npm run build`

## Dependencies

The project uses the following key libraries:

- [React](https://reactjs.org/) - Core framework for building the application.
- [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) and [@react-three/drei](https://github.com/pmndrs/drei) - For 3D rendering and custom effects.
- [html-to-image](https://github.com/bubkoo/html-to-image) and [html2canvas](https://github.com/niklasvh/html2canvas) - For exporting cards as images.
- [jspdf](https://github.com/parallax/jsPDF) - For exporting cards as PDFs.
- [tailwindcss](https://tailwindcss.com/) - For styling components.

## Scripts

Available scripts for development and production:

- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm test`: Runs the test suite.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

1. Fork the repository.  
2. Create a new branch:  
   `git checkout -b feature-name`  
3. Commit your changes:  
   `git commit -m "Add feature name"`  
4. Push to your branch:  
   `git push origin feature-name`  
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by the creativity of TCG players and designers.
