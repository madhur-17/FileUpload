const cloudinary=require("cloudinary").v2;
const File=require("../models/File");


exports.localupload=async(req,res)=>{
    try{
        const fp=req.files.file;
        console.log(fp);
        let path=__dirname +"/file/"+ Date.now() +"."+fp.name.split(".")[1];
        fp.mv(path,(err)=>{
            if(err) console.log(err);
        });
        
        res.json({
            success:true
        })
    }
    catch(erroe){
        console.log(erroe);
    }
}

const checkextension=(fptype,supportExtensions)=>{
    return supportExtensions.includes(fptype);
}

const cloudUpload=async(file,folder)=>{
    const options={folder};
    options.resource_type="auto"; 
    return await cloudinary.uploader.upload(file.tempFilePath,options);

}
exports.imageupload=async(req,res)=>{
    try{
        const {name,tag,email}=req.body;
        const fp=req.files.imagefile;
        const supportExtensions=["png","jpg","jpeg"];
        const fptype=fp.name.split(".")[1].toLowerCase();
        if(!checkextension(fptype,supportExtensions)){
            return res.json({
                success:"false",
                message:"not valid image format"
            })
        }
        const response=await cloudUpload(fp,"madhur");
        console.log(response.secure_url);
        const filedata=await File.create({
            name,
            tag,
            email,
            imageUrl:response.secure_url,
        })
        res.json({
            success:"true"
        })

    }
    catch(error){
        console.error(error);
        res.json({
            message:"error"
        })
    }
}