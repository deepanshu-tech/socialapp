const express = require('express');
const router = express.Router();
const PostSchema = require('../models/posts');
const mongoose = require('mongoose');
const Post = mongoose.model("post" , PostSchema);

router.get("/" , (req,res)=>{
    res.send("This is post page!")
})

//Create Post

router.post("/" , async(req,res)=>{
    let newpost = new Post(req.body);
    try{
        let savedpost = await newpost.save();
        res.status(200).json(savedpost);
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.post("/" , async(req,res)=>{
    let newpost = new Post(req.body);
    try{
        let savedpost = await newpost.save();
        res.status(200).json(savedpost);
    }
    catch(err){
        res.status(500).json(err);
    }
})

//Delete Post

//Like Post

// Unlike Post

//Comment on Post
module.exports = router;