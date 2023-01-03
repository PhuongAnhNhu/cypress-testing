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
  it("does not allow invalid email adress", () => {
    const email = 'nhuphuonganh.com';
    cy.getByData('email-input').type(email)
    cy.getByData('submit-button').click()
    cy.getByData('success-message').should('not.exist')
  })

  it("email is already exists", () => {
    const email = 'john@example.com';
    cy.getByData('email-input').type(email)
    cy.getByData('submit-button').click()
    cy.getByData('server-error-message').should('exist').contains('already exists. Please use a different email address.');
  })
})
