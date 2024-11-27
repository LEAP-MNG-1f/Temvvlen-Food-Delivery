import express from "express";
import {
  createCategory,
  getAllCategorys,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/categorys", getAllCategorys);
categoryRouter.post("/category", createCategory);

export default categoryRouter;
