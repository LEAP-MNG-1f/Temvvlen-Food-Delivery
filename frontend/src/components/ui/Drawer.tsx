"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { LeftArrow, Shop } from "../svg";
import Link from "next/link";
import { DrawerCard } from "./DrawerCard";
import { Fragment, useEffect, useState } from "react";

type Anchor = "right";

type CartItem = {
  _id: number;
  name: string;
  price: number;
  ingredient: string;
  image: string;
  quantity: number;
};

export default function ShopDrawer() {
  const [dataCart, setDataCart] = useState<CartItem[]>([]);
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartWithQuantity = savedCart.map((item: CartItem) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setDataCart(cartWithQuantity);
  }, []);

  const removeFromCart = (itemToRemove: CartItem) => {
    const updatedCart = dataCart.filter(
      (item) => item._id !== itemToRemove._id
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setDataCart(updatedCart);
  };

  const incrementQuantity = (itemId: number) => {
    const updatedCart = dataCart.map((item) =>
      item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setDataCart(updatedCart);
  };

  const decrementQuantity = (itemId: number) => {
    const updatedCart = dataCart.map((item) =>
      item._id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setDataCart(updatedCart);
  };

  const totalPrice = dataCart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const list = (anchor: Anchor) => (
    <Box role="presentation">
      <div className="px-6 pt-[26px] flex flex-col gap-10 mb-[172px]">
        <div className="w-[538px] flex justify-between py-[9px] items-center">
          <button
            onClick={toggleDrawer(anchor, false)}
            className="w-12 h-12 flex justify-center items-center cursor-pointer"
          >
            <LeftArrow />
          </button>
          <p className="text-[#000] font-poppins text-xl font-black leading-[30px]">
            Таны сагс
          </p>
          <div className="w-12 h-12"></div>
        </div>
        <div className="flex flex-col">
          <div className="w-full h-[1px] bg-[#D6D8DB]"></div>
          {dataCart?.map((item) => {
            return (
              <div key={item._id}>
                <DrawerCard
                  removeFromCart={removeFromCart}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                  item={item}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[586px] h-[172px] shadow-[0px_-4px_8px_0px_rgba(187,190,205,0.20)] px-8 py-[10px] flex items-center gap-[10px] fixed bottom-0 z-10 bg-white">
        <div className="w-full flex flex-col">
          <p className="text-[#5E6166] font-poppins text-lg font-normal leading-[27px]">
            Нийт төлөх дүн
          </p>
          <p className="text-[#121316] font-poppins text-lg font-bold leading-[27px]">
            {totalPrice.toLocaleString()}₮
          </p>
        </div>
        <Link
          href="/order"
          className="w-full flex justify-center items-center cursor-pointer px-4 py-2 rounded-[4px] bg-[#18BA51] h-12 text-white font-sans text-base font-normal leading-[19px]"
        >
          Захиалах
        </Link>
      </div>
    </Box>
  );

  return (
    <>
      {(["right"] as const).map((anchor) => (
        <Fragment key={anchor}>
          <div
            onClick={toggleDrawer(anchor, true)}
            className="flex items-center gap-2 px-4 py-2 cursor-pointer"
          >
            <Shop />
            <p className="text-sm font-bold tracking-[-0.3px] font-sans text-[#000]">
              Сагс
            </p>
          </div>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </>
  );
}
