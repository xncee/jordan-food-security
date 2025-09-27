export function createFooter() {
    const footer = document.createElement("footer");
    footer.className =
        "flex flex-col justify-center items-center px-4 py-6 border-t border-[var(--border)] text-[var(--text-muted)]";

    const p = document.createElement("p");
    p.innerHTML = "&copy;2025 All rights reserved.";

    footer.append(p);
    return footer;
}
