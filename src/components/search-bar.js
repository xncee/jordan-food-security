export function createSearchBar(onSearch) {
    const searchBar = document.createElement("input");
    searchBar.type = "text";
    searchBar.placeholder = "Search crops or plants...";
    searchBar.className = "search-bar";
    searchBar.addEventListener("input", (event) =>
        onSearch(event.target.value)
    );

    return searchBar;
}
