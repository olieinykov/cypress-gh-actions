describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('[data-cy="variable-value"]').contains(Cypress.env('TEST_VARIABLE_EXAMPLE'))
  })
})