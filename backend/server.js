import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import { memberRoute } from "./routes/route.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const app = express();
app.use(
  express.json({
    limit: "1mb",
  })
);

const port = 5000 || process.env.PORT;

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);

app.get("/api/v1", (req, res) => res.send('Hello from SCCSE-AOT'));
app.use("/api/v1/member", memberRoute);


connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log("server is running on " + port);
    });
  })
  .catch(() => {
    console.log("Couldn't start server");
  })

