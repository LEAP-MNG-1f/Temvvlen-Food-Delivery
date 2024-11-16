import { Footer, Header } from "../constant";
import { BlueCircle } from "../svg";
// import SelectHoroo from "../ui/SelectHoroo";

export const OrderPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <div className="w-full flex flex-col items-center gap-12">
        <Header />
        <div className="flex gap-[180px]">
          <div className="w-[432px] flex flex-col gap-6">
            <div className="px-6 py-4 flex items-center gap-4">
              <BlueCircle />
              <div className="flex flex-col gap-1">
                <p className="text-[#8B8E95] font-sans text-sm font-normal leading-[17px]">
                  Алхам 1
                </p>
                <p className="text-black font-sans text-xl font-normal leading-6">
                  Хаягийн мэдээлэл оруулах
                </p>
                <p className="text-[#0468C8] font-sans text-base font-normal leading-[19px]">
                  Хүлээгдэж байна
                </p>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-10 rounded-2xl shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col gap-4">
                <p className="text-black font-sans text-sm font-normal leading-[17px]">
                  Хаяг аа оруулна уу
                </p>
                {/* <SelectHoroo /> */}
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <p className="text-black font-sans text-sm font-normal leaidng-[17px]">
                    Нэмэлт мэдээлэл
                  </p>
                  <textarea
                    className="h-[112px] px-4 py-2 rounded-[4px] border border-[#ECEDF0] bg-[#F7F7F8] resize-none outline-none text-black font-sans text-base font-normal leading-[19px]"
                    placeholder="Орц, давхар, орцны код ..."
                  ></textarea>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-black font-sans text-sm font-normal leading-[17px]">
                    Утасны дугаар*
                  </p>
                  <input
                    type="text"
                    placeholder="Утасны дугаараа оруулна уу"
                    className="h-12 px-4 py-2 rounded-[4px] border border-[#ECEDF0] bg-[#F7F7F8] text-black font-sans text-base font-normal leading-[19px] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-black font-sans text-sm font-normal leading-[17px]">
                    Төлбөр төлөх
                  </p>
                  <div className="flex items-center justify-between">
                    <input type="checkbox" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
