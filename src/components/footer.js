export function createFooter(footer) {
    const p = document.createElement("p");
    p.innerHTML = "&copy;2025 All rights reserved.";

    footer.append(p);
}
