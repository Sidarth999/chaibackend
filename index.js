require('dotenv').config()

// console.log("Chai aur code");
// import express from "express" (same as below)
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("sidarthdotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1> Please login at chai aur code</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2> chai aur code</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
