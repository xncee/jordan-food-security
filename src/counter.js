export function setupCounter(element) {
    let counter = 0;

    function setCounter(count) {
        counter = count;
        element.innerHTML = `Hala's age is: ${counter}`;
    }

    const handler = () => setCounter(counter + 1);
    element.addEventListener("click", handler);
    setCounter(0);
}
