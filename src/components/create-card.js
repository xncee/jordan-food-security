const baseCardClasses =
    "bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border-4";

// Helper to merge class names
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

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
 * @param {string} [config.size] - 'default' | 'small' | 'mini'
 */
export const createCard = (config) => {
    const {
        icon,
        title,
        value,
        unit = "",
        subtitle = "",
        borderColor = "border-indigo-500",
        colSpan = "col-span-1",
        rowSpan = "row-span-1",
    } = config;

    // Size-based settings
    let headingTag = "h2";
    let titleClass = "text-xl font-semibold mb-3 text-gray-700";
    let valueClass = "text-4xl font-bold";
    let valueMargin = "mb-1";
    let titleMargin = "mb-3";

    headingTag = "h3";
    titleClass = "text-lg font-semibold mb-3 text-gray-700";
    valueClass = "text-4xl font-bold";
    valueMargin = "mb-1";
    titleMargin = "mb-3";

    // Compose classes
    const cardClass = cn(
        baseCardClasses,
        colSpan,
        rowSpan,
        `border-[var(--border)]`
    );
    // const cardClass = cn(baseCardClasses, colSpan, rowSpan, borderColor);
    const valueColorClass = borderColor.replace("border-", "text-");

    // Dynamic heading
    const heading = `<${headingTag} class="${titleClass}">${title}</${headingTag}>`;

    return `
    <div class="${cardClass}">
      <div class="text-4xl mb-4">${icon}</div>
      <div>
        ${heading}
        <div class="${valueClass} ${valueColorClass} leading-none ${valueMargin}">${value}</div>
        ${
            unit
                ? `<div class="text-sm text-gray-500 font-medium">${unit}</div>`
                : ""
        }
        ${
            subtitle
                ? `<div class="text-xs text-gray-400 mt-2">${subtitle}</div>`
                : ""
        }
      </div>
    </div>
  `;
};
