// cypress/e2e/pages/LoginPage.js

class LoginPage_POM {

  visit() {
    cy.visit("/")
  }

  enterUsername(username) {
    cy.get('[id="user-name"]').type(username) 
    
  }

  enterPassword(password) {
    cy.get('[id="password"]').type(password)
  }

  clickLoginButon() {
    cy.get('[id="login-button"]').click()
  }

  assertErrorMessage(msg) {
    cy.get('[data-test="error"]').should('contain.text', msg)
  }

}

export default new LoginPage_POM()