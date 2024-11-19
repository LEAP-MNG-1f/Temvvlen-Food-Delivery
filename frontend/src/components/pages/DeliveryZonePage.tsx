import { Footer, Header } from "../constant";
import { GreenStar } from "../svg";

export const DeliveryZonePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="w-full flex flex-col items-center">
        <Header />
        <div className="max-w-[1200px] w-full flex flex-col gap-10 z-[1] mt-[117px] mb-[45px]">
          <img
            src="fcc4a2bce9bd256b5eb53b5b527de457.png"
            alt="google map"
            className="w-full h-[616px] object-cover object-center shadow-[0px_0px_20px_0px_rgba(242,153,74,0.10)]"
          />
          <div className="flex flex-col gap-[22px]">
            <div className="py-4 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center">
                <GreenStar />
              </div>
              <p className="text-[#272727] font-poppins text-[22px] font-bold leading-[33px]">
                Хүргэлтийн бүс дэх хаягууд
              </p>
            </div>
            <div className="flex gap-6 w-full bg-white min-h-[388px]">
              <div className="p-6 flex flex-col gap-4 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] rounded-2xl w-full">
                <p className="py-4 text-black font-sans text-xl font-semibold leading-6 border-b border-[#18BA51]">
                  А бүс
                </p>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-4 w-full">
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      Нархан хотхон
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      26-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      32-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      45-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      3-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      Хоймор хотхон
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      Хиймор хотхон
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      Нархан хотхон
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      26-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      32-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      45-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      3-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      Хоймор хотхон
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      Хиймор хотхон
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4 shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] rounded-2xl bg-white w-full">
                <p className="py-4 text-black font-sans text-xl font-semibold leading-6 border-b border-[#18BA51]">
                  Б бүс
                </p>
                <div className="flex gap-4">
                  <div className="flex flex-col gap-4 w-full">
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      Нархан хотхон
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      26-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      32-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      45-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      3-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      Хоймор хотхон
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      Хиймор хотхон
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      Нархан хотхон
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      26-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      32-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      45-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      3-р байр
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      Хоймор хотхон
                    </p>
                    <p className="text-black font-sans text-base font-normal leading-[19px]">
                      Хиймор хотхон
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
