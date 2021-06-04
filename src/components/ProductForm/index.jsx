import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { handleAlert } from "../../redux/action/alertAction/actions";
import { fileListToBase64 } from "../../utilities/handleFile";
const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const dispatch = useDispatch();

  //   IMAGES
  const [uploadedImages, setUploadedImages] = useState([]);

  //   SUBMIT
  const onSubmit = (data) => {
    console.log(data);
    checkStockIsLargerThan1();
  };

  //   STOCK
  const [stock, setStock] = useState([
    {
      size: "XS",
      count: 1,
    },
    {
      size: "S",
      count: 0,
    },
    {
      size: "M",
      count: 0,
    },
    {
      size: "L",
      count: 0,
    },
    {
      size: "XL",
      count: 0,
    },
    {
      size: "XXL",
      count: 0,
    },
  ]);

  //   UPDATE STOCK
  const updateStock = (idx, value) => {
    const newStock = [...stock];
    newStock[idx].count = value;
    setStock(newStock);
  };

  //   CHECK STOCK IS LARGER THAN 1
  const checkStockIsLargerThan1 = () => {
    const totalCount = stock.map((el) => el.count).reduce((a, b) => (a += b));
    if (totalCount > 0) return true;
    dispatch(
      handleAlert({ text: "Stock must be larger than 1", status: "error" })
    );
  };

  //   TRANSFORM FILE LIST INTO IMAGE
  useEffect(() => {
    if (watch("images") && watch("images").length > 0) {
      fileListToBase64(watch("images")).then((arr) => {
        setUploadedImages(arr);
      });
    }
  }, [watch("images")]);

  return (
    <div className="mt-5">
      <form
        className="md:max-w-2xl w-full"
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <div className="md:grid grid-cols-2 gap-5 mb-3">
          {/* NAME */}
          <div className="flex flex-col  justify-start items-start ">
            <label className="font-bold text-sm">Name</label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
              className={`border focus:outline-none ${
                errors.name && "border-red-500"
              } focus:border-fuchsia-500 rounded-3xl mb-3 md:mb-0 border-solid border-gray-200 px-3 py-2`}
            />
            {errors.name && errors.name.type === "required" && (
              <p className="text-sm text-red-500">Name can not be blank</p>
            )}
          </div>
          {/* Price */}
          <div className="flex flex-col  justify-start items-start ">
            <label className="font-bold text-sm">Price</label>
            <input
              {...register("price", { required: true, min: 1 })}
              type="number"
              placeholder="Price"
              className={`border focus:outline-none ${
                errors.price && "border-red-500"
              } focus:border-fuchsia-500 rounded-3xl mb-3 md:mb-0 border-solid border-gray-200 px-3 py-2`}
            />
            {errors.price && errors.price.type === "required" && (
              <p className="text-sm text-red-500">Price can not be blank</p>
            )}
          </div>

          {/*Category  */}
          <div className="flex flex-col  justify-start items-start ">
            <label className="font-bold text-sm">Category</label>
            <input
              {...register("category", { required: true })}
              type="text"
              placeholder="Category"
              className={`border focus:outline-none ${
                errors.category && "border-red-500"
              } focus:border-fuchsia-500 rounded-3xl mb-3 md:mb-0 border-solid border-gray-200 px-3 py-2`}
            />
            {errors.category && errors.category.type === "required" && (
              <p className="text-sm text-red-500">Category can not be blank</p>
            )}
          </div>

          {/* STOCK */}
          <div className="flex flex-col  justify-start items-start ">
            <label className="font-bold text-sm">In stock</label>
            <div className="mt-1 flex flex-wrap">
              {stock.map((item, idx) => (
                <div key={idx} className="mr-1">
                  <p>{item.size}</p>
                  <input
                    onChange={(e) => updateStock(idx, e.target.value)}
                    type="number"
                    min="0"
                    className="border border-solid focus:outline-none focus:border-fuchsia-500 border-gray-200 w-10 p-1"
                    value={stock[idx].count}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ADD IMAGES BLOCK */}
        <div className="mb-5 mt-5 md:flex flex-row justify-start items-start">
          <div className="md:mr-5 flex flex-col justify-start items-start">
            <div className="overflow-hidden relative w-28 cursor-pointer">
              <button
                className={`border cursor-pointer border-solid ${
                  errors.images ? "border-red-500" : "border-coolGray-300"
                } py-3 w-full text-sm rounded text-coolGray-400 cursor-pointer`}
              >
                Add image
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 inline-block w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <input
                accept="image/*"
                {...register("images", { required: true })}
                className={`cursor-pointer absolute top-0 left-0 opacity-0 w-full h-full pin-r pin-t`}
                type="file"
                name="images"
                multiple
              />
            </div>
            <small className="text-red-500">
              {errors.images && errors.images.type === "required"
                ? "Image can not be blank"
                : ""}
            </small>
          </div>

          {/* IMAGES DISPLAY */}
          {uploadedImages.length > 0 ? (
            <div className="flex flex-wrap">
              {uploadedImages.map((item, idx) => (
                <img className="w-36 mr-3 mb-3" key={idx} src={item} />
              ))}
            </div>
          ) : (
            <div className="h-36 w-28 flex justify-center items-center bg-gray-100">
              No image
            </div>
          )}
        </div>

        <button
          type="submit"
          className="mt-3 rounded bg-blue-600 text-white cursor-pointer focus:outline-none hover:bg-blue-500 px-4 py-2"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
