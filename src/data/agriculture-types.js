export const agricultureTypes = {
    country: "Jordan",
    updated: "2025-09-26",
    items: [
        {
            id: "rainfed_cereals",
            title: "Rain-fed cereal & field crops",
            shortDescription:
                "Traditional rain-fed wheat, barley and other field crops on highlands and plateaus.",
            longDescription:
                "Rain-fed cropping is practiced mainly on the northern and central highlands and plateau where annual precipitation is sufficient for cereals. Wheat and barley are the principal rain-fed cereals; cropping area is sensitive to seasonal rainfall variability and drought.",
            regions: ["Highlands / Plateau (north & central)"],
            typicalCrops: ["Wheat", "Barley", "Fodder crops"],
            irrigation: ["Rain-fed (no irrigation)"],
            seasonality:
                "Main planting in autumn (winter cropping); harvest in late spring/early summer",
            waterUse:
                "Low (dependent on rainfall; highly variable year to year)",
            imagePage:
                "https://www.fao.org/in-action/water-for-nutrition/country-activities/jordan/en",
            sources: [":contentReference[oaicite:0]{index=0}"],
        },
        {
            id: "irrigated_horticulture",
            title: "Irrigated horticulture (Jordan Valley & irrigated zones)",
            shortDescription:
                "Intensive irrigated production of vegetables, fruits and citrus in the Jordan Valley and irrigated strips.",
            longDescription:
                "The Jordan River Valley and irrigated basins support intensive horticulture and fruit production thanks to access to groundwater, springs and canal water. Farmers grow high-value vegetables, tomatoes, cucumbers, melons, citrus and other fruits — often with multiple cropping per year where water allows.",
            regions: [
                "Jordan River Valley",
                "Irrigated wadis and valley strips",
            ],
            typicalCrops: [
                "Tomatoes",
                "Cucumbers",
                "Melons",
                "Citrus",
                "Stone fruits",
            ],
            irrigation: [
                "Drip irrigation",
                "Sprinkler/center-pivot",
                "Well & canal-fed surface irrigation",
            ],
            seasonality:
                "Year-round production possible in valley; peak seasons vary by crop",
            waterUse:
                "Medium–High (intensive but shifting to efficient systems)",
            imagePage: "https://icarda.org/research/country/jordan",
            sources: [":contentReference[oaicite:1]{index=1}"],
        },
        {
            id: "protected_agriculture",
            title: "Protected agriculture (greenhouses & hydroponics)",
            shortDescription:
                "Greenhouses, shade houses and hydroponics — expanding to save water and increase yields.",
            longDescription:
                "Protected agriculture (plastic greenhouses, shade houses, hydroponic systems) has expanded in Jordan because it raises yields per m² and dramatically reduces water use per unit of production. Hydroponics and rooftop micro-greenhouses are used in cities and camps as well as commercial greenhouse farms in rural areas.",
            regions: [
                "Jordan Valley, urban rooftops (Amman, Jerash camps), specialized farms nationwide",
            ],
            typicalCrops: [
                "Leafy greens",
                "Strawberries",
                "Tomatoes (in greenhouses)",
                "Herbs",
            ],
            irrigation: [
                "Recirculating hydroponic nutrient systems",
                "Drip irrigation inside greenhouses",
            ],
            seasonality: "Often year-round (controlled environment)",
            waterUse:
                "Low (per kg produced) when recirculating hydroponics or modern drip systems are used",
            imagePage:
                "https://www.theguardian.com/global-development/2024/feb/05/palestinian-refugees-jerash-camp-jordan-hydroponic-horticulture",
            sources: [":contentReference[oaicite:2]{index=2}"],
        },
        {
            id: "olives_and_tree_crops",
            title: "Olive groves & perennial tree crops",
            shortDescription:
                "Olives, grapes and other tree crops on terraces and hillsides — important for rural livelihoods and exports.",
            longDescription:
                "Olive trees are a staple perennial crop across Jordan’s highlands and terraces, with grapes and some stone fruits also present. These trees are often better adapted to dryland conditions and provide both domestic consumption and export value (olive oil, table olives, grapes).",
            regions: ["Highlands, terraces and smaller irrigated orchards"],
            typicalCrops: ["Olives", "Grapes", "Almonds / other orchard trees"],
            irrigation: [
                "Mostly rain-fed; supplemental irrigation in orchards where water is available",
            ],
            seasonality:
                "Olive harvest in autumn; grapes and others vary by cultivar",
            waterUse:
                "Low–Medium (per hectare, depending on supplemental irrigation)",
            imagePage:
                "https://www.afd.fr/sites/default/files/2023-09-09-38-18/RT_72_VA_2_Web.pdf",
            sources: [":contentReference[oaicite:3]{index=3}"],
        },
        {
            id: "livestock_pastoralism",
            title: "Livestock & pastoralism",
            shortDescription:
                "Small ruminant herding (sheep, goats) and mixed crop-livestock systems in rural areas.",
            longDescription:
                "Pastoralism and small ruminant (sheep and goat) production remain important across Jordan, especially in drier eastern areas and among mixed smallholder systems. Livestock depend on fodder from rain-fed crops, purchased feed, and grazing resources; livestock also play a role in household livelihoods.",
            regions: [
                "Eastern Badia (desert grazing), scattered rural highlands",
            ],
            typicalCrops: [
                "Fodder crops (barley, vetch)",
                "Grazing seasonal shrubs",
            ],
            irrigation: ["Mostly none for grazing; fodder sometimes irrigated"],
            seasonality:
                "Grazing seasonal; fodder planting timed with rains or irrigation availability",
            waterUse: "Low (grazing) to Medium (irrigated fodder production)",
            imagePage:
                "https://archive.iwmi.org/assessment/files/word/ProjectDocuments/Jordan/farmingsystem_Jordanbasin-synthesis.pdf",
            sources: [":contentReference[oaicite:4]{index=4}"],
        },
        {
            id: "urban_rooftop_microfarms",
            title: "Urban & rooftop micro-farms",
            shortDescription:
                "Small hydroponic rooftop or balcony farms (often in refugee camps and dense urban areas).",
            longDescription:
                "In response to water scarcity and limited space, rooftop and small-scale hydroponic systems have been adopted in urban areas and refugee camps. These systems provide household income, improved diet diversity and local market supply, and are notable for low water use and small footprint.",
            regions: ["Amman, Jerash camp, other urban centers"],
            typicalCrops: ["Leafy greens", "Onions", "Herbs"],
            irrigation: ["Recirculating hydroponics, drip to containers"],
            seasonality: "Usually year-round with controlled setups",
            waterUse: "Very low (high water efficiency per kg)",
            imagePage:
                "https://www.theguardian.com/global-development/2024/feb/05/palestinian-refugees-jerash-camp-jordan-hydroponic-horticulture",
            sources: [":contentReference[oaicite:5]{index=5}"],
        },
    ],
    metadata: {
        summary:
            "Mixed systems: rain-fed cereals in the highlands, intensive irrigated horticulture in the Jordan Valley, expanding protected agriculture (greenhouses & hydroponics) to save water, and perennial olive/grove systems. Water scarcity is a cross-cutting constraint driving adoption of drip irrigation and hydroponics.",
        keySources: [
            "FAO country notes & activities. ",
            "USDA FAS Grain & Feed and reports on imports/production. :contentReference[oaicite:7]{index=7}",
            "World Bank and climate-smart agriculture features. :contentReference[oaicite:8]{index=8}",
            "EBRD / case studies on drip adoption and water-saving irrigation. :contentReference[oaicite:9]{index=9}",
            "The Guardian reporting on hydroponics & rooftop greenhouses in Jordan. :contentReference[oaicite:10]{index=10}",
        ],
    },
};
