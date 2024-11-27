import mongoose from "mongoose";

const roleEnum = {
  values: ["admin", "user"],
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    enum: roleEnum,
    default: "user",
  },
});

export const User = mongoose.model("User", userSchema);
