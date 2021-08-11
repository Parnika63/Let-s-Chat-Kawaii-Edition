var firebaseConfig = {
    apiKey: "AIzaSyBUluq1VT5iu4QhywxAmHY1OzzW4Kh02n0",
    authDomain: "let-s-chat-kawaii-edition.firebaseapp.com",
    databaseURL: "https://let-s-chat-kawaii-edition-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-kawaii-edition",
    storageBucket: "let-s-chat-kawaii-edition.appspot.com",
    messagingSenderId: "541838327630",
    appId: "1:541838327630:web:b1b04a5d2fb6b0f2a7681f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name= document.getElementById("user_name").Value;
localStorage.setItem("user_name", user_name);
window.location= "kwitter_room.html";

}