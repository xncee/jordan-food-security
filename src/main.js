import "./globals.css";
import { initializeTheme } from "./lib/theme.js";
import { initializeRouter } from "./router.js";
import App from "./app.js";
import HomePage from "./pages/home-page";
import AgricultureTypesPage from "./pages/agriculture-types-page";

const routes = {
    "/": HomePage,
    "/agriculture-types": AgricultureTypesPage,
};

document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    document.querySelector("#root").appendChild(App());
    initializeRouter(routes);
});
