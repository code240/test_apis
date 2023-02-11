const express = require("express");

const app = express();

const port = process.env.PORT || 7000;


app.get("/",(req,res) => {
    res.send("Use url/api/users for get test data.")
})

app.get("/api/users",(req,res) => {
	res.send({name:"Vipin",class:"Btech Final Year",job:"Full Stack Development",company:"MACSAM"})
})

app.get("/About",(req,res) => {
    res.send("Test apis");
})


app.listen(port,() => {
    console.log("App start running at 7000");
})
