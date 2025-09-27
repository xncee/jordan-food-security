import { getSystemPreference, getTheme, setTheme } from "../lib/theme.js";
import sun from "/assets/images/sun.svg";
import moon from "/assets/images/moon.svg";

export function handleThemeSwitch() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
}

const getIcon = (theme) => {
    if (theme === "system") {
        theme = getSystemPreference();
    }

    if (theme === "light") return moon;
    if (theme === "dark") return sun;
};

export function createThemeSwitchBtn() {
    const switchThemeBtn = document.createElement("button");
    switchThemeBtn.id = "switchThemeBtn";
    switchThemeBtn.className = `border-3 border-[var(--border)] bg-[var(--secondary)] p-3 rounded-full text-[var(--text-primary)] hover:opacity-80 hover:cursor-pointer transition`;

    switchThemeBtn.innerHTML = `
        <img src="${getIcon(getTheme())}" alt="Switch Theme" class="w-5 h-5">
    `;
    switchThemeBtn.onclick = handleThemeSwitch;

    document.addEventListener("themeChange", () => {
        console.log();
        switchThemeBtn.innerHTML = `<img src="${getIcon(
            getTheme()
        )}" alt="Switch Theme" class="w-5 h-5">`;
    });

    return switchThemeBtn;
}
