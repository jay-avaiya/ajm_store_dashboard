import { CircleMinus, CirclePlus, Pencil, Plus } from "lucide-react";
import React, { useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { VscSparkle } from "react-icons/vsc";

const NewProduct = () => {
  const fileRef = useRef(null);

  const [preview, setPreview] = useState(null);
  const [value, setValue] = useState(0);

  const increment = () => {
    if (value > 100) return;
    setValue((prev) => prev + 1);
  };
  const decrement = () => {
    if (value <= 0) return;
    setValue((prev) => prev - 1);
  };

  const handleClick = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  return (
    <div className="w-full border border-[#B0B0B0] bg-white rounded-3xl p-7">
      <div className="w-full border border-[#909090] rounded-3xl flex items-center">
        {/* left content (Image ) */}
        <div className="w-[30%] border-r border-[#5C5C5C] px-6 py-7 space-y-2">
          <h3 className="text-xl font-medium">Product Image</h3>
          <div className="flex items-center gap-x-3">
            <div
              className={`w-[70px] h-[70px] rounded-full bg-gray-400 ${!preview && "flex items-center justify-center"}`}
            >
              {preview ? (
                <img
                  src={preview}
                  alt={"preview"}
                  className="w-full h-full object-cover overflow-hidden rounded-full"
                />
              ) : (
                <span className="text-xs text-black">Preview</span>
              )}
            </div>
            <div
              onClick={() => fileRef.current.click()}
              className="w-[70px] h-[70px] rounded-full bg-gray-400 flex items-center justify-center"
            >
              <Plus className="size-8" />
              <input
                type="file"
                ref={fileRef}
                hidden
                onChange={handleClick}
                accept="image/*"
              />
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="px-6 py-7 w-full">
          <form className="space-y-6">
            {/* Product Name */}
            <div className="space-y-2">
              <h3 className="font-medium text-xl">Product Name</h3>
              <input
                type="text"
                placeholder="Enter product name"
                className="border border-[#979797] w-full rounded-full py-2 px-3 outline-none   "
              />
            </div>

            {/* Product Description */}
            <div className="space-y-2">
              <h3 className="font-medium text-xl">Product Description</h3>
              <input
                type="text"
                placeholder="Enter product description"
                className="border border-[#979797] w-full rounded-full py-2 px-3 outline-none   "
              />
            </div>

            {/* Price */}
            <div className="space-y-2">
              <h3 className="font-medium text-xl">Price</h3>
              <input
                type="text"
                placeholder="2000"
                className="border border-[#979797] w-full rounded-full py-2 px-3 outline-none   "
              />
            </div>

            {/* Color & Quantity */}
            <div className="flex items-center gap-x-6">
              {/* color */}
              <div className="flex flex-col gap-y-1">
                <h3 className="text-xl font-medium">Color</h3>
                <div className="flex items-center gap-x-2">
                  <div className="w-8  h-8 rounded-full bg-[#F74343]"></div>
                  <div className="w-8  h-8 rounded-full bg-[#4A74F5]"></div>
                  <div className="w-8  h-8 rounded-full bg-gray-300 flex items-center justify-center">
                    <CirclePlus />
                  </div>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex flex-col gap-y-1">
                <h3 className="text-xl font-medium">Quantity</h3>
                <div className="flex items-center gap-x-4 p-1 border border-[#5C5C5C] rounded-full">
                  <CircleMinus onClick={decrement} />
                  <h3 className="text-2xl w-[20px]">{value}</h3>
                  <CirclePlus onClick={increment} />
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="flex items-end justify-end w-full h-full">
              <div className="flex items-center gap-x-3">
                <button className="bg-black text-white py-2 px-4 w-[200px] rounded-full flex items-center justify-center gap-x-2">
                  <span>Publish Now</span>
                  <VscSparkle />
                </button>

                <button className="bg-[#B6B5B1] text-white py-2 px-4 w-[180px] rounded-full flex items-center justify-center gap-x-2">
                  <span>Save As Draft</span>
                  <Pencil className="size-4" />
                </button>

                <button className="bg-[#FF465F] text-white py-2 px-4 rounded-full flex items-center justify-center gap-x-2">
                  <span>Delete</span>
                  <FaTrash className="size-4" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
