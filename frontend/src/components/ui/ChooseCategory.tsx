import { useState } from "react";
import { UpArrow } from "../svg";

export const ChooseCategory = () => {
  const [open, setOpen] = useState(false);

  const toggling = () => setOpen(!open);

  return (
    <>
      <div className="relative cursor-pointer w-full">
        <div className="px-3 h-14 rounded-lg bg-[#F4F4F4] flex items-center justify-between">
          <p className="text-[#8B8E95] font-inter text-base font-medium leading-5">
            Хоолны ангилал сонгоно уу
          </p>
          <UpArrow />
        </div>
      </div>
      {open && (
        <div className="absolute top-[100%] left-0 max-w-[539px] w-full overflow-y-scroll rounded-lg bg-white z-[1]">
          <div></div>
        </div>
      )}
    </>
  );
};
