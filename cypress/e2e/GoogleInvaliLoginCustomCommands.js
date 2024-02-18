
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
  
    cy.singleClickForce(login.login())
    cy.urlInclude(login.loginPageTitle())    

    cy.singleClickForce(login.loginWithGoogle())
    cy.urlInclude("")
  

  })
})