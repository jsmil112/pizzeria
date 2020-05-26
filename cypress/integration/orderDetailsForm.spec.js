import { testUrl } from "../testUrls";

describe("Order Details without shopping cart", () => {
    it("should not enter page with an empty cart", () => {
        cy.visit(`${testUrl}/orderdetails`);
        cy.url().should("not", "include", "/orderdetails");
    })
});

describe("Order Details", () => {
    beforeEach(()=> {
        cy.visit(testUrl);
        cy.get("[data-cy=1add]").click();
        cy.get("[data-cy=cartIcon]").click();
        cy.get("[data-cy=checkout]").click();
    });
    it("does not allow to continue with empty form", () => {
        cy.get("[data-cy=continueButton]").click();
        cy.url().should("include", "/orderdetails");
        cy.get("[data-cy=popupMessage]");
    });
    it("does not allow to continue without a name", () => {
        cy.get("[data-cy=contactInput]").type("12-1234-1234");
        cy.get("[data-cy=addressInput]").type("123 Street");
        cy.get("[data-cy=continueButton]").click();
        cy.url().should("include", "/orderdetails");
        cy.get("[data-cy=popupMessage]");
    });
    it("does not allow to continue without a contact number", () => {
        cy.get("[data-cy=nameInput]").type("TestName");
        cy.get("[data-cy=addressInput]").type("123 Street");
        cy.get("[data-cy=continueButton]").click();
        cy.url().should("include", "/orderdetails");
        cy.get("[data-cy=popupMessage]");
    });
    it("does not allow to continue without an address", () => {
        cy.get("[data-cy=nameInput]").type("TestName");
        cy.get("[data-cy=contactInput]").type("12-1234-1234");
        cy.get("[data-cy=continueButton]").click();
        cy.url().should("include", "/orderdetails");
        cy.get("[data-cy=popupMessage]");
    });
    it("continues to confirmation ", () => {
        cy.get("[data-cy=nameInput]").type("TestName");
        cy.get("[data-cy=contactInput]").type("12-1234-1234");
        cy.get("[data-cy=addressInput]").type("123 Street");
        cy.get("[data-cy=continueButton]").click();
        cy.url().should("include", "/confirm");
    });
});