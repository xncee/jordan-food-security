export function initializeTheme() {
    const savedTheme = getTheme();
    setTheme(savedTheme || "system");
}

export function getSystemPreference() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export function getTheme() {
    return localStorage.getItem("theme");
}

export function setTheme(theme) {
    const root = document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
        const systemTheme = getSystemPreference();
        root.classList.add(systemTheme === "dark" ? "dark" : "light");
    } else if (theme === "dark") {
        root.classList.add("dark");
    } else if (theme === "light") {
        root.classList.add("light");
    } else {
        throw new Error("Invalid theme");
    }

    // Save to localStorage
    localStorage.setItem("theme", theme);
    document.dispatchEvent(new Event("themeChange"));
}
