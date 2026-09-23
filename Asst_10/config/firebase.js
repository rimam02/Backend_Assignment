const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const serviceAccount = require("../serviceAccountKey.json");

const firebaseApp = initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore(firebaseApp);

console.log("Firebase connected successfully");

module.exports = db;
