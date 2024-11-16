"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { LeftArrow, Shop } from "../svg";
import Link from "next/link";

type Anchor = "right";

export default function ShopDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
    setState({ ...state, [anchor]: open });
  };

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
      </div>
      <div className="w-[586px] h-[172px] shadow-[0px_-4px_8px_0px_rgba(187,190,205,0.20)] px-8 pt-[10px] pb-[30px] flex items-center gap-[10px] fixed bottom-0 z-10">
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
        <React.Fragment key={anchor}>
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
        </React.Fragment>
      ))}
    </>
  );
}
