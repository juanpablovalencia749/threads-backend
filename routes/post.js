import express from "express";
import {
	createPost,
	deletePost,
	getPost,
	likeUnlikePost,
	replyToPost,
	getFeedPosts,
	// getUserPosts,
} from "../controllers/post.js";
import { validationJWT} from "../middlewares/index.js";

const router = express.Router()

router.post("/create", validationJWT, createPost)
router.get("/feed", validationJWT, getFeedPosts)
router.get("/:id", getPost)
// router.get("/user/:username", getUserPosts);
router.delete("/:id", validationJWT, deletePost)
router.put("/like/:id", validationJWT, likeUnlikePost)
router.put("/reply/:id", validationJWT, replyToPost)

export default router;
