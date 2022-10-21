describe('empty spec', () => {
  it('passes', () => {
    cy.task('log', Cypress.env('TEST_VARIABLE_EXAMPLE'))
    cy.visit('/');
    cy.get('[data-cy="variable-value"]').contains(Cypress.env('TEST_VARIABLE_EXAMPLE'))
  })
})