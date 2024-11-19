import { Background } from "../svg";

export const Hero = () => {
  return (
    <div className="w-full h-[788px] bg-[#18BA51] flex justify-center relative mt-[56px]">
      <div className="absolute">
        <Background />
      </div>
      <div className="max-w-[1200px] w-full flex items-center justify-between">
        <div className="flex flex-col gap-[23px] max-w-[384px] w-full">
          <p className="text-white font-poppins text-[55px] font-semibold leading-[90%] tracking-[0.55px]">
            Pinecone Food delivery
          </p>
          <div className="w-full h-[2px] bg-white opacity-50"></div>
          <p className="text-white font-comfortaa text-[22px] font-bold leading-[120%] tracking-[0.22px]">
            Horem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="w-[588px] h-[438px] relative">
          <img src="image13.png" className="absolute w-[443px] h-[438px]" />
          <img
            src="image14.png"
            className="absolute w-[313px] h-[313px] bottom-[12px] right-0"
          />
        </div>
      </div>
    </div>
  );
};
