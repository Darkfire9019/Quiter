username = localStorage.getItem("username");
document.getElementById("w_name").innerHTML = "Welcom " + username;
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAU__29bGxpwBMLDQ01ioyC5zN_n1rSqp8",
      authDomain: "quitter-f5da0.firebaseapp.com",
      databaseURL: "https://quitter-f5da0-default-rtdb.firebaseio.com",
      projectId: "quitter-f5da0",
      storageBucket: "quitter-f5da0.appspot.com",
      messagingSenderId: "1000381032555",
      appId: "1:1000381032555:web:b5aef7f0307bfde412692e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       roomname = childKey;
      //Start code
      var rn = "<div id = "+roomname+" onclick='enter(this.id)'>#" +roomname+ "</div> <hr>";
      document.getElementById("output").innerHTML+=rn;
      //End code
      });});}
getData();
function add_room(){
       roomname = document.getElementById("e_room").value;
      firebase.database().ref("/").child(roomname).update({purpose:"a_r_n"});
      localStorage.setItem("roomname",roomname);
      window.location = "kwitter_page.html";
}
function enter(name){
      localStorage.setItem("roomname",name)
      window.location = "kwitter_page.html";
}
