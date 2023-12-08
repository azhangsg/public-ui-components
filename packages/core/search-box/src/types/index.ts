import type { KQueryTermTypes, SuggestionTypes } from '../enums'

export type KQueryParserError = {
  message: string
  line: number
  charPositionLine: number
}

export type KQueryTerm = {
  idx: number
  key: string
  termType: KQueryTermTypes
  termValue?: string
  children?: KQueryTerm[]
  parent?: number
}

export type SearchSuggestion = {
  value: string
  label: string
  type?: SuggestionTypes
}
