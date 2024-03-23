import React from "react";

const ContactForm = () => {
  return (
    <div className="flex-1">
      <h3 className="text-[20px] lg:text-[24px] font-[600] leading-[28px] text-[#000000] mb-4">
        Ask us anything here
      </h3>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="font-[400] text-[#000000] text-[14px] lg:text-[18px] leading-[40px]">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter the full name"
            className="w-full lg:w-[90%] h-[42px] md:h-[60px] rounded-[8px] text-[14px] md:text-[16px] font-[400] text-[#1F1F1F] placeholder:text-[#1F1F1F] pl-4 border border-gray-300 outline-none hover:ring"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-[400] text-[#000000] text-[14px] lg:text-[18px] leading-[40px]">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full lg:w-[90%] h-[42px] md:h-[60px] rounded-[8px] text-[14px] md:text-[16px] font-[400] text-[#1F1F1F] placeholder:text-[#1F1F1F] pl-4 border border-gray-300 outline-none hover:ring"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-[400] text-[#000000] text-[14px] lg:text-[18px] leading-[40px]">
            Phone
          </label>
          <input
            type="text"
            placeholder="Enter phone No."
            className="w-full lg:w-[90%] h-[42px] md:h-[60px] rounded-[8px] text-[14px] md:text-[16px] font-[400] text-[#1F1F1F] placeholder:text-[#1F1F1F] pl-4 border border-gray-300 outline-none hover:ring"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-[400] text-[#000000] text-[14px] lg:text-[18px] leading-[40px]">
            Message
          </label>
          <textarea
            type="text"
            rows={5}
            placeholder="Write your view"
            className="w-full lg:w-[90%] resize-none rounded-[8px] text-[14px] md:text-[16px] font-[400] text-[#1F1F1F] placeholder:text-[#1F1F1F] pl-4 pt-3 border border-gray-300 outline-none hover:ring"
          />
        </div>
        <div className="w-[90%] flex justify-center items-center mt-5">
          <button className="w-[151px] h-[42px] lg:w-[230px] lg:h-[54px] text-[15px] lg:text-[18px] font-[500] bg-[#FF7301] shadow-lg rounded-md  text-[#FFFFFF]">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
