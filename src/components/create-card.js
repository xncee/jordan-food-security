import "../styles/home.css";
import { cn } from "../lib/utils.js";

// // Helper to merge class names
// function cn(...classes) {
//     return classes.filter(Boolean).join(" ");
// }

/**
 * Create a card of any type (default, small, mini) by passing options.
 * @param {Object} config
 * @param {string} config.icon
 * @param {string} config.title
 * @param {string|number} config.value
 * @param {string} [config.unit]
 * @param {string} [config.subtitle]
 * @param {string} [config.borderColor]
 * @param {string} [config.colSpan]
 * @param {string} [config.rowSpan]
 */
export const createCard = (config) => {
    const {
        icon,
        title,
        value,
        unit = "",
        subtitle = "",
        borderColor = "var(--border)",
        colSpan = "col-span-1",
        rowSpan = "row-span-1",
    } = config;

    const cardClass = cn(
        "base-card",
        `border-[${borderColor}]`,
        colSpan,
        rowSpan
    );
    const titleColor = "text-[var(--text-primary)]";
    const valueColor = "text-[var(--secondary)]";

    return `
    <div class="${cardClass}">
      <div class="text-4xl mb-4">${icon}</div>
      <div>
        <h2 class="text-xl font-semibold mb-3 ${titleColor}">${title}</h2>
        <div class="text-4xl font-bold ${valueColor} leading-none mb-1">${value}</div>
        ${
            unit
                ? `<div class="text-sm text-[var(--text-muted)] font-medium">${unit}</div>`
                : ""
        }
        ${
            subtitle
                ? `<div class="text-xs text-[var(--text-muted)] mt-2">${subtitle}</div>`
                : ""
        }
      </div>
    </div>
  `;
};
