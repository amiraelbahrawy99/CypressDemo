
/// <reference types='Cypress'/>

// const { describe } = require("mocha");

describe("Retrytest", () => {


    it("Todo List", () => {

        cy.visit("http://todomvc-app-for-testing.surge.sh/");
        cy.get(".new-todo")
            .type("todo1{enter}")
            .type('todo2{enter}');

        cy.get('.todo-list >li')
            .should('have.length', 2);
    });



});

