import Link from "next/link";
import {
  Instagram,
  PineconeWhite,
  Twitter,
  Facebook,
  Background,
} from "../svg";

export const Footer = () => {
  return (
    <div className="w-full h-[545px] bg-[#18BA51] pt-[114px] pb-[109px] flex justify-center relative mt-[82px]">
      {/* <div className="absolute bottom-0">
        <Background />
      </div> */}
      <div className="max-w-[1200px] w-full flex flex-col gap-10 z-[1]">
        <div className="flex items-center justify-center gap-2">
          <div className="w-[41px] h-[41px] flex items-center justify-center">
            <PineconeWhite />
          </div>
          <p className="text-white font-poppins text-xl font-bold leading-normal">
            Food Delivery
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-white font-sans text-base font-semibold leading-[19px] underline decoration-solid underline-offset-[3px]"
          >
            Нүүр
          </Link>
          <Link
            href="/"
            className="text-white font-sans text-base font-semibold leading-[19px] underline decoration-solid underline-offset-[3px]"
          >
            Холбоо барих
          </Link>
          <Link
            href="/"
            className="text-white font-sans text-base font-semibold leading-[19px] underline decoration-solid underline-offset-[3px]"
          >
            Хоолны цэс
          </Link>
          <Link
            href="/"
            className="text-white font-sans text-base font-semibold leading-[19px] underline decoration-solid underline-offset-[3px]"
          >
            Үйлчилгээний нөхцөл
          </Link>
          <Link
            href="/"
            className="text-white font-sans text-base font-semibold leading-[19px] underline decoration-solid underline-offset-[3px]"
          >
            Хүргэлтийн бүс
          </Link>
          <Link
            href="/"
            className="text-white font-sans text-base font-semibold leading-[19px] underline decoration-solid underline-offset-[3px]"
          >
            Нууцлалын бодлого
          </Link>
        </div>
        <div className="p-[5px] flex items-center justify-center gap-[18px]">
          <div className="h-[46px] flex justify-center items-center">
            <Facebook />
          </div>
          <div className="h-[46px] flex justify-center items-center">
            <Instagram />
          </div>
          <div className="h-[46px] flex justify-center items-center">
            <Twitter />
          </div>
        </div>
        <div className="w-full h-[1px] bg-white"></div>
        <div className="flex justify-center items-center flex-col gap-2">
          <p className="text-white font-sans text-base font-normal leading-[19px]">
            © 2024 Pinecone Foods LLC
          </p>
          <p className="text-white font-sans text-base font-normal leading-[19px]">
            Зохиогчийн эрх хуулиар хамгаалагдсан.
          </p>
        </div>
      </div>
    </div>
  );
};
