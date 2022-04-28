const mongoose = require("mongoose");
const {Schema} = mongoose;


const PostSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    description:{
        type:String,
        max:500
    },
    image:{
        type:String
    },
    likes:{
        type:Array,
        default:[]
    },
    isDel:{
        type:Boolean,
        default:false
    }
});


module.exports=PostSchema;