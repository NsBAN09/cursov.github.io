const firebaseConfig = {
    apiKey: "AIzaSyBNuajIkIBf3i57QqcXno6agDPFe67yLcc",
    authDomain: "nshtmljs09.firebaseapp.com",
    projectId: "nshtmljs09",
    storageBucket: "nshtmljs09.appspot.com",
    messagingSenderId: "1036412320432",
    appId: "1:1036412320432:web:a08bbd59ea5665249a9975"
  };
  firebase.initializeApp(firebaseConfig);
            var db = firebase.firestore();

let spiner = document.getElementById('spiner');
let list = document.getElementById('list');
let statti = [];

db.collection('articles').get().then(function(res){
    res.forEach(function(title){
            statti.push(title.data())
            spiner.innerHTML = '';
            drawArticle(title.data())
    })

})
console.log(statti)

function drawArticle(data){
    let article = document.createElement('article')

    let title = document.createElement('h2');
    let text = document.createElement('div')
    let avtor = document.createElement('a')

    title.innerHTML = data.title;
    text.innerHTML = data.article;

    avtor.innerHTML = "Оригінал";
     avtor.href = data.author;

     article.appendChild(title);
     article.appendChild(text);
     article.appendChild(avtor);

     list.appendChild(article);

}