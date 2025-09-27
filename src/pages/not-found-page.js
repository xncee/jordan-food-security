import "../globals.css";

export default function NotFoundPage() {
    return `<div class="flex flex-col gap-2 min-h-screen items-center justify-center">
            <h1 class="text-4xl font-bold text-[var(--text-primary)]">404 - Page Not Found</h1>
            <p class="text-lg text-[var(--text-muted)]">The page you are looking for does not exist.</p>
            <a class="bg-[var(--accent)] text-[var(--text-primary)] py-2 px-4 rounded-xl" href="/" onclick="window.route('/')">Go to Home</a>
        </div>`;
}
