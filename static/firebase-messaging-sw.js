self.addEventListener("push", function(e) {
  data = e.data.json();
  var options = {
    body: data.notification.body,
    icon: data.notification.icon,
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2"
    }
  };
});

// importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/8.8.0/firebase-messaging.js");

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAsouuLftlGcBKG4k8QYY87tGuc7uwYE-g",
//   authDomain: "fcm-web-demo-67273.firebaseapp.com",
//   projectId: "fcm-web-demo-67273",
//   storageBucket: "fcm-web-demo-67273.appspot.com",
//   messagingSenderId: "885727063733",
//   appId: "1:885727063733:web:217947bc31410aa9f918fc"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();
