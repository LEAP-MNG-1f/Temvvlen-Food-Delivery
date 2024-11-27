"use client";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { LeftArrow, Shop } from "../svg";
import Link from "next/link";
import { DrawerCard } from "./DrawerCard";
import { Fragment, useEffect, useState } from "react";

type Anchor = "right";

type CartItem = {
  id: number;
  name: string;
  price: number;
  ingredient: string;
  image: string;
};

export default function ShopDrawer() {
  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const [dataCart, setDataCart] = useState<CartItem[]>([]);
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    setState({ ...state, [anchor]: open });
  };

  const fetchDataCart = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/api/foods`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const category = await response.json();
      setDataCart(category.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataCart();
  }, []);

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="px-6 pt-[26px] flex flex-col gap-10">
        <div className="w-[538px] flex justify-between py-[9px] items-center">
          <div className="w-12 h-12 flex justify-center items-center cursor-pointer">
            <LeftArrow />
          </div>
          <p className="text-[#000] font-poppins text-xl font-black leading-[30px]">
            Таны сагс
          </p>
          <div className="w-12 h-12"></div>
        </div>
        <div className="flex flex-col">
          <div className="w-full h-[1px] bg-[#D6D8DB]"></div>
          {dataCart?.map((item, id) => {
            return (
              <div key={id}>
                <DrawerCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[586px] h-[172px] shadow-[0px_-4px_8px_0px_rgba(187,190,205,0.20)] px-8 py-[10px] flex items-center gap-[10px] fixed bottom-0 z-10">
        <div className="w-full flex flex-col">
          <p className="text-[#5E6166] font-poppins text-lg font-normal leading-[27px]">
            Нийт төлөх дүн
          </p>
          <p className="text-[#121316] font-poppins text-lg font-bold leading-[27px]">
            34,800₮
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
