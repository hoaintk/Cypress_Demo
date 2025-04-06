// cypress/e2e/pages/LoginPage.js
import BasePage from '../../support/BasePage'

class LoginPage extends BasePage {
  elements = {
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button'
  }

  // ===== Methods =====
  visit() {
    this.navigate('https://www.saucedemo.com/') 
  }

  enterUsername(username) {
    this.type(this.elements.usernameInput, username)
  }

  enterPassword(password) {
    this.type(this.elements.passwordInput, password)
  }

  clickLogin() {
    this.click(this.elements.loginButton)
  }

  expectErrorMessage(text) {
    this.verifyText(this.elements.errorMessage, text)
  }
}

export default new LoginPage()