const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
require('dotenv').config({ path: "./process.env" });


//express app

const app = express();
//register view engine
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const dbURI = process.env.DB_CONNECTION_STRING;
console.log('Database Connection String:', dbURI);
mongoose
  .connect(dbURI)
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log("Error is" + err);
  });

// listen for request

//mongoose sandbox routes

// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "new Blog2",
//     snippet: "About",
//     body: "Please work",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log("error is" + err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById("65a75f37a435d7ca067c0219")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => console.log("error is" + err));
// });

app.get("/", (req, res) => {
  res.redirect("/blogs");
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

//blog routes orignal
app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/blogs', (req, res) => {
  console.log(req.body);
})
// 404 page
// if we dont have a match in any url  this will run
//catch all if nothing else matches

app.use((req, res) => {
  res.status(404).render("404", { title: "404 Error" });
});
