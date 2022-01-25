import BasePage from "../pages/base.page";
import HomePage from "../pages/home.page";
import CartPage from "../pages/cart.page";

class SunscreenPage extends BasePage {
  buySunscreens() {
    HomePage.buySunscreensButton().click();
    this.getLeastExpensiveItemWith("SPF-50");
    this.getLeastExpensiveItemWith("SPF-30");
    this.clickCartButton();
    CartPage.areAddedItemsVisibleInCart("SPF-50", "SPF-30");
  }
}

export default new SunscreenPage();
