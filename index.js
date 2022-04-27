const express = require('express');
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const userservice = require('./services/userservice');


app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(helmet())
app.use(cors());

app.use('/users' , require('./routes/users'));
app.get("/" , (req,res)=>{
    res.send("<h1>Welcome to SocialApp</h1>");
})
app.post("/" , async(req,res)=>{
    const service = new userservice();
    const result = await service.setUser(req.body);
    res.send(result)
})


app.listen(3000 , (e)=>{
    console.log("listening on the port");

    mongoose.connect("mongodb://localhost/socialapp").then((result)=>{
        console.log("Database Connected");
    }).catch((e)=>{
        console.log("Database Connectoon Failed");
        console.log(e);
    })
})
