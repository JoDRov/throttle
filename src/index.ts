export function throttle(func: Function, ms: number): any  {
  let waitToEnd: boolean = false
  return function (...args: any){
    if (!waitToEnd){
      waitToEnd = true
      setTimeout( () => {
        func(...args)
        waitToEnd = false
      }, ms)
    } 
    else {
      setTimeout(() => {
        throttle(func, ms)
      }, ms)
    }
  }
}

/*throttle(throttle, 500, "Hola")
throttle(throttle, 1000, "Adios")
throttle(throttle, 1500, "Hola de nuevo")
throttle(throttle, 2000, "Bueno ahora si que ya me voy a ir yendo, adios")*/