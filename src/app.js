export default function App() {
    // here you can add global components like modals, toasts, etc.
    // you have to append them to the app fragment
    const app = document.createDocumentFragment();

    const pageContent = document.createElement("div");
    pageContent.id = "content";

    app.appendChild(pageContent);

    return app;
}
