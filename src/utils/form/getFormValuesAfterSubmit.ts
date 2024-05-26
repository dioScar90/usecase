export const getFormValuesAfterSubmit = (form: HTMLFormElement, files = false) => {
  if (!form || !(form instanceof HTMLFormElement)) {
    return null
  }

  const formData = new FormData(form)

  if (!files) {
    return Object.fromEntries(
      Array.from(formData)
      .filter(([_, value]) => typeof value === 'string')
    )
  }
  
  const obj: { [key: string]: string | File[] } = {}

  Array.from(formData).forEach(([key, value]) => {
    if (value instanceof File) {
      obj[key] ??= [] as File[]
      (obj[key] as File[]).push(value)
    } else {
      obj[key] = value
    }
  })
  
  return obj
}