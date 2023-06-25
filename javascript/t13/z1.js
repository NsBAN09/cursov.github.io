let klava1 = {
    name:"Клавіатура дтотова Logitech G2 Prodigy USB",
    otziv:204,
    price:1399,
    akci:true,
    img:"z1-2jpg"
}
let klava2 = {
    name:"Клавіатура Cougar Vantar ",
    otziv:6,
    price:1286,
    akci:true,
    img:"z1-3.jpg"
}
let cart = document.getElementById(`products`);
let info = `<div class="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    <img src="${klava1.img}" alt="">
</div>

<div class="card_info">
    <div class="name">
        ${klava1.name}
    </div>
    
    <div class="reviews">
        ${klava1.otziv} відгуки
    </div>
    
    <div class="price">
        ${klava1.price}&#8372;
    </div>
</div>
</div>`;
info += `<div class="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    <img src="${klava2.img}" alt="">
</div>

<div class="card_info">
    <div class="name">
        ${klava2.name}
    </div>
    
    <div class="reviews">
        ${klava2.otziv} відгуки
    </div>
    
    <div class="price">
        ${klava2.price}&#8372;
    </div>
</div>
</div>`
cart.innerHTML = info;

let bal1 = 0;
let bal2 = 0;
if(klava1.price < klava2.price){
bal1 = klava1.price - klava2.price;
}else{
bal2 = klava1.price - klava2.price;
}
bal1= bal1 + klava1.otziv*0.5;