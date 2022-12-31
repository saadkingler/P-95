
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
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
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name;

    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"addind room name"
          });
          localStorage.setItem("romm_name", room_name);
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}