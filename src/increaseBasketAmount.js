import initBasket from "./initBasket.js";

const increaseAmount = (toys, index) => {
  toys[index].amount++;
  return toys;
};

const increaseBasketAmount = (toys) => {
  const addButton = $(".add-button");
  addButton.on("click", (event) => {
    let index = event.target.id;
    index = index.toString();
    index = index.replace("a", "");
    index = parseInt(index);
    const orderedArray = increaseAmount(toys, index);
    initBasket(orderedArray);
  });
};

export default increaseBasketAmount;
