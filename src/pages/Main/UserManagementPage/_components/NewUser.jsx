import { Pencil } from "lucide-react";
import { FaTrash } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";
import { VscSparkle } from "react-icons/vsc";

const NewUser = () => {
  return (
    <div className="w-full bg-white border border-[#B0B0B0] rounded-3xl py-3 px-10">
      <form className="flex flex-col gap-y-5 h-[500px]">
        {/* name */}
        <div className="flex flex-col gap-y-2.5">
          <label htmlFor="name" className="text-lg font-medium">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full py-2 px-3 border border-[#979797] rounded-full outline-none"
          />
        </div>

        {/* email */}
        <div className="flex flex-col gap-y-2.5">
          <label htmlFor="name" className="text-lg font-medium">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full py-2 px-3 border border-[#979797] rounded-full outline-none"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-y-2.5">
          <label htmlFor="name" className="text-lg font-medium">
            Phone Number
          </label>
          <input
            type="text"
            placeholder="Enter Your Phone Number"
            className="w-full py-2 px-3 border border-[#979797] rounded-full outline-none"
          />
        </div>

        {/* Status */}
        <div className="flex flex-col gap-y-2.5">
          <p className="text-lg font-medium">Status</p>
          <div className="flex items-center gap-x-3 px-4 py-2 text-white text-[10px] justify-self-end bg-[#44D769] rounded-full w-fit">
            <span className="text-sm">Active</span>
            <IoMdArrowDropup className="size-4" />
          </div>
        </div>

        <div className="flex items-end justify-end w-full h-full">
          <div className="flex items-center gap-x-3">
            <button className="bg-black text-white py-2 px-4 w-[200px] rounded-full flex items-center justify-center gap-x-2">
              <span>Add New User</span>
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
  );
};

export default NewUser;
