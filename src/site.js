import init from "./init.js";
import toys from "../data/toys.js";
import clickBasketButton from "./clickBaskeButton.js";
import searchFromCards from "./searchFromCards.js";

const site = () => {
  init(toys);
  clickBasketButton();
  searchFromCards(toys);
};

export default site;
