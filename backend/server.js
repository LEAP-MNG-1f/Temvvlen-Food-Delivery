import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import foodRouter from "./routes/foodRoute.js";
import orderRouter from "./routes/orderRoute.js";
import categoryRouter from "./routes/categoryRoute.js";

dotenv.config();
mongoose.connect(process.env.MONGODB_API);

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.json());

//--------------------Cloudinary--------------------//

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
  // console.log(result);

  // Optimize delivery by resizing and applying auto-format and auto-quality
  const optimizeUrl = cloudinary.url(result.public_id, {
    fetch_format: "auto",
    quality: "auto",
  });
  // console.log(optimizeUrl);

  // Transform the image: auto-crop to square aspect_ratio
  const autoCropUrl = cloudinary.url(result.public_id, {
    crop: "auto",
    gravity: "auto",
    width: 500,
    height: 500,
  });
  // console.log(autoCropUrl);
})();

//--------------------Router--------------------//

app.use("/api", userRouter);
app.use("/api", foodRouter);
app.use("/api", orderRouter);
app.use("/api", categoryRouter);

// app.get("/foods", async (request, response) => {
//   const results = await foodModel.find();

//   response.json({
//     success: true,
//     data: results,
//   });
// });

// app.post("/food", async (request, response) => {
//   const result = await foodModel.create([
//     {
//       name: "Main Pizza",
//       price: 34800,
//     },
//   ]);

//   response.json({
//     success: true,
//     data: result,
//   });
// });

// app.delete("/food", async (request, response) => {
//   const result = await foodModel.deleteOne({
//     _id: new ObjectId("6743f3962a4ff3c7a66eb2a3"),
//   });

//   response.json({
//     success: true,
//     data: result,
//   });
// });

// app.put("/food", async (request, response) => {
//   const result = await foodModel.update(
//     {
//       _id: new ObjectId("673ff2ae2930e49fb1bd8d26"),
//     },
//     {
//       $set: { email: "Saskue@gmail.com" },
//     }
//   );

//   response.json({
//     success: true,
//     data: result,
//   });
// });

// //--------------------Category--------------------//

// app.get("/categorys", async (request, response) => {
//   const db = await connectDb();

//   let collection = db.collection("category");
//   let results = await collection.find().toArray();

//   response.json({
//     succes: true,
//     data: results,
//   });
// });

// app.post("/category", async (request, response) => {
//   const db = await connectDb();

//   const collection = db.collection("category");
//   const result = await collection.insertMany([
//     {
//       name: "Breakfast",
//     },
//     {
//       name: "Soup",
//     },
//     {
//       name: "Main Course",
//       foodId: new ObjectId("674362c43585615c3aabe015"),
//     },
//     {
//       name: "Dessert",
//     },
//   ]);

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

// //--------------------Cart--------------------//

// app.get("/cart-items", async (request, response) => {
//   const db = await connectDb();

//   let collection = db.collection("cart");
//   let results = await collection.find().toArray();

//   response.json({
//     succes: true,
//     data: results,
//   });
// });

// app.post("/cart-item", async (request, response) => {
//   const db = await connectDb();

//   const collection = db.collection("cart");
//   const result = await collection.insertMany([
//     {
//       name: "Main Pizza",
//       image:
//         "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTok2YnRoKy5C-EmxJjP0UJkF9IKTTWuYbe102ty3DZ0NWYL6S2r1YoLudOdUhkRYde6p7c3N~mXWJTRopUoBAmeNodVByWiQSEl7JmCdH~lt6Lyji9Qx9kAkspPqTFFeBzWSK6tX~EhQTCgRI3fycQ72-wrSJTCmiHbBsMh41N8SI-ix9XSvau9mJdVFpmJZMEWEiubvFF4h-AXlM62PV6wDYZsFDpxo~~FfXAgD~T8~taFLP5HggAfgqx0b3IqOIt7Ta8DPdg2iSQqTiKrWO5HMPf6WIyzvlSBNxnHSnZlf-oTZayJM5u7FmcJnRZ-VFyNji~og-4nT9f-qXQoRA__",
//       ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
//       price: 34800,
//     },
//   ]);

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

// app.delete("/cart-item", async (request, response) => {
//   const db = await connectDb();

//   const collection = db.collection("cart");
//   const result = await collection.deleteOne({
//     _id: new ObjectId("673ff14597d4d83c00f19d8a"),
//   });

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

// app.put("/update-user", async (request, response) => {
//   const db = await connectDb();

//   const collection = db.collection("test");
//   const result = await collection.update(
//     {
//       _id: new ObjectId("673ff2ae2930e49fb1bd8d26"),
//     },
//     {
//       $set: { email: "Saskue@gmail.com" },
//     }
//   );

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

// app.delete("/delete-user", async (request, response) => {
//   const db = await connectDb();

//   const collection = db.collection("test");
//   const result = await collection.deleteOne({
//     _id: new ObjectId("673ff14597d4d83c00f19d8a"),
//   });

//   response.json({
//     succes: true,
//     data: result,
//   });
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
