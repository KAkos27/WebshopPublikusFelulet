import initBasket from "./initBasket.js";

const removeFromArray = (toys, index) => {
  toys.splice(index, 1);
  return toys;
};

const removeFromBasket = (toys) => {
  const deleteButton = $(".delete-button");
  deleteButton.on("click", (event) => {
    const index = event.target.id;
    const orderedArray = removeFromArray(toys, index);
    initBasket(orderedArray);
  });
};

export default removeFromBasket;
