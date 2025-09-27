import { createCard } from "./create-card.js";
import { createSelfSufficiencyCard } from "./create-progressbar.js";
import { createRainfallCard } from "./create-rainfall-card.js";

export const createGrid = (data) => {
    const metrics = data.metrics;

    const cards = [
        // Large cultivated area card
        createCard({
            colSpan: "col-span-1 md:col-span-2",
            rowSpan: "row-span-2",
            icon: "🌾",
            title: "Total Cultivated Area",
            value: metrics.totalCultivatedAreaHa.toLocaleString(),
            unit: "Hectares",
            subtitle: `${metrics.percentageLandAgricultural}% of total land`,
        }),

        // Production growth card
        createCard({
            rowSpan: "lg:row-span-2",
            icon: "📈",
            title: "Production Growth",
            value: `+${metrics.foodProductionIncrease_2013_2022_percent}%`,
            subtitle: "2013-2022",
        }),

        // Vegetable production card
        createCard({
            rowSpan: "lg:row-span-2",
            icon: "🥬",
            title: "Vegetable Production",
            value: `${(
                metrics.vegetablesProduction_tons_per_year / 1000000
            ).toFixed(1)}M`,
            unit: "tons/year",
        }),

        // 2024 exports card
        createCard({
            rowSpan: "lg:row-span-2",
            colSpan: "col-span-1 md:col-span-2",
            icon: "📦",
            title: "2024 Exports",
            value: `${Math.round(
                metrics.vegetableExportsFirst5Months2024_tonnes / 1000
            )}K`,
            unit: "tonnes",
            subtitle: "First 5 months",
        }),

        // Export turnover card
        createCard({
            colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
            rowSpan: "row-span-2",
            icon: "💰",
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
        createCard({
            icon: "🚜",
            title: "Arable Land",
            value: `${Math.round(metrics.arableLandHa / 1000)}K`,
            unit: "Ha",
            size: "mini",
        }),

        // GDP share card
        createCard({
            icon: "🏛️",
            title: "GDP Share",
            value: `${metrics.agriculturalGDPPercent}%`,
            unit: "Agriculture",
        }),

        // Labour force card
        createCard({
            icon: "👥",
            title: "Labour Force",
            value: `${metrics.agricultureLabourForcePercent}%`,
            unit: "Agriculture",
        }),
    ];

    return `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3 auto-rows-min">
      ${cards.join("")}
    </div>
  `;
};
