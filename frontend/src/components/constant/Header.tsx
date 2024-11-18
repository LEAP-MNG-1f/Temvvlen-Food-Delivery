import Link from "next/link";
import { PineCone, Profile, Shop } from "../svg";
import ShopDrawer from "../ui/Drawer";
import { LoginModal } from "../ui/LoginModal";

export const Header = () => {
  return (
    <div className="w-full bg-white flex justify-center z-[1]">
      <div className="max-w-[1258px] w-full px-6 py-2 flex justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="w-10 h-10 flex justify-center items-center">
            <PineCone />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="px-4 py-2 flex items-center text-[#18BA51] text-sm font-bold leading-4 tracking-[-0.2px] font-sans"
            >
              НҮҮР
            </Link>
            <Link
              href="/menu"
              className="px-4 py-2 flex items-center text-[#000] text-sm font-bold leading-4 tracking-[-0.2px] font-sans"
            >
              ХООЛНЫ ЦЭС
            </Link>
            <Link
              href="/"
              className="px-4 py-2 flex items-center text-[#000] text-sm font-bold leading-4 tracking-[-0.2px] font-sans"
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
