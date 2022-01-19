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
   room_name=localStorage.getItem("room_name");

   function send() {
       msg=document.getElementById("msg").value;
       firebase.database().ref("room_name").push({
       name:user_name,
       message:msg,
       like:0
       });
       document.getElementById("msg").value="";
   }
