Cypress.Commands.add('loginByUI', (username, password) => {
    LoginPage.open()
    LoginPage.login(username, password)
  })