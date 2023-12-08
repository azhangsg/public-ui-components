const tests = [
  {
    termsStr: ' "country": (   US, EU, "Great britain" ) -browser: "chrome bro"wser"',
  },
]
describe('useSearchTerms', async () => {
  describe('parseTerms', async () => {
    tests.forEach((t: any) => {
      it(`should parse ${t.termsStr}`, () => {

        expect((1)).eq(1)
      })
    })
  })
})
