const throttle = require("../../dist/index.js")
const delay: number = 500

jest.useFakeTimers()
const func = jest.fn
const throttledFunc = throttle(func, delay)

describe('myFunction throttle', () => {
  it('should throttle the function calls', async () => {
    
    throttledFunc()

    jest.advanceTimersByTime(500)

    expect(func).toHaveBeenCalledTimes(1)

    throttledFunc()

    jest.advanceTimersByTime(200)

    expect(func).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(300)

    expect(func).toHaveBeenCalledTimes(2)

    throttledFunc()

    jest.advanceTimersByTime(500)

    expect(func).toHaveBeenCalledTimes(3)

    jest.runAllTimers()
  })
})