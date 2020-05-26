import { testUrl } from "../testUrls";

describe("The shopping cart", () => {
    it("shows empty cart message and no checkout button", () => {
        cy.visit(testUrl);
        cy.get("[data-cy=cartIcon]").click();
        cy.get("[data-cy=emptyCart]").contains("Your cart is empty");
        cy.get("[data-cy=checkout]").should("not","exist");
    })

    it("adds items to the shopping cart", () => {
        cy.visit(testUrl);
        cy.get("[data-cy=1add]").click();
        cy.get("[data-cy=2add]").click();
        cy.get("[data-cy=5add]").click();
        cy.get("[data-cy=cartIcon]").click().then(()=>{
            cy.url().should("include", "/cart");
            cy.get("[data-cy=1cartItem]");
            cy.get("[data-cy=2cartItem]");
            cy.get("[data-cy=5cartItem]");
        })
    });

    it("increases shopping cart item quantity", () => {
        cy.get("[data-cy=5cartItemAddOne]").click();
        cy.get("[data-cy=5cartItemQuantity]").contains(2);
        cy.get("[data-cy=5cartItemAddOne]").click();
        cy.get("[data-cy=5cartItemAddOne]").click();
        cy.get("[data-cy=5cartItemQuantity]").contains(4);
    });

    it("decreases shopping cart item quantity", () => {
        cy.get("[data-cy=5cartItemRemoveOne]").click();
        cy.get("[data-cy=5cartItemQuantity]").contains(3);
        cy.get("[data-cy=5cartItemRemoveOne]").click();
        cy.get("[data-cy=5cartItemRemoveOne]").click();
        cy.get("[data-cy=5cartItemQuantity]").contains(1);
    });
    
    it("displays popup when quantity would reach 0", () => {
        cy.get("[data-cy=5cartItemRemoveOne]").click();
        cy.get("[data-cy=removePopup]");
    });

    it("cancels popup closes popup and keeps item", () => {
        cy.get("[data-cy=cancelButton]").click();
    });

    it("removes item from cart on popup removes button click", () => {
        cy.get("[data-cy=5cartItemRemoveOne]").click();
        cy.get("[data-cy=removePopup]");
        cy.get("[data-cy=removeButton]").click();
        cy.get("[data-cy=removePopup]").should("not.exist");
        cy.get("[data-cy=5cartItem]").should("not.exist");
    });

    it("changes currency from dollar to euro and back to dollar", () => {
        cy.get("[data-cy=itemPrice]").each($el => {
            cy.wrap($el).contains("$");
        })
        cy.get("[data-cy=euro]").click();
        cy.get("[data-cy=itemPrice]").each($el => {
            cy.wrap($el).contains("€");
        })
        cy.get("[data-cy=dollar]").click();
        cy.get("[data-cy=itemPrice]").each($el => {
            cy.wrap($el).contains("$");
        })
    });

    it("keeps added item quantities in localstorage", () => {
        cy.wait(700);
        cy.get("[data-cy=1cartItemAddOne]").click();
        cy.get("[data-cy=1cartItemAddOne]").click();
        cy.get("[data-cy=1cartItemAddOne]").click();
        cy.get("[data-cy=2cartItemAddOne]").click();
        cy.get("[data-cy=1cartItemQuantity]").contains(4);
        cy.get("[data-cy=2cartItemQuantity]").contains(2);
        cy.reload();
        cy.wait(100).then(()=>{
            expect(JSON.parse(localStorage.getItem("shoppingCart"))[1]).to.eql(4);
            expect(JSON.parse(localStorage.getItem("shoppingCart"))[2]).to.eql(2);
        })  
    });

});