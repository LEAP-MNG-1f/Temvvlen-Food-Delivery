import express from "express";
import {
  createCategory,
  getAllCategorys,
  updateCategory,
} from "../controllers/categoryController.js";

const categoryRouter = express.Router();

categoryRouter.get("/categorys", getAllCategorys);
categoryRouter.post("/category", createCategory);
categoryRouter.put("/category", updateCategory);

export default categoryRouter;
