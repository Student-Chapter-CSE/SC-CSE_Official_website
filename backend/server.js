import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import { memberRoute } from "./routes/route.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

dotenv.config();
connectDB();

const app = express();
app.use(
  express.json({
    limit: "1mb",
  })
);

const port = 5000 || process.env.PORT;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/v1/member", memberRoute);

app.listen(port, () => {
  console.log("server is running on " + port);
});
