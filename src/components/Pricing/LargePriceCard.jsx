import React from "react";
import { BsDot } from "react-icons/bs";

const LargePriceCard = () => {
  return (
    <div className="min-h-[350px] h-auto bg-white shadow-lg rounded-md overflow-hidden">
      <div className="bg-[#EAEAEA] text-[#092B59] tracking-wide p-6">
        <h1 className="text-[22px] font-bold">LARGE</h1>
        <p className="text-[17px]">EMPLOYEE / MONTH</p>
        <h1 className="">
          <span className="text-[24px] font-extrabold">Rs.500/</span>
          <span className="text-[19px]">Month</span>
        </h1>
      </div>
      <div className="p-6">
        <h6 className="text-[14px] font-semibold mb-4">
          Start with Rewards & Recognition
        </h6>
        <div>
          <p className="flex items-center mb-2">
            <span>
              <BsDot size={20} />
            </span>
            <span className="text-[13px] font-normal">
              Start with Rewards & Recognition
            </span>
          </p>
          <p className="flex items-center mb-2">
            <span>
              <BsDot size={20} />
            </span>
            <span className="text-[13px] font-normal">
              Start with Rewards & Recognition
            </span>
          </p>
          <p className="flex items-center mb-2">
            <span>
              <BsDot size={20} />
            </span>
            <span className="text-[13px] font-normal">
              Start with Rewards & Recognition
            </span>
          </p>
        </div>
        <p className="flex items-center mb-2">
          <span>
            <BsDot size={20} />
          </span>
          <span className="text-[13px] font-normal">
            Start with Rewards & Recognition
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center mt-[50px] p-6">
        <button className="w-full bg-[#FF7301] px-8 py-[6px] rounded-md shadow-md text-white">
          Book A Demo
        </button>
      </div>
    </div>
  );
};

export default LargePriceCard;
