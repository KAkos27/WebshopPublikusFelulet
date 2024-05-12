import initBasket from "./initBasket.js";

const removeFromArray = (toys, index) => {
  const moreThanOne = toys[index].amount > 1;
  if (moreThanOne) {
    toys[index].amount--;
  } else {
    toys.splice(index, 1);
  }
  return toys;
};

const removeFromBasket = (toys) => {
  const deleteButton = $(".delete-button");
  deleteButton.on("click", (event) => {
    let index = event.target.id;
    index = index.toString();
    index = index.replace("r", "");
    index = parseInt(index);
    const orderedArray = removeFromArray(toys, index);
    initBasket(orderedArray);
  });
};

export default removeFromBasket;
