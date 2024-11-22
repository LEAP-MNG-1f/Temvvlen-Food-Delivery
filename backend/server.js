// import dotenv from "dotenv";
// import { v2 as cloudinary } from "cloudinary";
// import express from "express";
// import cors from "cors";
// import connectDb from "./connectDB.js";

// dotenv.config();

// const app = express();
// const PORT = 8000;

// app.use(cors());

// // Configuration
// cloudinary.config({
//   cloud_name: "dsjr8e4oe",
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// (async function () {
//   // Upload an image
//   const result = await cloudinary.uploader.upload(
//     "https://res.cloudinary.com/dsjr8e4oe/image/upload/v1731982251/417dc4f856c8e6327152022aab0504fb_ykjibf.png"
//   );
//   console.log(result);

//   // Optimize delivery by resizing and applying auto-format and auto-quality
//   const optimizeUrl = cloudinary.url(result.public_id, {
//     fetch_format: "auto",
//     quality: "auto",
//   });
//   console.log(optimizeUrl);

//   // Transform the image: auto-crop to square aspect_ratio
//   const autoCropUrl = cloudinary.url(result.public_id, {
//     crop: "auto",
//     gravity: "auto",
//     width: 500,
//     height: 500,
//   });
//   console.log(autoCropUrl);
// })();

// app.get("/", async (request, response) => {
//   const db = await connectDb();

//   let collection = db.collection("movies");
//   let result = await collection.find().limit(10).toArray();

//   response.json({
//     success: true,
//     data: result,
//   });
// });

// app.listen(PORT, () => {
//   console.log(`http://localhost:${PORT}`);
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./connectDB.js";

import { ObjectId, Timestamp } from "mongodb";

dotenv.config();

const server = express();
const PORT = 4000;

server.use(cors());

server.get("/", async (req, response) => {
  const db = await connectDb();

  let collection = db.collection("movies");
  let results = await collection.find().limit(10).toArray();

  response.json({
    succes: true,
    data: results,
  });
});

server.post("/create-user", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("product");
  const result = await collection.insertMany([]);

  response.json({
    succes: true,
    data: result,
  });
});

server.delete("/delete-user", async (req, response) => {
  const db = await connectDb();

  const collection = db.collection("product");
  const result = await collection.deleteOne({
    owner: "Temvvlen",
  });

  response.json({
    succes: true,
    data: result,
  });
});

// server.put("/update-user", async (req, response) => {
//   const db = await connectDb();

//   const collection = db.collection("product");
//   const result = await collection.findOneAndUpdate(
//     {
//       owner: "Temvvlen",
//     },
//     {
//       $set: { price: "20000", date: new Date() },
//     }
//   );

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

// server.listen(PORT, () => {
//   console.log(`server is running on http://localhost:${PORT}`);
// });
