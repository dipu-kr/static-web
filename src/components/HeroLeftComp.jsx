import React from "react";

const HeroLeftComp = () => {
  return (
    <div className="h-[85vh] flex items-center">
      <div>
        <p className="flex gap-4 font-[400] text-[15px] mb-5">
          <span>ENGAGE+ .</span> <span>GROW+ .</span> <span>MEET+ .</span>{" "}
          <span>health+</span>
        </p>
        <h1 className="text-[35px] font-semibold leading-9">
          Make Your <span className="text-[#FF7301]">workplace awesome</span>
        </h1>
        <h1 className="text-[35px] font-semibold">
          with <span className="text-[#FF7301]">Employee Engagement!</span>
        </h1>
        <p className="w-[60%] mt-6 text-justify">
          Empower your workforce for an ever-changing landscape with TAVA's
          dynamic features. Adapt, evolve, and excel effortlessly.
        </p>
        <div className="mt-7 flex gap-5">
          <input
            placeholder="Work email*"
            className="w-[250px] border border-gray-300 bg-gray-200 px-3 outline-none py-[6px] rounded-full placeholder:text-[13px] text-[14px]"
          />
          <button className="w-[140px] text-[14px] font-[gilroy-bold] border-2 border-[#FF7301] bg-[#FF7301] text-white rounded-full px-[50] py-[5px] hover:bg-transparent hover:text-[#000] transition-all duration-250 ease-in-out">
            Book Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroLeftComp;
