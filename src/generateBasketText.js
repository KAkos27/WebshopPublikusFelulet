const generateBasketText = (basket) => {
  let text = `
    <table>
        <tr>
            <th>Termék</th>
            <th>Ár</th>
            <th>Db</th>
            <th>Törlés</th>
        </tr> `;

  basket.forEach((item, i) => {
    text += `<tr>`;
    for (const key in item) {
      text += `<th>${item[key]}</th>`;
    }
    text += ` 
        <th>asd</th>
        <th class="delete-button" id=${i}>❌</th>
      </tr>`;
  });
  text += `</table>`;

  return text;
};

export default generateBasketText;
