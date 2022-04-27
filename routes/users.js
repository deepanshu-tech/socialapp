const express = require('express');
const router = express.Router();
const userservice = require('../services/userservice');


const service = new userservice();

router.post("/login" , async(req,res)=>{
    const result = await service.loginUser(req.body.email , req.body.password);
    res.send(result)
})

module.exports = router;