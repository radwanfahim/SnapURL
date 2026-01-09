import express from "express";
import shorturlController from "../controllers/Shorturl.Controller.js";

const router = express.Router();

// create
router.post("/", shorturlController.postShortUrl);

// get
router.get("/", shorturlController.getShortUrlsByEmail);

// delete
router.delete("/:id", shorturlController.deleteShortUrlById);

export default router;
