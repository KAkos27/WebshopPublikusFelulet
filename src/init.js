import createCards from "./createCards.js";
import addToBasket from "./addToBasket.js";
import clickBasketButton from "./clickBaskeButton.js";

const init = (toys) => {
  createCards(toys);
  addToBasket();
  clickBasketButton();
};

export default init;
