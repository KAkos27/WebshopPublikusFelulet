import basket from "../data/basket.js";
import toys from "../data/toys.js";
import initBasket from "./initBasket.js";

const addToBasketList = (i) => {
  const product = { name: toys[i].name, price: toys[i].price };
  basket.push(product);
};

const addToBasket = () => {
  const cards = $(".card");
  cards.on("click", (event) => {
    addToBasketList(event.target.id);
    initBasket(basket);
  });
};

export default addToBasket;
