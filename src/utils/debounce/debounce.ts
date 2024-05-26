export const debounce = (func: Function, delay: number) => {
  let timeoutId: number

  return function (...args: any[]) {
    clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => func.apply(this, args), delay)
  }
}
