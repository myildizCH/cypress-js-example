import BasePage from "../pages/base.page";
import HomePage from "../pages/home.page";
import CartPage from "../pages/cart.page";

class MoisturizersPage extends BasePage {
  buyMoisturizers() {
    HomePage.buyMoisturizersButton().click();
    this.getLeastExpensiveItemWith("Aloe");
    this.getLeastExpensiveItemWith("Almond");
    this.clickCartButton();
    CartPage.areAddedItemsVisibleInCart("Aloe", "Almond");
  }
}

export default new MoisturizersPage();
