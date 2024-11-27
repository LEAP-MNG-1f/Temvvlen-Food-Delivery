import { User } from "../models/user.js";

const createUser = async (request, response) => {
  const result = await User.create({
    name: "Crown",
    email: "e.temuulen0751@gmail.com",
    password: "Crown7209",
    phonenumber: 90201550,
  });

  response.json({
    success: true,
    data: result,
  });
};

const getAllUsers = async (request, response) => {
  const result = await User.find();

  response.json({
    success: true,
    data: result,
  });
};

export { createUser, getAllUsers };
