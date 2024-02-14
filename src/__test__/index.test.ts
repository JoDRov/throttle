import { throttle } from "../index"

const delay: number = 500
const func = jest.fn( (nombre: string) => {
  console.log("Hola " + nombre)
})
const throttledFunc = throttle(func, delay)

jest.useFakeTimers()

describe('myFunction throttle', () => {
  it('should only be able to call the function once the execution time has passed', () => {
    throttledFunc("Pepito")

    jest.advanceTimersByTime(250)

    throttledFunc("Juan")

    jest.advanceTimersByTime(250)
    expect(func).toHaveBeenCalledTimes(1)
    
    throttledFunc("Jose")
    throttledFunc("Alverto")
    throttledFunc("Juanjo")

    jest.advanceTimersByTime(250)

    throttledFunc("Sara")

    jest.advanceTimersByTime(250)
    expect(func).toHaveBeenCalledTimes(2)
  })
})