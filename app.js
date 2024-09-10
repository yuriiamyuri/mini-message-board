import express from "express";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const assetsPath = path.join(__dirname, "public");

console.log(__dirname, __filename);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));


const messages = [
    {
      author: "Alice",
      message: "Just finished reading this great book!",
      date: new Date().toString().split(" GMT")[0]
    },
    {
      author: "Bob",
      message: "Does anyone know a good JavaScript tutorial?",
      date: new Date().toString().split(" GMT")[0]
    },
    {
      author: "Charlie",
      message: "Had an awesome time hiking in the mountains today.",
      date: new Date().toString().split(" GMT")[0]
    },
    {
      author: "Diana",
      message: "Check out this new app I built, it's really cool!",
      date: new Date().toString().split(" GMT")[0]
    },
    {
      author: "Eve",
      message: "Excited for the weekend! Anyone up for a game night?",
      date: new Date().toString().split(" GMT")[0]
    }
  ];
  

app.get("/", (req, res) => {
  res.render("index", { messages });
});

app.get("/new", (req, res) => {

    res.render("form")
})


app.post("/new", (req, res) => {
    const { author, message } = req.body;
    const newMessage = { author, message, date: new Date().toString().split(" GMT")[0]}
    messages.unshift(newMessage);

    
    res.redirect("/")
})

app.listen(PORT, () => {
  console.log(`Server running on - http://localhost:${PORT}`);
});
