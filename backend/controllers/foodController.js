import { Food } from "../models/food.js";

const createFood = async (request, response) => {
  const result = await Food.create(request.body);

  response.json({
    success: true,
    data: result,
  });
};

const getAllFoods = async (request, response) => {
  const result = await Food.find().populate("categoryId");

  response.json({
    success: true,
    data: result,
  });
};

export { createFood, getAllFoods };
