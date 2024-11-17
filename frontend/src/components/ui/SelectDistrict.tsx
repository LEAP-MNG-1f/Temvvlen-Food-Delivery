"use client";

import { useState } from "react";
import { DownArrow, Location } from "../svg";
import { districts } from "./data";

type District = {
  district: string;
};

export const SelectDistrict = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<District | null>(null);

  const toggling = () => setOpen(!open);

  const onOptionClicked = (value: District) => () => {
    setSelectedOption(value);
    setOpen(false);
  };

  return (
    <>
      <div className="w-full cursor-pointer relative">
        <div
          onClick={toggling}
          tabIndex={0}
          className="h-12 w-full px-4 py-2 rounded-[4px] border border-[#ECEDF0] bg-[#F7F7F8] flex items-center gap-1"
          // style={
          //   { backgroundColor: selectedColor } || {
          //     backgroundColor: "#F9FAFB",
          //   }
          // }
        >
          <div className="w-6 h-6">
            <Location />
          </div>
          <p className="w-full text-[#8B8E95] font-sans text-base font-normal leading-[19px]">
            {selectedOption?.district || "Дүүрэг сонгоно уу"}
          </p>
          <div className="w-6 h-6">
            <DownArrow />
          </div>
        </div>
        {open && (
          <div className="absolute top-[100%] left-0 max-w-[384px] w-full max-h-[240px] overflow-y-scroll rounded-[4px] bg-white z-[1]">
            {districts.map((value) => {
              return (
                <button
                  type="button"
                  key={value.district}
                  onClick={onOptionClicked(value)}
                  className="px-4 py-2 h-12 flex gap-1 items-center text-[#373737] font-sans text-base font-normal leading-[19px]"
                >
                  <Location />
                  {value.district}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
