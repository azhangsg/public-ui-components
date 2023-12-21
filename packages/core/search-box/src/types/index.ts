import type { KQueryTermTypes, SuggestionTypes } from '../enums'

export type KQueryParserError = {
  message: string
  line: number
  charPositionInLine: number
}

export type KQueryTerm = {
  idx: number
  key: string
  termType: KQueryTermTypes
  termValue: string
  started?: number
  isEditable: boolean
}

export type SearchSuggestion = {
  value: string
  label: string
  type?: SuggestionTypes
}
