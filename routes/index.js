

// Home Route
exports.home = function(req, res) {

	//let movies = moviesJSON.movies;

	res.render('home', {
		
	});
};



	exports.questions = function(req, res) {
	
		
		res.render('questions', {
		
		});

	}; 


exports.dashboard = function(req, res) {
	
  
	res.render('dashboard', {
		
	});
};

exports.signIn = function(req, res) {
	
	res.render('signIn', {
		
	});
};

exports.signUp = function(req, res) {
	
	res.render('signUp', {
		
	});
};



exports.processLogin = function(req, res) {
	
	res.render('processLogin', {
		
	});
};

exports.processSignUp = function(req, res) {
	
	res.render('processSignUp', {
		
	});
};

exports.leaderboard = function(req, res) {
	
	res.render('leaderboard', {
		
	});
};

exports.answers = function(req, res) {
	
	res.render('answers', {
		
	});
};






// Route for all other page requests
exports.notFound = function(req, res) {
	
	res.render('notFound', {
	
	});
};

