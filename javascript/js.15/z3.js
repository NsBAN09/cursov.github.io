let user = {
    name:'Пеnро' ,
    lastname:'Перикович',
    age:'8',
    email:`petya8@gmail.com`,
    misto:`Хмильнитький`
}
function showUser(){
    document.getElementById(`table`).innerHTML = `<table>
    <tr>
    <th>Ім'я</th>
    <th>Прізвище</th>
    <th>Вік</th>
    <th>Емейл</th>
    <th>Місто</th>
    </tr>
    <tr>
        <td>${user.name}</td>
        <td>${user.lastname}</td>
        <td>${user.age}</td>
        <td>${user.email}</td>
        <td>${user.misto}</td>
    </tr>
    
    </table>`;
}


function changeNema(x){
    user.name=x;
    showUser();
}
function changeLastName(x){
    user.lastname=x;
    showUser();
}
function changeAge(x){
    user.age=x;
    showUser();
}
function chengeEmail(x){
    user.email=x;
    showUser();
}
function changeCity(x){
    user.misto=x;
    showUser();
}
function changeUserDaty(x,y,t,p,e){
    user.name=x;
    user.lastname=y;
    user.age=t;
    user.email=p;
    user.misto=e;
    showUser();
}
function delUser(){
    document.getElementById(`table`).innerHTML = ``;
}