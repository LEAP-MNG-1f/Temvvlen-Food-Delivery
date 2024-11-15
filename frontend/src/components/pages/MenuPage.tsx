import { Footer, Header } from "../constant";

export const MenuPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <div className="w-full flex flex-col items-center">
        <Header />
        <div className="max-w-[1200px] w-full py-8 flex justify-between">
          <button className="max-w-[280px] w-full px-4 py-2 border border-[#D6D8DB] bg-[#18BA51] rounded-lg text-white font-inter text-lg font-medium leading-[27px] tracking-[-0.396px]">
            Breakfast
          </button>
          <button className="max-w-[280px] w-full px-4 py-2 border border-[#D6D8DB] bg-white rounded-lg text-[#000000] font-inter text-lg font-medium leading-[27px] tracking-[-0.396px]">
            Soup
          </button>
          <button className="max-w-[280px] w-full px-4 py-2 border border-[#D6D8DB] bg-white rounded-lg text-[#000000] font-inter text-lg font-medium leading-[27px] tracking-[-0.396px]">
            Main Course
          </button>
          <button className="max-w-[280px] w-full px-4 py-2 border border-[#D6D8DB] bg-white rounded-lg text-[#000000] font-inter text-lg font-medium leading-[27px] tracking-[-0.396px]">
            Dessert
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
