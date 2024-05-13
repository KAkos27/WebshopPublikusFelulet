import toys from "../data/toys.js";
import initBasket from "./initBasket.js";

const addToBasketList = (i) => {
  const product = {
    name: toys[i].name,
    price: toys[i].price,
    amount: toys[i].amount,
  };

  let match = false;
  Object.keys(localStorage).forEach((item) => {
    const currentItem = JSON.parse(localStorage.getItem(item));
    if (currentItem.name === product.name) {
      match = true;
    }
  });

  if (match) {
    const item = JSON.parse(localStorage.getItem(i));
    item.amount++;
    localStorage.removeItem(i);
    localStorage.setItem(i, JSON.stringify(item));
  } else {
    localStorage.setItem(i, JSON.stringify(product));
  }
  match = 0;
};

const addToBasket = () => {
  const addButton = $(".card__add-button");
  addButton.on("click", (event) => {
    addToBasketList(event.target.id);
    initBasket();
  });
};

export default addToBasket;
