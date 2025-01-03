"use client";

import { FC, useRef, useState } from "react";
import { Minus, WhitePlus } from "../svg";

type Food = {
  _id: number;
  name: string;
  price: string;
  ingeredient: string;
  image: string;
  discount: number;
  quantity: number;
};

type CardPropsType = {
  item: Food;
};

export const Card: FC<CardPropsType> = ({ item }) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [dataFood, setDataFood] = useState<Food[]>([]);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, item];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const incrementQuantity = (itemId: number) => {
    const updatedCart = dataFood.map((item) =>
      item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setDataFood(updatedCart);
  };

  const decrementQuantity = (itemId: number) => {
    const updatedCart = dataFood.map((item) =>
      item._id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setDataFood(updatedCart);
  };

  return (
    <>
      <button
        className="flex flex-col gap-[14px] max-w-[282px] w-full relative"
        onClick={openModal}
      >
        <img
          src={item.image}
          className="w-[282px] h-[186px] shadow-[0px_3px_6px_-2px_rgba(0,0,0,0.10),0px_6px_10px_0px_rgba(0,0,0,0.07)] rounded-2xl object-cover object-center"
        />
        {/* <div className="absolute px-4 py-1 rounded-2xl border border-white bg-[#18BA51] backdrop-blur-[50px] top-4 right-4">
        <p className="text-white font-poppins text-lg font-semibold leading-[27px]">
          {item.saletag}%
        </p>
      </div> */}
        <div className="flex flex-col gap-[2px] items-start">
          <p className="text-[#000000] font-poppins text-lg font-semibold leading-[27px]">
            {item.name}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-[#18BA51] font-poppins text-lg font-semibold leading-[27px]">
              {item.price}₮
            </p>
            {item.discount ? (
              <p className="text-[#272727] font-poppins text-lg font-normal leading-[27px] line-through">
                {item.discount}₮
              </p>
            ) : null}
          </div>
        </div>
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box max-w-[981px] p-8 items-center flex gap-[33px] rounded-2xl bg-white">
          <div>
            <img
              src={item.image}
              className="w-[500px] h-[500px] object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-8 max-w-[384px] w-full">
            <div className="flex flex-col gap-[2px]">
              <p className="text-[#000000] font-poppins text-[28px] font-bold leading-[33px]">
                {item.name}
              </p>
              <p className="text-[#18BA51] font-poppins text-lg font-semibold leading-[27px]">
                {item.price}₮
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <p className="text-[#000000] font-poppins text-lg font-semibold leading-[27px]">
                Орц
              </p>
              <div className="p-2 bg-[#F6F6F6] rounded-lg">
                <p className="text-[#767676] font-sans text-base font-normal leading-[19px]">
                  {item.ingeredient}
                </p>
              </div>
            </div>
            <p className="text-[#000000] font-poppins text-lg font-semibold leading-[27px]">
              Тоо
            </p>
            <div className="flex items-center gap-5">
              <button
                onClick={() => decrementQuantity(item._id)}
                className="w-[45px] h-10 bg-[#18BA51] rounded-[10px] flex items-center justify-center"
              >
                <Minus />
              </button>
              <p className="w-full max-w-[254px] px-[30px] py-2 text-[#171717] font-poppins text-base font-medium flex items-center justify-center">
                {item.quantity}
              </p>
              <button
                onClick={() => incrementQuantity(item._id)}
                className="w-[45px] h-10 bg-[#18BA51] rounded-[10px] flex items-center justify-center"
              >
                <WhitePlus />
              </button>
            </div>
            <form method="dialog">
              <button
                onClick={handleAddToCart}
                className="bg-[#18BA51] rounded-[4px] px-4 py-2 h-12 w-full text-[#FFFFFF] font-sans text-base font-normal leading-[19px]"
              >
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
