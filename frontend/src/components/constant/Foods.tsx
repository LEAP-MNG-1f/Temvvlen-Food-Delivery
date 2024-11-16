import { GreenArrow, GreenStar } from "../svg";
// import FoodCard from "../ui/Card";

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
          <div className="flex justify-between items-center">
            {/* <FoodCard
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            /> */}
            {/* <Card
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            />
            <Card
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            />
            <Card
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            /> */}
          </div>
        </div>
        <div className="flex flex-col gap-6">
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
          <div className="flex justify-between items-center">
            {/* <Card
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            />
            <Card
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            />
            <Card
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            />
            <Card
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            /> */}
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
          <div className="flex justify-between items-center">
            {/* <Card
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            />
            <Card
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            />
            <Card
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            />
            <Card
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            /> */}
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
          <div className="flex justify-between items-center">
            {/* <Card
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            />
            <Card
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            />
            <Card
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            />
            <Card
              img="https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ARxhydSnIjBZxQCYVQENT-fLqRHLKSNr9-1yck-TY0vaqUgaNiQuZvSywJQ-NM14mblLuAM4UrXs0f-89IK8L7NwJn-Li4LfraX9j7nqo8-QxENdleU2OSC29GgsRGiVcxSKeD-YEp7e2m7S5annONIaO4nMJJM19nGNYCcForNESnoMN150-RiczShqBhOZdS~4MqFNmM6HGBoNU8ncl20IbELbYbuOJG5wqtpgOXABEylYelfdE8SJJhZYCB63jsJl04GNREovA4QlpiKAIyJ6sJD6ksIK7FNWITTZ4EBM906qEZc-Yuk1N3na6SwYRWQkt~R9i6H3S4W309o0EA__"
              title="Main Pizza"
              price={14800}
              discount={16800}
              saletag={20}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
