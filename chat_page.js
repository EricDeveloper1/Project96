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

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref().push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}

function logout () {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}