import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})