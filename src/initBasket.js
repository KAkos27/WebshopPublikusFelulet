import generateBasketText from "./generateBasketText.js";
import createHtmlElement from "./createHtmlElement.js";
import removeFromBasket from "./removeFromBasket.js";

const initBasket = (basket) => {
  const basketContainer = $(".basket");
  const basketText = generateBasketText(basket);
  createHtmlElement(basketContainer, basketText);
  removeFromBasket(basket);
};

export default initBasket;
