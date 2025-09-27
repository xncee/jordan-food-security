import MainLayout from "../layouts/main-layout.js";
import agricultureTypes from "../data/agriculture-types.js";
import "../styles/agriculture-types.css";

export default function AgricultureTypesPage() {
    const cardsContainer = document.createElement("div");
    cardsContainer.className =
        "cards grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4";

    agricultureTypes.forEach((type) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="../assets/images/${type.image}" alt="${type.name}" />
            <div class="content-container">
                <h2>${type.name}</h2>
                <p><strong>Examples:</strong> ${type.examples.join(", ")}</p>
                <p><strong>Region:</strong> ${type.region}</p>
                <p><strong>Average Yield:</strong> ${type.averageYield}</p>
            </div>
        `;
        cardsContainer.appendChild(card);
    });

    const pageContent = document.createElement("div");
    pageContent.appendChild(cardsContainer);

    return MainLayout(pageContent);
}
