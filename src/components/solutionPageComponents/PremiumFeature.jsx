import React, { useState, useEffect } from "react";
import HealthDashboard from "./HealthDashboard";
import HealthFixComp from "./HealthFixComp";
import ConnsultationComp from "./ConnsultationComp";
import SafeSpaceComp from "./SafeSpaceComp";
import OfflineActivity from "./OfflineActivity";
import HealthPacks from "./HealthPacks";
import { FaPlus } from "react-icons/fa";
import AOS from "aos";

const PremiumFeature = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const tabButton = [
    {
      id: 1,
      tab: 1,
      title: "Health Dashboard",
    },
    {
      id: 2,
      tab: 2,
      title: "Health Fix",
    },
    {
      id: 3,
      tab: 3,
      title: "1-1 Connsultation",
    },
    {
      id: 4,
      tab: 4,
      title: "Safe Space",
    },
    {
      id: 5,
      tab: 5,
      title: "Schedule Offline Activity",
    },
    {
      id: 6,
      tab: 6,
      title: "Health Packs",
    },
  ];

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
        <div className="flex justify-center items-center flex-col py-[32px] lg:py-[100px]">
          <div>
            <h1
              className="text-[26px] lg:text-[42px] font-[700] leading-[46px] text-center"
              data-aos="fade-up"
            >
              Our Premium Features
            </h1>
            <p
              className="font-[400] text-[16px] lg:text-[22px] leading-[24px] lg:leading-[30px] text-center text-[#375069] mt-3"
              data-aos="fade-up"
            >
              Deploy Tecton in your existing environment and immediately benefit
              from a central source of truth to design, orchestrate, and serve
              fresh features across the organization.
            </p>
            {/* <p
              className="font-[400] text-[16px] lg:text-[22px] leading-[24px] lg:leading-[30px] text-center text-[#375069]"
              data-aos="fade-up"
            >
              design, orchestrate, and serve fresh features across the
              organization.
            </p> */}
          </div>
          <div
            className="flex gap-2 lg:gap-8 mt-[40px] lg:mt-[63px] mb-[30px] lg:mb-0 flex-col lg:flex-row"
            data-aos="fade-up"
          >
            <h1 className="flex">
              <span className="text-[26px] lg:text-[36px] font-[600] leading-[46px]">
                Health
              </span>
              <span>
                <FaPlus className="font-[600] text-[21px] lg:text-[28px]" />
              </span>
            </h1>
            <div className="font-[400] text-[16px] lg:text-[24px] leading-[24px] lg:leading-[35px] text-[#000000]">
              <p>
                Empower your employees to thrive with Inimble Health's access to
                personalized sessions, expert consultations, and curated health
                packs. Dive into a wealth of healthand wellness
              </p>
              {/* <p className="font-[400] text-[16px] lg:text-[24px] leading-[24px] lg:leading-[35px] text-[#000000]">
                expert consultations, and curated health packs. Dive into a
                wealth of healthand wellness{" "}
              </p> */}
            </div>
          </div>
          <div className="w-full hidden lg:block" data-aos="fade-up">
            <div className="w-[100%] flex justify-between mt-[60px] px-2">
              {tabButton?.map((val) => (
                <button
                  key={val?.id}
                  className={`text-center py-1 px-5 text-[21px] font-[600] leading-[24px] border-b-2 hover:text-[#1A73E8] ${
                    activeTab === val?.tab
                      ? "text-blue-500 border-[#1A73E8]"
                      : "border-white"
                  }`}
                  onClick={() => handleTabClick(val?.tab)}
                >
                  {val?.title}
                </button>
              ))}
            </div>
          </div>
          {/* -----------------components------------ */}
          <div
            className="w-full h-auto transition-all duration-600 ease-linear hidden lg:block"
            data-aos="fade-up"
          >
            {activeTab === 1 && <HealthDashboard id={activeTab} />}
            {activeTab === 2 && <HealthFixComp id={activeTab} />}
            {activeTab === 3 && <ConnsultationComp id={activeTab} />}
            {activeTab === 4 && <SafeSpaceComp id={activeTab} />}
            {activeTab === 5 && <OfflineActivity id={activeTab} />}
            {activeTab === 6 && <HealthPacks id={activeTab} />}
          </div>
          {/* ------------for mobile and tab screen----------- */}
          <div className="w-full h-auto transition-all duration-600 ease-linear flex flex-col lg:hidden">
            <HealthDashboard />
            <HealthFixComp />
            <ConnsultationComp />
            <SafeSpaceComp />
            <OfflineActivity />
            <HealthPacks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumFeature;
