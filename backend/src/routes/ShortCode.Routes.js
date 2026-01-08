import express from "express";
import ShortCodeController from "../controllers/ShortCode.Controller.js";

const router = express.Router();

// get
router.get("/:shortcode", ShortCodeController.getShortCode);

export default router;
