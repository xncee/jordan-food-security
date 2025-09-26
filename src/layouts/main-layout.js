import { createHeader } from "../components/header.js";
import { createFooter } from "../components/footer.js";

export default function MainLayout(html) {
    const container = document.createDocumentFragment();

    const header = createHeader();
    const footer = createFooter();

    const main = document.createElement("main");

    if (typeof html === "string") {
        const fragment = document.createDocumentFragment();
        fragment.innerHTML = html;
        main.appendChild(fragment);
    } else if (html instanceof HTMLElement) {
        main.appendChild(html);
    }

    container.appendChild(header);
    container.appendChild(main);
    container.appendChild(footer);
    /*
    <>
        <header>...</header>
        <main>...</main>
        <footer>...</footer>
    </>
    */

    return container;
}
