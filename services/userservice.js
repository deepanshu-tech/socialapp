const mongoose = require("mongoose");
const UserSchema = require("../models/user");
const User = mongoose.model("user" , UserSchema);


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
    async loginUser(email , password){
        const result = await User.find({"email":email});
        if(result){
            if(result.length>0){
                const user = result[0];
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
            else
            {
                return ("Invalid Credentials , Please Sign Up or Try Again");
            }
            
        }
        
    }
}
module.exports=userservice;