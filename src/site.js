import init from "./init.js";
import toys from "../data/toys.js";
import clickBasketButton from "./clickBaskeButton.js";
import searchFromCards from "./searchFromCards.js";
import initBasket from "./initBasket.js";

const site = () => {
  init(toys);
  initBasket();
  clickBasketButton();
  searchFromCards(toys);
};

export default site;
