import ShortCodeModel from "../models/ShortCode.Model.js";

async function getShortCode(req, res, next) {
  try {
    const { shortcode } = req.params;

    const { data, error } = await ShortCodeModel.getShortCode(shortcode);

    if (error || !data) {
      return res.sendStatus(404);
    }

    return res.redirect(data[0].originalUrl);
  } catch (err) {
    res.status(500).json({ message: err.message });
    next(err);
  }
}

export default { getShortCode };
