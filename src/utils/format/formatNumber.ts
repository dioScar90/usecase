export const formatNumber = (value: number, locale = 'pt-BR') => {
  return new Intl.NumberFormat(locale).format(value)
}
