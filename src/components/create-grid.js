import { createPieChartCard } from "./agriculture-type-pie-card.js";
import { createBaseCard } from "./base-card.js";
import { createSelfSufficiencyCard } from "./create-progressbar.js";
import { createRainfallCard } from "./create-rainfall-card.js";
import { cn } from "../lib/utils.js";
import "../styles/home.css";

function createGridCard(config) {
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

    const baseCard = createBaseCard({
        header: null,
        content: null,
        // footer,
    });
    baseCard.className += cn(colSpan, rowSpan, `border-[${borderColor}]`);

    const cardClass = cn(
        "base-card",
        `border-[${borderColor}]`,
        colSpan,
        rowSpan
    );

    return `
    <div class="${cardClass}">
      ${
          icon
              ? `<img class="w-9 h-9 mb-4" src="/assets/images/${icon}" alt="${title} icon">`
              : ""
      }
      <div>
        <h2 class="text-xl font-semibold mb-3 text-[var(--text-primary)]">${title}</h2>
        <div class="text-4xl font-bold text-[var(--secondary)] leading-none mb-1">${value}</div>
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
}
export const createGrid = (data) => {
    const metrics = data.metrics;

    const container = document.createElement("div");
    container.className =
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3 auto-rows-min";

    const cards = [
        // Large cultivated area card
        createGridCard({
            colSpan: "col-span-1 md:col-span-2",
            rowSpan: "row-span-2",
            icon: "sprout.svg",
            title: "Total Cultivated Area",
            value: metrics.totalCultivatedAreaHa.toLocaleString(),
            unit: "Hectares",
            subtitle: `${metrics.percentageLandAgricultural}% of total land`,
        }),

        // Production growth card
        createGridCard({
            rowSpan: "lg:row-span-2",
            icon: "growth.svg",
            title: "Production Growth",
            value: `+${metrics.foodProductionIncrease_2013_2022_percent}%`,
            subtitle: "2013-2022",
        }),

        // Vegetable production card
        createGridCard({
            rowSpan: "lg:row-span-2",
            icon: "lettuce.svg",
            title: "Vegetable Production",
            value: `${(
                metrics.vegetablesProduction_tons_per_year / 1000000
            ).toFixed(1)}M`,
            unit: "tons/year",
        }),

        // 2024 exports card
        createGridCard({
            rowSpan: "lg:row-span-2",
            colSpan: "col-span-1 md:col-span-2",
            icon: "truck.svg",
            title: "2024 Exports",
            value: `${Math.round(
                metrics.vegetableExportsFirst5Months2024_tonnes / 1000
            )}K`,
            unit: "tonnes",
            subtitle: "First 5 months",
        }),

        // Export turnover card
        createGridCard({
            colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
            rowSpan: "row-span-3",
            icon: "money-cash.svg",
            title: "Export Turnover",
            value: `${metrics.horticultureExportTurnover_JD / 1000000}M`,
            unit: "JD",
            subtitle: "Horticulture exports",
        }),

        // Self-sufficiency ratios card
        createSelfSufficiencyCard(metrics.selfSufficiencyRatios2020),

        // Rainfall card
        createRainfallCard(
            metrics.rainfallHighlands_mm,
            metrics.rainfallEasternDesert_mm
        ),

        // Arable land card
        createGridCard({
            icon: "tractor.svg",
            title: "Arable Land",
            value: `${Math.round(metrics.arableLandHa / 1000)}K`,
            unit: "Hectares",
            size: "mini",
        }),

        // GDP share card
        createGridCard({
            icon: "profit.svg",
            title: "GDP Share",
            value: `${metrics.agriculturalGDPPercent}%`,
            unit: "Agriculture",
        }),

        // Labour force card
        createGridCard({
            icon: "farming-tools.svg",
            title: "Labour Force",
            value: `${metrics.agricultureLabourForcePercent}%`,
            unit: "Agriculture",
        }),
    ];

    container.innerHTML = cards.join("");

    const pieChart = createPieChartCard();
    pieChart.className += " col-span-1 row-span-2 md:col-span-2 lg:col-span-3";
    container.appendChild(pieChart);

    return container;
};
