import { FC } from "react";
import { Close, Minus, WhitePlus } from "../svg";

type CartItem = {
  id: number;
  name: string;
  price: number;
  ingredient: string;
  image: string;
};

type DrawerCardProps = {
  item: CartItem;
};

export const DrawerCard: FC<DrawerCardProps> = ({ item }) => {
  return (
    <div className="py-6 w-full border-b border-[#D6D8DB] max-w-[538px]">
      <div className="p-4 flex items-center gap-4 bg-white">
        <img src={item.image} className="w-[245px] h-[150px] object-cover" />
        <div className="flex flex-col gap-2 max-w-[245px] w-full">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[2px]">
              <p className="text-black font-poppins text-lg font-semibold leading-[27px]">
                {item.name}
              </p>
              <p className="text-[#18BA51] font-poppins text-lg font-semibold leading-[27px]">
                {item.price}
                <span>₮</span>
              </p>
            </div>
            <div className="w-12 h-12 p-[5px] flex items-center justify-center cursor-pointer">
              <Close />
            </div>
          </div>
          <p className="text-[#767676] font-sans text-base font-normal leading-[19px]">
            {item.ingredient}
          </p>
          <div className="flex items-center gap-2">
            <button className="w-[45px] h-10 flex items-center justify-center rounded-[10px] bg-[#18BA51]">
              <Minus />
            </button>
            <p className="w-[45px] h-10 flex items-center justify-center bg-white text-[#171717] font-poppins text-base font-medium">
              1
            </p>
            <button className="w-[45px] h-10 flex items-center justify-center rounded-[10px] bg-[#18BA51]">
              <WhitePlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
