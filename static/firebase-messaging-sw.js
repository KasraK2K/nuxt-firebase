
importScripts(
  'https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.8.1/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyAsQpQHHcgaEhz0BeJ1lj9cuuHMcaXbGHY","authDomain":"test-jeanswest.firebaseapp.com","projectId":"test-jeanswest","storageBucket":"test-jeanswest.appspot.com","messagingSenderId":"836085134543","appId":"1:836085134543:web:e6babc3a0602a2a88773ba","measurementId":"G-HJJN0B1KKX"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

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
