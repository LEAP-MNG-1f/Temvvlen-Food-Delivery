type CardPropsType = {
  img: string;
  title: string;
  price: number;
  saletag?: number;
  discount?: number;
};

export const Card = (props: CardPropsType) => {
  return (
    <div className="flex flex-col gap-[14px] max-w-[282px] w-full relative">
      <img
        src={props.img}
        className="w-[282px] h-[186px] shadow-[0px_3px_6px_-2px_rgba(0,0,0,0.10),0px_6px_10px_0px_rgba(0,0,0,0.07)] rounded-2xl object-cover object-center"
      />
      {/* <div className="absolute px-4 py-1 rounded-2xl border border-white bg-[#18BA51] backdrop-blur-[50px] top-4 right-4">
        <p className="text-white font-poppins text-lg font-semibold leading-[27px]">
          {props.saletag}%
        </p>
      </div> */}
      <div className="flex flex-col gap-[2px]">
        <p className="text-[#000000] font-poppins text-lg font-semibold leading-[27px]">
          {props.title}
        </p>
        <div className="flex items-center gap-4">
          <p className="text-[#18BA51] font-poppins text-lg font-semibold leading-[27px]">
            {props.price}₮
          </p>
          {/* <p className="text-[#272727] font-poppins text-lg font-normal leading-[27px] line-through">
            {props.discount}₮
          </p> */}
        </div>
      </div>
    </div>
  );
};
