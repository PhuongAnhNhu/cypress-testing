describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })
  context("hero section", () => {
    it("the h1 contains the correct text", () => {
      // using data specific test attributes on elements
      cy.getByData("hero-heading")
        .should("exist")
        .contains("Testing Next.js Applications with Cypress")
    })
    // it.only : just run those specific test, which have only
    it("the features on the homepage are correct", () => {
      cy.get("dt").eq(0).contains("4 Courses")
      cy.get("dt").eq(1).contains("25+ Lessons")
      cy.get("dt").eq(2).contains("Free and Open Source")
    })
  })

  context("Courses section", () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").eq(3).click()
      // using the location API to get the “pathname” which is the URL of our application.
       cy.location("pathname").should("eq", "/testing-your-first-application")
    })
    it("Course: Testing Foundation", () => {
      cy.getByData("course-1").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/testing-foundations")
    })
    it("Course: Cypress Fundamental", () => {
      cy.getByData("course-2").find("a").eq(3).click()
      cy.location("pathname").should("eq", "/cypress-fundamentals")
    })
  })
})
