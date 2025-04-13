import LoginPage_POM from '../e2e/pages/LoginPage_POM'

Cypress.Commands.add('loginByUI', (username, password) => {
    LoginPage.open()
    LoginPage.login(username, password)
  })

  Cypress.Commands.add('loginUsingFixtures', (username, password) => {
    LoginPage_POM.enterUsername(username)
    LoginPage_POM.enterPassword(password)
    LoginPage_POM.clickLoginButon()
  })