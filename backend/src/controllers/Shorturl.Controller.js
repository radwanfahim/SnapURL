import ShortUrlModel from "../models/ShortUrl.Model.js";
import crypto from "crypto";

// post
async function postShortUrl(req, res, next) {
  try {
    const { originalUrl, email } = req.body;

    // if (originalUrl.length > 1 && originalUrl.endsWith("/")) {
    //   originalUrl = originalUrl.slice(0, -1);
    // }

    const { data, error } = await ShortUrlModel.getShortUrlsByEmail(email);

    if (error) {
      return res.status(500).json({ message: error.message });
    }

    const alreadyExist = data?.find((i) => i.originalUrl === originalUrl);

    if (alreadyExist) {
      return res.status(409).json({
        message: "URL already shortened",
        data: alreadyExist,
      });
    }

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

// delete
async function deleteShortUrlById(req, res, next) {
  try {
    const { id } = req.params;
    const { data, error } = await ShortUrlModel.deleteShorturlById(id);
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
  deleteShortUrlById,
};
