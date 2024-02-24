import express from "express";
import morgan from "morgan";

const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})