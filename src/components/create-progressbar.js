import "../globals.css";

export const createProgressBar = (label, percentage, maxValue = 147) => {
    const width = Math.min((percentage / maxValue) * 100, 100);

    return `
    <div class="grid grid-cols-[100px_1fr_60px] items-center gap-3">
      <div class="font-medium text-[var(--text-secondary)] text-sm">${label}</div>
      <div class="h-2 bg-[var(--background)] rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--secondary)] rounded-full transition-all duration-1000 ease-in-out" style="width: ${width}%"></div>
      </div>
      <div class="font-semibold text-[var(--secondary)] text-sm">${percentage}%</div>
    </div>
  `;
};

export const createSelfSufficiencyCard = (ratios) => {
    const progressBars = Object.entries(ratios)
        .map(([key, value]) => {
            const labels = {
                tomatoes: "Tomatoes",
                cucumbers: "Cucumbers",
                squash: "Squash",
                eggplants: "Eggplants",
                dryOnions: "Dry Onions",
            };
            return createProgressBar(labels[key], value);
        })
        .join("");

    const cardBase =
        "bg-[var(--card)] rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border-4";

    return `
    <div class="${cardBase} border-[var(--border)] col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-4 row-span-2">
      <div>
        <h3 class="text-lg font-semibold mb-5 text-[var(--text-primary)]">Self-Sufficiency Ratios (2020)</h3>
        <div class="flex flex-col gap-4">
          ${progressBars}
        </div>
      </div>
    </div>
  `;
};
