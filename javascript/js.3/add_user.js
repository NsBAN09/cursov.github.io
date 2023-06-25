
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


function add_user(){
    let new_user = {
        name: document.getElementById('user_name').value,
        lastname: document.getElementById('user_lastname').value,
        email: document.getElementById('user_email').value,
        password:document.getElementById('user_password').value
    }
    db.collection('usersNew').add(new_user).then(function(){
        console.log('Успіх')
    })
}

