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
    <div className="w-full px-[150px]">
      <div className="flex justify-center items-center flex-col py-10">
        <div>
          <h1 className="text-[35px] font-bold text-center">
            Our Key Features
          </h1>
          <p className="font-normal text-center mt-3">
            Deploy Tecton in your existing environment and immediately benefit
            from a central source of truth to
          </p>
          <p className="font-normal text-center leading-4">
            design, orchestrate, and serve fresh features across the
            organization.
          </p>
        </div>
        <div className="w-[50%] flex justify-between mt-10">
          <button
            className={`text-center py-1 px-5 text-[16px] font-bold border-b-2 border-white hover:bg-blue-100 ${
              activeTab === 1 ? "text-blue-500 border-blue-500" : ""
            }`}
            onClick={() => handleTabClick(1)}
          >
            Engage
          </button>
          <button
            className={`text-center py-1 px-5 text-[16px] font-bold border-b-2 border-white hover:bg-blue-100 ${
              activeTab === 2 ? "text-blue-500 border-blue-500" : ""
            }`}
            onClick={() => handleTabClick(2)}
          >
            Grow
          </button>
          <button
            className={`text-center py-1 px-5 text-[16px] font-bold border-b-2 border-white hover:bg-blue-100 ${
              activeTab === 3 ? "text-blue-500 border-blue-500" : ""
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
  );
};

export default KeyFeatureComp;
