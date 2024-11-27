import express from "express";
import { createOrder, getAllOrders } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.get("/orders", getAllOrders);
orderRouter.post("/order", createOrder);

export default orderRouter;
