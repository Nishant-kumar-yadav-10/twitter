import express from "express"
import { createTweet } from "../controllers/tweetController.js"
import { toggleLike } from "../controllers/like.controller.js"
const router=express.Router()
router.post("/tweet",createTweet)
router.post("/toggleLike",toggleLike)
export default router
