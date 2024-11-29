import mongoose from "mongoose";

const roleEnum = {
  values: ["active", "progress", "waiting", "delivered"],
};

const paymentEnum = {
  values: ["cash", "card"],
};

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    // required: true,
  },
  orderNumber: {
    type: Number,
    // required: true,
  },
  foods: [
    {
      type: mongoose.Schema.Types.ObjectId,
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
    default: "active",
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
  paymenType: {
    type: String,
    enum: paymentEnum,
  },
});

export const Order = mongoose.model("Order", orderSchema);
