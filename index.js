const express = require('express');
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const userservice = require('./services/userservice');
const dotenv = require('dotenv');

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(helmet())
app.use(cors());

app.use('/users' , require('./routes/users'));
app.use('/posts' , require('./routes/posts'));
app.get("/" , (req,res)=>{
    res.send("<h1>Welcome to SocialApp</h1>");
})
app.post("/" , async(req,res)=>{
    try{
        const service = new userservice();
        const result = await service.setUser(req.body);
        res.status(200).send(result);
    }
    catch(err){
        res.status(500).json(err);
    }
})
app.post("/forgotpassword" , async(req,res)=>{
    const service = new userservice();
    const result = await service.forgotpwd(req.body.email);
    res.send("Password sent to email-id");
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
