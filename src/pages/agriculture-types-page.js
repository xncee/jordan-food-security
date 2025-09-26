import { agricultureTypes } from "../data/agriculture-types.js";
import createStatsCard from "../components/stats-card";
import MainLayout from "../layouts/main-layout";

export default function AgricultureTypesPage() {
    const cardsContainer = document.createElement("div");
    cardsContainer.className =
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6";

    agricultureTypes.items.forEach((type) => {
        const card = createStatsCard(type);
        cardsContainer.appendChild(card);
    });

    return MainLayout(cardsContainer);
}
