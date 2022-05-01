const express = require('express');
const router = express.Router();
const PostSchema = require('../models/posts');
const UserSchema = require('../models/user')
const mongoose = require('mongoose');
const { route } = require('./users');
const Post = mongoose.model("post" , PostSchema);
const User = mongoose.model("user" , UserSchema);

router.get("/" , (req,res)=>{
    res.send("This is post page!")
})

router.get("/:id" , async (req,res)=>{
    try{
        let post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(err){
        res.status(404).json(err);
    }
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

router.post("/update/:postid" , async(req,res)=>{
   
    try{
        let post = await Post.findById(req.params.postid);
        if(post.userId === req.body.userId){
            try{
               
                let updatedpost = await Post.findByIdAndUpdate(req.params.postid , {$set:req.body});
                res.status(500).json("User Updated");
            }
            catch(err){
                res.status(500).json(err);
            }
        }
    
    }
    catch(err){
        res.status(500).json(err);
    }
    
})
//Delete Post
router.delete("/delete/:postid" , async(req,res)=>{
   
    try{
        let post = await Post.findById(req.params.postid);
        if(post.userId === req.body.userId){
            try{
                let updatedpost = await Post.findByIdAndUpdate(req.params.postid , {$set:{"isDel":true}});
                res.status(500).json("User Deleted");
            }
            catch(err){
                res.status(500).json(err);
            }
        }
    
    }
    catch(err){
        res.status(500).json(err);
    }
    
})

//Like Post
router.post("/:postid/react" , async(req , res)=>{
    try{
        let post = await Post.findById(req.params.postid);
        if(!post.likes.includes(req.body.userId))
        {
            await post.updateOne({$push:{likes:req.body.userId}});
            post = await Post.findById(req.params.postid);
            res.status(200).json(post);
        }
        else{
            await post.updateOne({$pull:{likes:req.body.userId}});
            post = await Post.findById(req.params.postid);
            res.status(200).json(post);
        }
    }
    catch(err){
        res.status(500).json(err);
    }
})
//Post posts on the Feed
router.post('/feed' , async (req,res)=>{
    try{
        let feedPosts=[];
        let currentuser = await User.findById(req.body.userId);
        
        let currentuserposts = await Post.find({"userId":req.body.userId});
        
        feedPosts = feedPosts.concat(...currentuserposts);
        

        let myfeed = await Promise.all(
            currentuser.following.map((friendId)=>{
                return Post.find({"userId":friendId});
            }));
        console.log(feedPosts);
        feedPosts = feedPosts.concat(...myfeed);
        res.status(200).json(feedPosts);
    }
    catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;