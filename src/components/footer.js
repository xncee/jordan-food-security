export function createFooter() {
    const footer = document.createElement("footer");
    footer.className = "footer";

    const p = document.createElement("p");
    p.innerHTML = "&copy;2025 All rights reserved.";

    footer.append(p);
    return footer;
}
