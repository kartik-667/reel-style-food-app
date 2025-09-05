
import ImageKit from "imagekit";
import dotenv from 'dotenv'
dotenv.config()

const imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC,
    privateKey : process.env.IMAGEKIT_PRIVATE,
    urlEndpoint : process.env.IMAGEKIT_URL,
});


async function uploadVideo({file, filename}){
    try {
        const result=await imagekit.upload({
    file : file, //required
    fileName : filename,   //required
    
    
    
})
    return result
    // console.log(result);
    
        
    } catch (error) {
        console.log("error while uploading video",error);

        
        
    }

}

export {imagekit, uploadVideo}

