const express = require('express');
const path = require('path');
const app = express();
const firebase = require("firebase");
require("firebase/auth");
const routes = require('./routes');


 


  // Initialize Firebase
/*  var config = {
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
//const btnLogout = document.getElementById('btnLogout');*/

/*btnLogin.addEventListener('click',e =>{
const email = txtEmail.value;
const password = txtPassword.value;

const auth = firebase.auth();

const promise = auth.signInWithEmailAndPassword(email,password);
promise.catch(e => console.log(e.message));
})*/





/*app.get("/sign_up",function(req,res){
	res.sendFile(__dirname + "/" + "signUp");
});*/



app.post("/process_signup",function(req,res){
	/*var email = req.body.email;
	var password = req.body.password;
	var response = email+" "+password;
	auth.createUserWithEmailAndPassword(email,password).catch(function(error){
	})
	auth.onAuthStateChanged(function(user){
		if(user){
			console.log(user)
			res.sendFile(__dirname +"/" + "dashboard.ejs")
            res.render('dashboard', {
		
	});
		} else {
		console.log("not logged in")
		}
	})
	*/
});

/*
app.get("/login.html",function(req,res){
	res.sendFile(__dirname + "/" + "login.html");
});
*/


app.post("/process_login",function(req,res){
	var email = req.body.email
	var password = req.body.password
	var response = email+" "+password
	auth.signInWithEmailAndPassword(email,password).catch(function(error){
		if(error){
			console.log(error.message)
			res.end(error.message)
		}
	})
	auth.onAuthStateChanged(function(user){
		if(user){
			console.log(user)
			res.sendFile(__dirname + "/" + "welcome.html")
		}
		console.log("not logged in")
		
	})
});



app.set('view engine', 'ejs');

// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.get('/', routes.home);



app.get('/sign_up', routes.signUp);
 
app.get('/sign_in', routes.signIn);

 app.get('/questions', routes.questions);

 app.get('/dashboard', routes.dashboard);

  app.get('/process_login', routes.processLogin);

  app.get('/process_sign_up', routes.processSignUp);

   app.get('/leaderboard', routes.leaderboard);

//  app.get('*', routes.notFound);

// Listen on port 3000
app.listen(process.env.PORT || 3000,function(req,res){
    console.log('listening');
}
);