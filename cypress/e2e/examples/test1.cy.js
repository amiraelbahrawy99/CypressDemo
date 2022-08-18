/// <reference types='Cypress'/>

// const { describe } = require("mocha");

describe("First test", () => {

    before(function () {

        cy.log("Welcome All");
    });


    beforeEach(function () {

        cy.log("Repeated 3ady")

    });

    afterEach(function () {

        cy.log("Repeated after 3ady")

    });


    it("Welcome Amira", () => {
        cy.log("Welcome Amira")
    });

    it.skip("Welcome Sara", () => {
        cy.log("Welcome Sara")
    });


    it("Welcome Rana", () => {
        cy.log("Welcome Rana")
    });




});