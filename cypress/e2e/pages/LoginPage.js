// cypress/e2e/pages/LoginPage.js
import BasePage from '../../support/BasePage'

class LoginPage extends BasePage {
  elements = {
    usernameInput: '//input[@id="user_name"]',
    passwordInput: '//input[@id="password"]',
    loginButton: '//input[@id="login-button"]'
  }

  // ===== Methods =====
  visit() {
    super.navigate() 
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