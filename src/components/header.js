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
    navMenu.classList.add("nav-menu");
    links.forEach((link) => {
        const a = document.createElement("a");
        a.classList.add("nav-link");
        a.href = link.href;
        a.innerHTML = link.name;
        a.addEventListener("click", handleLinkClicked);

        navMenu.appendChild(a);
    });

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

function handleLinkClicked(e) {
    e.preventDefault();
    const navLinks = document.querySelectorAll(".nav-link");
    const navMenu = document.querySelector(".nav-menu");

    navLinks.forEach((l) => l.classList.remove("active"));
    e.target.classList.add("active");
    if (navMenu) {
        navMenu.classList.remove("active");
    }
    window.history.pushState({}, "", e.target.href);
    // window.dispatchEvent(new PopStateEvent("popstate"));
}

// window.addEventListener("popstate", () => {
//     // Update active states when user uses back/forward
//     const navLinks = document.querySelectorAll(".nav-link");
//     navLinks.forEach((link) => {
//         link.classList.remove("active");
//         if (link.getAttribute("href") === window.location.pathname) {
//             link.classList.add("active");
//         }
//     });
// });
