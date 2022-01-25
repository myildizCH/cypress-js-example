class HomePage {
  currentTemperatureValue() {
    return cy.get("#temperature");
  }

  buyMoisturizersButton() {
    return cy.get('[href="/moisturizer"]');
  }

  buySunscreensButton() {
    return cy.get('[href="/sunscreen"]');
  }
}

export default new HomePage();
