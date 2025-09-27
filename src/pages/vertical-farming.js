import "../styles/vertical-farming.css";
import verticalFarmingData from "../data/vertical-farming.json";
import MainLayout from "../components/main-layout.js";

export default function VerticalFarmingPage() {
    const container = document.createElement("div");
    container.className = "vertical-farming-page";

    const title = document.createElement("h1");
    title.className = "text-3xl font-bold mb-8 text-center";
    title.textContent = "Vertical Farming in Jordan";
    container.appendChild(title);

    verticalFarmingData.forEach((section) => {
        const sectionDiv = document.createElement("div");
        sectionDiv.className = "vf-section";

        const img = document.createElement("img");
        img.src = section.image;
        img.alt = section.title;
        sectionDiv.appendChild(img);

        const contentDiv = document.createElement("div");
        contentDiv.className = "vf-section-content";

        const h2 = document.createElement("h2");
        h2.textContent = section.title;
        contentDiv.appendChild(h2);

        const p = document.createElement("p");
        p.textContent = section.description;
        contentDiv.appendChild(p);

        sectionDiv.appendChild(contentDiv);
        container.appendChild(sectionDiv);
    });

    return MainLayout(container);
}
