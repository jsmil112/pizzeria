import { testAPI } from "../testUrls";

describe("pizzeria API", () => {
    it("successfully retrieves product list", () => {
      cy.request("GET", `${testAPI}/products`).should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.length(8);
          response.body.forEach((item) => {
              expect(item).to.have.property("id");
              expect(item).to.have.property("name");
              expect(item).to.have.property("category");
              expect(item).to.have.property("dollar_price");
              expect(item).to.have.property("euro_price");
              expect(item).to.have.property("description");
              expect(item).to.have.property("created_at");
              expect(item).to.have.property("updated_at");
          });
      });
    });
    it("successfully creates a new order", () => {
        cy.request("POST", `${testAPI}/order`, {
            "data": {
                "name": "Test Order",
                "contact_number": "51-2222-1231",
                "address": "123 Cypress Test",
                "subtotal": "123.45",
                "shipping": "5.00",
                "total": "128.45",
                "items": [{
                    "id": 1,
                    "quantity": 2,
                    "item_total": "45.00"
                },
                {
                    "id": 3,
                    "quantity": 1,
                    "item_total": "12.00"
                },
                {
                    "id": 5,
                    "quantity": 1,
                    "item_total": "13.50"
                }]
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("data");
            expect(response.body.data).to.have.property("name", "Test Order");
            expect(response.body.data).to.have.property("contact_number", "51-2222-1231");
            expect(response.body.data).to.have.property("address", "123 Cypress Test");
            expect(response.body.data).to.have.property("subtotal", "123.45");
            expect(response.body.data).to.have.property("shipping", "5.00");
            expect(response.body.data).to.have.property("total", "128.45");
            expect(response.body.data.order_items).to.have.length(3);
        });
    });
  });