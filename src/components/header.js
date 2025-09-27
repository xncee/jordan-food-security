import { createNavMenu } from "./nav-menu";
import { createThemeSwitchBtn } from "./theme-switcher";

export function createHeader() {
    const header = document.createElement("header");
    header.className = "header";

    const navContainer = document.createElement("nav");
    navContainer.className = "nav";

    const brand = document.createElement("div");
    brand.className = "brand";
    const img = document.createElement("img");
    img.src = "/assets/images/logo.png";
    img.alt = "Website Logo";
    const p = document.createElement("p");
    p.innerHTML = "AGRI JO";
    brand.append(img);
    brand.append(p);

    const navMenu = createNavMenu();

    const controlContainer = document.createElement("div");
    controlContainer.className = "controls flex items-center gap-4";
    const themeSwitcher = createThemeSwitchBtn();
    const mobileMenuBtn = document.createElement("button");
    mobileMenuBtn.classList.add("mobile-menu-btn");
    mobileMenuBtn.innerHTML = `
        <div class='hamburger'>
            <span class='bar'></span>
            <span class='bar'></span>
            <span class='bar'></span>
        </div>
    `;
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenuBtn.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    controlContainer.append(themeSwitcher);
    controlContainer.append(mobileMenuBtn);

    navContainer.append(brand);
    navContainer.append(navMenu);
    navContainer.append(controlContainer);

    header.append(navContainer);

    return header;
}
