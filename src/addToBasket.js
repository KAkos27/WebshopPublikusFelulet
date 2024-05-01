import basket from "../data/basket.js";
import toys from "../data/toys.js";
import createHtmlElement from "./createHtmlElement.js";
import generateBasketText from "./generateBasketText.js";

const addToBasketList = (i) => {
  const product = { name: toys[i].name, price: toys[i].price };
  basket.push(product);
};

const addToBasket = () => {
  const cards = $(".card");
  cards.on("click", (event) => {
    addToBasketList(event.target.id);
    console.log(basket);
    const basketContainer = $(".basket");
    const basketText = generateBasketText(basket);
    createHtmlElement(basketContainer, basketText);
  });
};

export default addToBasket;
