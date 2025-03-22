describe('Fundamentals Test', () => {
  it('Initial Test', () => {
    cy.visit('http://localhost:3000')
    cy.get('body > main > h1').contains('Why')
  })
})
