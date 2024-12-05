import { FC } from "react";
import { OrderPropsType } from "./Order";
import { BlueCircle } from "../svg";

export const OrderHistoryCard: FC<OrderPropsType> = ({ value }) => {
  return (
    <div className="p-4 flex items-center gap-2 border-b border-[#0468C8]">
      <BlueCircle />
      <div className="flex flex-col items-start max-w-[130px] w-full">
        <p className="font-sans text-base font-normal leading0[19px] text-[#272727]">
          Захиалга #{value.orderNumber}
        </p>
        <p className="font-sans text-base font-normal leading-[19px] text-[#0468C8]">
          Хүлээгдэж буй
        </p>
      </div>
      <p className="font-sans text-base font-normal leading0[19px] text-[#272727]">
        {value.createdDate}
      </p>
    </div>
  );
};
