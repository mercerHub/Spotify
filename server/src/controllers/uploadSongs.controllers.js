import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import fs from "fs"
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const uploadSongs = asyncHandler(async (req, res) => {
    if (!req.files || !req.files.songFile || !req.files.coverImage) {
        throw new ApiError(400, "Missing required files");
    }

    const songFile = req.files.songFile[0];
    const coverImage = req.files.coverImage[0];

    console.log("Song File:", songFile);
    console.log("Cover Image:", coverImage);

    // Perform any further processing needed here...

    
    const songPath = await uploadOnCloudinary(songFile.path)
    const coverImagePath = await uploadOnCloudinary(coverImage.path)
    console.log(songPath);

    if(!songPath || !coverImagePath){
        throw new ApiError(400,"Cloudinary upload unsuccessful !!")
    }
    res.status(200).json(new ApiResponse(200, "Files uploaded successfully"));
});

export { uploadSongs };
