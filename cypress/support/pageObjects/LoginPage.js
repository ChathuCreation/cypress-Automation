class LoginPage {

  visit() {
    cy.visit("/");
  }

  usernameField() {
    return cy.get("#user-name");
  }

  passwordField() {
    return cy.get("#password");
  }

  loginButton() {
    return cy.get("#login-button");
  }

  login(username, password) {
    this.usernameField().clear().type(username);
    this.passwordField().clear().type(password);
    this.loginButton().click();
  }
}

export default new LoginPage();
