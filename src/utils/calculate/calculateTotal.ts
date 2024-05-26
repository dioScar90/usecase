export const calculateTotal = (data: {[key: string]: number }[] | number[], key?: string) => {
  return data.reduce((acc, curr) => {
    const toAdd = key ? (curr[key] ?? 0) : curr
    return acc + toAdd
  }, 0)
}
