const functions = require("firebase-functions");
const express = require("express");
const admin = require("firebase-admin");

const app = express();
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "admin.credential.cert(serviceAccount)",
});

app.get("/hello-world", (req, res) => {
  return res.status(200).json({message: "Hello World"});
});

const mainRoutes = require("./routes/products.routes.js");

app.use(mainRoutes);

exports.app = functions.https.onRequest(app);