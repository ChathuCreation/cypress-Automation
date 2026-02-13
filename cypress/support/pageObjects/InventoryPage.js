class InventoryPage {

  firstAddToCartButton() {
    return cy.get(".inventory_item").first().find("button");
  }

  cartBadge() {
    return cy.get(".shopping_cart_badge");
  }

  addFirstItemToCart() {
    this.firstAddToCartButton().click();
  }

  assertCartCount(expected) {
    this.cartBadge()
      .should("be.visible")
      .and("have.text", expected.toString());
  }
}

export default new InventoryPage();
