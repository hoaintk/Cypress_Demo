class BasePage {

  navigate(path = '/') {
    cy.visit(path, {
      failOnStatusCode: false,
      timeout: 60000,
      onBeforeLoad(win) {
        delete win.navigator.__proto__.serviceWorker;
      },
    });
  } 

    reloadPage() {
      cy.reload()
    }

    goBack() {
      cy.go('back')
    }

    getElement(locator) {
      return cy.get(locator).should('be.visible')
    }
  
    // Nhap text cua element
    type(locator, text) {
         this.getElement(locator).type(text)
    }
  
    //click element
    click(locator) {
      this.getElement(locator).click()
    }

    doubleClick(locator) {
      this.getElement(locator).dblclick();
    }

    rightClick(locator) {
      this.getElement(locator).rightclick();
    }


    verifyGlobalTextExists(text) {
        cy.contains(text).should('exist')
      }

      hover(locator) {
        this.getElement(locator).trigger('mouseover')
      }

      selectDropdown(locator, value) {
        this.getElement(locator).select(value)
      }

      checkCheckbox(locator) {
        this.getElement(locator).check()
      }

      uncheckCheckbox(locator) {
        this.getElement(locator).uncheck()
      }

      uploadFile(locator, filePath) {
        this.getElement(locator).selectFile(filePath)
      }

      verifyUrlContains(text) {
        cy.url().should('include', text)
      }

      verifyText(locator, expectedText) {
        this.getElement(locator).should('have.text', expectedText)
      }

      verifyValue(locator, expectedValue) {
        this.getElement(locator).should('have.value', expectedValue)
      }

      verifyElementVisible(locator) {
        this.getElement(locator).should('be.visible')
      }

      verifyElementNotExist(locator) {
        this.getElement(locator).should('exist')
      }

      waitForElement(locator, timeout = 1000) {
        this.getElement(locator, {timeout}).should('exist')
      }

      waitForTextElement(locator,text, timeout = 1000) {
        this.getElement(locator).contains(text, {timeout}).should('be.visible')
      }

      waitForTextGlobal(text, timeout = 1000) {
        cy.contains(text, {timeout}).should('be.visible')
      }

      switchToIframe(iframeLocator) {
        return this.getElement(iframeLocator).then(($iframe) => {
          const iframeContent = $iframe.contents()
          return cy.wrap(iframeContent.find('body'))
        })
      }

      acceptAlert() {
        cy.on('window:alert', (text) => true)
      }

      dismissAlert() {
        cy.on('window:confirm', () => false)
      }

      scrollToElement(locator) {
        this.getElement(locator).scrollIntoView
      }

      takeScreenshot(name) {
        cy.screenshot(name)
      }

      dragAndDrop(sourceLocator, targetLocator) {
        this.getElement(sourceLocator).drag(targetLocator)
      }


  }
  
  export default BasePage