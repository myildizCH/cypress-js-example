export default class BasePage {
  cartButton() {
    return cy.get("#cart");
  }

  addItemToCart(ingredient, minPrice) {
    return cy.get(`[onClick*='${ingredient}' i][onClick*='${minPrice}']`);
  }

  listOfItems() {
    return cy.get(".text-center.col-4");
  }

  clickCartButton() {
    this.cartButton().click();
    cy.url().should("eq", Cypress.config().baseUrl + "cart");
  }

  /**
      * adds the least expensive items with a given ingredient to the cart
      * @example
      ```
      getLeastExpensiveItemWith("Aloe"); // parameter is case insensitive
      ```
      */
  getLeastExpensiveItemWith(ingredient) {
    this.listOfItems().then(($els) => {
      // make array of prices for given ingredient
      const array = Cypress.$.makeArray($els)
        .map((el) => el.innerText)
        .filter((txt) => txt.toLowerCase().includes(ingredient.toLowerCase()))
        .map((arr) => arr.match(/(?<=(Price:|Rs.)).s*(\d+)/)[0]);

      // find the minimum price
      const minPrice = Math.min(...array);

      // add least expensive item to the cart if exists
     if(minPrice!==Infinity) {
        this.addItemToCart(ingredient, minPrice).click();
     } else {
         cy.log("Item could not have been found!");
     }
      
    });
  }
}
