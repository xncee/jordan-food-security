export const createProgressBar = (label, percentage, maxValue = 147) => {
  const width = Math.min((percentage / maxValue) * 100, 100)

  return `
    <div class="grid grid-cols-[100px_1fr_60px] items-center gap-3">
      <div class="font-medium text-gray-600 text-sm">${label}</div>
      <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-in-out" style="width: ${width}%"></div>
      </div>
      <div class="font-semibold text-purple-500 text-sm">${percentage}%</div>
    </div>
  `
}

export const createSelfSufficiencyCard = (ratios) => {
  const progressBars = Object.entries(ratios)
    .map(([key, value]) => {
      const labels = {
        tomatoes: "Tomatoes",
        cucumbers: "Cucumbers",
        squash: "Squash",
        eggplants: "Eggplants",
        dryOnions: "Dry Onions",
      }
      return createProgressBar(labels[key], value)
    })
    .join("")

  return `
    <div class="col-span-1 md:col-span-2 lg:col-span-4 xl:col-span-3 row-span-2 bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border-t-4 border-purple-500">
      <div>
        <h3 class="text-lg font-semibold mb-5 text-gray-700">Self-Sufficiency Ratios (2020)</h3>
        <div class="flex flex-col gap-4">
          ${progressBars}
        </div>
      </div>
    </div>
  `
}
