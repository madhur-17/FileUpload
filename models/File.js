const mongoose=require("mongoose");

const fileschame=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String
    },
    tag:{
        type:String
    },
    email:{
        type:String
    }

});

const File=mongoose.model("File",fileschame);
module.exports=File;