const delay: number = 1500
const userString: string = "Hello, World"

function throttle(text: string, delay: number) {
  let timerFlag: null | ReturnType<typeof setTimeout> = null;

  return () => {
    if (timerFlag === null) {
      printText(text);
      timerFlag = setTimeout(() => {
        timerFlag = null;
      }, delay);
    }
  };
}

function printText(text: string){
  console.log(text)
}
