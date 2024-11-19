import { Footer, Header } from "../constant";
import { BlueCircle } from "../svg";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { SelectDistrict } from "../ui/SelectDistrict";
import { SelectKhoroo } from "../ui/SelectKhoroo";
import { SelectApartment } from "../ui/SelectApartment";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const OrderPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <div className="w-full flex flex-col items-center gap-12">
        <Header />
        <div className="flex gap-[180px] z-[1] mb-20 mt-[56px]">
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
            <form className="h-[615px] p-6 flex flex-col gap-10 rounded-2xl shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col gap-4">
                <p className="text-black font-sans text-sm font-normal leading-[17px]">
                  Хаяг аа оруулна уу
                </p>
                <SelectDistrict />
                <SelectKhoroo />
                <SelectApartment />
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
                    <div className="flex gap-2 items-center max-w-[175.5px] w-full">
                      <Checkbox
                        {...label}
                        className="w-6 h-6"
                        sx={{
                          color: "black",
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                      />
                      <p className="text-[#8B8E95] font-sans text-base font-normal text-[19px]">
                        Бэлнээр
                      </p>
                    </div>
                    <div className="flex items-center gap-2 max-w-[175.5px] w-full">
                      <Checkbox
                        {...label}
                        className="w-6 h-6"
                        sx={{
                          color: "black",
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                      />
                      <p className="text-[#8B8E95] font-sans text-base font-normal text-[19px]">
                        Картаар
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="w-[432px] flex flex-col gap-6">
            <div className="px-6 py-4 flex items-center gap-4">
              <BlueCircle />
              <div className="flex flex-col gap-1">
                <p className="text-[#8B8E95] font-sans text-sm font-normal leading-[17px]">
                  Алхам 2
                </p>
                <p className="text-black font-sans text-xl font-normal leading-6">
                  Захиалга баталгаажуулах
                </p>
                <p className="text-[#0468C8] font-sans text-base font-normal leading-[19px]">
                  Хүлээгдэж байна
                </p>
              </div>
            </div>
            <div className="p-6 h-[615px] flex flex-col rounded-2xl shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] justify-between">
              <div className="w-full h-[1px] bg-[#D6D8DB]"></div>
              <div className="flex items-center gap-[10px]">
                <div className="w-full flex flex-col">
                  <p className="text-[#5E6166] font-poppins text-lg font-normal leading-[27px]">
                    Нийт төлөх дүн
                  </p>
                  <p className="text-[#121316] font-poppins text-lg font-bold leading-[27px]">
                    34,800₮
                  </p>
                </div>
                <button className="w-full h-12 bg-[#EEEFF2] px-4 py-2 rounded-[4px] text-[rgba(28,32,36,0.24)] font-sans text-base font-normal leading-[19px]">
                  Захиалах
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
