describe('Fundamentals Test', () => {
  // there is alot of overhead between tests, best to do big ones.
  beforeEach(() => {
    cy.visit('/')
    cy.getDataTest('fundamentals-header').contains('Why')

    cy.getDataTest('fundamentals-header').should('contain.text', 'Why')
  })

  // can turn this into it.only to work on one test at a time
  it('Accodrion Works as Intended', () => {
    // assert closed by default
    cy.contains("all-in-one").filter(":visible").should('not.exist')
    
    // assert when clicked the correct text shows
    cy.get('[data-test="accordion-item-1"]').click()
    cy.contains("all-in-one").filter(":visible").should('exist')
    
    // assert when clicked again it hides
    cy.get('[data-test="accordion-item-1"]').click()
    cy.contains("all-in-one").filter(":visible").should('not.exist')
  })
})
