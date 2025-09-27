import { createSearchBar } from "./search-bar.js";
import { createDropDown } from "./drop-down.js";

export function createFilterPanel({ handleSearch, handleFilter }) {
    const filterPanel = document.createElement("div");
    filterPanel.className = "flex flex-col my-4 p-4";

    const searchBar = createSearchBar(handleSearch);
    const filterContainer = document.createElement("div");
    filterContainer.className = "filters-container";

    const typeFilter = createDropDown({
        label: "Type",
        options: ["", "Vegetable", "Fruit", "Grain", "Legume"],
        onChange: handleFilter,
    });
    const rarityFilter = createDropDown({
        label: "Rarity",
        options: [
            "",
            "common",
            "rare",
            "uncommon",
            "native-wild",
            "endangered",
            "localized",
        ],
        onChange: handleFilter,
    });
    filterContainer.appendChild(typeFilter);
    filterContainer.appendChild(rarityFilter);

    filterPanel.appendChild(searchBar);
    filterPanel.appendChild(filterContainer);

    return filterPanel;
}
