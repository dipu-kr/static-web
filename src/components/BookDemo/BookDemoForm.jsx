import React from "react";

const BookDemoForm = () => {
  return (
    <div className="w-[50%] p-8 bg-white">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-[15px]">Name</label>
          <input
            type="text"
            placeholder="Enter the full name"
            className="w-[90%] h-[40px] rounded-md pl-4 border border-gray-400 outline-none hover:ring"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-[15px]">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[90%] h-[40px] rounded-md pl-4 border border-gray-400 outline-none hover:ring"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-[15px]">Phone</label>
          <input
            type="text"
            placeholder="Enter phone No."
            className="w-[90%] h-[40px] rounded-md pl-4 border border-gray-400 outline-none hover:ring"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-[15px]">
            Name of the Organization
          </label>
          <input
            type="text"
            placeholder="Enter your company name."
            className="w-[90%] h-[40px] rounded-md pl-4 border border-gray-400 outline-none hover:ring"
          />
        </div>
        <div className="flex justify-center items-center mt-5">
          <button className="w-[150px] h-[42px] bg-[#FF7301] shadow-lg rounded-md px-8 py-[8px] text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDemoForm;
