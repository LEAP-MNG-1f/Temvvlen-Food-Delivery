import { FC } from "react";
import { Close, Minus, WhitePlus } from "../svg";

type CartItem = {
  _id: number;
  name: string;
  price: number;
  ingeredient: string;
  image: string;
  quantity: number;
};

type DrawerCardProps = {
  item: CartItem;
  removeFromCart: (item: CartItem) => void;
  incrementQuantity: (itemId: number) => void;
  decrementQuantity: (itemId: number) => void;
};

export const DrawerCard: FC<DrawerCardProps> = ({
  item,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
}) => {
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
            <button
              onClick={() => removeFromCart(item)}
              className="w-12 h-12 p-[5px] flex items-center justify-center cursor-pointer"
            >
              <Close />
            </button>
          </div>
          <p className="text-[#767676] font-sans text-base font-normal leading-[19px]">
            {item.ingeredient}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => decrementQuantity(item._id)}
              className="w-[45px] h-10 flex items-center justify-center rounded-[10px] bg-[#18BA51]"
            >
              <Minus />
            </button>
            <p className="w-[45px] h-10 flex items-center justify-center bg-white text-[#171717] font-poppins text-base font-medium">
              {item.quantity}
            </p>
            <button
              onClick={() => incrementQuantity(item._id)}
              className="w-[45px] h-10 flex items-center justify-center rounded-[10px] bg-[#18BA51]"
            >
              <WhitePlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

//
