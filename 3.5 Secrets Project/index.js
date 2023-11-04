//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express"
import bodyParser from "body-parser"
import { dirname } from "path"
import { fileURLToPath } from "url"
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
    const password = req.body["password"];
    if (password === "ILOVEProgramming") {
        userIsAuthorised = true;
    }
    next(); 
}

app.use(passwordCheck); 

// Reterive information from /public/index.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
}); 

// Sends data to the server for processing. 
// usually resulting in a change in the server state or side effects on the server
app.post("/check", (req, res) => {
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html");
    }
    else {
        res.sendFile(__dirname + "/public/index.html");
    }
}); 

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}); 
    
    
    
