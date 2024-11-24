"use client";

import { useRef } from "react";
import { Close, Plus } from "../svg";

export const AddCategory = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };
  return (
    <>
      <button
        className="h-10 px-4 py-2 flex gap-2 items-center rounded-lg border border-[#D6D8DB] bg-white"
        onClick={openModal}
      >
        <Plus />
        <p className="text-[#5E6166] font-inter text-lg font-medium leading-6 tracking-[-0.4px]">
          Create new category
        </p>
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
              Create new category
            </p>
            <div className="w-8 h-8"></div>
          </div>
          <div className="p-6 flex flex-col justify-center gap-4 self-stretch">
            <div className="flex flex-col gap-2 justify-center">
              <label className="text-[#121316] font-poppins text-sm font-medium">
                Ангилалын нэр
              </label>
              <input
                type="text"
                className="px-3 h-14 rounded-lg bg-[#F4F4F4] outline-none text-[#121316] font-inter text-base font-medium leading-5"
                placeholder="Ангилалын нэр оруулна уу"
              />
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
