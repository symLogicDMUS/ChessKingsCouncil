const admin = require("firebase-admin");

const serviceAccount = require("./dev1.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "custom-chess-dev1.appspot.com",
});

const bucket = admin.storage().bucket();
