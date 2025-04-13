// cypress/e2e/pages/LoginPage.js
import BasePage from '../../support/BasePage'

class LoginPage extends BasePage {
  elements = {
    usernameInput: '#user-name',
    passwordInput: '#password',
    loginButton: '#login-button',
    productsText: '.title',
    errorMessage: 'h3[data-test="error"]'
  }

  // ===== Methods =====
  visit() {
    this.navigate('/');
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

  verifyProductsTextDisplayed(expectedText) {
    this.verifyText(this.elements.productsText, expectedText)
  }

  verifyErrorMessageDisplayed() {
    this.verifyElementVisible(this.elements.errorMessage)
  }

  acceptAlert() {
    this.acceptAlert
  }
}

export default new LoginPage()