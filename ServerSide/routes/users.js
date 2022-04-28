const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const UserSchema = require("../models/user");
const User = mongoose.model("user" , UserSchema);


router.post("/login" , async(req,res)=>{
    try{
        let data = req.body.data , password = req.body.password;
        const result = await User.findOne({"email":data , "isDel":false});
        if(result){
            let user = result;
                if(user.validatePassword(password)){
                    user["hash"] = "";
                    user["salt"] = "";

                    const objUser = user.toObject();

                    objUser.token = user.generateToken();
                    res.status(200).json(objUser);

                }
                else{
                    res.status(500).json("Invalid Password");
                }
            }
            
        else{
            
            const res1 = await User.findOne({"username":data});
            if(res1)
            {
               
                if(res1.validatePassword(password)){
                    res1["hash"] = "";
                    res1["salt"] = "";

                    const objUser = res1.toObject();

                    objUser.token = res1.generateToken();
                    res.status(200).json(objUser);

                }
                else{
                    res.status(500).json("Invalid Password");
                }
            }
            else
            {
                res.status(500).json("Invalid Credentials");
            }
        }
    }
    catch(err){
        res.status(500).json(err);
    }
   
})
router.post("/edit/:id" , async(req,res)=>{
    if(req.body.userId === req.params.id){
       
        try{
            let deletedUser = await User.findByIdAndUpdate(req.params.id,  {$set:req.body});
            res.status(200).send(result);
        }
        catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(500).json("Cannot Update the Data")
    }
})

router.delete("/:id" , async(req,res)=>{
    
    try{
        let deletedUser = await User.findByIdAndUpdate(req.params.id,  {$set:{"isDel":true}});
        
        res.status(200).json(deletedUser);
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