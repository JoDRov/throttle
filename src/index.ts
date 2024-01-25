export const delay: number = 1500
export let id: number = 1;
export const userArray: string[] = ["Jose", "David", "Juan"]

export async function throttle (id: number, delay: number) {
  return new Promise<string>(resolve => {
    setTimeout(() => {
      const result: string = userArray[id]
      resolve(result)
    }, delay);
  })
}

throttle(id, delay).then((data) => { expect(data).toBe("David") })
id = 0
throttle(id, delay).then((data) => { expect(data).toBe("Jose") })
id = 2
throttle(id, delay).then((data) => { expect(data).toBe("Juan") })
