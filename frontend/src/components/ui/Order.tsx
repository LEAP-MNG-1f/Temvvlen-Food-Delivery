"use client";

import { FC } from "react";

type UserType = {
  name: string;
};

type FoodType = {
  _id: string;
  image: string;
  name: string;
};
export type OrderType = {
  _id?: string;
  foodId: FoodType;
  userId: UserType;
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

type OrderPropsType = {
  value: OrderType;
};

export const Order: FC<OrderPropsType> = ({ value }) => {
  console.log(value.foodId);
  return (
    <div className="flex items-center border-t border-[#ECEDF0] bg-white rounded-b-xl">
      <div className="max-w-[230px] w-full py-3 px-6 flex items-center gap-2">
        <img
          src="https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTok2YnRoKy5C-EmxJjP0UJkF9IKTTWuYbe102ty3DZ0NWYL6S2r1YoLudOdUhkRYde6p7c3N~mXWJTRopUoBAmeNodVByWiQSEl7JmCdH~lt6Lyji9Qx9kAkspPqTFFeBzWSK6tX~EhQTCgRI3fycQ72-wrSJTCmiHbBsMh41N8SI-ix9XSvau9mJdVFpmJZMEWEiubvFF4h-AXlM62PV6wDYZsFDpxo~~FfXAgD~T8~taFLP5HggAfgqx0b3IqOIt7Ta8DPdg2iSQqTiKrWO5HMPf6WIyzvlSBNxnHSnZlf-oTZayJM5u7FmcJnRZ-VFyNji~og-4nT9f-qXQoRA__"
          className="w-10 h-10 rounded-[4px] object-cover object-center"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#121316] font-inter text-sm font-semibold leading-4 tracking-[-0.14px]">
            #{value.orderNumber}
          </p>
          <p className="text-[#3F4145] font-inter text-sm font-normal tracking-[-0.28px]">
            Breakfast
          </p>
        </div>
      </div>
      <div className="max-w-[140px] w-full py-3 px-6">
        <div className="flex flex-col justify-center">
          <p className="text-[#121316] font-inter text-sm font-semibold leading-4 tracking-[-0.14px]">
            {value.phoneNumber}
          </p>
          <p className="text-[#3F4145] font-inter text-sm font-normal tracking-[-0.28px]">
            {value.userId?.name}
          </p>
        </div>
      </div>
      <div className="max-w-[230px] w-full py-3 px-6">
        <div className="flex items-center">
          <div className="flex flex-col justify-center">
            <p className="text-[#121316] font-inter text-sm font-bold leading-4 tracking-[-0.14px]">
              {value.totalPrice}₮
            </p>
            <p className="text-[#3F4145] font-inter text-sm font-normal tracking-[-0.28px]">
              {value.createdDate}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[230px] w-full py-3 px-6">
        <p className="text-[#121316] font-inter text-sm font-normal tracking-[-0.28px]">
          {value.district}, {value.khoroo}, {value.apartment},{" "}
          {value.information}
        </p>
      </div>
      <div className="max-w-[127px] w-full py-3 px-6 flex">
        <div className="px-2 py-[2px] bg-[#C1E6CF] rounded-full">
          <p className="text-[#0A4E22] font-inter text-sm font-normal tracking-[-0.28px] leading-6">
            {value.process}
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};
