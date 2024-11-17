"use client";

import { useState } from "react";
import { DownArrow, DownArrowWhite, Location, LocationWhite } from "../svg";
import { apartment, khoroo } from "./data";

type Apartment = {
  apartment: string;
};

export const SelectApartment = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Apartment | null>(null);

  const toggling = () => setOpen(!open);

  const onOptionClicked = (value: Apartment) => () => {
    setSelectedOption(value);
    setOpen(false);
  };

  return (
    <>
      <div className="w-full cursor-pointer relative">
        <div
          onClick={toggling}
          tabIndex={0}
          className={`h-12 w-full px-4 py-2 rounded-[4px] border border-[#ECEDF0] flex items-center gap-1 
            ${selectedOption ? "bg-[#18BA51]" : "bg-[#F7F7F8]"}`}
        >
          <div className="w-6 h-6">
            {selectedOption ? <LocationWhite /> : <Location />}
          </div>
          <p
            className={`w-full font-sans text-base font-normal leading-[19px] 
                ${selectedOption ? "text-white" : "text-[#8B8E95]"}`}
          >
            {selectedOption?.apartment || "Байр гудамж сонгоно уу"}
          </p>
          <div className="w-6 h-6">
            {selectedOption ? <DownArrowWhite /> : <DownArrow />}
          </div>
        </div>
        {open && (
          <div className="absolute top-[100%] left-0 max-w-[384px] w-full max-h-[240px] overflow-y-scroll rounded-[4px] bg-white z-[1]">
            {apartment.map((value) => {
              return (
                <button
                  type="button"
                  key={value.apartment}
                  onClick={onOptionClicked(value)}
                  className="px-4 py-2 h-12 flex gap-1 items-center text-[#373737] font-sans text-base font-normal leading-[19px]"
                >
                  <Location />
                  {value.apartment}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
