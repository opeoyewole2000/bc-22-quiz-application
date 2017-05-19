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
let answerRefObj;
let question_number = 1;
let trackSessionScore =0;
let numberOfQuestions;
let currentChoice;
let currentAnswer;
let dbQuestionCount =1;

//const userWelcomeName = document.getElementById('welcomeName');

//console.log(txtEmail.value);

const auth = firebase.auth();


//const retrieveUserRefObject = firebase.database().ref('answer_table');

// retrieveUserRefObject.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

// Retrieve new posts as they are added to our database
//retrieveUserRefObject.on("child_added", function(snapshot, prevChildKey) {
//  var newPost = snapshot.val();
//  console.log("Author: " + newPost.Email);
//  console.log("Title: " + newPost.Fullname);
//  console.log("Previous Post ID: " + prevChildKey);
//});

  
    


answerRefObj = firebase.database().ref('answer_table');
answerRefObj.once('value',function(answers){
  //console.log(answers.val().answer);
    //console.log(answers.val().choice);
    
//    currentChoice = answers.val().choice;
//    currentAnswer = answers.val().answer;
   
    
   // var newPost = answers.val();
    //console.log(answers.numChildren());
    numberOfQuestions = answers.numChildren();
//    $('#tableBodyAnswers').append(
//     ' <tr> <td>'+question_number++ +'</td>  <td>'+newPost.question +'</td>   <td>'+newPost.choice+'</td>  <td>'+newPost.answer+'</td>    </tr>'
   for(let i=1;i<=numberOfQuestions;i++)
         {
 answersRefObj = firebase.database().ref('answer_table/question_'+i+'');
     
 
currentChoice = answers.child('question_'+i+'').val().choice;
     currentAnswer = answers.child('question_'+i+'').val().answer;
              if(currentAnswer === currentChoice){
        
        trackSessionScore++;
    }
             
         }


console.log(trackSessionScore);
    
    document.getElementById('numCorrect').innerHTML = trackSessionScore;
    document.getElementById('numQuestions').innerHTML = numberOfQuestions;
     document.getElementById('slash').innerHTML = '/';
 });



 




answersRefObj = firebase.database().ref('answer_table');
answersRefObj.on('child_added',function(answers){
  console.log(answers.val().answer);
    var newPost = answers.val();
  //  console.log(answers.numChildren());
    
    $('#tableBodyAnswers').append(
     ' <tr> <td>'+question_number++ +'</td>  <td>'+newPost.question +'</td>   <td>'+newPost.choice+'</td>  <td>'+newPost.answer+'</td>    </tr>'
    )
//answersRefObj.set({
//question :  currentQuestion,
//answer : currentAnswer,
//choice : selectedAnswer
//
//});
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
		console.log("not logged in");
window.location.href = '/sign_in';
}
	
});



