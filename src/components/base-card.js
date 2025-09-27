import { cn } from "../lib/utils.js";

const baseCardClass =
    "border-[var(--border)] text-[var(--text-primary)] bg-[var(--card)] rounded-2xl p-6 shadow-xl hover:shadow-2xl relative overflow-hidden border-4";
const animationsClass = "hover:-translate-y-1 transition-all duration-300";

export function createBaseCard({ header, content, footer }) {
    const cardContainer = document.createElement("div");
    cardContainer.className = cn(baseCardClass, animationsClass);

    if (header) {
        const headerWrapper = document.createElement("div");
        headerWrapper.className = "text-lg font-semibold mb-4";
        headerWrapper.appendChild(header);
        cardContainer.appendChild(headerWrapper);
    }
    if (content) {
        const contentWrapper = document.createElement("div");
        contentWrapper.appendChild(content);
        cardContainer.appendChild(contentWrapper);
    }
    if (footer) {
        const footerWrapper = document.createElement("div");
        footerWrapper.className = "text-sm text-[var(--text-muted)] mt-4";
        footerWrapper.appendChild(footer);
        cardContainer.appendChild(footerWrapper);
    }

    return cardContainer;
}
