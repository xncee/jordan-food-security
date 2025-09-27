import "./globals.css";
import { initializeTheme } from "./lib/theme.js";
import { initializeRouter } from "./router.js";
import App from "./app.js";
import HomePage from "./pages/home-page";
import AgricultureTypesPage from "./pages/agriculture-types-page";
import IrrigationSystemsPage from "./pages/irrigation-systems-page.js";
import CropsAndPlantsPage from "./pages/crops-and-plants-page";

// A map of routes to their corresponding page components
const routes = {
    "/": HomePage,
    "/agriculture-types": AgricultureTypesPage,
    "/irrigation-systems": IrrigationSystemsPage,
    "/crops-and-plants": CropsAndPlantsPage,
};

// This React-like SPA pattern
document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    document.querySelector("#root").appendChild(App());
    initializeRouter(routes);
});
