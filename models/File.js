const mongoose=require("mongoose");
const nodemailer=require("nodemailer");

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
fileschame.post("save",async(doc)=>{
    try{
        let transporter=nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            autj:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        })


        let info=await transporter.sendMail({
            from:"Madhur",
            to:doc.email,
            subject:"New file uploaded",
            html:`<h1>File Uploaded</h1> <p>file uploaded on cloud</p> View Herer <a href="${doc.imageUrl}">${doc.imageUrl}</a>`,
        })
    }
    catch(error){
        console.error(error);
    }
})
const File=mongoose.model("File",fileschame);
module.exports=File;