"use client";

import { useRef } from "react";
import { Close } from "../svg";

export const AddFood = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  return (
    <>
      <button
        className="px-4 py-2 rounded-[4px] bg-[#18BA51] text-white font-sans text-base font-normal leading-[19px]"
        onClick={openModal}
      >
        Add new food
      </button>
      <dialog ref={dialogRef} id="addModal" className="modal">
        <div className="modal-box p-0 max-w-[587px] w-full bg-white rounded-2xl flex flex-col">
          <div className="px-6 py-4 flex items-center justify-between border-b border-[#E0E0E0]">
            <form method="dialog">
              <button className="w-8 h-8 flex items-center justify-center">
                <Close />
              </button>
            </form>
            <p className="text-[#161616] font-poppins text-2xl font-bold">
              Create food
            </p>
            <div className="w-8 h-8"></div>
          </div>
          <div className="p-6 flex flex-col justify-center gap-4 self-stretch">
            <div className="flex flex-col gap-2 justify-center">
              <label className="text-[#121316] font-poppins text-sm font-medium">
                Хоолны нэр
              </label>
              <input
                type="text"
                className="px-3 h-14 rounded-lg bg-[#F4F4F4] outline-none text-[#121316] font-inter text-base font-medium leading-5"
                placeholder="Хоолны нэр оруулна уу"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <label className="text-[#121316] font-poppins text-sm font-medium">
                Хоолны ангилал
              </label>
              <input
                type="text"
                className="px-3 h-14 rounded-lg bg-[#F4F4F4] outline-none text-[#121316] font-inter text-base font-medium leading-5"
                placeholder="Хоолны ангилал сонгоно уу"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <label className="text-[#121316] font-poppins text-sm font-medium">
                Хоолны орц
              </label>
              <input
                type="text"
                className="px-3 h-14 rounded-lg bg-[#F4F4F4] outline-none text-[#121316] font-inter text-base font-medium leading-5"
                placeholder="Хоолны орц оруулна уу"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <label className="text-[#121316] font-poppins text-sm font-medium">
                Хоолны үнэ
              </label>
              <input
                type="text"
                className="px-3 h-14 rounded-lg bg-[#F4F4F4] outline-none text-[#121316] font-inter text-base font-medium leading-5"
                placeholder="Хоолны үнэ оруулна уу"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="toggle toggle-success toggle-xs"
                />
                <p className="text-[#121316] font-poppins text-sm font-medium">
                  Хямдралтай эсэх
                </p>
              </div>
              <input
                type="text"
                className="px-3 h-14 rounded-lg bg-[#F4F4F4] outline-none text-[#121316] font-inter text-base font-medium leading-5"
                placeholder="Хямдралын үнэ оруулна уу"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              <p className="text-[#121316] font-poppins text-sm font-medium">
                Хоолны зураг
              </p>
              <div className="max-w-[284px] w-full h-[122px] p-2 flex flex-col justify-center items-center gap-2 border border-dashed border-[#D6D7DC] bg-[rgba(186,188,196,0.12)] rounded-lg">
                <p className="text-[#525252] font-poppins text-base font-bold ">
                  Add image for the food
                </p>
                <input type="file" id="upload" className="file" />
                <label
                  htmlFor="upload"
                  className="px-3 py-2 rounded-lg bg-[#393939] text-white font-inter text-base font-bold cursor-pointer"
                >
                  Add image
                </label>
              </div>
            </div>
          </div>
          <div className="p-6 flex gap-4 items-center justify-end border-t border-[#E0E0E0]">
            <button className="p-2 text-[#3F4145] font-inter text-base font-bold">
              Clear
            </button>
            <button className="px-4 py-2 rounded-[4px] bg-[#393939] text-white font-inter text-base font-bold">
              Continue
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};