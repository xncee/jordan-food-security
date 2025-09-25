import "./style.css";
import { createHeader } from "./components/header.js";
import { initializeGlobal } from "./scripts/global.js";
import { createFooter } from "./components/footer.js";

document.addEventListener("DOMContentLoaded", () => {
    initializeGlobal();
    createHeader(document.querySelector("#header"));
    createFooter(document.querySelector("#footer"));
});
