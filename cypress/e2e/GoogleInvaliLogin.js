
import login from "../pages/GoogleInvaliLogin.po"

describe('verifying failed step analysis', {
  viewportHeight : 800,
  viewportWidth : 1280,
  },() => {


  it('verifying login with google link', 
  
    
    () => {
    
    cy.on('uncaught:exception', (err, runnable) => {
      return false

    })


    cy.visit('/')
    
    cy.get(login.login()).eq(0).click({force: true})

    cy.url().should('include',login.loginPageTitle())
    
    cy.get(login.loginWithGoogle()).eq(0).click({force: true})
  
    cy.url().should('include',"")



  })
})