import createCards from "./createCards.js";
import addToBasket from "./addToBasket.js";
import clickBasketButton from "./clickBaskeButton.js";
import orderCards from "./orderCards.js";

const init = (toys) => {
  createCards(toys);
  addToBasket();
  clickBasketButton();
  orderCards(toys);
};

export default init;
