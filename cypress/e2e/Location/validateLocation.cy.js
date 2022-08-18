/// <reference types='Cypress'/>

describe("Validate location attributes", () => {

    beforeEach(function () {

        cy.visit('https://www.saucedemo.com/');
    })

    it("Title should be shown as Swag Labs", () => {
        it("Title should be shown as Swag Labs", () => {
            cy.title().should('eq', 'Swag Labs');
        });


    });




});