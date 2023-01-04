describe("User Journey", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  it("a user can find a course on the home page and complete the courses lessons", () => {
    cy.getByData("course-0").find("a").eq(3).click()
    // using the location API to get the “pathname” which is the URL of our application.
    cy.location("pathname").should("eq", "/testing-your-first-application")
    cy.getByData("next-lesson-button").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/app-install-and-overview"
    )
    cy.getByData("challenge-answer-0").click()
    cy.getByData("next-lesson-button").should("exist").click()
    cy.location("pathname").should(
      "eq",
      "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
    )
  })

  it.only("user must complate all of the lessons in the first course", () => {
    cy.getByData("course-0").find("a").eq(3).click()
    cy.location("pathname").should("eq", "/testing-your-first-application")
    cy.getByData('next-lesson-button').click()
    cy.location("pathname").should("eq", "/testing-your-first-application/app-install-and-overview")
    cy.getByData('challenge-answer-0').click()
    cy.getByData('next-lesson-button').should('exist').click()
    cy.location('pathname').should('eq', "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
    cy.getByData('challenge-answer-0').click()
    cy.getByData('next-lesson-button').should('exist').click()
    cy.location('pathname').should('eq', "/testing-your-first-application/setting-up-data-before-each-test")
    cy.getByData('challenge-answer-0').click()
    cy.getByData('next-lesson-button').should('exist').click()

    cy.location('pathname').should('eq', "/")
  })
})
