import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(morgan("combined"));

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

//1. Jim was not only talented and intelligent, but also handsom.
//2. My teacher told me that I should read my notes and that I should finish my report before tomorrow.
//3. Walking the malls and playing video games seemed to be all that Andrew was interested in.
//4. The boys wanted to go swimming, bowling, and riding their bikes.
//5. 
//6. The American government ois of the people, by the people, and for the people.
//7. Walking through the forest, running across the meadow, and even slipping in mud, Ann managed to keep ahead of the others in the race.
//8. 
//10. Ice fishing, playing hockey, and skiing in the mountains - these were Bill's favourite winter activities.