import { Header } from "../constant";
import { BlackThreeDot, Plus, ThreeDot } from "../svg";
import { AddCategory } from "../ui/AddCategory";
import { AddFood } from "../ui/AddFood";

export const AdminPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Header home="" menu="" location="" />
      <div className="max-w-[1264px] w-full flex">
        <div className="max-w-[314px] w-full py-[26px] pr-6 pl-8 flex flex-col gap-10 mt-[56px]">
          <p className="text-[#272727] font-poppins text-[22px] font-bold leading-[33px]">
            Food menu
          </p>
          <div className="flex flex-col gap-[26px]">
            <button className="h-10 px-4 py-2 flex justify-between items-center rounded-lg border border-[#D6D8DB] bg-[#18BA51]">
              <p className="text-white font-inter text-lg font-medium leading-6 tracking-[-0.4px]">
                Breakfast
              </p>
              <ThreeDot />
            </button>
            <button className="h-10 px-4 py-2 flex justify-between items-center rounded-lg border border-[#D6D8DB] bg-white">
              <p className="text-[#000000] font-inter text-lg font-medium leading-6 tracking-[-0.4px]">
                Soup
              </p>
              <BlackThreeDot />
            </button>
            <button className="h-10 px-4 py-2 flex justify-between items-center rounded-lg border border-[#D6D8DB] bg-white">
              <p className="text-[#000000] font-inter text-lg font-medium leading-6 tracking-[-0.4px]">
                Main course
              </p>
              <BlackThreeDot />
            </button>
            <button className="h-10 px-4 py-2 flex justify-between items-center rounded-lg border border-[#D6D8DB] bg-white">
              <p className="text-[#000000] font-inter text-lg font-medium leading-6 tracking-[-0.4px]">
                Desserts
              </p>
              <BlackThreeDot />
            </button>
            <AddCategory />
          </div>
        </div>
        <div className="py-6 pl-8 pr-8 min-h-screen bg-[#F7F7F8] w-full flex flex-col gap-8">
          <div className="mt-[56px]">
            <div className="py-4 flex items-center justify-between">
              <p className="text-[#272727] font-poppins text-[22px] font-bold leading-[33px]">
                Breakfast
              </p>
              <AddFood />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
