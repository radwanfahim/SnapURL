import ShortUrlModel from "../models/ShortUrl.Model.js";

// post
async function postShortUrl(req, res, next) {
  try {
    const { originalUrl, shortCode, email, clicks } = req.body;
    const urlData = {
      original_url: originalUrl,
      short_code: shortCode,
      email,
      clicks,
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
