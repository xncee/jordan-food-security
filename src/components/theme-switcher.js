import { getTheme, setTheme } from "../utils/theme.js";

export function handleThemeSwitch() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === "light" ? "dark" : "light"; // '1' == true vs ===
    setTheme(newTheme);
}

export function createThemeSwitchBtn() {
    const switchThemeBtn = document.createElement("button");
    switchThemeBtn.id = "switchThemeBtn";
    switchThemeBtn.classList.add("button");
    switchThemeBtn.classList.add("is-small");
    switchThemeBtn.innerHTML = "Switch Theme";
    switchThemeBtn.onclick = handleThemeSwitch;

    return switchThemeBtn;
}
