import { cn } from "../lib/utils";

const baseCardClass =
    "border-[var(--border)] text-[var(--text-primary)] bg-[var(--card)] rounded-2xl p-6 shadow-xl hover:shadow-2xl relative overflow-hidden border-4";
const animationsClass = "hover:-translate-y-1 transition-all duration-300";

export function createPlantCard(plant) {
    const card = document.createElement("div");
    card.className = cn(baseCardClass, animationsClass);
    card.innerHTML = `
            <img src="../assets/images/${plant.image}" alt="${plant.name}" />
            <div class="content-container">
                <h2>${plant.name}</h2>
                <p><strong>Description:</strong> ${plant.description}</p>
                <p><strong>Types:</strong> ${plant.types.join(", ")}</p>
                <p><strong>Rarity:</strong> ${plant.rarity}</p>
                ${
                    plant.commonNames
                        ? `<p><strong>Common names:</strong> ${plant.commonNames.join(
                              ", "
                          )}</p>`
                        : ""
                }
                <p><strong>Regions:</strong> ${plant.regions.join(", ")}</p>
            </div>
        `;

    return card;
}
