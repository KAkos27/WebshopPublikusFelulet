import basket from "../data/basket.js";
import toys from "../data/toys.js";
import initBasket from "./initBasket.js";

const addToBasketList = (i) => {
  i = parseInt(i);
  const product = {
    name: toys[i].name,
    price: toys[i].price,
    amount: toys[i].amount,
  };

  let match = 0;
  let basketIndex;
  basket.forEach((item, index) => {
    if (item.name === product.name) {
      match++;
      basketIndex = index;
    }
  });

  const contains = match > 0;
  if (contains) {
    basket[basketIndex].amount++;
  } else {
    basket.push(product);
  }
  match = 0;
};

const addToBasket = () => {
  const cards = $(".card");
  cards.on("click", (event) => {
    addToBasketList(event.target.id);
    initBasket(basket);
  });
};

export default addToBasket;
