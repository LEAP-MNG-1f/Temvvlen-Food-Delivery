import { Header } from "../constant";
import { BlackThreeDot, Plus, ThreeDot } from "../svg";

export const AdminPage = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <Header />
      <div className="max-w-[1200px] w-full flex ">
        <div className="max-w-[282px] w-full py-[26px] pr-6 flex flex-col gap-10">
          <p className="text-[#272727] font-poppins text-[22px] font-bold leading-[33px]">
            Food menu
          </p>
          <div className="flex flex-col gap-[26px]">
            <div className="h-10 px-4 py-2 flex justify-between items-center rounded-lg border border-[#D6D8DB] bg-[#18BA51]">
              <p className="text-white font-inter text-lg font-medium leading-6 tracking-[-0.4px]">
                Breakfast
              </p>
              <ThreeDot />
            </div>
            <div className="h-10 px-4 py-2 flex justify-between items-center rounded-lg border border-[#D6D8DB] bg-white">
              <p className="text-[#000000] font-inter text-lg font-medium leading-6 tracking-[-0.4px]">
                Soup
              </p>
              <BlackThreeDot />
            </div>
            <div className="h-10 px-4 py-2 flex justify-between items-center rounded-lg border border-[#D6D8DB] bg-white">
              <p className="text-[#000000] font-inter text-lg font-medium leading-6 tracking-[-0.4px]">
                Main course
              </p>
              <BlackThreeDot />
            </div>
            <div className="h-10 px-4 py-2 flex justify-between items-center rounded-lg border border-[#D6D8DB] bg-white">
              <p className="text-[#000000] font-inter text-lg font-medium leading-6 tracking-[-0.4px]">
                Desserts
              </p>
              <BlackThreeDot />
            </div>
            <button className="h-10 px-4 py-2 flex gap-2 items-center rounded-lg border border-[#D6D8DB] bg-white">
              <Plus />
              <p className="text-[#5E6166] font-inter text-lg font-medium leading-6 tracking-[-0.4px]">
                Create new category
              </p>
            </button>
          </div>
        </div>
        <div className="py-6 pl-8 min-h-screen bg-[#F7F7F8] w-full flex flex-col gap-8">
          <div className="py-4 flex items-center justify-between">
            <p className="text-[#272727] font-poppins text-[22px] font-bold leading-[33px]">
              Breakfast
            </p>
            <button className="px-4 py-2 rounded-[4px] bg-[#18BA51] text-white font-sans text-base font-normal leading-[19px]">
              Add new food
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
