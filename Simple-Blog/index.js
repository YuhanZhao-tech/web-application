import express from "express";
import morgan from "morgan";
import auth from "./middleware/auth.js";
import Content from "./database/content.js";

const app = express();
const PORT = 3000;
var permit = false;
var contentList = [];

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(morgan("combined"));

app.get("/", (req, res) => {
  if (permit) {
    res.redirect("/content");
  } else res.redirect("/login");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
})

app.post("/login", (req, res) => {
  permit = auth(req.body.username, req.body.password);
  res.redirect("/");
})

app.get("/content", (req, res) => {
  res.render("content.ejs", { content: contentList });
})

app.get("/blog-post", (req, res) => {
  res.render("post.ejs");
})

app.post("/blog-post", (req, res) => {
  let newPost = new Content(req.body.title, req.body.content);
  contentList.push(newPost);
  res.redirect("/");

})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});




/*
Earthquake happens a lot in California. It is a natural disaster

*/