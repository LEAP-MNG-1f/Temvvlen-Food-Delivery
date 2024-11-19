import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 8000;
dotenv.config();

app.use(cors());

// Configuration
cloudinary.config({
  cloud_name: "dsjr8e4oe",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

(async function () {
  // Upload an image
  const result = await cloudinary.uploader.upload(
    "https://res.cloudinary.com/dsjr8e4oe/image/upload/v1731982251/417dc4f856c8e6327152022aab0504fb_ykjibf.png"
  );
  console.log(result);

  // Optimize delivery by resizing and applying auto-format and auto-quality
  const optimizeUrl = cloudinary.url(result.public_id, {
    fetch_format: "auto",
    quality: "auto",
  });
  console.log(optimizeUrl);

  // Transform the image: auto-crop to square aspect_ratio
  const autoCropUrl = cloudinary.url(result.public_id, {
    crop: "auto",
    gravity: "auto",
    width: 500,
    height: 500,
  });
  console.log(autoCropUrl);
})();

app.use("/", (request, response) => {
  response.send(["Hello", "World"]);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
