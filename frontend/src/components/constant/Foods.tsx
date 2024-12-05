"use client";

import { useEffect, useState } from "react";
import { GreenArrow, GreenStar } from "../svg";
import { groupBy } from "lodash";
import { Card } from "../ui/Card";

export type CategoryType = {
  _id: string;
  name: string;
};

export type FoodType = {
  _id: number;
  name: string;
  price: string;
  ingeredient: string;
  image: string;
  discount: number;
  categoryId: CategoryType;
  quantity: number;
};

export const Foods = () => {
  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const [dataFoods, setDataFoods] = useState<FoodType[]>([]);

  const fetchFoodData = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/foods`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const food = await response.json();

      setDataFoods(food.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoodData();
  }, []);

  const groupedData = groupBy(
    dataFoods,
    (dataFood) => dataFood.categoryId.name
  );

  return (
    <div className="w-full bg-white flex justify-center z-[1]">
      <div className="max-w-[1200px] w-full flex flex-col gap-20">
        {Object.entries(groupedData).map(([categoryName, categoryValues]) => (
          <div key={categoryName} className="flex flex-col gap-6">
            <div className="py-4 flex justify-between">
              <div className="flex items-center gap-1">
                <div className="w-8 h-8 flex items-center justify-center">
                  <GreenStar />
                </div>
                <p className="text-[#272727] font-poppins text-[22px] font-bold leading-[30px]">
                  {categoryName}
                </p>
              </div>
              <div className="flex items-center gap-[5px]">
                <p className="w-[109px] h-[30px] flex justify-center items-center text-[#18BA51] font-sans text-sm font-normal">
                  Бүгдийг харах
                </p>
                <div className="w-[15px] h-[30px] flex justify-center items-center">
                  <GreenArrow />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
              {(categoryValues as FoodType[]).map((item) => (
                <Card item={item} key={item._id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
