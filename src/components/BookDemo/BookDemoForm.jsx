import React from "react";

const BookDemoForm = () => {
  return (
    <div className="w-[50%] p-8 bg-[#ffffff]  rounded-l-[14px] overflow-hidden">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="font-[400] text-[#000000] text-[18px] leading-[40px]">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter the full name"
            className="w-[90%] h-[60px] rounded-[8px] text-[16px] font-[400] text-[#1F1F1F] placeholder:text-[#1F1F1F] pl-4 border border-gray-300 outline-none hover:ring"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-[400] text-[#000000] text-[18px] leading-[40px]">
            Email
          </label>
          <input
            type="email"
            placeholder="Example@gmail.com"
            className="w-[90%] h-[60px] rounded-[8px] text-[16px] font-[400] text-[#1F1F1F] placeholder:text-[#1F1F1F] pl-4 border border-gray-300 outline-none hover:ring"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-[400] text-[#000000] text-[18px] leading-[40px]">
            Mobile
          </label>
          <input
            type="text"
            placeholder="+91-"
            className="w-[90%] h-[60px] rounded-[8px] text-[16px] font-[400] text-[#1F1F1F] placeholder:text-[#1F1F1F] pl-4 border border-gray-300 outline-none hover:ring"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-[400] text-[#000000] text-[18px] leading-[40px]">
            Name of the Organization
          </label>
          <input
            type="text"
            placeholder="Enter your company name "
            className="w-[90%] h-[60px] rounded-[8px] text-[16px] font-[400] text-[#1F1F1F] placeholder:text-[#1F1F1F] pl-4 border border-gray-300 outline-none hover:ring"
          />
        </div>
        <div className="w-[90%] flex justify-center items-center mt-5">
          <button className="w-[230px] h-[54px] text-[18px] font-[500] bg-[#FF7301] shadow-lg rounded-md  text-[#FFFFFF]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDemoForm;
