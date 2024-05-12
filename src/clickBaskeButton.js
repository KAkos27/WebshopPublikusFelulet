const clickBasketButton = () => {
  const basketButton = $(".basket-button");
  basketButton.on("click", () => {
    const basket = $(".basket");
    basket.toggleClass("invisible");
  });
};

export default clickBasketButton;
