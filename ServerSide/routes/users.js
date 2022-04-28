const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const userservice = require('../services/userservice');
const UserSchema = require("../models/user");
const User = mongoose.model("user" , UserSchema);
const service = new userservice();

router.post("/login" , async(req,res)=>{
    try{
        const result = await service.loginUser(req.body.data , req.body.password);
        res.status(200).send(result);
    }
    catch(err){
        res.status(500).json(err);
    }
   
})
router.post("/edit/:id" , async(req,res)=>{
    if(req.body.userId === req.params.id){
       
        try{
            const result = await service.editUser(req.body , req.body.userId);
            res.status(200).send(result);
        }
        catch(err){
            res.status(500).json(err);
        }
    }
})

router.delete("/:id" , async(req,res)=>{
    
    try{
        const result = await service.deleteUser(req.params.id);
        res.status(200).json(result);
    }
    catch(err){
        res.status(500).json(err);
    }

})
router.post("/:id/follow" , async(req,res)=>{

    if(req.body.userId !== req.params.id){
        let fid = req.body.userId, tid = req.params.id;
        let fromUser = await User.findById(fid);
        let toUser = await User.findById(tid);


        if(!toUser.followers.includes(fid)){
            await toUser.updateOne({$push:{followers:fid}});
            await fromUser.updateOne({$push:{following:tid}});
            res.status(200).json("User Followed")
        }
        else
        {
            res.status(403).json("user already followed")
        }
    }
    else{
        res.status(403).json("You cannot follow yourself")
    }
})

router.post("/:id/unfollow" , async(req,res)=>{

    if(req.body.userId !== req.params.id){
        let fid = req.body.userId, tid = req.params.id;
        let fromUser = await User.findById(fid);
        let toUser = await User.findById(tid);


        if(toUser.followers.includes(fid)){
            await toUser.updateOne({$pull:{followers:fid}});
            await fromUser.updateOne({$pull:{following:tid}});
            res.status(200).json("User Unfollowed")
        }
        else
        {
            res.status(403).json("user already unfollowed")
        }
    }
    else{
        res.status(403).json("You cannot unfollow yourself")
    }
})

module.exports = router;