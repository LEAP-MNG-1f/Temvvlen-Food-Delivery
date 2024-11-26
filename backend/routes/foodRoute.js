import express from "express";
import { createFood, getAllFoods } from "../controllers/foodController.js";

const foodRouter = express.Router();

foodRouter.get("/foods", getAllFoods);
foodRouter.post("/food", createFood);

export default foodRouter;
