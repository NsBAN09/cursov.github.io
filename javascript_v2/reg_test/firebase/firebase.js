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
var provider = new firebase.auth.GoogleAuthProvider();