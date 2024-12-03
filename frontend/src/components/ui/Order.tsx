"use client";

import { FC } from "react";
// import _ from "lodash";

type UserType = {
  name: string;
};

export type OrderType = {
  _id?: string;
  foodId: [];
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
  return (
    <div className="flex items-center border-t border-[#ECEDF0] bg-white rounded-b-xl">
      <div className="max-w-[230px] w-full py-3 px-6 flex items-center gap-2">
        <img
          src="..."
          // src={_.first(value.foodId)?.image}
          className="w-10 h-10 rounded-[4px] object-cover object-center"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#121316] font-inter text-sm font-semibold leading-4 tracking-[-0.14px]">
            #{value.orderNumber}
          </p>
          <p className="text-[#3F4145] font-inter text-sm font-normal tracking-[-0.28px]">
            {/* {_.first(value.foodId)?.name} */}
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
