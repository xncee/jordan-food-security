# Pixel Site Project

Web application about agriculture in Jordan.
Note that this app is SPA (Single Page Application), meaning that it does not reload the page when navigating between sections. but rather it dynamically injects the content of each section into the main page (index.html).

## Live Demo

[Live Demo Link](https://jordan-food-security.vercel.app/)

## Features

    - Responsive design (mobile, tablet, desktop).
    - Dark / Light mode toggle.
    - SPA (Single Page Application) navigation.
    - Component-based architecture.
    - Statistics about agriculture in Jordan.
    - Types of agriculture in Jordan.
    - Irrigation methods used in Jordan.
    - List of crops and plants found in Jordan.
    - Search and filter functionality for crops and plants.
    - Vertical Farming in Jordan.
    - List of plant diseases in Jordan.
    - Contact form (non-functional, front-end only).

## Tech Stack & Tools

-   HTML
-   CSS
-   Javascript (Vanilla)
-   Tailwind CSS (css framework)
-   Vite (build tool, dev server)
-   Chart.js (for charts and graphs)
-   Git (version control)
-   Vercel (for deployment)

## Project Structure

```
jordan-food-security/
├── public/                # Static assets (favicon, images, etc.)
│   └── assets/
├── src/                   # Source code
│   ├── components/        # Reusable UI components (header, footer, cards, etc...)
│   ├── pages/             # SPA page modules (home, agriculture types, etc.) -> Page components
│   ├── styles/            # CSS files for different pages
│   ├── data/              # Static Data files (statistics.json, agricultureTypes.json, etc...)
│   ├── lib/               # Utility functions and helpers
│   ├── globals.css        # Global styles (Tailwind imports, theme variables, shared styles, ...)
│   ├── app.js             # App root component
│   ├── main.js            # SPA entry point
│   └── router.js          # Simple SPA custom router
├── index.html             # Main HTML entry
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
└── README.md              # Project documentation
```

## Screenshots

## Get Started

### Prerequisites

-   Node.js (v14 or higher)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/xncee/jordan-food-security
    ```
2. Navigate to the project directory:
    ```bash
    cd jordan-food-security
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```
5. Open your browser and visit `http://localhost:5173` to see the app in action.
