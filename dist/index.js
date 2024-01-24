"use strict";
const delay = 1500;
const userString = "Hello, World";
function throttle(text, delay) {
    let timerFlag = null;
    return () => {
        if (timerFlag === null) {
            printText(text);
            timerFlag = setTimeout(() => {
                timerFlag = null;
            }, delay);
        }
    };
}
function printText(text) {
    console.log(text);
}
//# sourceMappingURL=index.js.map