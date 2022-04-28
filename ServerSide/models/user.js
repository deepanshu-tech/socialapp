const mongoose = require("mongoose");
const {Schema} = mongoose;
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
        
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    phone:String,
    isDel:{
        type:Boolean,
        default:false
    },
    profilepicture:{
        type:String,
        default:"",
    },
    coverpicture:{
        type:String,
        default:""
    },
    followers:{
        type:Array,
        default:[]
    },
    following:{
        type:Array,
        default:[]
    },
    bio:{
        type:String,
        max:100
    },
    salt:String,
    hash:String
});

UserSchema.methods.generateToken = function(){
    return jwt.sign({
        _id: this._id,
        name: this.name,
        email: this.email
    }, "ABCD")
}

UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000,1000, "sha512").toString("hex");
}

UserSchema.methods.validatePassword = function(password){
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000,1000, "sha512").toString("hex");
    return this.hash === hash;
}

module.exports=UserSchema;