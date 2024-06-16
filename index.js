require("dotenv").config();

// console.log("Chai aur code");
// import express from "express" (same as below)
const express = require("express");

const app = express();
const port = 4000;

const githubData = {
  login: "Sidarth999",
  id: 96560827,
  node_id: "U_kgDOBcFmuw",
  avatar_url: "https://avatars.githubusercontent.com/u/96560827?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Sidarth999",
  html_url: "https://github.com/Sidarth999",
  followers_url: "https://api.github.com/users/Sidarth999/followers",
  following_url:
    "https://api.github.com/users/Sidarth999/following{/other_user}",
  gists_url: "https://api.github.com/users/Sidarth999/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Sidarth999/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Sidarth999/subscriptions",
  organizations_url: "https://api.github.com/users/Sidarth999/orgs",
  repos_url: "https://api.github.com/users/Sidarth999/repos",
  events_url: "https://api.github.com/users/Sidarth999/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Sidarth999/received_events",
  type: "User",
  site_admin: false,
  name: "Sidarth Prasad",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 15,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2021-12-23T04:37:09Z",
  updated_at: "2024-06-15T17:14:35Z",
};

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

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
