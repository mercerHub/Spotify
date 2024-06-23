import { Router } from "express";
import { upload } from "../middlewares/multer.middlewares.js";
import { uploadSongs } from "../controllers/uploadSongs.controllers.js";

const router = Router();
const songFile = "songFile";
const coverImage = "coverImage";

router.route("/songs/upload").post(
    upload.fields([
        {
            name: songFile,
            maxCount: 1
        },
        {
            name: coverImage,
            maxCount: 1
        }
    ]),
    uploadSongs
);

export default router;
