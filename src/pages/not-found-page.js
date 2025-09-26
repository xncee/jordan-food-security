export default function NotFoundPage() {
    return `<div class="not-found-page min-h-screen flex items-center justify-center flex-col ">
            <h1 class="text-4xl font-bold">404 - Page Not Found</h1>
            <p class="text-lg">The page you are looking for does not exist.</p>
            <a class="bg-black text-white p-4 rounded" href="/" onclick="window.route('/')">Go to Home</a>
        </div>`;
}
