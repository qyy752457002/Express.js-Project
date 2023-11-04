import express from "express"; 

const app = express();
const port = 3000; 

app.get("/", (req, res) => {
    res.send("<h1>Hello, World!</h1>");
    console.log(req.rawHeaders);
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is Yiyu</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone: 17858808602</p>");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
