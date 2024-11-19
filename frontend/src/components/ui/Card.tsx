"use client";

import Link from "next/link";
import { useRef } from "react";
import { Minus, WhitePlus } from "../svg";

type CardPropsType = {
  img: string;
  title: string;
  price: number;
  saletag?: number;
  discount?: number;
  ingredients?: string;
};

export const Card = (props: CardPropsType) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };
  return (
    <>
      <button
        className="flex flex-col gap-[14px] max-w-[282px] w-full relative"
        onClick={openModal}
      >
        <img
          src={props.img}
          className="w-[282px] h-[186px] shadow-[0px_3px_6px_-2px_rgba(0,0,0,0.10),0px_6px_10px_0px_rgba(0,0,0,0.07)] rounded-2xl object-cover object-center"
        />
        {/* <div className="absolute px-4 py-1 rounded-2xl border border-white bg-[#18BA51] backdrop-blur-[50px] top-4 right-4">
        <p className="text-white font-poppins text-lg font-semibold leading-[27px]">
          {props.saletag}%
        </p>
      </div> */}
        <div className="flex flex-col gap-[2px] items-start">
          <p className="text-[#000000] font-poppins text-lg font-semibold leading-[27px]">
            {props.title}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-[#18BA51] font-poppins text-lg font-semibold leading-[27px]">
              {props.price}₮
            </p>
            {/* <p className="text-[#272727] font-poppins text-lg font-normal leading-[27px] line-through">
              {props.discount}₮
            </p> */}
          </div>
        </div>
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box max-w-[981px] p-8 items-center flex gap-[33px] rounded-2xl bg-white">
          <div>
            <img
              src={props.img}
              className="w-[500px] h-[500px] object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-8 max-w-[384px] w-full">
            <div className="flex flex-col gap-[2px]">
              <p className="text-[#000000] font-poppins text-[28px] font-bold leading-[33px]">
                {props.title}
              </p>
              <p className="text-[#18BA51] font-poppins text-lg font-semibold leading-[27px]">
                {props.price}
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <p className="text-[#000000] font-poppins text-lg font-semibold leading-[27px]">
                Орц
              </p>
              <div className="p-2 bg-[#F6F6F6] rounded-lg">
                <p className="text-[#767676] font-sans text-base font-normal leading-[19px]">
                  {props.ingredients}
                </p>
              </div>
            </div>
            <p className="text-[#000000] font-poppins text-lg font-semibold leading-[27px]">
              Тоо
            </p>
            <div className="flex items-center gap-5">
              <button className="w-[45px] h-10 bg-[#18BA51] rounded-[10px] flex items-center justify-center">
                <Minus />
              </button>
              <p className="w-full max-w-[254px] px-[30px] py-2 text-[#171717] font-poppins text-base font-medium flex items-center justify-center">
                1
              </p>
              <button className="w-[45px] h-10 bg-[#18BA51] rounded-[10px] flex items-center justify-center">
                <WhitePlus />
              </button>
            </div>
            <form method="dialog">
              <button className="bg-[#18BA51] rounded-[4px] px-4 py-2 h-12 w-full text-[#FFFFFF] font-sans text-base font-normal leading-[19px]">
                Сагслах
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};
