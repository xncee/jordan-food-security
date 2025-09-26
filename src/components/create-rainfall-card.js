export const createRainfallCard = (highlandsRainfall, desertRainfall) => `
    <div class="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border-t-4 border-emerald-500">
      <div class="text-4xl mb-4">🌧️</div>
      <div>
        <h3 class="text-lg font-semibold mb-4 text-gray-700">Annual Rainfall</h3>
        <div class="flex items-center justify-between">
          <div class="text-center flex-1">
            <div class="text-xs text-gray-500 mb-2">Highlands</div>
            <div class="text-xl font-bold text-emerald-500">${highlandsRainfall}mm</div>
          </div>
          <div class="w-0.5 h-10 bg-gray-200 mx-5"></div>
          <div class="text-center flex-1">
            <div class="text-xs text-gray-500 mb-2">Eastern Desert</div>
            <div class="text-xl font-bold text-emerald-500">${desertRainfall}mm</div>
          </div>
        </div>
      </div>
    </div>
  `;
