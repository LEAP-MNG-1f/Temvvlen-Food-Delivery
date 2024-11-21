import Link from "next/link";
import { PineCone, Profile, Shop } from "../svg";
import ShopDrawer from "../ui/Drawer";
import { LoginModal } from "../ui/LoginModal";

type HeaderProps = {
  home: string;
  menu: string;
  location: string;
};

export const Header = (props: HeaderProps) => {
  return (
    <div className="w-full bg-white flex justify-center z-50 fixed">
      <div className="max-w-[1258px] w-full px-6 py-2 flex justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="w-10 h-10 flex justify-center items-center">
            <PineCone />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className={`px-4 py-2 flex items-center text-sm font-bold leading-4 tracking-[-0.2px] font-sans
                ${props.home ? "text-[#18BA51]" : "text-[#000]"}
                `}
            >
              НҮҮР
            </Link>
            <Link
              href="/menu"
              className={`px-4 py-2 flex items-center text-sm font-bold leading-4 tracking-[-0.2px] font-sans
                ${props.menu ? "text-[#18BA51]" : "text-[#000]"}`}
            >
              ХООЛНЫ ЦЭС
            </Link>
            <Link
              href="/delivery-zone"
              className={`px-4 py-2 flex items-center text-sm font-bold leading-4 tracking-[-0.2px] font-sans
                ${props.location ? "text-[#18BA51]" : "text-[#000]"}`}
            >
              ХҮРГЭЛТИЙН БҮС
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ShopDrawer />

          <Link href="/login" className="flex items-center gap-2 px-4 py-2">
            <Profile />
            <p className="text-sm font-bold tracking-[-0.3px] font-sans text-[#000]">
              Нэвтрэх
            </p>
          </Link>
          {/* <LoginModal /> */}
        </div>
      </div>
    </div>
  );
};
