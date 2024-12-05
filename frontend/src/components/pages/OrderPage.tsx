"use client";

import { Footer, Header } from "../constant";
import { BlueCircle, GreenCircle } from "../svg";
import Checkbox from "@mui/material/Checkbox";
import { SelectDistrict } from "../ui/SelectDistrict";
import { SelectKhoroo } from "../ui/SelectKhoroo";
import { SelectApartment } from "../ui/SelectApartment";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { CartItem } from "../ui/Drawer";
import { OrderCard } from "../ui/OrderCard";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

type FoodValues = {
  userId: string;
  orderNumber: number;
  totalPrice: string;
  district: string;
  khoroo: string;
  apartment: string;
  information: string;
  phoneNumber: string;
  paymentType: string;
};

export const OrderPage = () => {
  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const [dataCart, setDataCart] = useState<CartItem[]>([]);
  const [isFilled, setIsFilled] = useState(false);
  const router = useRouter();

  const validationSchema = Yup.object({
    information: Yup.string().required("Нэмэлт мэдээлэл шаардлагатай."),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{8}$/, "Утасны дугаар 8 оронтой байх ёстой.")
      .required("Утасны дугаар шаардлагатай."),
  });

  const formik = useFormik<FoodValues>({
    initialValues: {
      userId: "",
      orderNumber: Math.floor(Math.random() * (100000 - 10000)) + 10000,
      totalPrice: "",
      district: "",
      khoroo: "",
      apartment: "",
      information: "",
      phoneNumber: "",
      paymentType: "",
    },

    validationSchema,
    onSubmit: async (values) => {
      const requestData = {
        ...values,
      };
      try {
        const response = await fetch(`${BACKEND_ENDPOINT}/order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });
        const data = await response.json();

        if (response.ok) {
          alert("Захиалга амжилттай хийгдлээ!");
          router.push("/order/history");
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  useEffect(() => {
    const isAllFieldsFilled =
      formik.values.district !== "" &&
      formik.values.khoroo !== "" &&
      formik.values.apartment !== "" &&
      formik.values.information !== "" &&
      formik.values.phoneNumber !== "" &&
      formik.values.paymentType !== "";

    setIsFilled(isAllFieldsFilled);
  }, [
    formik.values.district,
    formik.values.khoroo,
    formik.values.apartment,
    formik.values.information,
    formik.values.phoneNumber,
    formik.values.paymentType,
  ]);

  const handleKhorooChange = (value: { name: string }) => {
    formik.setFieldValue("district", value.name);
  };

  const handleDistrictChange = (value: { name: string }) => {
    formik.setFieldValue("khoroo", value.name);
  };

  const handleApartmentChange = (value: { name: string }) => {
    formik.setFieldValue("apartment", value.name);
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartWithQuantity = savedCart.map((item: CartItem) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
    setDataCart(cartWithQuantity);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      <div className="w-full flex flex-col items-center gap-12">
        <Header home="" menu="" location="" />
        <form
          onSubmit={formik.handleSubmit}
          className="flex gap-[180px] z-[1] mb-20 mt-[105px]"
        >
          <div className="w-[432px] flex flex-col gap-6">
            <div className="px-6 py-4 flex items-center gap-4">
              {isFilled ? <GreenCircle /> : <BlueCircle />}
              <div className="flex flex-col gap-1">
                <p className="text-[#8B8E95] font-sans text-sm font-normal leading-[17px]">
                  Алхам 1
                </p>
                <p className="text-black font-sans text-xl font-normal leading-6">
                  Хаягийн мэдээлэл оруулах
                </p>
                <p
                  className={`font-sans text-base font-normal leading-[19px] transition-all duration-300 ${
                    isFilled ? "text-[#18BA51]" : "text-[#0468C8]"
                  }`}
                >
                  {isFilled ? "Оруулсан" : "Хүлээгдэж байна"}
                </p>
              </div>
            </div>
            <div className="min-h-[615px] p-6 flex flex-col gap-10 rounded-2xl shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)]">
              <div className="flex flex-col gap-4">
                <label className="text-black font-sans text-sm font-normal leading-[17px]">
                  Хаяг аа оруулна уу
                </label>
                <SelectDistrict onDistrictChange={handleDistrictChange} />
                <SelectKhoroo onKhorooChange={handleKhorooChange} />
                <SelectApartment onApartmentChange={handleApartmentChange} />
              </div>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1">
                  <label className="text-black font-sans text-sm font-normal leaidng-[17px]">
                    Нэмэлт мэдээлэл
                  </label>
                  <textarea
                    id="information"
                    name="information"
                    className="h-[112px] px-4 py-2 rounded-[4px] border border-[#ECEDF0] bg-[#F7F7F8] resize-none outline-none text-black font-sans text-base font-normal leading-[19px]"
                    placeholder="Орц, давхар, орцны код ..."
                    value={formik.values.information}
                    onChange={formik.handleChange}
                  ></textarea>
                  {formik.touched.information && formik.errors.information && (
                    <div className="text-red-600">
                      {formik.errors.information}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-black font-sans text-sm font-normal leading-[17px]">
                    Утасны дугаар*
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="number"
                    placeholder="Утасны дугаараа оруулна уу"
                    className="h-12 px-4 py-2 rounded-[4px] border border-[#ECEDF0] bg-[#F7F7F8] text-black font-sans text-base font-normal leading-[19px] outline-none"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                    <div className="text-red-600">
                      {formik.errors.phoneNumber}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-black font-sans text-sm font-normal leading-[17px]">
                    Төлбөр төлөх
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center max-w-[175.5px] w-full">
                      <Checkbox
                        {...label}
                        className="w-6 h-6"
                        sx={{
                          color: "black",
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                        name="paymentType"
                        value="Cash"
                        checked={formik.values.paymentType === "Cash"}
                        onChange={() =>
                          formik.setFieldValue("paymentType", "Cash")
                        }
                      />
                      <p className="text-[#8B8E95] font-sans text-base font-normal text-[19px]">
                        Бэлнээр
                      </p>
                    </div>
                    <div className="flex items-center gap-2 max-w-[175.5px] w-full">
                      <Checkbox
                        {...label}
                        className="w-6 h-6"
                        sx={{
                          color: "black",
                          "&.Mui-checked": {
                            color: "black",
                          },
                        }}
                        name="paymentType"
                        value="Card"
                        checked={formik.values.paymentType === "Card"}
                        onChange={() =>
                          formik.setFieldValue("paymentType", "Card")
                        }
                      />
                      <p className="text-[#8B8E95] font-sans text-base font-normal text-[19px]">
                        Картаар
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[432px] flex flex-col gap-6">
            <div className="px-6 py-4 flex items-center gap-4">
              <BlueCircle />
              <div className="flex flex-col gap-1">
                <p className="text-[#8B8E95] font-sans text-sm font-normal leading-[17px]">
                  Алхам 2
                </p>
                <p className="text-black font-sans text-xl font-normal leading-6">
                  Захиалга баталгаажуулах
                </p>
                <p className="text-[#0468C8] font-sans text-base font-normal leading-[19px]">
                  Хүлээгдэж байна
                </p>
              </div>
            </div>
            <div className="p-6 min-h-[615px] flex flex-col rounded-2xl shadow-[0px_0px_20px_0px_rgba(0,0,0,0.05)] justify-between">
              <div className="max-w-[489px] overflow-y-scroll">
                <div className="w-full h-[1px] bg-[#D6D8DB]"></div>
                {dataCart?.map((item) => {
                  return <OrderCard item={item} key={item._id} />;
                })}
              </div>
              <div className="flex items-center gap-[10px] pt-6 bg-white">
                <div className="w-full flex flex-col">
                  <p className="text-[#5E6166] font-poppins text-lg font-normal leading-[27px]">
                    Нийт төлөх дүн
                  </p>
                  <p className="text-[#121316] font-poppins text-lg font-bold leading-[27px]">
                    0₮
                  </p>
                </div>
                <button
                  type="submit"
                  disabled={!isFilled}
                  className={`w-full h-12 px-4 py-2 rounded-[4px] font-sans text-base font-normal leading-[19px] transition-all duration-300
                    ${
                      isFilled
                        ? "bg-[#18BA51] text-white"
                        : "bg-[#EEEFF2] text-[rgba(28,32,36,0.24)] cursor-not-allowed"
                    }`}
                >
                  Захиалах
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};
