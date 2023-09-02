var firebaseConfig = {
    apiKey: "AIzaSyAWMeI54v_f8bM3Uw6lOyjCHEEciXTLkmQ",
    authDomain: "project43-57fdd.firebaseapp.com",
    databaseURL: "https://project43-57fdd-default-rtdb.firebaseio.com",
    projectId: "project43-57fdd",
    storageBucket: "project43-57fdd.appspot.com",
    messagingSenderId: "332716865046",
    appId: "1:332716865046:web:86447bb8ff17b627482737"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "chat_page.html";
  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room name - " + Room_names);
row = "<div class= 'room_name' id ="+Room_names+"onclick = 'rediectToRoomName(this.id)'>#"+Room_names +"</div><hr>"
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function rediectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chat_page.html";
}