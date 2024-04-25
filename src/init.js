import createCards from "./createCards.js";
import addToBasket from "./addToBasket.js";

const init = (toys) => {
  createCards(toys);
  addToBasket();
};

export default init;
