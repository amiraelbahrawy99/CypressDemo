
/// <reference types='Cypress'/>

describe("Validate Login Scenarios", () => {

    beforeEach(function () {

        cy.fixture('credentials')
            .then(credentials => {
                this.credentials = credentials;
            });
        cy.visit("https://rahulshettyacademy.com/angularpractice/");

    });

    it('Register User', function () {
        cy.registerOnPortal(this.credentials.name, this.credentials.email, this.credentials.password);
        cy.regi
    });



});













