import mongoose from "mongoose";

const roleEnum = {
  values: ["Хүлээгдэж буй", "Амжилттай"],
};

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  foods: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Food",
      required: true,
    },
  ],
  totalPrice: {
    type: String,
    required: true,
  },
  process: {
    type: String,
    enum: roleEnum,
    default: "Хүлээгдэж буй",
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  district: {
    type: String,
    required: true,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
});

export const Order = mongoose.model("Order", orderSchema);
