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
          </div>
          <div></div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};
