const express = require('express');
const path = require('path');
const app = express();
const firebase = require("firebase");
require("firebase/auth");
const routes = require('./routes');


 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCKPPlKQ6dTbV8pPeuF7QBf0L4U7W0s2FA",
    authDomain: "tester-1-acef6.firebaseapp.com",
    databaseURL: "https://tester-1-acef6.firebaseio.com",
    projectId: "tester-1-acef6",
    storageBucket: "tester-1-acef6.appspot.com",
    messagingSenderId: "344995473631"
  };
  firebase.initializeApp(config);

const auth = firebase.auth();

const db = firebase.database();

app.get("/sign_up",function(req,res){
	res.sendFile(__dirname + "/" + "signUp");
});

app.post("/process_signup",function(req,res){
	var email = req.body.email;
	var password = req.body.password;
	var response = email+" "+password;
	auth.createUserWithEmailAndPassword(email,password).catch(function(error){
	})
	auth.onAuthStateChanged(function(user){
		if(user){
			console.log(user)
			res.sendFile(__dirname +"/" + "welcome.html")
		}
		console.log("not logged in")
		
	})
	
});

app.get("/login.html",function(req,res){
	res.sendFile(__dirname + "/" + "login.html");
});


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

 app.get('*', routes.notFound);

// Listen on port 3000
app.listen(process.env.PORT || 3000,function(req,res){
    console.log('listening');
}
);