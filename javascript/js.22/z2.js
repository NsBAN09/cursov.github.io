function cards_num(){
    let cards_num = document.getElementById('cards_num').value;
    let cards = document.getElementById('cards')
    let cards2 = '';
    for(i=0;i<cards_num;i++){
        cards2 +=`
        <div class="card">
		  <div class="card-body my-2">
			<h5 class="card-title">Card ${i+1}</h5>
		  </div>
		</div>
        `
    }
    cards.innerHTML = cards2;
}
function changeBG(){
  let yabluki = document.getElementsByClassName('card');
  let cards_fon = document.getElementById('cards_fon').value;

  Array.from(yabluki).map(function(yabluko){
       yabluko.style.background = cards_fon;
  })
}
function changeBG2(){
  let yabluki = document.getElementsByClassName('card');
  let cards_text = document.getElementById('cards_text').value;

  Array.from(yabluki).map(function(yabluko){
      yabluko.style.color = cards_text;
  }) 
} 
function Clear23(){
  let yabluki = document.getElementsByClassName('card');
  Array.from(yabluki).map(function(yabluko){
      yabluko.style.color = "";
      yabluko.style.background = "";
  })
}
function clear2(){
document.getElementById('cards').ineerHTML = '';
}