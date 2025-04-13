import LoginPage from '../pages/LoginPage_POM'

describe ('Login Test with SauceDemo', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login thành công với account hợp lệ', () => {
        LoginPage.enterUsername('standard_user')
        LoginPage.enterPassword('secret_sauce')
        LoginPage.clickLoginButon()
        //cy.url() là lấy url hiện tại
        cy.url().should('include', '/inventory.html')
        cy.get('[class="title"]').should('contain.text', 'Products')
    })

    it('Login sai mật khẩu', () => {
        LoginPage.enterUsername('standard_user')
        LoginPage.enterPassword('wrongPassword')
        LoginPage.clickLoginButon()
        LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service')
    })

    it('Login thiếu username', () => {
        LoginPage.enterPassword('secret_sauce')
        LoginPage.clickLoginButon()
        LoginPage.assertErrorMessage('Epic sadface: Username is required')       
    }) 

    it('Login với user không hợp lệ', () => {
        cy.fixture('users').then((userData) => {
        const { username, password } = userData.lockedUser
        LoginPage.enterUsername(username)
        LoginPage.enterPassword(password)
        LoginPage.clickLoginButon()
        LoginPage.assertErrorMessage('Epic sadface: Sorry, this user has been locked out.')
    })
})

    it('Login thành công với account hợp lệ dùng command', () => {
        cy.loginUsingFixtures('standard_user', 'secret_sauce')
        //cy.url() là lấy url hiện tại
        cy.url().should('include', '/inventory.html')
        cy.get('[class="title"]').should('contain.text', 'Products')
    })

    it('Login với password không hợp lệ dùng command', () => {
        cy.fixture('users').then((userData) => {
        const { username, password } = userData.wrongPassword
        LoginPage.enterUsername(username)
        LoginPage.enterPassword(password)
        LoginPage.clickLoginButon()
        LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service')
    })
})
})