import generateBasketText from "./generateBasketText.js";
import createHtmlElement from "./createHtmlElement.js";
import removeFromBasket from "./removeFromBasket.js";
import increaseBasketAmount from "./increaseBasketAmount.js";

const initBasket = (basket) => {
  const basketContainer = $(".basket");
  const basketText = generateBasketText(basket);
  createHtmlElement(basketContainer, basketText);
  removeFromBasket(basket);
  increaseBasketAmount(basket);
};

export default initBasket;
