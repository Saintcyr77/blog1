const express = require("express");

//express app

const app = express();
//register view engine
app.set("view engine", "ejs");

// listen for request

app.listen(3000);

app.get("/", (req, res) => {
  const blogs = [
    { title: "Title one", snippet: "lorem ipsum ffffffadad" },
    { title: "Title two", snippet: "lorem ipsum ffffffadad" },
    { title: "Title three", snippet: "lorem ipsum ffffffadad" },
  ];

  res.render("index", { title: "Blog Website", blogs });
  // res.send('<p>Home Page</p>');
});

app.get("/about", (req, res) => {
  // res.send('<p>About Page</p>');
  res.render("about", { title: "About Page" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create Page" });
});

//redirects

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
// if we dont have a match in any url  this will run
//catch all if nothing else matches

app.use((req, res) => {
  res.status(404).render("404", { title: "404 Error" });
});
