import { Order } from "../models/order.js";

const createOrder = async (request, response) => {
  const result = await Order.create({
    userId: "674400554323f122cd9ac12d",
    orderNumber: 1,
    foods: "67468619718cfdd229e17fad",
    totalPrice: "12,000",
    district: "Баянзүрх дүүрэг",
    khoroo: "3-р хороо",
    apartment: "45-р байр",
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
