let waitToEnd = false;
export function throttle(func, ms, text) {
    if (!waitToEnd) {
        waitToEnd = true;
        setTimeout(() => {
            console.log(text);
            waitToEnd = false;
        }, ms);
    }
    else {
        setTimeout(() => {
            throttle(throttle, ms, text);
        }, ms);
    }
}
throttle(throttle, 500, "Hola");
throttle(throttle, 1000, "Adios");
throttle(throttle, 1500, "Hola de nuevo");
throttle(throttle, 2000, "Bueno ahora si que ya me voy a ir yendo, adios");
//# sourceMappingURL=index.js.map