export function createDropDown({ label, options, onChange }) {
    const filter = document.createElement("div");
    filter.className = "filter";
    const labelElement = document.createElement("label");
    labelElement.textContent = label;
    labelElement.className = "filter-label";
    const select = document.createElement("select");
    select.className = "filter-select";
    options.forEach((option) => {
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });

    filter.appendChild(labelElement);
    filter.appendChild(select);

    select.addEventListener("change", (event) => {
        onChange({
            filterType: label.toLowerCase(),
            filterValue: event.target.value,
        });
    });
    return filter;
}
