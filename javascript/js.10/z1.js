let imya = prompt(`Ведіть своє ім'я`);
let email = prompt(`Ведіть свою пошту`);
let username = document.getElementById(`username`);
username.innerHTML= `<a>${imya}</a>`;
let text = document.getElementById(`text`)
text.innerHTML = `<br><br><h2 align="center">Вітаю ${imya}На вашу тпоштову скриньку<br> ${email}відправлено лист із пітвердженням!</h2>`;
