import { route } from "../router";

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

export function createNavMenu() {
    const navMenu = document.createElement("ul");
    navMenu.classList.add("nav-menu");
    links.forEach((link) => {
        const a = document.createElement("a");
        a.classList.add("nav-link");
        a.href = link.href;
        a.innerHTML = link.name;
        a.addEventListener("click", handleLinkClicked);

        navMenu.appendChild(a);
    });

    return navMenu;
}

function handleLinkClicked(e) {
    e.preventDefault();
    const navLinks = document.querySelectorAll(".nav-link");
    const navMenu = document.querySelector(".nav-menu");

    navLinks.forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");
    if (navMenu) {
        navMenu.classList.remove("active");
    }

    route(e.target.href);
}
