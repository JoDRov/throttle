export const delay: number = 1500
export const id: number = 1;
const userArray: string[] = ["Jose", "David", "Juan"]

export async function throttle (id: number, delay: number) {
  setTimeout(() => {
    console.log(`${userArray[id]} inside function`)
    const resultFn = userArray[id]
    return resultFn
  }, delay);
  
}

throttle(id, delay).then((data) => console.log(data))
//console.log(`${result} after calling the function`)