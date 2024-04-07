const express=require("express");
 const router=express.Router();


 const {localupload,imageupload} =require("../controllers/fileUpload");
 console.log("file");
router.post("/localupload",localupload);
router.post("/imageupload",imageupload);


 module.exports=router;

