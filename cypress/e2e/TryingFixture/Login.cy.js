
/// <reference types='Cypress'/>


describe("Validate Login Scenarios", () => {

    beforeEach(function () {

        cy.fixture('credentials')
            .then(credentials => {
                this.credentials = credentials;
            });
    });

    it('Standard User', function () {
        cy.visit("https://rahulshettyacademy.com/angularpractice/");

        cy.get('input[name="name"]:nth-child(2)').type(this.credentials.name);

    });


});













