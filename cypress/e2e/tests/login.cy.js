import LoginPage from '../pages/LoginPage'

describe('Login Test Suite', () => {
  beforeEach(function() {  
    LoginPage.visit()
    cy.fixture('users').as('usersData')
  })

  // Case 1: Login thành công
  it('TC01: Login với tài khoản hợp lệ', function() {  
    const { login_pass } = this.usersData
    LoginPage.enterUsername(login_pass.username)
    LoginPage.enterPassword(login_pass.password)
    LoginPage.clickLogin()  
    cy.url().should('include', '/dashboard')  
  })

  // Case 2: Login sai mật khẩu
  it('TC02: Login với tài khoản sai mật khẩu', function() {
    const { login_fail } = this.usersData
    LoginPage.enterUsername(login_fail.username)
    LoginPage.enterPassword(login_fail.password)
    LoginPage.clickLogin()
    LoginPage.expectErrorMessage('Invalid credentials') 
  })
})