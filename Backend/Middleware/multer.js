// This is an extra file which initially we planned on using to use multer to store an image on the diskStorage and then sending it to cloudinary as storage
//**FOR REFERENCE
import multer, { diskStorage } from "multer";

const storage = diskStorage({
    destination: function (req, file, cb) {
        console.log(req.body);
        console.log(file);
        cb(null, 'c:/Users/aryam/OneDrive/Desktop/Projects/Digi_Doc/Digi-Doc/Backend/public/temp');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });



export default upload;
