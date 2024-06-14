/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
    cy.task("log","Env is " + Cypress.env('env'))
    cy.task("log","Barfoo is " + Cypress.env('barfoo'))
  })
})
