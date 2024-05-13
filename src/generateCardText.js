const generateCardText = (toys) => {
  let text = ``;
  toys.forEach((toy, i) => {
    text += `
      <div class='card'>
        <h3><strong>${toy.name}</strong></h3>
        <p>${toy.info}</p>
        <p><strong>${toy.price} Ft</strong></p>
        <button class='card__add-button' id=${i}>Kosárba</button>
        <img src='assets/toy-pic.svg' alt=''>
      </div>`;
  });
  return text;
};

export default generateCardText;
