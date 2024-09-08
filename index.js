import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/landing.html");
})

app.get("/login",(req,res) =>{
    res.sendFile(__dirname + "/public/login.html");
})

app.post("/", (req,res) => {
    res.sendFile(__dirname + "/public/landing.html");
})

app.get("/musuem",(req,res) =>{
    res.sendFile(__dirname + "/public/musuem.html");
})

app.get("/bot",(req,res) =>{
    res.sendFile(__dirname + "/public/bot.html");
})

app.get("/payment",(req,res) => {
    res.sendFile(__dirname + "/public/payment.html");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
