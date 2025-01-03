import { FC, useRef } from "react";
import { useFormik } from "formik";
import { Close } from "../svg";
import { ChooseCategory } from "./ChooseCategory";

type FoodValues = {
  name: string;
  ingeredient: string;
  price: string;
  categoryId: string;
  image: string;
};

type CardPropsType = {
  item: FoodValues;
};

export const AdminCard: FC<CardPropsType> = ({ item }) => {
  const BACKEND_ENDPOINT = process.env.BACKEND_URL;
  const modalRef = useRef<HTMLDialogElement>(null);

  const formik = useFormik<FoodValues>({
    initialValues: {
      name: "",
      ingeredient: "",
      categoryId: "",
      price: "",
      image: "",
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

        closeModal();
      } catch (error) {
        console.error(error);
      }
    },
  });

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef?.current?.close();
  };

  const handleCategoryChange = (category: { _id: string }) => {
    formik.setFieldValue("categoryId", category._id);
  };

  return (
    <>
      <button
        className="flex flex-col gap-[14px] max-w-[282px] w-full relative"
        onClick={openModal}
      >
        <img
          src={item.image}
          className="w-[282px] h-[186px] shadow-[0px_3px_6px_-2px_rgba(0,0,0,0.10),0px_6px_10px_0px_rgba(0,0,0,0.07)] rounded-2xl object-cover object-center"
        />
        {/* <div className="absolute px-4 py-1 rounded-2xl border border-white bg-[#18BA51] backdrop-blur-[50px] top-4 right-4">
        <p className="text-white font-poppins text-lg font-semibold leading-[27px]">
          {item.saletag}%
        </p>
      </div> */}
        <div className="flex flex-col gap-[2px] items-start">
          <p className="text-[#000000] font-poppins text-lg font-semibold leading-[27px]">
            {item.name}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-[#18BA51] font-poppins text-lg font-semibold leading-[27px]">
              {item.price}₮
            </p>
            {/* <p className="text-[#272727] font-poppins text-lg font-normal leading-[27px] line-through">
              {item.discount}₮
            </p> */}
          </div>
        </div>
      </button>
      <dialog ref={modalRef} id="addModal" className="modal">
        <div className="modal-box p-0 max-w-[587px] w-full bg-white rounded-2xl flex flex-col">
          <div className="px-6 py-4 flex items-center justify-between border-b border-[#E0E0E0]">
            <form method="dialog">
              <button className="w-8 h-8 flex items-center justify-center">
                <Close />
              </button>
            </form>
            <p className="text-[#161616] font-poppins text-2xl font-bold">
              Edit food
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
                  type="text"
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
                  />
                  <p className="text-[#121316] font-poppins text-sm font-medium">
                    Хямдралтай эсэх
                  </p>
                </div>
                <input
                  type="text"
                  className="px-3 h-14 rounded-lg bg-[#F4F4F4] outline-none text-[#121316] font-inter text-base font-medium leading-5"
                  placeholder="Хямдралын үнэ оруулна уу"
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
