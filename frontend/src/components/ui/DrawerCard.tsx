import { Close, Minus, Plus, WhitePlus } from "../svg";

export const DrawerCard = () => {
  return (
    <div className="py-6 w-full border-b border-[#D6D8DB] max-w-[538px]">
      <div className="p-4 flex items-center gap-4 bg-white">
        <img src="http" className="w-[245px] h-[150px]" />
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[2px]">
              <p className="text-black font-poppins text-lg font-semibold leading-[27px]">
                Main pizza
              </p>
              <p className="text-[#18BA51] font-poppins text-lg font-semibold leading-[27px]">
                34000<span>₮</span>
              </p>
            </div>
            <div className="w-12 h-12 p-[5px] flex items-center justify-center cursor-pointer">
              <Close />
            </div>
          </div>
          <p className="text-[#767676] font-sans text-base font-normal leading-[19px]">
            Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
          </p>
          <div className="flex items-center gap-2">
            <button className="w-[45px] h-10 flex items-center justify-center rounded-[10px] bg-[#18BA51]">
              <Minus />
            </button>
            <p className="w-[45px] h-10 flex items-center justify-center bg-white text-[#171717] font-poppins text-base font-medium">
              1
            </p>
            {/* <button className="w-[45px] h-10 flex items-center justify-center rounded-[10px] bg-[#18BA51]">
              <WhitePlus />
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
