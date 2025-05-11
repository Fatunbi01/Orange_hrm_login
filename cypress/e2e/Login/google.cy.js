/// <reference types="cypress" />
describe('Simple google test', () => {
    it('login test', () => {
        cy.visit('https://google.com/')
    })
})