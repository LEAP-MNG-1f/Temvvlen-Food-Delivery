import { Order } from "../model/order.js";

const createOrder = async (request, response) => {
  const result = await Order.create({
    userId: "674400554323f122cd9ac12d",
    orderNumber: 1,
    totalPrice: "12,000",
  });

  response.json({
    success: true,
    data: result,
  });
};

const getAllOrders = async (request, response) => {
  const result = await Order.find().populate("customer");

  response.json({
    success: true,
    data: result,
  });
};

export { createOrder, getAllOrders };
