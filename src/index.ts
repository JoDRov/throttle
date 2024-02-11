let waitToEnd: boolean = false;

function throttle(func: Function, ms: number, text: string): any  {
  if (!waitToEnd){
    waitToEnd = true
    setTimeout( () => {
      console.log(text)
      waitToEnd = false
    }, ms)
  } 
  else {
    setTimeout(() => {
      throttle(func, ms, text)
    }, ms)
  }
}


/*throttle(throttle, 500, "Hola")
throttle(throttle, 1000, "Adios")
throttle(throttle, 1500, "Hola de nuevo")
throttle(throttle, 2000, "Bueno ahora si que ya me voy a ir yendo, adios")*/

module.exports = throttle