"use client";

import { useState } from "react";
import { Footer, Header } from "../constant";

export const MenuPage = () => {
  const [focus, setFocus] = useState("Breakfast");

  const handelClickFocus = (value: string) => {
    setFocus(value);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <div className="w-full flex flex-col items-center gap-[54px]">
        <Header home="" menu="active" location="" />
        <div className="max-w-[1200px] w-full py-8 flex justify-between z-[1] mt-[56px]">
          <button
            onClick={() => handelClickFocus("Breakfast")}
            className={`max-w-[280px] w-full px-4 py-2 border border-[#D6D8DB] rounded-lg font-inter text-lg font-medium leading-[27px] tracking-[-0.396px] ${
              focus === "Breakfast" ? "bg-[#18BA51]" : "bg-[#FFF]"
            } ${focus === "Breakfast" ? "text-[#FFF]" : "text-[#000]"}`}
          >
            Breakfast
          </button>
          <button
            onClick={() => handelClickFocus("Soup")}
            className={`max-w-[280px] w-full px-4 py-2 border border-[#D6D8DB] rounded-lg font-inter text-lg font-medium leading-[27px] tracking-[-0.396px] ${
              focus === "Soup" ? "bg-[#18BA51]" : "bg-[#FFF]"
            } ${focus === "Soup" ? "text-[#FFF]" : "text-[#000]"}`}
          >
            Soup
          </button>
          <button
            onClick={() => handelClickFocus("Main Course")}
            className={`max-w-[280px] w-full px-4 py-2 border border-[#D6D8DB] rounded-lg font-inter text-lg font-medium leading-[27px] tracking-[-0.396px] ${
              focus === "Main Course" ? "bg-[#18BA51]" : "bg-[#FFF]"
            } ${focus === "Main Course" ? "text-[#FFF]" : "text-[#000]"}`}
          >
            Main Course
          </button>
          <button
            onClick={() => handelClickFocus("Dessert")}
            className={`max-w-[280px] w-full px-4 py-2 border border-[#D6D8DB] rounded-lg font-inter text-lg font-medium leading-[27px] tracking-[-0.396px] ${
              focus === "Dessert" ? "bg-[#18BA51]" : "bg-[#FFF]"
            } ${focus === "Dessert" ? "text-[#FFF]" : "text-[#000]"}`}
          >
            Dessert
          </button>
        </div>
        <div className="grid-cols-4 grid "></div>
      </div>
      <Footer />
    </div>
  );
};
//