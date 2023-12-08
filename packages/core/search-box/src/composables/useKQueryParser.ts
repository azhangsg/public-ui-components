import { ref, watch } from 'vue'
import type { ErrorListener } from 'antlr4'
import { ParseTreeWalker, CharStream, CommonTokenStream } from 'antlr4'

import { KQueryParser, KQueryLexer, KQueryParserListener } from '@kong/kquery-parser'
import type { KQueryParserError, KQueryTerm } from '../types'
import { KQueryTermTypes } from '../enums'

import type {
  UnionContext,
  FieldValueContext,
  FieldNameContext,
  ClauseContext,
  EntityClauseContext,
  IntersectionContext,
  ExclusionContext,
  GroupingContext,
} from '@kong/kquery-parser'

export default function useKQueryParser() {

  const parserError = ref<KQueryParserError>()

  class KQueryErrorListener implements ErrorListener<any> {
    syntaxError(recognizer: any, offendingSymbol: number, line: number, charPositionInLine: number, msg: string) {
      // @ts-ignore
      parserError.value = { message: `line ${line}:${charPositionInLine} ${msg}`, line, charPositionInLine }
    }
  }

  // here is where we keep string (plain) search string
  const searchTermsString = ref<string>('')
  const searchTerms = ref <KQueryTerm[]>([])
  let timeout: any

  // triggers update of searchString and parse process
  const parse = (queryString: string|null): void => {
    console.log('parse called', queryString)

    clearTimeout(timeout)

    // no need debounce here
    if (queryString === '') {
      searchTermsString.value = queryString
      return
    }

    timeout = setTimeout(() => {
      if (queryString || queryString === '') {
        searchTermsString.value = queryString
      }
    }, 200)
  }

  watch(() => (searchTermsString.value), (qsString) => {
    console.log('in the watch:', qsString)
    parserError.value = undefined
    searchTerms.value = []
    if (qsString.trim() === '') {
      return
    }
    const termsArray:Array<KQueryTerm> = []

    const chars = new CharStream(qsString) // replace this with a FileStream as required
    console.log('chars', chars)
    const lexer = new KQueryLexer(chars)
    console.log('lexer', lexer)
    const tokens = new CommonTokenStream(lexer)
    console.log('tokens', tokens)
    const parser = new KQueryParser(tokens)

    parser.removeErrorListeners()
    // @ts-ignore
    parser.addErrorListener(new KQueryErrorListener())

    const tree = parser.result()

    console.log('parserError.value:', parserError.value)
    console.log('prefix notation:', tree?.toStringTree(['result'], parser))

    const formatKey = (idx: number, termType: KQueryTermTypes, value?: string) => {
      return `${idx}-${termType}${value ? '-' + value : ''}`
    }

    class MyTreeWalker extends KQueryParserListener {
      enterFieldValue = (ctx: FieldValueContext) => {
        console.log('enterFieldValue:', ctx)
        const termValue = qsString.substring(ctx.start.start, ctx.start.stop + 1)
        const idx = ctx.start.start
        termsArray.push({
          idx,
          termType: KQueryTermTypes.fieldValue,
          key: formatKey(ctx.start.start, KQueryTermTypes.fieldValue, termValue),
          termValue,
        })
      }

      enterFieldName = (ctx: FieldNameContext) => {
        console.log('enterFieldName:', ctx)
        const termValue = qsString.substring(ctx.start.start, ctx.start.stop + 1)
        const idx = ctx.start.start
        termsArray.push({
          idx,
          termType: KQueryTermTypes.fieldName,
          key: formatKey(ctx.start.start, KQueryTermTypes.fieldName, termValue),
          termValue,
        })
      }

      enterClause = (ctx: ClauseContext) => {
        console.log('enterClause:', ctx)
        const idx = ctx.start.start
        termsArray.push({
          idx,
          key: formatKey(idx, KQueryTermTypes.clause),
          termType: KQueryTermTypes.clause,
        })
      }

      exitClause = (ctx: ClauseContext) => {
        console.log('exitClause:', ctx)
        const idx = ctx.stop?.stop || ctx.start.stop
        termsArray.push({
          idx,
          termType: KQueryTermTypes.clauseEnd,
          key: formatKey(idx, KQueryTermTypes.clauseEnd),
        })
      }

      enterEntityClause = (ctx: EntityClauseContext) => {
        console.log('enterEntityClause:', ctx)
        const idx = ctx.start.start
        const termValue = qsString.substring(ctx.start.start, ctx.start.stop + 1)

        termsArray.push({
          idx,
          termType: KQueryTermTypes.entityClause,
          key: formatKey(idx, KQueryTermTypes.entityClause),
          termValue,
        })
      }

      enterGrouping = (ctx: GroupingContext) => {
        console.log('enterGrouping:', ctx)
        const idx = ctx.start.start
        termsArray.push({
          idx,
          key: formatKey(idx, KQueryTermTypes.grouping),
          termType: KQueryTermTypes.grouping,
        })
      }

      exitGrouping = (ctx: GroupingContext) => {
        console.log('exitGrouping:', ctx)
        const idx = ctx.stop?.start || ctx.start.stop
        termsArray.push({
          idx,
          key: formatKey(idx, KQueryTermTypes.groupingEnd),
          termType: KQueryTermTypes.groupingEnd,
        })
      }

      enterIntersection = (ctx: IntersectionContext) => {
        console.log('enterIntersection:', ctx)
        ctx.and_list().forEach((oE) => {
          console.log('oE:', oE)

          const idx = oE.start.start
          const termValue = qsString.substring(oE.start.start, oE.start.stop + 1)
          termsArray.push({
            idx,
            key: formatKey(idx, KQueryTermTypes.and),
            termType: KQueryTermTypes.and,
            termValue,

          })
        })
      }

      enterExclusion = (ctx: ExclusionContext) => {
        console.log('enterExclusion:', ctx)
        const idx = ctx.start.start
        const termValue = qsString.substring(ctx.start.start, ctx.start.stop + 1)
        termsArray.push({
          idx,
          key: formatKey(idx, KQueryTermTypes.exclusion, termValue),
          termType: KQueryTermTypes.exclusion,
          termValue,
        })
      }

      enterUnion = (ctx: UnionContext) => {
        console.log('enterUnion:', ctx)
        ctx.or_list().forEach((oE) => {
          const idx = oE.start.start
          const termValue = qsString.substring(oE.start.start, oE.start.stop + 1)
          termsArray.push({
            idx,
            key: formatKey(idx, KQueryTermTypes.or, termValue),
            termType: KQueryTermTypes.or,
            termValue,
          })
        })
      }
    }
    const walker = new MyTreeWalker()
    ParseTreeWalker.DEFAULT.walk(walker, tree)

    // sort by starting index
    termsArray.sort((a, b) => {
      return a.idx - b.idx
    })

    console.log('termsArray', termsArray)

    const parentIdx = []
    const parentIdxFull = []
    for (let j = 0; j < termsArray.length; j++) {

      if (parentIdx.length) {
        termsArray[j].parent = parentIdx[0]
      }

      if (termsArray[j].termType === KQueryTermTypes.clause || termsArray[j].termType === KQueryTermTypes.grouping) {
        parentIdx.unshift(j)
        parentIdxFull.unshift(j)
        continue
      }
      if (termsArray[j].termType === KQueryTermTypes.clauseEnd || termsArray[j].termType === KQueryTermTypes.groupingEnd) {
        termsArray[j].parent = -1
        parentIdx.shift()
        continue
      }
    }

    console.log('termsArray with parent assigned:', termsArray)

    parentIdxFull.sort((a, b) => (b - a))

    parentIdxFull.forEach((i: number) => {
      console.log(i)
      for (let j = 0; j < termsArray.length; j++) {
        if (termsArray[j].parent === i) {
          if (!termsArray[i].children) {
            termsArray[i].children = []
          }
          termsArray[i].children?.push(termsArray[j])
          termsArray[j].parent = -1
        }
      }
    })
    // delete all the ends
    for (let j = termsArray.length - 1; j > 0; j--) {
      if (termsArray[j].parent === -1) {
        termsArray.splice(j, 1)
      }
    }
    // termsArray.push({ type: 'clause' })
    console.log('termsArray:', termsArray)
    searchTerms.value = termsArray

    //    console.log('termsArray:', JSON.stringify(termsArray, null, 2))

  })

  return {
    parse,
    searchTermsString,
    parserError,
    searchTerms,
  }
}
