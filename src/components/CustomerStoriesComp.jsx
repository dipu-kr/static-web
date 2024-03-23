import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const CustomerStoriesComp = () => {
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full max-w-[1535px] mx-auto lg:px-[100px] xl:px-[150px]">
        <div className="w-full h-auto lg:h-[270px] px-[30px] sm:px-[50px] text-center py-[30px] lg:my-8 bg-[#F0F4F7] lg:rounded-full flex justify-center items-center flex-col">
          <h5 className="text-[#FF7301] text-[18px] font-[700] leading-[20px] uppercase tracking-wider">
            Customer Stories
          </h5>
          <h2 className="text-[24px] font-[600] leading-[30px] my-4">
            Employee Engagement & Wellbeing
          </h2>
          <p className="font-[400] text-[18px] leading-[30px] text-[#375069] break-words">
            Hear Cash App’s journey through various generations of its core
            machine-learning capabilities{" "}
          </p>
          <p className="font-[400] text-[18px] leading-[3opx] text-[#375069]">
            and how Tecton’s real-time feature platform helps them deliver
            world-class recommendations.
          </p>
          <p className="flex items-center justify-center font-[400] text-[16px] mt-2 text-[#FF7301] cursor-pointer">
            <span>Watch the Video</span>
            <span className="ml-1">
              <HiArrowLongRight />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerStoriesComp;
