import "./style.css";
import { createHeader } from "./components/header.js";
import { initializeGlobal } from "./scripts/global.js";
import { createFooter } from "./components/footer.js";

document.addEventListener("DOMContentLoaded", () => {
    initializeGlobal();
    createHeader(document.querySelector("#header"));
    createFooter(document.querySelector("#footer"));

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((navLink) => {
        navLink.addEventListener("click", (e) => {
            e.preventDefault();

            navLinks.forEach((l) => l.classList.remove("active"));
            e.target.classList.add("active");
        });
    });
});
