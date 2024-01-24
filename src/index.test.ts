jest.mock('./index', () => ({
  myFunction: jest.fn(),
}));

describe('myFunction throttled', () => {
  it('should throttle the function calls', () => {
    const delay: number = 1500;
    const userString: string = "Hello, World"
    const myFunctionMock = jest.fn();

    function throttle(text: string, delay: number) {
      let timerFlag: null | ReturnType<typeof setTimeout> = null;

      return () => {
        if (timerFlag === null) {
          myFunctionMock(text);
          timerFlag = setTimeout(() => {
            timerFlag = null;
          }, delay);
        }
      };
    }

    let throttledConsoleLog = throttle(userString, delay);

    expect(myFunctionMock).toHaveBeenCalledTimes(0);

    // Call the throttled function
    throttledConsoleLog();

    // Function should be called once
    expect(myFunctionMock).toHaveBeenCalledTimes(1);

    // Call the throttled function within 500ms
    setTimeout(() => {
      throttledConsoleLog();
    }, 500);

    // Function should still be called once, as it's within the throttle window
    expect(myFunctionMock).toHaveBeenCalledTimes(1);

    // Call the throttled function after the delay
    setTimeout(() => {
      throttledConsoleLog = throttle(userString, delay)
    }, delay);

    // Function should be called the second time
    setTimeout(() => {
      expect(myFunctionMock).toHaveBeenCalledTimes(2);
    }, delay);
  });
});