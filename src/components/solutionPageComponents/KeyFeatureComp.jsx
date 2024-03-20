import React, { useState } from "react";
import EngageComp from "./EngageComp";
import GrowComp from "./GrowComp";
import MarketComp from "./MarketComp";

const KeyFeatureComp = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full max-w-[1535px] mx-auto px-[150px]">
        <div className="flex justify-center items-center flex-col py-8">
          <div>
            <h1 className="text-[42px] font-[700] leading-[46px] text-[#092B59] text-center">
              Our Key Features
            </h1>
            <p className="font-[400] text-[22px] leading-[30px] text-[#375069] text-center mt-3">
              Deploy Tecton in your existing environment and immediately benefit
              from a central source of truth to
            </p>
            <p className="font-[400] text-[22px] leading-[30px] text-[#375069] text-center">
              design, orchestrate, and serve fresh features across the
              organization.
            </p>
          </div>
          <div className="w-[50%] flex justify-between mt-10">
            <button
              className={`flex text-center py-1 px-5 text-[21px] font-[600] border-b-2  hover:text-[#1A73E8] ${
                activeTab === 1
                  ? "text-[#1A73E8] border-[#1A73E8]"
                  : "border-white"
              }`}
              onClick={() => handleTabClick(1)}
            >
              Engage
              <span>+</span>
            </button>
            <button
              className={`text-center py-1 px-5 text-[21px] font-[600] border-b-2 hover:text-[#1A73E8] ${
                activeTab === 2
                  ? "text-[#1A73E8] border-[#1A73E8]"
                  : "border-white"
              }`}
              onClick={() => handleTabClick(2)}
            >
              Grow
            </button>
            <button
              className={`text-center py-1 px-5 text-[21px] font-[600] border-b-2 hover:text-[#1A73E8] ${
                activeTab === 3
                  ? "text-[#1A73E8] border-[#1A73E8]"
                  : "border-white"
              }`}
              onClick={() => handleTabClick(3)}
            >
              Market
            </button>
          </div>
          {/* -----------------components------------ */}
          <div className="w-full">
            {activeTab === 1 && <EngageComp />}
            {activeTab === 2 && <GrowComp />}
            {activeTab === 3 && <MarketComp />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatureComp;
