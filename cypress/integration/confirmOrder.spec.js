import { testUrl } from "../testUrls";

describe("Confirm Order wrong entry", () => {
    it("should not allow access without cart and order details", () => {
        cy.visit(`${testUrl}/confirm`);
        cy.url().should("not", "include", "/confirm");
    });
    it("should not allow access with cart but without order details", () => {
        cy.get("[data-cy=1add]").click();
        cy.get("[data-cy=3add]").click();
        cy.get("[data-cy=5add]").click();
        cy.visit(`${testUrl}/confirm`);
        cy.url().should("not", "include", "/confirm");
    });
});

describe("Confirm Order", () => {
    it("should accurately reflect shopping cart", () => {
        cy.visit(testUrl);
        cy.get("[data-cy=1add]").click();
        cy.get("[data-cy=3add]").click();
        cy.get("[data-cy=5add]").click();
        cy.get("[data-cy=cartIcon]").click();
        cy.get("[data-cy=1cartItemAddOne]").click();
        cy.get("[data-cy=1cartItemAddOne]").click();
        cy.get("[data-cy=5cartItemAddOne]").click();
        cy.get("[data-cy=checkout]").click();
        cy.get("[data-cy=nameInput]").type("TestName");
        cy.get("[data-cy=contactInput]").type("12-1234-1234");
        cy.get("[data-cy=addressInput]").type("123 Street");
        cy.get("[data-cy=continueButton]").click();
        cy.url().should("include", "/confirm");
        cy.get("[data-cy=1cartItem]");
        cy.get("[data-cy=3cartItem]");
        cy.get("[data-cy=5cartItem]");
        cy.get("[data-cy=subtotal]").contains("$ 71.50");
        cy.get("[data-cy=shipping]").contains("$ 5.00");
        cy.get("[data-cy=total]").contains("$ 76.50");
    });

    it("should accurately reflect order details", () => {
        cy.get("[data-cy=detailName]").contains("TestName");
        cy.get("[data-cy=detailContact]").contains("12-1234-1234");
        cy.get("[data-cy=detailAddress]").contains("123 Street");
    });

    it("accurately reflects both Euro and Dollar prices", () => {
        cy.get("[data-cy=euro]").click();

    });
});