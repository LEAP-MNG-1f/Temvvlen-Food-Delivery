import { FC } from "react";
import { CartItem } from "./Drawer";

type OrderCardProps = {
  item: CartItem;
};

export const OrderCard: FC<OrderCardProps> = ({ item }) => {
  return (
    <div className="py-4 w-full border-b border-[#D6D8DB]">
      <div className="flex items-center gap-4 bg-white">
        <img
          src={item.image}
          alt=""
          className="w-[184px] h-[121px] object-cover object-center"
        />
        <div className="flex flex-col gap-2 max-w-[184px]">
          <div className="flex flex-col gap-[2px]">
            <p className="text-black font-poppins text-base font-semibold leading-[27px]">
              {item.name}
            </p>
            <p className="text-[#18BA51] font-poppins text-base font-semibold leading-[27px]">
              {item.price}
              <span>₮</span>
            </p>
          </div>
          <p className="text-[#767676] font-sans text-base font-normal leading-[19px]">
            {item.ingeredient}
          </p>
        </div>
      </div>
    </div>
  );
};
