const express = require("express");
const app = express();
const PORT = 8080;

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", (req, res) => {
  res.render("pages/index");
});

// about page
app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
