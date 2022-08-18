/// <reference types='Cypress'/>


describe("Validate location attributes", () => {

    beforeEach(function () {

        cy.visit("https://rahulshettyacademy.com/angularpractice/");

    });

    it("Title should be shown as ProtoCommerce", () => {
        cy.title().should('eq', 'ProtoCommerce')
    });


    it("URl should be https://rahulshettyacademy.com/angularpractice/", () => {
        cy.url().should('eq', 'https://rahulshettyacademy.com/angularpractice/');

    });


    it("Hostname should be rahulshettyacademy.com", () => {
        cy.location('hostname').should('eq', 'rahulshettyacademy.com')

    });


    it("Protocol should contains https", () => {
        cy.location('protocol').should('contain', 'https')

    });




});










