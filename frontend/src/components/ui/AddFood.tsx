"use client";

import { FC, useEffect, useRef, useState } from "react";
import { Close } from "../svg";
import { useFormik } from "formik";
import { ChooseCategory } from "./ChooseCategory";

type FoodValues = {
  name: string;
  ingeredient: string;
  categoryId: string;
  price: string;
  discount: string;
  image: File | null;
};

type AddFoodProps = {
  onAddFood: () => void;
};

export const AddFood: FC<AddFoodProps> = ({ onAddFood }) => {
  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const [inputOpen, setInputOpen] = useState(true);
  const handleInputToggle = () => {
    setInputOpen(!inputOpen);
  };
  const dialogRef = useRef<HTMLDialogElement>(null);

  const formik = useFormik<FoodValues>({
    initialValues: {
      name: "",
      ingeredient: "",
      categoryId: "",
      price: "",
      discount: "",
      image: null,
    },
    onSubmit: async (values) => {
      const requestData = {
        ...values,
      };
      try {
        const response = await fetch(`${BACKEND_ENDPOINT}/food`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });
        const data = await response.json();

        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);

        onAddFood();
        closeModal();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const handleCategoryChange = (category: { _id: string }) => {
    formik.setFieldValue("categoryId", category._id);
  };

  return (
    <>
      <button
        className="px-4 py-2 rounded-[4px] bg-[#18BA51] text-white font-sans text-base font-normal leading-[19px]"
        onClick={openModal}
      >
        Add new food
      </button>
      <dialog ref={dialogRef} id="addModal" className="modal">
        <div className="modal-box p-0 max-w-[587px] w-full bg-white rounded-2xl flex flex-col">
          <div className="px-6 py-4 flex items-center justify-between border-b border-[#E0E0E0]">
            <form method="dialog">
              <button className="w-8 h-8 flex items-center justify-center">
                <Close />
              </button>
            </form>
            <p className="text-[#161616] font-poppins text-2xl font-bold">
              Create food
            </p>
            <div className="w-8 h-8"></div>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="p-6 flex flex-col justify-center gap-4 self-stretch">
              <div className="flex flex-col gap-2 justify-center">
                <label className="text-[#121316] font-poppins text-sm font-medium">
                  Хоолны нэр
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="px-3 h-14 rounded-lg bg-[#F4F4F4] outline-none text-[#121316] font-inter text-base font-medium leading-5"
                  placeholder="Хоолны нэр оруулна уу"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <label className="text-[#121316] font-poppins text-sm font-medium">
                  Хоолны ангилал
                </label>
                <ChooseCategory onCategoryChange={handleCategoryChange} />
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <label className="text-[#121316] font-poppins text-sm font-medium">
                  Хоолны орц
                </label>
                <input
                  id="ingeredient"
                  name="ingeredient"
                  type="text"
                  className="px-3 h-14 rounded-lg bg-[#F4F4F4] outline-none text-[#121316] font-inter text-base font-medium leading-5"
                  placeholder="Хоолны орц оруулна уу"
                  value={formik.values.ingeredient}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <label className="text-[#121316] font-poppins text-sm font-medium">
                  Хоолны үнэ
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  className="px-3 h-14 rounded-lg bg-[#F4F4F4] outline-none text-[#121316] font-inter text-base font-medium leading-5"
                  placeholder="Хоолны үнэ оруулна уу"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    className="toggle toggle-success toggle-xs"
                    onClick={handleInputToggle}
                  />
                  <p className="text-[#121316] font-poppins text-sm font-medium">
                    Хямдралтай эсэх
                  </p>
                </div>
                <input
                  id="discount"
                  name="discount"
                  disabled={inputOpen}
                  type="text"
                  className="px-3 h-14 rounded-lg bg-[#F4F4F4] outline-none text-[#121316] font-inter text-base font-medium leading-5"
                  placeholder="Хямдралын үнэ оруулна уу"
                  value={formik.values.discount}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex flex-col gap-2 justify-center">
                <p className="text-[#121316] font-poppins text-sm font-medium">
                  Хоолны зураг
                </p>
                <div className="max-w-[284px] w-full h-[122px] p-2 flex flex-col justify-center items-center gap-2 border border-dashed border-[#D6D7DC] bg-[rgba(186,188,196,0.12)] rounded-lg">
                  <p className="text-[#525252] font-poppins text-base font-bold ">
                    Add image for the food
                  </p>
                  <input type="file" id="upload" className="hidden" />
                  <label
                    htmlFor="upload"
                    className="px-3 py-2 rounded-lg bg-[#393939] text-white font-inter text-base font-bold cursor-pointer"
                  >
                    Add image
                  </label>
                </div>
              </div>
            </div>
            <div className="p-6 flex gap-4 items-center justify-end border-t border-[#E0E0E0]">
              <button
                type="button"
                className="p-2 text-[#3F4145] font-inter text-base font-bold"
                onClick={() => formik.resetForm()}
              >
                Clear
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-[4px] bg-[#393939] text-white font-inter text-base font-bold"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
};

//
