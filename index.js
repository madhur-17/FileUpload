const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT;


app.use(express.json());
const fileupload=require("express-fileupload");
app.use(fileupload({
    useTempFiles:true,
    tempFileDir: '/tmp/'
}));


const db=require("./config/database");
db.connect();

const cloud=require("./config/cloudnary");
cloud.cloudConnect();

const upload=require("./routes/FILEUPLOAD");
app.use("/api/v1/upload",upload);

app.listen(PORT,()=>{
    console.log("Server Started");
})