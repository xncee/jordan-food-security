export default function PlantDiseasesPage() {
    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
    const content = document.createElement("div");
    content.id = "content";
    content.innerHTML = `
        <div class="card">
            <img
                src="../assets/images/potato.png"
                alt="Potato"
                class="card-img"
            />
            <h2>Potato</h2>
            <p>Late blight</p>
            <p>10,000 dunums affected</p>
            <p>Losses up to 70%</p>
            <p>Jordan Valley</p>
        </div>
    `;

    wrapper.appendChild(content);
    return wrapper;
}
