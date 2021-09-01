//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDgQcCuUPaCPKsd0TeWMXygqUu9gXjpc9k",
      authDomain: "kwitter-417cc.firebaseapp.com",
      databaseURL: "https://kwitter-417cc-default-rtdb.firebaseio.com",
      projectId: "kwitter-417cc",
      storageBucket: "kwitter-417cc.appspot.com",
      messagingSenderId: "154199866044",
      appId: "1:154199866044:web:18bb513009d3c240472eb9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
Name = message_data["name"];
message = message_data["message"];
//End code
      } });  }); }
getData();


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}