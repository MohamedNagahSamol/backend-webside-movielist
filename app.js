import express from "express";
const app = express();
import "dotenv/config";
import cookeiparser from "cookie-parser";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookeiparser());
import cors from "cors";
import { prisma, connect, disconnect } from "./config/prisma.js";

import cloud from "cloudinary";
const cloudinary = cloud.v2

cloudinary.config({
  cloud_name: process.env.cloud_Name,
  api_key: process.env.API_key,
  api_secret: process.env.API_secret,
});

import movieroutes from "./routes/moveiroutes.js";
import authrouter from "./routes/authroute.js";
import watchlistroute from "./routes/watchlistroutes.js";

app.use(authrouter);
app.use(watchlistroute);
app.use(movieroutes);

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
});
