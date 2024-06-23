import mongoose, { Schema } from "mongoose"

const songSchema = new Schema({
    songName:{
        type: String,
        required:true,
        lowercase: true,
        trim: true,
        index: true
    },
    genre:{
        type: String,
        required:true,
        lowercase: true,
        trim: true,
        index: true
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: "User",
        index: true
    },
    coverImage: {
        type: String,
    },
    cloudinaryLink: {
        type: String,
        required: true
    }
},
{
    timestamps:true
}) 

export const Song = mongoose.model('Song',songSchema)