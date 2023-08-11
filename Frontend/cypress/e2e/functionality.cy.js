describe('The basic functionalities of the page', ()=>{
    it('Open Register page', ()=>{
        cy.visit('http://127.0.0.1:5500/Frontend/Register.html')
    })
    it('should include the form inputs and button', ()=>{
        cy.visit('http://127.0.0.1:5500/Frontend/Register.html')
        cy.get('form')
        cy.get('input')
        cy.get('button')
    })
    it('uses contains Log In', ()=>{
        cy.visit('http://127.0.0.1:5500/Frontend/Register.html')
        cy.get('[data-cy="Login"]').contains('Log In')
    })
    it('simulates user Register inputs', ()=>{
        cy.visit('http://127.0.0.1:5500/Frontend/Register.html')
        cy.get('.name').type('Ngatia Mwai')
        cy.get('.email').type('ngatia@gmail.com')
        cy.get('.cohortNumber').type('Cohort 17')
        cy.get('.password').type('1234')
        cy.get('.registerBtn').click()
    })
    it('uses contains Register', ()=>{
        cy.visit('http://127.0.0.1:5500/Frontend/Login.html')
        cy.get('[data-cy="Register"]').contains('Register')
    })
    it('simulates user Log in inputs', ()=>{
        cy.visit('http://127.0.0.1:5500/Frontend/Login.html')
        cy.get('.email').type('email@gmail.com')
        cy.get('.password').type('1234')
        cy.get('.loginBtn').click()
    })
})