import { Order } from "../models/order.js";

const createOrder = async (request, response) => {
  const result = await Order.create(request.body);

  response.json({
    success: true,
    data: result,
  });
};

const getAllOrders = async (request, response) => {
  const result = await Order.find().populate("userId");

  response.json({
    success: true,
    data: result,
  });
};

export { createOrder, getAllOrders };
