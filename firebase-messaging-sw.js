importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-messaging.js');

console.debug('HOLA MUNDO MUNDIAL');
var config = {
    apiKey: "AIzaSyAxbqWd4V5li7tlW8W_oaUwKnfGEqQaypw",
    authDomain: "vitro-6f2c6.firebaseapp.com",
    databaseURL: "https://vitro-6f2c6.firebaseio.com",
    projectId: "vitro-6f2c6",
    storageBucket: "vitro-6f2c6.appspot.com",
    messagingSenderId: "213692084493",
    appId: "1:213692084493:web:01f2767e118bdc4728c044",
    measurementId: "G-N4ZH75TB2B"
};

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    messagingSenderId: "213692084493",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
// [END initialize_firebase_in_sw]

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});
// [END background_handler]
