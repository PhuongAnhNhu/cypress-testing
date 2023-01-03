describe("New Letter Subcribe Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it("allow user to subcribe the newsletter", () => {
    const email = 'nhuphuonganh@gmail.com';
    cy.getByData('email-input').type(email)
    cy.getByData('submit-button').click()
    cy.getByData('success-message').should('exist').contains(email)
  })
 
})
