// This is another extended utility for adding an image to the mongodb by using cloudinary service



const cloudinary = require('cloudinary').v2;
const fs = require('fs')

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET
    });
    
const UploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath){
            return null
        }
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // File has been uploaded succesfully
        console.log("File is uploaded on cloudinary",response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        //remove the locally saved temporat file
        return null;
    }


}



module.exports = {UploadOnCloudinary}
