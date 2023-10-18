// Cypress component test spec file

import SearchBox from './SearchBox.vue'

describe('<SearchBox />', () => {
  it('TODO: This is an example test', () => {
    cy.mount(SearchBox)

    cy.get('.kong-ui-public-search-box').should('be.visible')
  })
})
