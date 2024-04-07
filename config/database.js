const mongoose=require("mongoose");
require("dotenv").config();


exports.connect=()=>{
    mongoose.connect(process.env.DATABASE_URl,{
        
    })
    .then(console.log("DB connected successfully"))
    .catch((error)=>{
        console.error(error);
        process.exit(1);
    });
}