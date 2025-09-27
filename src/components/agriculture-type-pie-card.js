import agriculturalStatistics from "../data/statistics.json";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { createBaseCard } from "./base-card.js";

Chart.register(ChartDataLabels);

export function createPieChartCard() {
    const canvas = document.createElement("canvas");
    canvas.id = "agricultureTypePie";
    canvas.className = "max-w-lg";

    const ctx = canvas.getContext("2d");

    const data = {
        labels: Object.keys(
            agriculturalStatistics.metrics.agricultureTypeDistribution
        ),
        datasets: [
            {
                label: "Agriculture Types Distribution (%)",
                data: Object.values(
                    agriculturalStatistics.metrics.agricultureTypeDistribution
                ),
                backgroundColor: [
                    "#59AC77", // horticulture
                    "#3A6F43", // cereals
                    "#A9B1B7", // livestock
                    "#8EC5E4", // other
                ],
                borderColor: "var(--border)",
                borderWidth: 1,
            },
        ],
    };

    const secondaryColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--secondary")
        .trim();
    console.log(secondaryColor);
    const config = {
        type: "pie",
        data: data,
        options: {
            plugins: {
                datalabels: {
                    color: "#fff",
                    formatter: (value, ctx) => {
                        const sum = ctx.chart.data.datasets[0].data.reduce(
                            (a, b) => a + b,
                            0
                        );
                        const percentage =
                            ((value / sum) * 100).toFixed(1) + "%";
                        const label = ctx.chart.data.labels[ctx.dataIndex];
                        return `${label}: ${percentage}`;
                    },
                    font: {
                        weight: "bold",
                    },
                },
                legend: {
                    position: "right",
                    labels: {
                        color: secondaryColor,
                        font: {
                            weight: "bold",
                            family: "Poppins, sans-serif",
                        },
                    },
                    title: {
                        text: "Agriculture Types (%)",
                    },
                },
            },
        },
    };
    // Create the pie chart
    new Chart(ctx, config);

    const header = document.createElement("div");
    header.className = "flex flex-col gap-2 mb-4";
    header.innerHTML = `
      <h1 class="text-3xl font-bold">Agriculture Types Overview</h1>
      <p class="text-[var(--text-muted)]">
        Distribution of cultivated area by agriculture type in Jordan.
      </p>
    `;
    const content = document.createElement("div");
    content.className = "flex justify-center";
    content.appendChild(canvas);
    const footer = document.createElement("div");
    footer.innerHTML = `
      <p>
          Data Source: FAO, World Bank, Jordanian Ministry of Agriculture
        </p>
        `;

    const myCard = createBaseCard({
        header,
        content,
        footer,
    });
    myCard.className += " col-span-1 md:col-span-2 lg:col-span-3";

    return myCard;
}
