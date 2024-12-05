"use client";

import { useEffect, useState } from "react";
import { Footer, Header } from "../constant";
import { OrderType } from "../ui/Order";
import { OrderHistoryCard } from "../ui/OrderHistoryCard";

export const OrderHistoryPage = () => {
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
    <div className="min-h-screen w-full flex flex-col justify-between">
      <div className="w-full flex flex-col items-center gap-12">
        <Header home="" menu="" location="" />
        <div className="flex gap-[180px] z-[1] mt-[120px] mb-20">
          <div className="w-[432px] min-h-[720px] rounded-2xl flex flex-col gap-4 p-6 bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]">
            <p className="text-black font-sans text-xl font-normal leading-6">
              Захиалгын түүх
            </p>
            {dataOrder?.map((value) => {
              return <OrderHistoryCard value={value} key={value._id} />;
            })}
          </div>
          <div className="w-[432px] min-h-[720px] rounded-2xl flex flex-col gap-4 p-6 bg-white shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]">
            <p className="text-black font-sans text-xl font-normal leading-6">
              Захиалгын дэлгэрэнгүй
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
