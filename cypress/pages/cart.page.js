class CartPage {
  /**
      * asserts if the items are added and visible in cart page
      * it passes only both items are visible in the cart
      * @example
      ```
      areAddedItemsVisibleInCart("Aloe", "Almond"); // parameters are case insensitive
      ```
      */
  areAddedItemsVisibleInCart(item1, item2) {
    cy.get("table")
      .invoke("text")
      .then((txt) => {
        const innerText = txt.toLowerCase();
        expect(innerText).to.contain(item1.toLowerCase());
        expect(innerText).to.contain(item2.toLowerCase());
      });
  }
}

export default new CartPage();
