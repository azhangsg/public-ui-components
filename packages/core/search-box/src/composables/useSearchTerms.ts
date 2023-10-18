import { ref } from 'vue'

export default function useSearchTerms() {
  const searchTerms = ref<string>('')


  const setSearchTerms = (terms: string) => {
    searchTerms.value = terms
  }

  const getSearchTerms = () => {
    return searchTerms
  }

  const parseTerms = () => {
    let ii = 0;
    let inDoubleQotes = false

    const getNextChar = (i: number) => {
      while (i < searchTerms.value.length) {

        const c = searchTerms.value[i]
        if (c === '"') {
          inDoubleQotes = !inDoubleQotes
        }
        if (c !== ' ' || inDoubleQotes) {
          return {i, c}
        }
        i++
      }
      return {i, c: ''}
    }


    const parseFieldValues = (i: number, field:string): number => {
      let values = ''
      let inBrakets = false

      while (i < searchTerms.value.length) {

        const n = getNextChar(i)
        i = n.i
        if (n.c === '(') {
          inBrakets = true
        }
        values = values + n.c
        console.log({ step: 'parseFieldValues', i, char: n.c, field, values, inDoubleQotes })
        i++

        if (( inBrakets && n.c === ')') || (!inBrakets && n.c === ' ' && !inDoubleQotes)) {
          return i
        }
      }
      return i
    }

    const parseField = (i: number) => {
      let field = ''
      while (i < searchTerms.value.length) {
        const n = getNextChar(i)
        i = n.i
        if (n.c === ':' || n.c === '=' ) {
          return parseFieldValues(++i, field)
        }
        field = field + n.c
        console.log({ step: 'parseField', i, char: n.c, field })
        i++
      }
      return i
    }

    const parseTerm = (i: number) => {
      while (i < searchTerms.value.length) {
        const n = getNextChar(i)
        i = n.i
        console.log({ step: 'parseTerm', i, char: n.c })
        i = parseField(i)
      }
      return i;
    }

    while (ii < searchTerms.value.length) {
      const n = getNextChar(ii)
      ii = n.i
      console.log({step: 'main', i: ii, char: n.c})
      ii = parseTerm(ii)
    }
  }

  return {
    getSearchTerms,
    setSearchTerms,
    parseTerms
  }
}
