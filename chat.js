// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBmj_YGpH-fov2xtV8qdCqSxwsUZyKy3sg",
    authDomain: "p100-5cf5f.firebaseapp.com",
    projectId: "p100-5cf5f",
    storageBucket: "p100-5cf5f.appspot.com",
    messagingSenderId: "834469434555",
    appId: "1:834469434555:web:b2810ac254a904b93a859e",
    measurementId: "G-NXQ1M2NK84"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



