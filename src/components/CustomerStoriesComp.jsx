import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

const CustomerStoriesComp = () => {
  return (
    <div className="w-full px-[150px]">
      <div className="w-full h-[250px] my-8 bg-[#F0F4F7] rounded-full flex justify-center items-center flex-col">
        <h5 className="text-[#FF7301] font-medium uppercase tracking-wider">
          Customer Stories
        </h5>
        <h2 className="text-[20px] font-bold my-4">
          Employee Engagement & Wellbeing
        </h2>
        <p className="font-normal">
          Hear Cash App’s journey through various generations of its core
          machine-learning capabilities{" "}
        </p>
        <p className="font-normal">
          and how Tecton’s real-time feature platform helps them deliver
          world-class recommendations.
        </p>
        <p className="flex items-center justify-center text-[13px] mt-2 text-[#FF7301]">
          <span>Watch the Video</span>
          <span>
            <HiArrowLongRight />
          </span>
        </p>
      </div>
    </div>
  );
};

export default CustomerStoriesComp;
