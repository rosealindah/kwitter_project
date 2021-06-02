//YOUR FIREBASE LINKS
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

    var user_name=localStorage.getItem("user_name");
    var room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1=message_data['name'];
message=message_data['message'];
like=message_data['like'];

name_with_tag="<h4>"+name1+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updatelikes(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like :"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function send(){
msg=document.getElementById("msg").value ;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}
function updatelikes(message_id){
console.log("clicked on the like button"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updatelikes=Number(likes)+1;
console.log(updatelikes);
firebase.database().ref(room_name).child(message_id).update({
      like:updatelikes
});

}