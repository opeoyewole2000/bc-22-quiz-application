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
const btnSignUp = document.getElementById('btnSignUp');
const btnSignIn = document.getElementById('btnSignIn');
const btnLogout = document.getElementById('btnLogout');
const userFullname = document.getElementById('userFullname');
//const userWelcomeName = document.getElementById('welcomeName');



//console.log(txtEmail.value);

const auth = firebase.auth();


const retrieveLeaderBoardRefObject = firebase.database().ref('Users');

// retrieveUserRefObject.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

// Retrieve new posts as they are added to our database
retrieveLeaderBoardRefObject.on("child_added", function(snapshot, prevChildKey) {
  var newPost = snapshot.val();
  console.log("Author: " + newPost.Email);
  console.log("Title: " + newPost.Fullname);
  console.log("Previous Post ID: " + prevChildKey);
    
    $('#tableBody').append(
    ' <tr> <td>1</td>  <td>'+newPost.Fullname+'</td>   <td>'+newPost.Score+'</td>  <td>'+newPost.Level+'</td>   </tr>'
);
});


 btnLogout.addEventListener('click',e =>{

 firebase.auth().signOut();
  // Sign-out successful.
  

 });



auth.onAuthStateChanged(function(user){
		if(user){
      const currentProfile = firebase.auth().currentUser;
			console.log(currentProfile.displayName);
      userFullname.innerHTML = currentProfile.displayName;
	//userWelcomeName.innerHTML = currentProfile.displayName;
		}else{
		console.log("not logged in")
window.location.href = '/sign_in';
}
	})



