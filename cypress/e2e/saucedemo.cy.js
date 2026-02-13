import LoginPage from "../support/pageObjects/LoginPage";
import InventoryPage from "../support/pageObjects/InventoryPage";

describe("SauceDemo E2E Test", () => {

  before(function () {
    cy.fixture("credentials").as("creds");
  });

  it("Logs in and adds first item to cart", function () {

    LoginPage.visit();
    LoginPage.login(this.creds.username, this.creds.password);

    cy.url().should("include", "/inventory");

    InventoryPage.addFirstItemToCart();
    InventoryPage.assertCartCount(1);

  });

});
