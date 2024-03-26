import React, { useState, useEffect } from "react";
import EngageComp from "./EngageComp";
import GrowComp from "./GrowComp";
import MarketComp from "./MarketComp";
import AOS from "aos";

const KeyFeatureComp = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  useEffect(() => {
    AOS.init({
      duration: 450,
      offset: 120,
      easing: "ease",
    });
  }, []);

  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full max-w-[1535px] mx-auto px-[20px] sm:px-[40px] lg:px-[100px] xl:px-[150px]">
        <div className="flex justify-center items-center flex-col py-8">
          <div className="mb-[30px] lg:mb-0">
            <h1
              className="text-[26px] lg:text-[42px] font-[700] leading-[46px] text-[#092B59] text-center"
              data-aos="fade-up"
            >
              Our Key Features
            </h1>
            <p
              className="font-[400] text-[16px] lg:text-[22px] leading-[26px] lg:leading-[30px] text-[#375069] text-center mt-3"
              data-aos="fade-up"
            >
              Deploy Tecton in your existing environment and immediately benefit
              from a central source of truth to design, orchestrate, and serve
              fresh features across the organization.
            </p>
            {/* <p
              className="font-[400] text-[16px] lg:text-[22px] leading-[26px] lg:leading-[30px] text-[#375069] text-center"
              data-aos="fade-up"
            >
              design, orchestrate, and serve fresh features across the
              organization.
            </p> */}
          </div>
          <div className="hidden lg:block">
            <div
              className="w-[100%] flex justify-between gap-[150px] mt-10"
              data-aos="fade-up"
            >
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
          </div>
          {/* -----------------components------------ */}
          <div className="w-full hidden lg:block">
            {activeTab === 1 && <EngageComp id={activeTab} />}
            {activeTab === 2 && <GrowComp id={activeTab} />}
            {activeTab === 3 && <MarketComp id={activeTab} />}
          </div>
          <div className="w-full lg:hidden">
            <EngageComp />
            <GrowComp />
            <MarketComp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatureComp;
