"use client";

import { FC, useEffect, useState } from "react";
import { UpArrow } from "../svg";

type CategoryType = {
  _id: string;
  name: string;
};

type ChooseCategoryProps = {
  onCategoryChange: (category: CategoryType) => void;
};

export const ChooseCategory: FC<ChooseCategoryProps> = ({
  onCategoryChange,
}) => {
  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const [open, setOpen] = useState(false);
  const [dataCategory, setDataCategory] = useState<CategoryType[]>([]);
  const [selectedOption, setSelectedOption] = useState<CategoryType | null>(
    null
  );

  const fetchCategoryData = async () => {
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

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const onOptionClicked = (category: CategoryType) => () => {
    setSelectedOption(category);
    onCategoryChange(category);
    setOpen(false);
  };

  const toggling = () => setOpen(!open);

  return (
    <>
      <div className="relative cursor-pointer w-full">
        <div
          onClick={toggling}
          tabIndex={0}
          className="px-3 h-14 rounded-lg bg-[#F4F4F4] flex items-center justify-between"
        >
          <p
            className={`font-inter text-base font-medium leading-5
           ${selectedOption ? "text-[#121316]" : "text-[#8B8E95]"}`}
          >
            {selectedOption?.name || " Хоолны ангилал сонгоно уу"}
          </p>
          <div
            className={`transition-all duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          >
            <UpArrow />
          </div>
        </div>
        {open && (
          <div className="absolute top-[100%] left-0 max-w-[539px] w-full overflow-y-scroll rounded-lg bg-white z-[1] border border-[#D6D8DB]">
            {dataCategory?.map((category) => {
              return (
                <button
                  type="button"
                  key={category._id}
                  onClick={onOptionClicked(category)}
                  value={category._id}
                  className="w-full flex flex-col"
                >
                  <div className="px-3 h-12 flex items-center">
                    <p className="text-[#171717] font-sans text-base font-normal ">
                      {category.name}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
