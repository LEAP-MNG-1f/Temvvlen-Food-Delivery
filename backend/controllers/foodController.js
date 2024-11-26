import { Food } from "../model/food.js";

const createFood = async (request, response) => {
  const result = await Food.create(
    {
      name: "Main Pizza",
      image:
        "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTok2YnRoKy5C-EmxJjP0UJkF9IKTTWuYbe102ty3DZ0NWYL6S2r1YoLudOdUhkRYde6p7c3N~mXWJTRopUoBAmeNodVByWiQSEl7JmCdH~lt6Lyji9Qx9kAkspPqTFFeBzWSK6tX~EhQTCgRI3fycQ72-wrSJTCmiHbBsMh41N8SI-ix9XSvau9mJdVFpmJZMEWEiubvFF4h-AXlM62PV6wDYZsFDpxo~~FfXAgD~T8~taFLP5HggAfgqx0b3IqOIt7Ta8DPdg2iSQqTiKrWO5HMPf6WIyzvlSBNxnHSnZlf-oTZayJM5u7FmcJnRZ-VFyNji~og-4nT9f-qXQoRA__",
      ingeredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
      price: 34800,
    },
    {
      name: "Main Pizza",
      image:
        "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTok2YnRoKy5C-EmxJjP0UJkF9IKTTWuYbe102ty3DZ0NWYL6S2r1YoLudOdUhkRYde6p7c3N~mXWJTRopUoBAmeNodVByWiQSEl7JmCdH~lt6Lyji9Qx9kAkspPqTFFeBzWSK6tX~EhQTCgRI3fycQ72-wrSJTCmiHbBsMh41N8SI-ix9XSvau9mJdVFpmJZMEWEiubvFF4h-AXlM62PV6wDYZsFDpxo~~FfXAgD~T8~taFLP5HggAfgqx0b3IqOIt7Ta8DPdg2iSQqTiKrWO5HMPf6WIyzvlSBNxnHSnZlf-oTZayJM5u7FmcJnRZ-VFyNji~og-4nT9f-qXQoRA__",
      ingeredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
      price: 34800,
    }
  );

  response.json({
    success: true,
    data: result,
  });
};

const getAllFoods = async (request, response) => {
  const result = await Food.find();

  response.json({
    success: true,
    data: result,
  });
};

export { createFood, getAllFoods };
