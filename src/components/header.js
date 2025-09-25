import { createThemeSwitchBtn } from "./theme-switcher";
import logo from "../assets/logo.png";

const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Agriculture Types",
        href: "/agriculture-types",
    },
    {
        name: "Irrigation Systems",
        href: "/irrigation-systems",
    },
    {
        name: "Crops & Plants",
        href: "/crops-and-plants",
    },
    {
        name: "Vertical Farming",
        href: "/vertical-farming",
    },
    {
        name: "Plant Diseases",
        href: "/plant-diseases",
    },
];

export function createHeader(header) {
    const navContainer = document.createElement("nav");
    navContainer.classList.add("nav");
    navContainer.classList.add("container");

    const brand = document.createElement("div");
    brand.className = "brand";
    const img = document.createElement("img");
    img.src = logo;
    img.alt = "Website Logo";
    const p = document.createElement("p");
    p.innerHTML = "Jordan Agriculture";
    brand.append(img);
    brand.append(p);

    const navMenu = document.createElement("ul");
    links.forEach((link) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.classList.add("nav-link");
        a.href = link.href;
        a.innerHTML = link.name;
        li.append(a);
        navMenu.appendChild(li);
    });

    navContainer.append(brand);
    navContainer.append(navMenu);

    header.append(navContainer);
    // navbar.append(switchThemeBtn);
}
