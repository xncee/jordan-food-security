export function createStatsCard(card) {
    const div = document.createElement("div");
    div.classList.add(
        "card",
        "p-6",
        "has-background-light",
        "has-text-centered",
        "shadow-md",
        "rounded-lg"
    );
    div.innerHTML = `
        <h2 class="title">${card.title}</h2>
        <p class="subtitle">${card.subtitle}</p>
        <div class="content">${card.content}</div>
    `;

    return div;
}
