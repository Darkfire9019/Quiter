//YOUR FIREBASE LINKS
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

    username = localStorage.getItem("username");
    roomname = localStorage.getItem("roomname");

    function send(){
           sender = document.getElementById("sender").value;
          firebase.database().ref(roomname).push({
                name:username,message:sender,like:0
                
          });
    }

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      name = message_data['name']
      message = message_data['message']
      like = message_data['like']
      roe = "<center> <h3>"+name+" <img src='tick.png' class = 'user_tick'></h2>"+"<h2>"+message+"<center> </h2> <button id ='"+firebase_message_id+"' value='"+like+"' onclick = 'like_updator(this.id)'>"+ "Like:"+like+ "</button></center>";
      document.getElementById("output").innerHTML += roe;   
//End code
      } });  }); }
getData();
function like_updator(message_id){
      button_id= message_id;
      likes = document.getElementById(button_id).value;
      likes_1 = Number(likes) + 1 ;
      firebase.database().ref(roomname).child(message_id).update({like:likes_1});

}
