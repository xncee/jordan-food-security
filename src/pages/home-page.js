import { createGrid } from "../components/create-grid.js";
import MainLayout from "../components/main-layout";
import agriculturalData from "../data/statistics.json";

export default function HomePage() {
    const container = document.createElement("div");
    container.className =
        "text-gray-800 max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8";

    const grid = createGrid(agriculturalData);

    container.appendChild(grid);
    return MainLayout(container);
}
