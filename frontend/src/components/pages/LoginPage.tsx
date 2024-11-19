import Link from "next/link";
import { Footer, Header } from "../constant";

export const LoginPage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="w-full flex flex-col items-center">
        <Header />
        <div className="max-w-[448px] w-full p-8 flex flex-col gap-12 rounded-2xl bg-white mt-[167px] mb-[75px] z-[1]">
          <p className="text-[#0D1118] text-center font-sans text-[28px] font-bold leading-[33px]">
            Нэвтрэх
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-black font-sans text-sm font-normal leading-[17px]">
                  Имэйл
                </p>
                <input
                  type="text"
                  className="px-4 py-2 rounded-[4px] border border-[#ECEDF0] bg-[#F7F7F8] w-full h-12 outline-none"
                  placeholder="Имэйл хаягаа оруулна уу"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-black font-sans text-sm font-normal leading-[17px]">
                  Нууц үг
                </p>
                <input
                  type="text"
                  className="px-4 py-2 rounded-[4px] border border-[#ECEDF0] bg-[#F7F7F8] w-full h-12 outline-none"
                  placeholder="Нууц үгээ оруулна уу"
                />
              </div>
            </div>
            {/* <Link
              href="/"
              className="text-[#3F4145] text-sm font-sans font-normal leading-[17px] text-end"
            >
              Нууц үг сэргээх
            </Link> */}
          </div>
          <div className="flex flex-col gap-8">
            <button className="px-4 py-2 h-12 w-full rounded-[4px] bg-[#EEEFF2] text-[rgba(28,32,36,0.24)] font-sans text-base font-normal leading-[19px]">
              Нэвтрэх
            </button>
            <p className="text-[#3F4145] font-sans text-sm font-normal leading-[17px] text-center">
              Эсвэл
            </p>
            <Link href="/sign-up">
              <button className="px-4 py-2 h-12 w-full rounded-[4px] border border-[#18BA51] text-[#272727] font-sans text-base font-normal leading-[19px]">
                Бүртгүүлэх
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
