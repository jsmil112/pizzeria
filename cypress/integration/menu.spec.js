import { testUrl } from "../testUrls";

describe("Menu Page", () => {
    beforeEach(()=> {
        cy.visit(testUrl);
    });
    it("appears to add the remove single menu item", () => {
        cy.wait(700);
        cy.get("[data-cy=1add]").click();
        cy.get("[data-cy=1remove]").click();
        cy.get("[data-cy=1add]");
    });
    it("appears to add the remove different menu items", () => {
        cy.wait(700);
        cy.get("[data-cy=1add]").click();
        cy.get("[data-cy=1remove]");
        cy.get("[data-cy=2add]").click();
        cy.get("[data-cy=2remove]");
        cy.get("[data-cy=1remove]");
        cy.get("[data-cy=2remove]").click();
        cy.get("[data-cy=1remove]").click();
        cy.get("[data-cy=1add]");
        cy.get("[data-cy=2add]");
    });
    it("keeps added items in localstorage then removes them", () => {
        cy.wait(700);
        cy.clearLocalStorage();
        cy.get("[data-cy=1add]").click();
        cy.get("[data-cy=2add]").click();
        cy.get("[data-cy=5add]").click();
        cy.wait(100).then(()=>{
            expect(Object.keys(JSON.parse(localStorage.getItem("shoppingCart")))).to.have.length(3);
        })
        cy.reload();
        cy.get("[data-cy=1remove]");
        cy.get("[data-cy=2remove]");
        cy.get("[data-cy=5remove]");
        cy.wait(100).then(()=>{
            expect(Object.keys(JSON.parse(localStorage.getItem("shoppingCart")))).to.have.length(3);
        })    
        cy.get("[data-cy=1remove]").click();
        cy.get("[data-cy=2remove]").click();
        cy.get("[data-cy=5remove]").click();
        cy.wait(100).then(()=>{
            expect(Object.keys(JSON.parse(localStorage.getItem("shoppingCart")))).to.have.length(0);
        })    
    });

    it("changes price from dollar to euro and back to dollar", () => {
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
    })
  })