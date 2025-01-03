import mongoose from "mongoose";

const roleEnum = {
  values: ["Active", "Progress", "Waiting", "Delivered"],
};

const paymentEnum = {
  values: ["Cash", "Card"],
};

const orderSchema = new mongoose.Schema({
  userId: {
    // type: mongoose.SchemaTypes.ObjectId,
    // ref: "User",
    // required: true,
  },
  orderNumber: {
    type: Number,
    // required: true,
  },
  foodId: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Food",
      // required: true,
    },
  ],
  totalPrice: {
    type: String,
    // required: true,
  },
  process: {
    type: String,
    enum: roleEnum,
    default: "Active",
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
  phoneNumber: {
    type: Number,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    enum: paymentEnum,
  },
});

export const Order = mongoose.model("Order", orderSchema);
