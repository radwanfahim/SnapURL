// Import required modules
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

// import routes
import urlShortenerRoute from "./routes/Shorturl.Routes.js";

// Initialize Express app
const app = express();

// use limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(limiter);

// url shortener route
app.use("/api/shorten", urlShortenerRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(err.message);
});

export default app;
