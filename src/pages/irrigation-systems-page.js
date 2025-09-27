import "../styles/irrigation-systems.css";
import irrigationData from "../data/irrigation-systems.json";
import MainLayout from "../components/main-layout.js";

function createSection({
    image,
    alt,
    title,
    description,
    details,
    reverse = false,
}) {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = `section${reverse ? " reverse" : ""}`;

    // Image
    const imageDiv = document.createElement("div");
    imageDiv.className = "image";
    const img = document.createElement("img");
    img.src = `/assets/images/${image}`;
    img.alt = alt || title;
    imageDiv.appendChild(img);

    // Content
    const contentDiv = document.createElement("div");
    contentDiv.className = "content";
    const h2 = document.createElement("h2");
    h2.textContent = title;
    contentDiv.appendChild(h2);
    if (description) {
        const p = document.createElement("p");
        p.textContent = description;
        contentDiv.appendChild(p);
    }
    if (details && details.length) {
        const ul = document.createElement("ul");
        details.forEach((detail) => {
            const li = document.createElement("li");
            li.innerHTML = detail;
            ul.appendChild(li);
        });
        contentDiv.appendChild(ul);
    }

    // Always append image then content; let CSS handle flex direction
    sectionDiv.appendChild(imageDiv);
    sectionDiv.appendChild(contentDiv);
    return sectionDiv;
}

export default function IrrigationSystemsPage() {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    // Irrigation systems
    irrigationData.irrigation_systems.forEach((system, idx) => {
        wrapper.appendChild(
            createSection({
                image: system.image,
                alt: system.name,
                title: system.name,
                description: system.description,
                details: [
                    `Usage: ${system.usage}`,
                    `Regions: ${system.regions.join(", ")}`,
                ],
                reverse: idx % 2 === 1,
            })
        );
    });

    // Water sources
    wrapper.appendChild(
        createSection({
            image: "sectionr.png",
            alt: "Water Sources",
            title: "Water Sources",
            details: irrigationData.water_sources.map(
                (src) => `${src.type}: ${src.percentage} - ${src.description}`
            ),
            reverse: true,
        })
    );

    // Irrigated area
    wrapper.appendChild(
        createSection({
            image: "area.png",
            alt: "Irrigated Area",
            title: "Irrigated Area",
            details: [
                `Total: ${irrigationData.irrigated_area.total}`,
                `Jordan Valley: ${irrigationData.irrigated_area.jordan_valley}`,
                `Highlands & Desert: ${irrigationData.irrigated_area.highlands_desert}`,
            ],
        })
    );

    // Challenges
    wrapper.appendChild(
        createSection({
            image: "chall.png",
            alt: "Challenges",
            title: "Challenges",
            details: irrigationData.challenges,
            reverse: true,
        })
    );

    // Innovations
    wrapper.appendChild(
        createSection({
            image: "innov.png",
            alt: "Innovations",
            title: "Innovations",
            details: irrigationData.innovations.map(
                (i) =>
                    `<strong>${i.name}:</strong> ${i.description} ${
                        i.examples ? "Examples: " + i.examples.join(", ") : ""
                    }`
            ),
        })
    );

    // Main container
    const page = document.createElement("div");
    page.appendChild(wrapper);
    return MainLayout(page);
}
