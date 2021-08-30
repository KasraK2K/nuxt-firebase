
importScripts(
  'https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.8.1/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyAGJiFJ_MM39WSxiiDU3C-d2OuSbCygKAM","authDomain":"jeanswest-avakatan.firebaseapp.com","projectId":"jeanswest-avakatan","storageBucket":"jeanswest-avakatan.appspot.com","messagingSenderId":"765850527197","appId":"1:765850527197:web:e1babae636801dbef90234","measurementId":"G-X2KSH2B3LY"})

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
