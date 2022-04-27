const express = require('express');
const router = express.Router();
const userservice = require('../services/userservice');


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

module.exports = router;