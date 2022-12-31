//YOUR FIREBASE LINKS

message_data = childData;var firebaseConfig = {
      apiKey: "AIzaSyAiIvICrnegLlWVvc2BWnC-YkoqaZAOvh0",
      authDomain: "kwitter-f6806.firebaseapp.com",
      databaseURL: "https://kwitter-f6806-default-rtdb.firebaseio.com",
      projectId: "kwitter-f6806",
      storageBucket: "kwitter-f6806.appspot.com",
      messagingSenderId: "110726763203",
      appId: "1:110726763203:web:1f0275b76f22eac8994876",
      measurementId: "G-PXHXGG2GEY"
};
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message= message_data['message'];
like= message_data['like'];
name_with_tag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag= "<h4 class='message_h4'>"+message+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML=row;
//End code
      } });  }); }
getData();
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function updateLike(message_id){
      console.log(message_id);
      button_id= message_id;
      likes = document.getElementById(button_id).value;
      update_likes = Number(likes)+1;
      console.log(update_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like:update_likes
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}