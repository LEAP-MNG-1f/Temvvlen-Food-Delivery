"use client";

import { useEffect, useState } from "react";
import { Header } from "../constant";
import { BlackThreeDot, Pencil, ThreeDot, Trash } from "../svg";
import { AddCategory } from "../ui/AddCategory";
import { AddFood } from "../ui/AddFood";
import { AdminCard } from "../ui/AdminCard";

type CategoryType = {
  name: string;
};

type FoodType = {
  _id: number;
  name: string;
  price: string;
  ingeredient: string;
  image: string;
  categoryId: string;
};

export const AdminPage = () => {
  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const [dataCategory, setDataCategory] = useState<CategoryType[]>([]);
  const [dataFood, setDataFood] = useState<FoodType[]>([]);
  const [focus, setFocus] = useState("");

  const handelClickFocus = (value: string) => {
    setFocus(value);
  };

  const fetchDataCategory = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/categorys`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const category = await response.json();
      setDataCategory(category.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchDataFood = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/foods`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const food = await response.json();
      setDataFood(food.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddButton = () => {
    fetchDataCategory();
    fetchDataFood();
  };

  useEffect(() => {
    fetchDataCategory();
    fetchDataFood();
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <Header home="" menu="" location="" />
      <div className="max-w-[1272px] w-full flex">
        <div className="max-w-[314px] w-full py-[26px] pr-6 pl-8 flex flex-col gap-10 mt-[56px]">
          <p className="text-[#272727] font-poppins text-[22px] font-bold leading-[33px]">
            Food menu
          </p>
          <div className="flex flex-col gap-[26px]">
            {dataCategory?.map((category, id) => {
              return (
                <button
                  onClick={() => handelClickFocus(category.name)}
                  className={`h-10 px-4 py-2 flex justify-between items-center rounded-lg border border-[#D6D8DB] ${
                    focus === category.name ? "bg-[#18BA51]" : "bg-white"
                  }`}
                  key={id}
                >
                  <p
                    className={`font-inter text-lg font-medium leading-6 tracking-[-0.4px] ${
                      focus === category.name ? "text-white" : "text-[#000000]"
                    }`}
                  >
                    {category.name}
                  </p>
                  <div className="dropdown dropdown-right">
                    <div
                      tabIndex={0}
                      role="button"
                      className="h-10 flex items-center justify-center"
                    >
                      {focus === category.name ? (
                        <ThreeDot />
                      ) : (
                        <BlackThreeDot />
                      )}
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-white z-[1] w-[200px] rounded-lg p-0"
                    >
                      <li>
                        <div className="px-4 py-2 flex items-center gap-4">
                          <Pencil />
                          <p className="text-[#161616] font-inter text-base font-medium">
                            Edit name
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="px-4 py-2 flex items-center gap-4">
                          <Trash />
                          <p className="text-[#DF1F29] font-inter text-base font-medium">
                            Delete Category
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </button>
              );
            })}
            <AddCategory onAddCategory={handleAddButton} />
          </div>
        </div>
        <div className="py-6 pl-8 pr-8 min-h-screen bg-[#F7F7F8] w-full flex flex-col gap-8">
          <div className="mt-[56px]">
            <div className="py-4 flex items-center justify-between">
              <p className="text-[#272727] font-poppins text-[22px] font-bold leading-[33px]">
                Breakfast
              </p>
              <AddFood onAddFood={handleAddButton} />
            </div>
            <div className="grid grid-cols-3 gap-x-6 gap-y-[60px]">
              {dataFood?.map((item) => {
                return <AdminCard item={item} key={item._id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
