const express = require('express');
const path = require('path');
const app = express();
//const firebase = require("firebase");
//require("firebase/auth");
const routes = require('./routes');


 


 




app.set('view engine', 'ejs');

// Serve static assets from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes

app.get('/home', routes.home);



app.get('/sign_up', routes.signUp);
 
app.get('/sign_in', routes.signIn);

 app.get('/questions', routes.questions);

 app.get('/dashboard', routes.dashboard);



   app.get('/leaderboard', routes.leaderboard);

   app.get('/answers', routes.answers);

//  app.get('*', routes.notFound);

// Listen on port 3000
app.listen(process.env.PORT || 3000,function(req,res){
    console.log('listening on port 3000');
}
);