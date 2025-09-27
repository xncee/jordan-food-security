import MainLayout from "../components/main-layout.js";
import { createPlantCard } from "../components/plant-card";
import { createFilterPanel } from "../components/filter-panel.js";
import cropsAndPlants from "../data/crops-and-plants.json";
// import "../styles/crops-and-plants.css";
const state = {
    searchQuery: "",
    filters: {
        type: "-",
        rarity: "-",
    },
};

function getFilteredPlants() {
    // console.log(JSON.stringify(state));
    let filtered = cropsAndPlants.slice();
    // Filter by type
    const type = state.filters.type.toLowerCase();
    if (type !== "-") {
        filtered = filtered.filter((plant) =>
            plant.types.map((t) => t.toLowerCase()).includes(type)
        );
    }

    // Filter by rarity
    const rarity = state.filters.rarity.toLowerCase();
    if (rarity !== "-") {
        filtered = filtered.filter((plant) =>
            plant.rarity.toLowerCase().includes(rarity)
        );
    }

    // Filter by search query
    const searchQuery = state.searchQuery.toLowerCase().trim();
    if (searchQuery !== "") {
        filtered = filtered.filter((plant) =>
            plant.name.toLowerCase().includes(searchQuery)
        );
    }

    return filtered;
}

function renderPlantCards(data) {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "";
    data.forEach((plant) => {
        const card = createPlantCard(plant);
        cardsContainer.appendChild(card);
    });
}

function handleSearch(value) {
    state.searchQuery = value;
    renderPlantCards(getFilteredPlants());
}

function handleFilter({ filterType, filterValue }) {
    state.filters[filterType] = filterValue;
    renderPlantCards(getFilteredPlants());
}

export default function CropsAndPlantsPage() {
    const cardsContainer = document.createElement("div");
    cardsContainer.id = "cards-container";
    cardsContainer.className =
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4";

    const filtered = getFilteredPlants();
    filtered.forEach((plant) => {
        const card = createPlantCard(plant);
        cardsContainer.appendChild(card);
    });

    const filterPanel = createFilterPanel({ handleSearch, handleFilter });
    const pageContent = document.createElement("div");
    pageContent.appendChild(filterPanel);
    pageContent.appendChild(cardsContainer);

    return MainLayout(pageContent);
}
