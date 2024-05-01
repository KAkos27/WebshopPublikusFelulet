const generateBasketText = (basket) => {
  let text = `
    <table>
        <tr>
            <th>Termék</th>
            <th>Ár</th>
            <th>Törlés</th>
        </tr> `;

  basket.forEach((item) => {
    text += `<tr>`;
    for (const key in item) {
      text += `<th>${item[key]}</th>`;
    }
    text += `<th>X</th>`;
    text += `</tr>`;
  });
  text += `</table>`;

  return text;
};

export default generateBasketText;
