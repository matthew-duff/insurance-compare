# Insurance Policy Comparison Frontend

A lightweight frontend application for comparing different insurance policies, built with SvelteKit.

## Overview

This project provides a clean, modern interface for users to compare various insurance policies. Originally developed for a paid project, the frontend has been abstracted into this standalone application.

## Features

- **Policy Comparison**: Compare different insurance policies side-by-side
- **Modern UI**: Clean, responsive design built with Tailwind CSS
- **Fast Performance**: Built with SvelteKit for optimal performance
- **Accessible**: Designed with accessibility best practices
- **Mobile Responsive**: Works seamlessly across all device sizes

## Tech Stack

- **Framework**: SvelteKit
- **Styling**: Tailwind CSS
- **Icons**: Lucide Svelte
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Linting**: ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd comp-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run format` - Format code with Prettier
- `npm run lint` - Lint code with ESLint

## Project Structure

```
src/
├── app.html              # Main HTML template
├── app.css               # Global styles
├── lib/
│   ├── components/       # Reusable Svelte components
│   ├── resources/        # Static assets (logos, icons)
│   └── stores/          # Svelte stores for state management
└── routes/
    ├── +layout.svelte   # Root layout
    ├── +page.svelte     # Home page
    ├── about/           # About page
    ├── policies/        # Policy pages
    ├── privacy/         # Privacy policy
    └── terms/           # Terms of service
```

## Development

This project was built without AI assistance, focusing on clean, maintainable code and modern web development practices.

### Key Components

- **ProductCard**: Displays individual policy information
- **ProductPage**: Detailed policy view
- **NavBar**: Main navigation
- **Footer**: Site footer
- **AccordionItem**: Collapsible content sections

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is available under the MIT License.

## Contact

For questions or support, please open an issue in the repository.
