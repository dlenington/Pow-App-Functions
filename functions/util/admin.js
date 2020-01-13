var admin = require("firebase-admin");
var serviceAccount = require("./key-config.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pow-app-14a08.firebaseio.com",
  storageBucket: "pow-app-14a08.appspot.com"
});

const db = admin.firestore();

module.exports = { admin, db };
