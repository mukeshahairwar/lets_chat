//ADD YOUR FIREBASE LINKS HERE

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCSArGHTmrYTNRbWPqx53X2RgCAUwLFqX4",
    authDomain: "kwitter-fa700.firebaseapp.com",
    databaseURL: "https://kwitter-fa700-default-rtdb.firebaseio.com",
    projectId: "kwitter-fa700",
    storageBucket: "kwitter-fa700.appspot.com",
    messagingSenderId: "963774968814",
    appId: "1:963774968814:web:d78637b7b6d8856fd754ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();