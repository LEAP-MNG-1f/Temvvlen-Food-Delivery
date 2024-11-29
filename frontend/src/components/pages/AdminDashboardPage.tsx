"use client";

import { useEffect, useState } from "react";
import { Header } from "../constant";
import { Order } from "../ui/Order";

type OrderType = {
  orderNumber: number;
  totalPrice: string;
  process: string;
  createdDate: string;
  district: string;
  khoroo: string;
  apartment: string;
  phoneNumber: string;
  information: string;
};

export const AdminDashboard = () => {
  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const [dataOrder, setDataOrder] = useState<OrderType[]>([]);

  const fetchDataOrder = async () => {
    try {
      const response = await fetch(`${BACKEND_ENDPOINT}/orders`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const order = await response.json();
      setDataOrder(order.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataOrder();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#F7F7F8]">
      <Header home="" menu="" location="" />
      <div className="max-w-[1024px] w-full bg-white border border-[#ECEDF0] rounded-xl mt-[83px]">
        <div className="px-6 py-5 flex gap-4 items-center">
          <p className="text-[#121316] font-inter text-xl font-bold leading-9 tracking-[-0.5px]">
            Admin Dashboard
          </p>
        </div>
        <div className="w-full h-[1px] bg-[#ECEDF0]"></div>
        <div className="flex items-center border-b border-[#D6D8DB] bg-[#F7F7F8]">
          <div className="max-w-[230px] w-full py-3 px-6">
            <p className="text-[#3F4145] font-inter text-xs font-semibold tracking-[-0.12px] leading-5">
              Order name
            </p>
          </div>
          <div className="max-w-[140px] w-full py-3 px-6">
            <p className="text-[#3F4145] font-inter text-xs font-semibold tracking-[-0.12px] leading-5">
              Buyer info
            </p>
          </div>
          <div className="max-w-[230px] w-full py-3 px-6">
            <p className="text-[#3F4145] font-inter text-xs font-semibold tracking-[-0.12px] leading-5">
              Payment
            </p>
          </div>
          <div className="max-w-[230px] w-full py-3 px-6">
            <p className="text-[#3F4145] font-inter text-xs font-semibold tracking-[-0.12px] leading-5">
              Address
            </p>
          </div>
          <div className="max-w-[127px] w-full py-3 px-6">
            <p className="text-[#3F4145] font-inter text-xs font-semibold tracking-[-0.12px] leading-5">
              Delivery state
            </p>
          </div>
          <div></div>
        </div>
        {dataOrder?.map((value, id) => {
          return <Order value={value} key={id} />;
        })}
      </div>
    </div>
  );
};
