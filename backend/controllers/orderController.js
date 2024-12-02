import { Order } from "../models/order.js";

const createOrder = async (request, response) => {
  const result = await Order.create({
    userId: "674400554323f122cd9ac12d",
    orderNumber: "27913",
    foodId: "6746ae7fa40fcf642ec7b696",
    totalPrice: "22,800",
    process: "Active",
    district: "Багахангай дүүрэг",
    khoroo: "2-р хороо",
    apartment: "Хоймор хотхон",
    phoneNumber: 90201550,
    information: "2 orts",
    paymenType: "Card",
  });

  response.json({
    success: true,
    data: result,
  });
};

const getAllOrders = async (request, response) => {
  const result = await Order.find().populate("userId").populate("foodId");

  response.json({
    success: true,
    data: result,
  });
};

export { createOrder, getAllOrders };
