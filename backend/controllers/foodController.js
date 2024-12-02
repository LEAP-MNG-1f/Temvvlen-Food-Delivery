import { Food } from "../models/food.js";

const createFood = async (request, response) => {
  const result = await Food.create({
    name: "Yoghurt",
    image:
      "https://s3-alpha-sig.figma.com/img/6777/9864/1708f124d65fd4dd1a08a8513905835f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NPzFyEmhFJ4haB0~BFS0kGh8tzws8ooFYL0i3mk1ZybRsTsULpEuN9ADOl0vreaitdTFSs866A0uES0~zzlcCtYc3LpOO2HBqWXaD-sOL4goTlxwbydwXe~ABCivVeWjd2G6H713-j~D2zgNI5E-kSF3YzaBi9FP8nb400tIyiIj0lFTd~d-u9C2Oh3WZBslJ~bIp2bT72kDnZw~fjZT6I6V2saYTe4WYNvlVycjv6YOYm58EbtM00tQ6slu6sh-JB8vEW5GYPJAGYVI8krAQMIVdPfn2Du7NWNE5Zpc863H0rQm6-np-HIhy2OIq3AqLGvzh4eM1dbefw3olZsVew__",
    ingeredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
    price: "14,800",
    categoryId: "674702a54c7125c8e1b7e251",
  });

  response.json({
    success: true,
    data: result,
  });
};

const getAllFoods = async (request, response) => {
  const result = await Food.find();

  response.json({
    success: true,
    data: result,
  });
};

export { createFood, getAllFoods };
