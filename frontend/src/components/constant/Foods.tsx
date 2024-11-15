import { GreenArrow, GreenStar } from "../svg";
import { Card } from "../ui/Card";

export const Foods = () => {
  return (
    <div className="w-full bg-white flex justify-center">
      <div className="max-w-[1200px] w-full flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <div className="py-4 flex justify-between">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 flex items-center justify-center">
                <GreenStar />
              </div>
              <p className="text-[#272727] font-poppins text-[22px] font-bold leading-[30px]">
                Хямдралтай
              </p>
            </div>
            <div className="flex items-center gap-[5px]">
              <p className="w-[109px] h-[30px] flex justify-center items-center text-[#18BA51] font-sans text-sm font-normal">
                Бүгдийг харах
              </p>
              <div className="w-[15px] h-[30px] flex justify-center items-center">
                <GreenArrow />
              </div>
            </div>
          </div>
          <div>
            <Card
              img="https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xvt0I8eowofkE2jp9l38CqSn4yRHnQ8fPrlNzhCssjGBHft-CaWfaG7GtbwM~~ESNJjRh9nsuA9~38b5k0dxsBQQZnXkgKyByha~u2aNC0ju9oaFQb-z3KIXPdAdsnA-g1AbVoZeu1sqMqdxa6ln4GZJDsLT41w~KHC56xApoyZN5bz6BIsiM3pCJ5xNuGE5gqnFfDjerrtOxu1p5sIQrgToLSr1epEjITR5P7g~-61M84IRNSmYIVfKpLrDf6iwDjebTGiuPWcMQw-tRtj0TGTMR7xKcwjUpfxK-ftb5mqvs1NssSmXmePA9E2-KBviYuTiLtcJl~9Mw5EAm5tChA__"
              title="Main Pizza"
              price={14000}
            />
          </div>
        </div>
        {/* <div className="flex flex-col gap-6">
          <div className="py-4 flex justify-between">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 flex items-center justify-center">
                <GreenStar />
              </div>
              <p className="text-[#272727] font-poppins text-[22px] font-bold leading-[30px]">
                Үндсэн хоол
              </p>
            </div>
            <div className="flex items-center gap-[5px]">
              <p className="w-[109px] h-[30px] flex justify-center items-center text-[#18BA51] font-sans text-sm font-normal">
                Бүгдийг харах
              </p>
              <div className="w-[15px] h-[30px] flex justify-center items-center">
                <GreenArrow />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="py-4 flex justify-between">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 flex items-center justify-center">
                <GreenStar />
              </div>
              <p className="text-[#272727] font-poppins text-[22px] font-bold leading-[30px]">
                Салад ба зууш
              </p>
            </div>
            <div className="flex items-center gap-[5px]">
              <p className="w-[109px] h-[30px] flex justify-center items-center text-[#18BA51] font-sans text-sm font-normal">
                Бүгдийг харах
              </p>
              <div className="w-[15px] h-[30px] flex justify-center items-center">
                <GreenArrow />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="py-4 flex justify-between">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 flex items-center justify-center">
                <GreenStar />
              </div>
              <p className="text-[#272727] font-poppins text-[22px] font-bold leading-[30px]">
                Амттан
              </p>
            </div>
            <div className="flex items-center gap-[5px]">
              <p className="w-[109px] h-[30px] flex justify-center items-center text-[#18BA51] font-sans text-sm font-normal">
                Бүгдийг харах
              </p>
              <div className="w-[15px] h-[30px] flex justify-center items-center">
                <GreenArrow />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
