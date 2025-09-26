import NotFoundPage from "./pages/not-found-page";

let routes = null;
export const route = (path) => {
    window.history.pushState({}, "", path);
    handleNavigation();
};

export function getPageComponent(path) {
    return routes[path] || NotFoundPage;
}
const handleNavigation = () => {
    const path = window.location.pathname;
    const page = getPageComponent(path)();

    const contentEl = document.getElementById("content");
    if (typeof page === "string") {
        contentEl.innerHTML = page;
    } else {
        contentEl.innerHTML = "";
        contentEl.appendChild(page);
    }
};

export function initializeRouter(routesMap) {
    routes = routesMap;
    window.onpopstate = handleNavigation;
    window.route = route; // Make route function globally accessible

    handleNavigation(); // Initial call to handle navigation on page load
}
