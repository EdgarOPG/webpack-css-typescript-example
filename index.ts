//  app/index.js
declare var require: any;

const firebase = require('firebase');

//import CSS
//require('./styles.css');
require('./styles.scss');

window.onload = function(){
  var helloWord = document.getElementById('helloWord');

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDsTXVSfZRy-fbLBlXciLmRvUNXkVT5FaA",
    authDomain: "myproject-8847d.firebaseapp.com",
    databaseURL: "https://myproject-8847d.firebaseio.com",
    projectId: "myproject-8847d",
    storageBucket: "",
    messagingSenderId: "559633759481"
  };
  firebase.initializeApp(config);

  var fbRef = firebase.database().ref().child('text');
  fbRef.on('value', snap => helloWord.innerHTML = snap.val() );

}

//import Logger
var Logger = require('./ts/logger.ts');

enum Color {Red, Green, Blue};
var c: Color = Color.Blue;

//update content of greeting element when DOM has been loaded
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('greeting').innerHTML = "Hello my friend!!";
    Logger(c);
})
