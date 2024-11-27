import { Food } from "../model/food.js";

const createFood = async (request, response) => {
  const result = await Food.create(
    {
      name: "Main Pizza",
      image:
        "https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTok2YnRoKy5C-EmxJjP0UJkF9IKTTWuYbe102ty3DZ0NWYL6S2r1YoLudOdUhkRYde6p7c3N~mXWJTRopUoBAmeNodVByWiQSEl7JmCdH~lt6Lyji9Qx9kAkspPqTFFeBzWSK6tX~EhQTCgRI3fycQ72-wrSJTCmiHbBsMh41N8SI-ix9XSvau9mJdVFpmJZMEWEiubvFF4h-AXlM62PV6wDYZsFDpxo~~FfXAgD~T8~taFLP5HggAfgqx0b3IqOIt7Ta8DPdg2iSQqTiKrWO5HMPf6WIyzvlSBNxnHSnZlf-oTZayJM5u7FmcJnRZ-VFyNji~og-4nT9f-qXQoRA__",
      ingeredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
      price: "34,800",
    },
    {
      name: "Food tart",
      image:
        "https://www.figma.com/file/VqYifDAzddKNk05lRmWEPe/image/abab8928c4c79b15138c71b44dc8c2202844dd61",
      ingeredient: "Өндөг, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
      price: "22,800",
    },
    {
      name: "Өглөөний хоол",
      image:
        "https://www.figma.com/file/VqYifDAzddKNk05lRmWEPe/image/2f3770519e7e809c3cf6728577b57b6d7525ade6",
      ingeredient: "Банана, лууван , сонгино, цөцгийн тос, самрын үр",
      price: "14,800",
    },
    {
      name: "Зутан шөл",
      image:
        "https://s3-alpha-sig.figma.com/img/212a/1c96/f7a2a9e4728cdfcd39a141afa4d32e5c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TR35wb33WSl51gp8KjxteCOqc1l~MNu-ehsx1bcV803WW28vTJq5IEzF9V1pq2Vx-LN77rArptAiXhYgPn3sNp6SeRMD0oJAjp6sWmsQ4OsJTmKrgFEjKJHD5afKTAB25HWWynYeax0UiAyP11d-cTHN4dPTNedCbQhuBkuTAxUxfOQLiR~jfnOL9EWgEfLwasd3b0SkdpVAzIW~pNhghB8ovqj6HhL5p0ObHg4lYoAaV8RSo4Ikpg85oet1MZFQOiEySNoJNwKe8yPjNvcQxnXII8~Ck5h49XdBXLrp6XVjVSGMG3ICnVXPouvaVx-CY3jpsRGR2ghNhth12otaQA__",
      ingeredient: "Өндөг, төмс, лууван , сонгино, цөцгийн тос, самрын үр",
      price: "17,800",
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
