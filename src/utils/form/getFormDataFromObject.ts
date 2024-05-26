export const getFormDataFromObject = (obj: { [key: string]: any}) => {
  if (!obj || !(obj instanceof Object)) {
    return null
  }
  
  const formData = new FormData()
  Object.entries(obj).forEach(([key, value]) => formData.append(key, value))
  return formData
}