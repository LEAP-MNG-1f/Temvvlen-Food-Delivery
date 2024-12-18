"use client";

import * as React from "react";
import { Footer, Header } from "../constant";
import { Checkbox } from "@mui/material";
// import { useFormik } from "formik";
// import { useRouter } from "next/navigation";
// import * as Yup from "yup";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const SignUpPage = () => {
  // const [errorMessage, setErrorMessage] = React.useState("");
  // const router = useRouter();

  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     email: "",
  //     location: "",
  //     password: "",
  //   },
  //   validationSchema: Yup.object({
  //     email: Yup.string().email("Invalid email address").required("Required"),
  //     password: Yup.string()
  //       .min(6, "Password must be at least 6 characters")
  //       .required("Required"),
  //   }),
  //   onSubmit: async (values) => {
  //     setErrorMessage("");
  //     try {
  //       const response = await fetch("http://localhost:3030/signup", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(values),
  //       });
  //       const data = await response.json();

  //       if (response.ok) {
  //         router.push("/login");
  //       } else {
  //         setErrorMessage(data.message || "Error occurred");
  //       }
  //     } catch (error) {
  //       setErrorMessage("Network error");
  //     }
  //   },
  // });

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="w-full flex flex-col items-center">
        <Header home="" menu="" location="" />
        <form className="max-w-[448px] w-full p-8 flex flex-col gap-12 rounded-2xl bg-white mt-[130px] mb-[107px] z-[1]">
          <p className="text-[#0D1118] text-center font-sans text-[28px] font-bold leading-[33px]">
            Бүртгүүлэх
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-black font-sans text-sm font-normal leading-[17px]">
                  Нэр
                </label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-[4px] border border-[#ECEDF0] bg-[#F7F7F8] w-full h-12 outline-none"
                  placeholder="Нэрээ оруулна уу"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-black font-sans text-sm font-normal leading-[17px]">
                  И-мэйл
                </label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-[4px] border border-[#ECEDF0] bg-[#F7F7F8] w-full h-12 outline-none"
                  placeholder="И-мэйл хаягаа оруулна уу"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-black font-sans text-sm font-normal leading-[17px]">
                  Хаяг
                </label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-[4px] border border-[#ECEDF0] bg-[#F7F7F8] w-full h-12 outline-none"
                  placeholder="Та хаягаа оруулна уу"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-black font-sans text-sm font-normal leading-[17px]">
                  Нууц үг
                </label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-[4px] border border-[#ECEDF0] bg-[#F7F7F8] w-full h-12 outline-none"
                  placeholder="Нууц үгээ оруулна уу"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-black font-sans text-sm font-normal leading-[17px]">
                  Нууц үг давтах
                </label>
                <input
                  type="text"
                  className="px-4 py-2 rounded-[4px] border border-[#ECEDF0] bg-[#F7F7F8] w-full h-12 outline-none"
                  placeholder="Нууц үгээ оруулна уу"
                />
              </div>
            </div>
            {/* <Link
              href="/"
              className="text-[#3F4145] text-sm font-sans font-normal leading-[17px] text-end"
            >
              Нууц үг сэргээх
            </Link> */}
          </div>
          <div className="flex flex-col gap-8">
            <div className="py-2 flex gap-2 items-center">
              <Checkbox
                {...label}
                className="w-6 h-6"
                sx={{
                  color: "#1C1B1F",
                  "&.Mui-checked": {
                    color: "#1C1B1F",
                  },
                }}
              />
              <p className="text-[#161616] font-sans text-sm font-normal leading-[17px]">
                Үйлчилгээний нөхцөл зөвшөөрөх
              </p>
            </div>
            <button className="px-4 py-2 h-12 w-full rounded-[4px] bg-[#EEEFF2] text-[rgba(28,32,36,0.24)] font-sans text-base font-normal leading-[19px]">
              Бүртгүүлэх
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
};
