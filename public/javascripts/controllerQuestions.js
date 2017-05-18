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
const question_number = document.getElementById('question_number');
let theQuestion = document.getElementById('the_question');
let dbQuestionCount = 1;
let questionsObject;
let selectedAnswer;
let currentQuestion;
let currentAnswer;
  let currentProfile;
//let option_a =  document.getElementById('option_a');
//let option_b=  document.getElementById('option_b');
//let option_c =  document.getElementById('option_c');
//let option_d =  document.getElementById('option_d');

console.log(option_a.value);

let question_number_count = 1;

theQuestion.innerHTML ='Who am i';
question_number.innerHTML = question_number_count;

//console.log(txtEmail.value);

const auth = firebase.auth();


const retrieveUserRefObject = firebase.database().ref('Questions');

firebase.database().ref('Questions').once('value').then(function(questions){
//        res.render('generaltech', { questions: questions.val()
console.log(questions.numChildren())
questionsLength = questions.numChildren();

    questionsObject = questions;
    console.log(questions.child('question_'+dbQuestionCount+'').val().answer);





  // Run code

       // $("input[name='option_b']")
    
    
    theQuestion.innerHTML = questionsObject.child('question_'+dbQuestionCount+'').val().question;
    $('#option_a').get(0).nextSibling.data = questionsObject.child('question_'+dbQuestionCount+'').val().option_a;
    $('#option_b').get(0).nextSibling.data = questionsObject.child('question_'+dbQuestionCount+'').val().option_b;
    $('#option_c').get(0).nextSibling.data = questionsObject.child('question_'+dbQuestionCount+'').val().option_c;
    $('#option_d').get(0).nextSibling.data = questionsObject.child('question_'+dbQuestionCount+'').val().option_d;
    
   //  $('input[id=option_b]').html(questionsObject.child('question_'+dbQuestionCount+'').val().option_b);
    //   $('label[for=option_b]').html(questionsObject.child('question_'+dbQuestionCount+'').val().option_b);
//       $('label[for=option_c]').html(questionsObject.child('question_'+dbQuestionCount+'').val().option_c);
//       $('label[for=option_d]').html(questionsObject.child('question_'+dbQuestionCount+'').val().option_d);

});




    


// retrieveUserRefObject.on("value", function(snapshot) {
//   console.log(snapshot.val());
// }, function (errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });

// Retrieve new posts as they are added to our database
//retrieveUserRefObject.once("value", function(snapshot, prevChildKey) {
//  var newPost = snapshot.val().length;
//    alert(newPost);
//   
   
//  console.log("Author: " + newPost.);
//  console.log("Title: " + newPost.Fullname);
//  console.log("Previous Post ID: " + prevChildKey);
//});

 btnLogout.addEventListener('click',e =>{

 firebase.auth().signOut();
  // Sign-out successful.
  

 });


 btnNextQuestion.addEventListener('click',e =>{
     
     console.log(currentProfile.email);
     
     answersRefObj = firebase.database().ref('answer_table/question_'+dbQuestionCount+'');
     
     
currentQuestion = questionsObject.child('question_'+dbQuestionCount+'').val().question;
     currentAnswer = questionsObject.child('question_'+dbQuestionCount+'').val().answer;
 selectedAnswer = $('.btn-group label.active input').get(0).nextSibling.data;
     alert(selectedAnswer);
     
answersRefObj.once('value').then(function(answers){
    
    
    answersRefObj.set({
question :  currentQuestion,
answer : currentAnswer,
choice : selectedAnswer

});
 });
     
 question_number_count++;
  // Sign-out successful.
  
    
     dbQuestionCount++;

//     var active = $('.radio_buttons[class*="active focus"]').val();
//     alert(active);
     
   if(dbQuestionCount === questionsLength + 1)
         {
              $('#btnNextQuestion').hide();
             $('#btnEndQuiz').show();
            return;
         }
     question_number.innerHTML = question_number_count;
   theQuestion.innerHTML = questionsObject.child('question_'+dbQuestionCount+'').val().question;
     
    $('#option_a').get(0).nextSibling.data = questionsObject.child('question_'+dbQuestionCount+'').val().option_a;
    $('#option_b').get(0).nextSibling.data = questionsObject.child('question_'+dbQuestionCount+'').val().option_b;
    $('#option_c').get(0).nextSibling.data = questionsObject.child('question_'+dbQuestionCount+'').val().option_c;
    $('#option_d').get(0).nextSibling.data = questionsObject.child('question_'+dbQuestionCount+'').val().option_d;
     //questionsObject.child('question_'+dbQuestionCount+'').val().option_a
     
  $('.btn').removeClass('active');
     
 });


btnEndQuiz.addEventListener('click',e =>{
 usersRefObj = firebase.database().ref('Users');
    
    
    window.location = '/answers';
});



auth.onAuthStateChanged(function(user){
		if(user){
      currentProfile = firebase.auth().currentUser;
console.log(currentProfile.displayName);
            
      userFullname.innerHTML = currentProfile.displayName;
	//userWelcomeName.innerHTML = currentProfile.displayName;
		}else{
		console.log("not logged in")
        window.location.href = '/sign_in';
}
	})



