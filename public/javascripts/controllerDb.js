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

  //get element from dom
  const preObject = document.getElementById("object");

  //create reference
  const dbRefObject = firebase.database().ref().child('Questions');

  //sync data in real realtime
  dbRefObject.on('value',snap => console.log(snap.val()));//using value event type

  //dbRefObject.child('').set('value');








  