"use client";

import { useRef } from "react";
import { Profile } from "../svg";
import Link from "next/link";

export const LoginModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <>
      <button className="flex items-center gap-2 px-4 py-2" onClick={openModal}>
        <Profile />
        <p className="text-sm font-bold tracking-[-0.3px] font-sans text-[#000]">
          Нэвтрэх
        </p>
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="max-w-[448px] modal-box p-8 flex flex-col gap-12 rounded-2xl border border-[#DADCE0] bg-white shadow-[0px_0px_9px_0px_rgba(0,0,0,0.05)]">
          <p className="text-[#0D1118] text-center font-sans text-[28px] font-bold leading-[33px]">
            Нэвтрэх
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-black font-sans text-sm font-normal leading-[17px]">
                  Имэйл
                </p>
                <input
                  type="text"
                  className="px-4 py-2 rounded-[4px] border border-[#ECEDF0] bg-[#F7F7F8] w-full h-12 outline-none"
                  placeholder="Имэйл хаягаа оруулна уу"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-black font-sans text-sm font-normal leading-[17px]">
                  Нууц үг
                </p>
                <input
                  type="text"
                  className="px-4 py-2 rounded-[4px] border border-[#ECEDF0] bg-[#F7F7F8] w-full h-12 outline-none"
                  placeholder="Нууц үг"
                />
              </div>
            </div>
            {/* <Link
              href="/"
              className="text-[#3F4145] text-sm font-sans font-normal leading-[17px] text-end"
            >
              Нууц үг сэргээх
            </Link> */}
          </div>
          <div className="flex flex-col gap-8">
            <button className="px-4 py-2 h-12 w-full rounded-[4px] bg-[#EEEFF2] text-[rgba(28,32,36,0.24)] font-sans text-base font-normal leading-[19px]">
              Нэвтрэх
            </button>
            <p className="text-[#3F4145] font-sans text-sm font-normal leading-[17px] text-center">
              Эсвэл
            </p>
            <Link href="/">
              <button className="px-4 py-2 h-12 w-full rounded-[4px] border border-[#18BA51] text-[#272727] font-sans text-base font-normal leading-[19px]">
                Бүртгүүлэх
              </button>
            </Link>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};
