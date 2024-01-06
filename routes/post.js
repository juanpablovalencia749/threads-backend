import express from "express";
import {
	createPost,
	// deletePost,
	// getPost,
	// likeUnlikePost,
	// replyToPost,
	// getFeedPosts,
	// getUserPosts,
} from "../controllers/post.js";
import { protectRoute } from "../middlewares/protectRoute.js";


const router = express.Router();

router.post("/create", protectRoute, createPost);
// router.get("/feed", protectRoute, getFeedPosts);
// router.get("/:id", getPost);
// router.get("/user/:username", getUserPosts);
// router.delete("/:id", protectRoute, deletePost);
// router.put("/like/:id", protectRoute, likeUnlikePost);
// router.put("/reply/:id", protectRoute, replyToPost);

export default router;
