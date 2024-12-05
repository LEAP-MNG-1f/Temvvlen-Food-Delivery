import { Category } from "../models/category.js";

const createCategory = async (request, response) => {
  const result = await Category.create(request.body);

  response.json({
    success: true,
    data: result,
  });
};

const getAllCategorys = async (request, response) => {
  const result = await Category.find();

  response.json({
    success: true,
    data: result,
  });
};

const updateCategory = async (request, response) => {
  const result = await Category.findOneAndUpdate(request.body);

  response.json({
    success: true,
    data: result,
  });
};

export { createCategory, getAllCategorys, updateCategory };
