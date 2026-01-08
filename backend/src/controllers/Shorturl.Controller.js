import ShortUrlModel from "../models/ShortUrl.Model.js";
import crypto from "crypto";

// post
async function postShortUrl(req, res, next) {
  try {
    const { originalUrl, email } = req.body;

    const generateCode = (length = 6) => {
      return crypto
        .randomBytes(length)
        .toString("base64")
        .replace(/[^a-zA-Z0-9]/g, "")
        .slice(0, length);
    };

    const shortCode = generateCode();
    const clicks = 0;

    const urlData = {
      originalUrl: originalUrl,
      shortCode: shortCode,
      clicks: clicks,
      email,
    };
    const newShortUrl = await ShortUrlModel.createShortUrl(urlData);
    res.status(201).json(newShortUrl);
  } catch (err) {
    res.status(500).json({ message: err.message });
    next(err);
  }
}

// get
async function getShortUrlsByEmail(req, res, next) {
  try {
    const { email } = req.query;
    const { data, error } = await ShortUrlModel.getShortUrlsByEmail(email);
    if (error) throw new Error(error.message);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
    next(err);
  }
}


export default {
  postShortUrl,
  getShortUrlsByEmail,

};
