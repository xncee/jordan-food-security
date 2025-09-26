const links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Agriculture Types",
        href: "/pages/agriculture-types.html",
    },
    {
        name: "Irrigation Systems",
        href: "/pages/irrigation-systems.html",
    },
    {
        name: "Crops & Plants",
        href: "/pages/crops-and-plants.html",
    },
    {
        name: "Vertical Farming",
        href: "/pages/vertical-farming.html",
    },
    {
        name: "Plant Diseases",
        href: "/pages/plant-diseases.html",
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
    // e.preventDefault();
    const navLinks = document.querySelectorAll(".nav-link");
    const navMenu = document.querySelector(".nav-menu");

    navLinks.forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");
    if (navMenu) {
        navMenu.classList.remove("active");
    }
}
