const mongoose = require("mongoose");
const UserSchema = require("../models/user");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const User = mongoose.model("user" , UserSchema);
const generator = require('generate-password');
var nodemailer = require('nodemailer');
const { from } = require("nodemailer/lib/mime-node/le-windows");



class userservice{
    
    async setUser(user){
        if(user["_id"] !== undefined) {
            return ("Account Already Exists")
          }
          else{
              const userObj = new User(user);
              userObj.setPassword(user.password);
              const result = await userObj.save();
              result["salt"] = "";
              result["hash"] = "";
              return result;
          }
    }
    async loginUser(data , password){
        const result = await User.findOne({"email":data , "isDel":false});
        if(result){
            let user = result;
                if(user.validatePassword(password)){
                    user["hash"] = "";
                    user["salt"] = "";

                    const objUser = user.toObject();

                    objUser.token = user.generateToken();
                    return objUser;

                }
                else{
                    return ("Invalid Password")
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
                    return await objUser;

                }
                else{
                    return ("Invalid Password")
                }
            }
            else
            {
                return ("Invalid Credentials")
            }
        }
        
    }
    async forgotpwd(email){
        let res = await User.findOne({"email":email});
        if(res){
            let newpassword = generator.generate({
                length:10,
                numbers:true
            })
            let salt=crypto.randomBytes(16).toString("hex");
            let hash=crypto.pbkdf2Sync(newpassword, salt, 1000,1000, "sha512").toString("hex");

            let updatedpwd = await User.updateOne(
                {"email":email},
                {$set:{"hash":hash , "salt":salt}}
            )


            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: process.env.EMAIL_ID,
                  pass: process.env.PASSWORD
                }
              });
              
              var mailOptions = {
                from: process.env.EMAIL_ID,
                to: email,
                subject: 'PASSWORD RESET',
                text: 'This is your new password: '+newpassword+'. Try logging in with new credentials.'
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        }
        else{
            return ("Please sign up!")
        }
    }

    async editUser(user , id){
       
        if(user["password"])
        { 
            let salt=crypto.randomBytes(16).toString("hex");
            let hash=crypto.pbkdf2Sync(user["password"], salt, 1000,1000, "sha512").toString("hex");

            let updatedpwd = await User.updateOne(
                {"_id":id},
                {$set:{"hash":hash , "salt":salt}}
            )
        }
       
        let updatedUser = await User.findByIdAndUpdate(id , {$set:user});

        return await updatedUser;
    }

    async deleteUser(id){
        let deletedUser = await User.findByIdAndUpdate(id,  {$set:{"isDel":true}});
        return await deletedUser;
    }

    
}
module.exports=userservice;