"use strict";

require("dotenv").config();

const admin = require("firebase-admin");

const serviceAccount = require("../../credentials/flutteraroii-firebase-adminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = {
  db
};
