import { createStatsCard } from "../components/stats-card.js";
import agricultureTypes from "../data/agriculture-types.json";

document.addEventListener("DOMContentLoaded", () => {
    initializePage();
});

function initializePage() {
    const cardsContainer = document.querySelector(".agriculture-types");
    agricultureTypes.forEach((type) => {
        const card = createStatsCard(type);
        cardsContainer.appendChild(card);
    });
}
