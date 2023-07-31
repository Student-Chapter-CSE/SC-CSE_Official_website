import express from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import { memberRoute } from "./routes/route.js";
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
    origin: "localhost:3000",
  })
);

app.use("/api/v1/member", memberRoute);

app.listen(port, () => {
  console.log("server is running on " + port);
});
