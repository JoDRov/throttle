export const delay = 1500;
export const id = 1;
const userArray = ["Jose", "David", "Juan"];
export async function throttle(id, delay) {
    setTimeout(() => {
        console.log(`${userArray[id]} inside function`);
        const resultFn = userArray[id];
        return resultFn;
    }, delay);
}
throttle(id, delay).then((data) => console.log(data));
//console.log(`${result} after calling the function`)
//# sourceMappingURL=index.js.map