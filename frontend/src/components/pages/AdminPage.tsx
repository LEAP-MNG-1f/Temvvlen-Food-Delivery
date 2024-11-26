"use client";

import { useEffect, useState } from "react";
import { Header } from "../constant";
import { BlackThreeDot, ThreeDot } from "../svg";
import { AddCategory } from "../ui/AddCategory";
import { AddFood } from "../ui/AddFood";

interface CategoryType {
  name: string;
}

export const AdminPage = () => {
  const [dataCategory, setDataCategory] = useState<CategoryType[]>([]);
  const [focus, setFocus] = useState("Breakfast");

  const handelClickFocus = (value: string) => {
    setFocus(value);
  };

  // const fetchDataCategory = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8000/categorys");

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }

  //     const category = await response.json();
  //     setDataCategory(category.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchDataCategory();
  // }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <Header home="" menu="" location="" />
      <div className="max-w-[1264px] w-full flex">
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
                  {focus === category.name ? <ThreeDot /> : <BlackThreeDot />}
                </button>
              );
            })}
            <AddCategory />
          </div>
        </div>
        <div className="py-6 pl-8 pr-8 min-h-screen bg-[#F7F7F8] w-full flex flex-col gap-8">
          <div className="mt-[56px]">
            <div className="py-4 flex items-center justify-between">
              {/* <p className="text-[#272727] font-poppins text-[22px] font-bold leading-[33px]">
                Breakfast
              </p>
              <AddFood /> */}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
