import logo from "../assets/logo.png";
import { createNavMenu } from "./nav-menu";

export function createHeader(header) {
    const navContainer = document.createElement("nav");
    navContainer.className = "nav container";

    const brand = document.createElement("div");
    brand.className = "brand";
    const img = document.createElement("img");
    img.src = logo;
    img.alt = "Website Logo";
    const p = document.createElement("p");
    p.innerHTML = "Jordan Agriculture";
    brand.append(img);
    brand.append(p);

    const navMenu = createNavMenu();

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

    navContainer.append(brand);
    navContainer.append(navMenu);
    navContainer.append(mobileMenuBtn);

    header.append(navContainer);
}
