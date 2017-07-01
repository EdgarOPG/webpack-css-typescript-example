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
    storageBucket: "myproject-8847d.appspot.com",
    messagingSenderId: "559633759481"
  };
  firebase.initializeApp(config);

  var fbRef = firebase.database().ref().child('productos');
  fbRef.on('value', function(snap){
    console.log(snap.val())
  });

  const txtEmail = <HTMLInputElement>document.getElementById('txtEmail');
  const txtPassword = <HTMLInputElement>document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogoutº = document.getElementById('btnLogout');

  // Add event listeners
  btnLogin.addEventListener('click', e =>{
    // Get email and password values
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign In
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

  });

  // Add event listeners
  btnSignUp.addEventListener('click', e =>{
    // Get email and password values
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign In
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

  });
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
