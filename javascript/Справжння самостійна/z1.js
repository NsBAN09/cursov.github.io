const users = [`Артем`, 'Марк', 'Влад', 'Макс', 'Андрей', 'Нікіта'];
let table = document.getElementById(`table`);
let data = `<tr>
<th>№</th>
<th>Користувач</th>
<th>Відправити листа</th>
</tr>`
data += `<tr>
<th>1</th>
<th>${names[0]}</th>
<th><input type="checkbox"></th>
</tr>`;


table.innerHTML = data;