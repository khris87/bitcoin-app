import * as firebase from "firebase/app";
import "firebase/messaging";

const initializedFirebaseApp = firebase.initializeApp({
    // Project Settings => Add Firebase to your web app
    messagingSenderId: "236400943123"
});

const messaging = initializedFirebaseApp.messaging();

messaging.usePublicVapidKey(
    // Project Settings => Cloud Messaging => Web Push certificates
    "BKSeuh2mh2AGHzNGn7cuXj_dmsQ7m_043fYGauxTfUCPmOl0BTrJpNQe8yfeZ1yq1sMFnSq7R4TT7O-hPLgFNyU"
);

export { messaging };