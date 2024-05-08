const generateBasketText = (basket) => {
  let text = `<table>`;
  let final = 0;
  basket.forEach((item, i) => {
    let currentPrice = item.price * item.amount;
    text += `
        <tr>
          <td>${item.name}</td>
          <td>${currentPrice} Ft</td>
          <td>${item.amount} db</td>
          <td class="delete-button" id=r${i}>❌</td>
          <td class="add-button" id="a${i}">➕</td>
        </tr>`;
    final += currentPrice;
  });
  text += `<tr class="sum">
            <td>Végösszeg: </td>
            <td>${final} Ft</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>`;
  text += `</table>`;

  return text;
};

export default generateBasketText;
