import { createGrid } from "../components/create-grid.js";
import MainLayout from "../layouts/main-layout";
import agriculturalData from "../data/statistics.js";

export default function HomePage() {
    const container = document.createElement("div");
    container.className =
        "text-gray-800 max-w-[1600px] mx-auto p-4 sm:p-6 lg:p-8";

    const grid = createGrid(agriculturalData);

    container.innerHTML = grid;
    return MainLayout(container);
}
