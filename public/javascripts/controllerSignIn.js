//const firebase = require("firebase");
//require("firebase/auth");


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyB2Kv3Tnjji1265lEMNSIA1m89MbMN-RG4",
    authDomain: "quiz-application-1e070.firebaseapp.com",
    databaseURL: "https://quiz-application-1e070.firebaseio.com",
    projectId: "quiz-application-1e070",
    storageBucket: "quiz-application-1e070.appspot.com",
    messagingSenderId: "836481347433"
  };
  firebase.initializeApp(config);
const db = firebase.database();

const a = 2;
const txtEmail = document.getElementById('inputEmail');
const txtPassword = document.getElementById('inputPassword');
const btnSignUp = document.getElementById('btnSignUp');
const btnSignIn = document.getElementById('btnSignIn');
const btnLogout = document.getElementById('btnLogout');

//console.log(txtEmail.value);

const auth = firebase.auth();

// function signUp(){
  
// const email = txtEmail.value;
// const password = txtPassword.value;
// console.log(email);
// window.location.href = '/dashboard';

// const promise = auth.createUserWithEmailAndPassword(email,password);
// promise.catch(e => console.log(e.message));
// };


// function signIn(){
//  const email = txtEmail.value;
// const password = txtPassword.value;

// const promise = auth.signInWithEmailAndPassword(email,password);
// promise.catch(e => console.log(e.message));
// window.location.href = '/dashboard';

// };




btnSignIn.addEventListener('click',e =>{
const email = txtEmail.value;
const password = txtPassword.value;

const promise = auth.signInWithEmailAndPassword(email,password);
promise.catch(e => console.log(e.message));
promise.then(user => window.location = '/dashboard');

});

//  btnSignUp.addEventListener('click',e =>{
  
// const email = txtEmail.value;
// const password = txtPassword.value;
// console.log(email);
// window.location.href = '/dashboard';



// const promise = auth.createUserWithEmailAndPassword(email,password);
// promise.catch(e => console.log(e.message));
//  });



//  btnLogout.addEventListener('click',e =>{

//  firebase.auth().signOut().then(function() {
//   // Sign-out successful.
//    window.location.href = '/';
// }).catch(function(error) {
//   // An error happened.
// });
//  });



auth.onAuthStateChanged(function(user){
		if(user){
			console.log(user)
window.location.href = '/dashboard';
		
		}else{
		console.log("not logged in")
}
	})



