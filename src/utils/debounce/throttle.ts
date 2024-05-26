export const throttle = (func: Function, delay: number) => {
  let lastExecutionTime = 0
  
  return function(...args: any[]) {
    const currentTime = Date.now()
    
    if (currentTime - lastExecutionTime >= delay) {
      func.apply(this, args)
      lastExecutionTime = currentTime
    }
  }
}
