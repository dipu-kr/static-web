import React from "react";
import { BsDot } from "react-icons/bs";

const SmallPriceCard = () => {
  return (
    <div className="min-h-[350px] h-auto bg-white shadow-lg rounded-[14px] pb-[25px] overflow-hidden">
      <div className="bg-[#EAEAEA] text-[#092B59] tracking-wide p-6">
        <h1 className="text-[24px] font-[600] leading-[31px] uppercase">
          Small
        </h1>
        <p className="text-[16px] font-[400] leading-[20px] mt-[10px] mb-[15px]">
          EMPLOYEE / MONTH
        </p>
        <h1 className="">
          <span className="text-[32px] font-[600] leading-[40px]">Rs.500/</span>
          <span className="text-[24px] font-[400] leading-[30px]">Month</span>
        </h1>
      </div>
      <div className="p-3">
        <h6 className="text-[14px] font-[500] text-[#1F1F1F] leading-[16px] mb-[16px] mt-2">
          Start with Rewards & Recognition
        </h6>
        <div>
          <p className="flex items-center mb-2">
            <span>
              <BsDot size={20} />
            </span>
            <span className="text-[13.74px] font-[400] leading-[20px] text-[#1F1F1F]">
              Start with Rewards & Recognition
            </span>
          </p>
          <p className="flex items-center mb-2">
            <span>
              <BsDot size={20} />
            </span>
            <span className="text-[13.74px] font-[400] leading-[20px] text-[#1F1F1F]">
              Start with Rewards & Recognition
            </span>
          </p>
          <p className="flex items-center mb-2">
            <span>
              <BsDot size={20} />
            </span>
            <span className="text-[13.74px] font-[400] leading-[20px] text-[#1F1F1F]">
              Start with Rewards & Recognition
            </span>
          </p>
        </div>
        <p className="flex items-center mb-2">
          <span>
            <BsDot size={20} />
          </span>
          <span className="text-[13.74px] font-[400] leading-[20px] text-[#1F1F1F]">
            Start with Rewards & Recognition
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center mt-[50px] p-3">
        <button className="w-[197px] h-[47px] bg-[#FF7301] text-[15.46px] font-[500] rounded-md shadow-md text-white">
          Book Demo
        </button>
      </div>
    </div>
  );
};

export default SmallPriceCard;
