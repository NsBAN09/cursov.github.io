let parametr_kartoshka = ["Солодка","Жарена","Кругла","Варена"];
let mishok = document.getElementById(`spisok`)

let kartoshka = "<h1>Яка є картожка:</h1>";
for(i=0; i<parametr_kartoshka.length; i++){
if(i%2==0){
kartoshka += `<h1>${i+1}.${parametr_kartoshka[i]} картожка</h1>`;
    }else{
kartoshka+=`<h1 class="red">${i+1}.${parametr_kartoshka[i]} картожка</h1>`;
    }
}
mishok.innerHTML = kartoshka;