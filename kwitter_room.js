var firebaseConfig = {
      apiKey: "AIzaSyCTZQOQh_uUr0q947DjBSY05nqYmCBxS_s",
      authDomain: "kwitter-c3f92.firebaseapp.com",
      databaseURL: "https://kwitter-c3f92-default-rtdb.firebaseio.com",
      projectId: "kwitter-c3f92",
      storageBucket: "kwitter-c3f92.appspot.com",
      messagingSenderId: "988400603890",
      appId: "1:988400603890:web:6f12bf270cb27f68ebf66b"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     document.getElementById('user_name').innerHTML=" Welcome  "+user_name;
     
     function addRoom()
     {
         room_name=document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
             purpose:"add the user so they can chat"
         });
     localStorage.setItem("room_name", room_name);
     window.location="kwittermessage.html";
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        
      console.log("Room Name - " + Room_names); 
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;
 }); }); } 
getData();

function redirectToRoomName(name)
 { console.log(name);
 localStorage.setItem("room_name", name);
  window.location = "kwittermessage.html";
 }

function logout() {

 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="index.html";
}






















