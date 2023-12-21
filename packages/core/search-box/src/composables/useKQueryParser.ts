import { ref, readonly } from 'vue'
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

  const emptyTerm = { idx: 0, termType: KQueryTermTypes.space, key: 'empty', termValue: ' ', isEditable: true }

  class KQueryErrorListener implements ErrorListener<any> {
    syntaxError(recognizer: any, offendingSymbol: number, line: number, charPositionInLine: number, msg: string) {
      parserError.value = { message: `line ${line}:${charPositionInLine} ${msg}`, line, charPositionInLine }
    }
  }

  // here is where we keep string (plain) search string
  const searchTermsString = ref<string>('')
  const searchTerms = ref<KQueryTerm[]>([emptyTerm])
  const cursorPosition = ref<number>(0)
  const debounces = ref<number>(0)
  let timeout: any

  // triggers update of searchString and parse process
  const parse = async (queryStringOrig: string, cursorPos: number, debounce:boolean = true) => {
    const queryString = queryStringOrig.trim().replace('\n', '')
    console.log(`parse called: >${queryString}<`, cursorPos)
    console.log(`   while old: >${searchTermsString.value}<`, cursorPosition.value, searchTerms.value)
    clearTimeout(timeout)
    // no need debounce here
    if (queryString === '' || !debounce || debounces.value > 3) {
      await doParse(queryString, cursorPos)
      return
    }
    debounces.value++
    timeout = setTimeout(async () => {
      if (queryString || queryString === '') {
        await doParse(queryString, cursorPos)
        debounces.value = 0
      }
    }, 300)
  }

  const doParse = (qsString: string, cursorPos: number): Promise<void> => {
    console.log(`in the doParse:>${qsString}<`, searchTerms.value)

    return new Promise((resolve) => {

      if (qsString.trim() === searchTermsString.value.trim()) {
        cursorPosition.value = cursorPos
        console.log('there:', searchTerms.value)
        resolve()
        return
      }

      const dtKey = new Date().getTime()
      const formatKey = (idx: number, termType: KQueryTermTypes, value?: string) => {
        return `${idx}-${dtKey}-${termType}${value ? '-' + value.replaceAll('"', '-') : ''}`
      }

      parserError.value = undefined
      if (qsString.trim() === '') {
        searchTerms.value = [emptyTerm]
        console.log('here:', searchTerms.value)
        searchTermsString.value = ''
        cursorPosition.value = cursorPos
        resolve()
        return
      }

      const termsArray:Array<KQueryTerm> = []

      const chars = new CharStream(qsString) // replace this with a FileStream as required
      const lexer = new KQueryLexer(chars)
      const tokens = new CommonTokenStream(lexer)
      const parser = new KQueryParser(tokens)

      parser.removeErrorListeners()
      // @ts-ignore
      parser.addErrorListener(new KQueryErrorListener())

      const tree = parser.result()
      console.log('prefix notation:', tree?.toStringTree(['result'], parser))

      class MyTreeWalker extends KQueryParserListener {
        enterFieldValue = (ctx: FieldValueContext) => {
          const termValue = qsString.substring(ctx.start.start, ctx.start.stop + 1)
          const idx = ctx.start.start
          termsArray.push({
            idx,
            termType: KQueryTermTypes.fieldValue,
            key: formatKey(ctx.start.start, KQueryTermTypes.fieldValue, termValue),
            termValue,
            isEditable: true,
          })
        }

        enterFieldName = (ctx: FieldNameContext) => {
          const termValue = qsString.substring(ctx.start.start, ctx.start.stop + 1)
          const idx = ctx.start.start
          termsArray.push({
            idx,
            termType: KQueryTermTypes.fieldName,
            key: formatKey(ctx.start.start, KQueryTermTypes.fieldName, termValue),
            termValue,
            isEditable: true,
          })

          termsArray.push({
            idx: ctx.start.stop,
            termType: KQueryTermTypes.colon,
            key: formatKey(ctx.start.stop, KQueryTermTypes.fieldName, ':'),
            termValue: ':',
            isEditable: true,
          })

        }

        enterClause = (ctx: ClauseContext) => {
          const idx = ctx.start.start
          termsArray.push({
            idx,
            key: formatKey(idx, KQueryTermTypes.clause),
            termType: KQueryTermTypes.clause,
            termValue: '',
            isEditable: false,
          })
        }

        exitClause = (ctx: ClauseContext) => {
          const idx = ctx.stop?.stop || ctx.start.stop
          termsArray.push({
            idx,
            termType: KQueryTermTypes.clauseEnd,
            key: formatKey(idx, KQueryTermTypes.clauseEnd),
            started: ctx.start.start,
            termValue: '',
            isEditable: false,
          })
        }

        exitEntityClause = (ctx: EntityClauseContext) => {
          const idx = ctx.start.start
          const termValue = qsString.substring(ctx.start.start, ctx.start.stop + 1)

          termsArray.push({
            idx,
            termType: KQueryTermTypes.entityClause,
            key: formatKey(idx, KQueryTermTypes.entityClause),
            termValue,
            isEditable: true,
          })
        }

        enterGrouping = (ctx: GroupingContext) => {
          const idx = ctx.start.start
          termsArray.push({
            idx,
            key: formatKey(idx, KQueryTermTypes.grouping),
            termType: KQueryTermTypes.grouping,
            termValue: '(',
            isEditable: true,
          })
        }

        exitGrouping = (ctx: GroupingContext) => {
          const idx = ctx.stop?.start || ctx.start.stop
          termsArray.push({
            idx,
            key: formatKey(idx, KQueryTermTypes.groupingEnd),
            termType: KQueryTermTypes.groupingEnd,
            termValue: ')',
            isEditable: true,
          })
        }

        enterIntersection = (ctx: IntersectionContext) => {
          ctx.and_list().forEach((oE) => {
            console.log('oE:', oE)

            const idx = oE.start.start
            const termValue = qsString.substring(oE.start.start, oE.start.stop + 1)

            termsArray.push({
              idx,
              key: formatKey(idx, KQueryTermTypes.space, ' '),
              termType: KQueryTermTypes.space,
              termValue: ' ',
              isEditable: true,
            })

            termsArray.push({
              idx: idx + 1,
              key: formatKey(idx + 1, KQueryTermTypes.and),
              termType: KQueryTermTypes.and,
              termValue,
              isEditable: true,
            })
            termsArray.push({
              idx: idx + 4,
              key: formatKey(idx + 4, KQueryTermTypes.space, ' '),
              termType: KQueryTermTypes.space,
              termValue: ' ',
              isEditable: true,
            })
          })
        }

        enterExclusion = (ctx: ExclusionContext) => {
          const idx = ctx.start.start
          let termValue = qsString.substring(ctx.start.start, ctx.start.stop + 1)
          if (termValue === 'NOT') {
            termValue = 'NOT '
          }
          termsArray.push({
            idx,
            key: formatKey(idx, KQueryTermTypes.exclusion, termValue),
            termType: KQueryTermTypes.exclusion,
            termValue,
            isEditable: true,
          })
        }

        enterUnion = (ctx: UnionContext) => {
          ctx.or_list().forEach((oE) => {
            const idx = oE.start.start
            const termValue = qsString.substring(oE.start.start, oE.start.stop + 1)
            termsArray.push({
              idx,
              key: formatKey(idx, KQueryTermTypes.space, ' '),
              termType: KQueryTermTypes.space,
              termValue: ' ',
              isEditable: true,
            })

            termsArray.push({
              idx: idx + 1,
              key: formatKey(idx + 1, KQueryTermTypes.or, termValue),
              termType: KQueryTermTypes.or,
              termValue,
              isEditable: true,
            })

            termsArray.push({
              idx: idx + 3,
              key: formatKey(idx + 4, KQueryTermTypes.space, ' '),
              termType: KQueryTermTypes.space,
              termValue: ' ',
              isEditable: true,
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

      if (parserError.value) {
        // @ts-ignore
        const errIdx = termsArray.findIndex(t => t.idx >= parserError.value?.charPositionInLine - 1)
        termsArray.splice(errIdx, termsArray.length - errIdx)
      }
      // while (1) {
      //   let cleanupNeeded = false
      //   if ([KQueryTermTypes.clause, KQueryTermTypes.space].includes(termsArray[termsArray.length - 1].termType)) {
      //     termsArray.pop()
      //     cleanupNeeded = true
      //     continue
      //   }
      //   if (termsArray.length > 2 && termsArray[termsArray.length - 1].termType === KQueryTermTypes.clauseEnd && [KQueryTermTypes.and, KQueryTermTypes.or].includes(termsArray[termsArray.length - 2].termType)) {
      //     termsArray.pop()
      //     cleanupNeeded = true
      //     continue
      //   }
      //   if (!cleanupNeeded) {
      //     break
      //   }

      // }

      console.log('termsArray:', [...termsArray])

      // only leave most inner clauses
      const clauseIdx = []

      for (let j = 0; j < termsArray.length; j++) {
        if (termsArray[j].termType === KQueryTermTypes.clause) {
          for (let i = j + 1; i < termsArray.length; i++) {
            if (termsArray[i].termType === KQueryTermTypes.clauseEnd) {
              break
            }
            if (termsArray[i].termType === KQueryTermTypes.clause) {
              clauseIdx.unshift(j)
              break
            }
          }
        }
      }

      clauseIdx.forEach(c => {
        const clauseEndIdx = termsArray.findIndex((t: KQueryTerm) => (t.termType === KQueryTermTypes.clauseEnd && t.started === termsArray[c].idx))
        termsArray.splice(clauseEndIdx, 1)
        termsArray.splice(c, 1)
      })

      while (1) {
        let insertNeeded = false
        // need space between clauseEnd and clause
        for (let j = 0; j < termsArray.length - 1; j++) {
          if (termsArray[j].termType === KQueryTermTypes.clauseEnd && termsArray[j + 1].termType === KQueryTermTypes.clause) {
            insertNeeded = true
            termsArray.splice(j + 1, 0, { idx: termsArray[j + 1].idx - 1, termType: KQueryTermTypes.space, key: formatKey(termsArray[j + 1].idx - 1, KQueryTermTypes.space, ' '), termValue: ' ', isEditable: true })
          }
        }
        if (insertNeeded === false) {
          break
        }
      }

      // nove not outside of the clause
      termsArray.sort((a, b) => {
        if (a.idx === b.idx && b.termType === KQueryTermTypes.clause && a.termType === KQueryTermTypes.exclusion) {
          return -1
        }
        return a.idx - b.idx
      })

      let l = termsArray.length - 1
      if (termsArray[l].termType === KQueryTermTypes.clause) {
        termsArray.pop()
        l -= 1
      }
      if (termsArray[l].termType !== KQueryTermTypes.space) {
        termsArray.push({ idx: termsArray[l].idx + 1, termType: KQueryTermTypes.space, key: formatKey(termsArray[l].idx + 1, KQueryTermTypes.space, ' '), termValue: ' ', isEditable: true })
      }

      console.log('termsArray final:', [...termsArray])
      searchTerms.value = termsArray
      searchTermsString.value = qsString
      cursorPosition.value = cursorPos
      resolve()
    })
  }

  const updateTerm = async (newValueReceived: string, key: string) => {
    let newString = ''
    let newCursorPosition = 0
    let newValue = newValueReceived
    if (newValue.trim() === '') {
      const idx = searchTerms.value.findIndex(t => t.key === key)
      if (idx !== -1) {
        searchTerms.value.splice(idx, 1)
      }
    }
    searchTerms.value.forEach(t => {
      if (t.key === key) {
        if (t.termType === KQueryTermTypes.space) {
          newValue = (' ' + newValue + ' ')
        }
        console.log(`updateTerm:>${newValue}<`, t)
        newCursorPosition = t.idx + newValue.length
        newString += newValue
      } else {
        newString += t.termValue || ''
      }
    })
    if (newCursorPosition === 0) {
      newCursorPosition = newString.length
    }
    console.log(`updateTerm final:>${newString}<`, newCursorPosition)
    await parse(newString, newCursorPosition)

  }

  const getActiveTerm = (cursorPos: number) => {
    let activeKey = null
    let cursorPosInTerm = -1

    for (let j = searchTerms.value.length - 1; j >= 0; j--) {
      const t = searchTerms.value[j]
      if (!t.isEditable || t.idx > cursorPos) {
        continue
      }
      activeKey = t.key
      cursorPosInTerm = cursorPos - t.idx
      break
    }

    return { activeKey, cursorPosInTerm }
  }

  return {
    parse,
    searchTermsString: readonly(searchTermsString),
    parserError: readonly(parserError),
    searchTerms: readonly(searchTerms),
    cursorPosition: readonly(cursorPosition),
    updateTerm,
    getActiveTerm,
  }
}
