import { ucfirst } from './ucfirst'

const PREPOSITIONS =
  ['di', 'da', 'das', 'do', 'dos', 'de', 'von', 'van', 'le', 'la', 'du', 'des', 'del', 'della', 'der', 'al']

const isPrepositionAndNotFirst = (word: string, i: number) => i > 0 && (word.length === 1 || PREPOSITIONS.includes(word))

export const formatName = (str: string) => {
  if (!str) {
    return ''
  }

  return str.toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .map((word, i) => isPrepositionAndNotFirst(word, i) ? word : ucfirst(word))
    .join(' ')
}
