import express from "express";
import shorturlController from "../controllers/Shorturl.Controller.js";

const router = express.Router();

// create
router.post("/", shorturlController.postShortUrl);

// get
router.get("/", shorturlController.getShortUrlsByEmail);


export default router;
