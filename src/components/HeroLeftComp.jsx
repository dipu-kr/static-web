import React from "react";
import { GoArrowRight } from "react-icons/go";

const HeroLeftComp = () => {
  return (
    <div className="h-[85vh] flex pt-[85.92px]">
      <div>
        <p className="flex mb-2 gap-4 text-[#092B59]">
          <span className="font-[600] text-[16.2px] leading-[19.98px]">
            ENGAGE
            <span className="font-[600] text-[26.2px] leading-[19.98px]">
              +
            </span>{" "}
            <span className="font-[600] text-[16.] leading-[19.98px]">.</span>
          </span>{" "}
          <span className="font-[600] text-[16.2px] leading-[19.98px]">
            GROW
            <span className="font-[600] text-[26.2px] leading-[19.98px]">
              +
            </span>{" "}
            <span className="font-[600] text-[16.] leading-[19.98px]">.</span>
          </span>{" "}
          <span className="font-[600] text-[16.2px] leading-[19.98px]">
            MEET
            <span className="font-[600] text-[26.2px] leading-[19.98px]">
              +
            </span>{" "}
            <span className="font-[600] text-[16.] leading-[19.98px]">.</span>
          </span>{" "}
          <span className="font-[600] text-[16.2px] leading-[19.98px]">
            HEALTH
            <span className="font-[600] text-[26.2px] leading-[19.98px]">
              +
            </span>{" "}
            <span className="font-[600] text-[16.] leading-[19.98px]">.</span>
          </span>{" "}
        </p>
        <h1 className="text-[38px] font-[600] leading-[46px]">
          Make Your <span className="text-[#FF7301]">workplace awesome</span>
        </h1>
        <h1 className="text-[38px] font-[600] leading-[46px]">
          with <span className="text-[#FF7301]">Employee Engagement!</span>
        </h1>
        <p className="w-[70%] mt-[16px] text-justify font-[400] text-[24px] leading-[30px] text-[#092B59]">
          Empower your workforce for an ever-changing landscape with TAVA's
          dynamic features. Adapt, evolve, and excel effortlessly.
        </p>
        <div className="mt-7 flex gap-5">
          <input
            placeholder="Work email*"
            className="w-[250px] h-[40px] border border-gray-300 bg-[#F0F4F7] px-3 outline-none py-[6px] rounded-[40px] placeholder:text-[15px] text-[15px"
          />
          <button className="w-[126px] h-[40px]  rounded-full flex justify-center items-center text-[14.2px] pt-[3px] border-2 border-[#FF7301] bg-[#FF7301] text-white">
            Book Demo
          </button>
        </div>
        <div className="mt-5">
          <button className="border-none text-[14.4px] text-[#1A73E8] font-[400] leading-[30.4px] flex items-center gap-1">
            <span>Or contact sales</span>
            <span>
              <GoArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroLeftComp;
