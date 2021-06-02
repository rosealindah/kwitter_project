//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBBQ5m-cmunv87J72g3WEN62Pki5IwmI3I",
      authDomain: "kwitter-app-9c8f0.firebaseapp.com",
      databaseURL: "https://kwitter-app-9c8f0-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-9c8f0",
      storageBucket: "kwitter-app-9c8f0.appspot.com",
      messagingSenderId: "663126911585",
      appId: "1:663126911585:web:c7dad8850da7b54fa19820"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="welcome "+user_name+"!"; 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name -"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirect_to_roomname(this.id)' >"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function addroom(){
      room_name=document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function redirect_to_roomname(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}