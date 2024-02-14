export function throttle(func: Function, ms: number){
  let lastExecution: number = 0

  return function (...args: any[]){
    const now: number = Date.now()

    if (now - lastExecution >= ms){
      func(...args)
      lastExecution = now
    }
  }
}