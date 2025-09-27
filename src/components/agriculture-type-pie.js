import agriculturalStatistics from "../data/statistics.json";
import Chart from "chart.js/auto";

export function createPieChart() {
    const canvas = document.createElement("canvas");
    canvas.id = "agricultureTypePie";

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
                borderColor: "#1f1f1f",
                borderWidth: 1,
            },
        ],
    };

    const config = {
        type: "pie",
        data: data,
        options: {
            plugins: {
                legend: {
                    position: "bottom",
                    labels: {
                        color: `var(--text-color)`, // adjust for dark theme
                    },
                    title: {
                        display: true,
                        text: "Chart.js Pie Chart",
                    },
                },
            },
        },
    };
    // Create the pie chart
    new Chart(ctx, config);

    return canvas;
}
