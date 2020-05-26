import { testUrl } from "../testUrls";

describe("Order Placed", () => {
    it("does not allow direct access by url", () => {
        cy.visit(`${testUrl}/orderplaced`);
        cy.url().should("not", "include", "/orderplaced");
    });
    it("allows access through confirming order", () => {
        cy.visit(testUrl);
        cy.get("[data-cy=1add]").click();
        cy.get("[data-cy=3add]").click();
        cy.get("[data-cy=5add]").click();
        cy.get("[data-cy=cartIcon]").click();
        cy.get("[data-cy=checkout]").click();
        cy.get("[data-cy=nameInput]").type("TestName");
        cy.get("[data-cy=contactInput]").type("12-1234-1234");
        cy.get("[data-cy=addressInput]").type("123 Street");
        cy.get("[data-cy=continueButton]").click();
        cy.get("[data-cy=placeOrder]").click();
        cy.get("[data-cy=processPopup]");
        cy.wait(2000);
        cy.url().should("include", "/orderplaced");
    });
});