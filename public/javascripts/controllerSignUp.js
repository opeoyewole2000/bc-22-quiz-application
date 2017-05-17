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


const txtEmail = document.getElementById('inputEmail');
const txtPassword = document.getElementById('inputPassword');
const txtFullName = document.getElementById('fullName');
const btnSignUp = document.getElementById('btnSignUp');
const btnSignIn = document.getElementById('btnSignIn');
const btnLogout = document.getElementById('btnLogout');

//console.log(txtEmail.value);

const auth = firebase.auth();


  const usersRefObject = firebase.database().ref().child('Users');

  //sync data in real realtime
  usersRefObject.on('child_added',snap => console.log(snap.val()));//using value event type

  


 btnSignUp.addEventListener('click',e =>{
  
const email = txtEmail.value;
const password = txtPassword.value;
const fullName = txtFullName.value;
console.log(email);




const promise = auth.createUserWithEmailAndPassword(email,password);

promise.catch(e => console.log(e.message));
promise.then(function(user){
  if(user){
    const currentProfile = firebase.auth().currentUser;
  currentProfile.updateProfile({
  displayName: fullName
  //photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Profile updated successfully!
  // "Jane Q. User"
  var displayName = currentProfile.displayName;
  console.log(displayName);
  // "https://example.com/jane-q-user/profile.jpg"
  //var photoURL = user.photoURL;
}, function(error) {
  // An error happened.
});

usersRefObject.push({
Email : email,
Fullname : fullName,
Score : '0',
Level : 'Beginner'

});


    window.location = "/dashboard";
  }
});

 });



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
	window.location = '/dashboard';
		}else{
		console.log("not logged in");
}
	})



