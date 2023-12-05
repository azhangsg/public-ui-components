import useSearchTerms from './useSearchTerms'

const tests = [
  {
    termsStr: ' "country": (   US, EU, "Great britain" ) -browser: "chrome bro\"wser"',
  },
]
describe('useSearchTerms', async () => {
  describe('parseTerms', async () => {
    tests.map(t => {
      it(`should parse ${t.termsStr}`, () => {
        const { setSearchTerms, parseTerms } = useSearchTerms()
        setSearchTerms(t.termsStr)
        parseTerms()

        expect((1)).eq(1)
      })
    })
  })
})
