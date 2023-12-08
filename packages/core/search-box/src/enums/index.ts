export enum SearchEntryTypes {
  plain = 'plain',
  pretty = 'pretty'
}

export enum KQueryTermTypes {
  union = 'union',
  intersection = 'intersection',
  clause = 'clause',
  or = 'or',
  and = 'and',
  exclusion = 'exclusion',
  entityClause = 'entityClause',
  grouping = 'grouping',
  fieldName = 'fieldName',
  fieldValue = 'fieldValue',
  quotedValue= 'quotedValue',
  clauseEnd = 'clause-end',
  groupingEnd = 'grouping-end',
}

export enum SuggestionTypes {
  fieldName = 'fieldName',
  recent = 'recent'
}
