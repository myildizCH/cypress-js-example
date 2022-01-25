/// <reference types="cypress" />

import HomePage from "../pages/home.page";
import MoisturizersPage from "../pages/moisturizers.page";
import SunscreenPage from "../pages/sunscreen.page";

before(() => {
  cy.visit("");
});
it("adds correct items to the cart depending on the current temperature", () => {
  HomePage.currentTemperatureValue().then((el) => {
    const temperature = parseInt(el.text());

    if (temperature < 19) {
      MoisturizersPage.buyMoisturizers();
    } else if (temperature > 34) {
      SunscreenPage.buySunscreens();
    } else {
      cy.log(
        `The temperature is: ${temperature}. Test could not be executed since the value is between 19 and 34 Celcius`
      );
    }
  });
});
