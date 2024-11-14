import { Book, Clock, Food } from "../svg";

export const Category = () => {
  return (
    <div className="w-full flex justify-center bg-white">
      <div className="max-w-[1200px] w-full flex justify-between">
        <div className="p-4 flex flex-col gap-[15px] border border-[#D6D8DB] rounded-2xl shadow-[4px_4px_12px_0px_rgba(0,0,0,0.10)]">
          <div className="p-[15px]">
            <div className="w-[30px] h-[30px] flex justify-center items-center">
              <Book />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#272727] font-poppins text-lg font-bold leading-normal">
              Хүргэлтийн төлөв хянах
            </p>
            <p className="text-[#272727] font-sans text-sm font-normal leading-[17px] opacity-75">
              Захиалга бэлтгэлийн явцыг хянах
            </p>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-[15px] border border-[#D6D8DB] rounded-2xl shadow-[4px_4px_12px_0px_rgba(0,0,0,0.10)]">
          <div className="p-[15px]">
            <div className="w-[30px] h-[30px] flex justify-center items-center">
              <Clock />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#272727] font-poppins text-lg font-bold leading-normal">
              Шуурхай хүргэлт
            </p>
            <p className="text-[#272727] font-sans text-sm font-normal leading-[17px] opacity-75">
              Захиалга бэлтгэлийн явцыг хянах
            </p>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-[15px] border border-[#D6D8DB] rounded-2xl shadow-[4px_4px_12px_0px_rgba(0,0,0,0.10)]">
          <div className="p-[15px]">
            <div className="w-[30px] h-[30px] flex justify-center items-center">
              <Food />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#272727] font-poppins text-lg font-bold leading-normal">
              Эрүүл, баталгаат орц
            </p>
            <p className="text-[#272727] font-sans text-sm font-normal leading-[17px] opacity-75">
              Захиалга бэлтгэлийн явцыг хянах
            </p>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-[15px] border border-[#D6D8DB] rounded-2xl shadow-[4px_4px_12px_0px_rgba(0,0,0,0.10)]">
          <div className="p-[15px]">
            <div className="w-[30px] h-[30px] flex justify-center items-center">
              <Book />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-[#272727] font-poppins text-lg font-bold leading-normal">
              Хоолны өргөн сонголт
            </p>
            <p className="text-[#272727] font-sans text-sm font-normal leading-[17px] opacity-75">
              Захиалга бэлтгэлийн явцыг хянах
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
