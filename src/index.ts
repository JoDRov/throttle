let waitToEnd: boolean = false;

export function throttle(func: Function, ms: number, text: string)  {
  if (!waitToEnd){
    waitToEnd = true
    setTimeout( () => {
      console.log(text)
      waitToEnd = false
    }, ms)
  } 
  else {
    setTimeout(() => {
      throttle(throttle, ms, text)
    }, ms)
  }
}


throttle(throttle, 500, "Hola")
throttle(throttle, 1000, "Adios")
throttle(throttle, 1500, "Hola de nuevo")
throttle(throttle, 2000, "Bueno ahora si que ya me voy a ir yendo, adios")