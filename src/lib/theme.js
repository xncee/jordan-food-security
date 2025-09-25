export function initializeTheme() {
    const savedTheme = getTheme();
    setTheme(savedTheme);
}

export function getSystemPreference() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export function getTheme() {
    return localStorage.getItem("theme") || getSystemPreference();
}

export function setTheme(theme) {
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    if (theme === "dark") {
        root.classList.add("dark");
    } else if (theme === "light") {
        root.classList.add("light");
    }

    // Save to localStorage
    localStorage.setItem("theme", theme);
}
