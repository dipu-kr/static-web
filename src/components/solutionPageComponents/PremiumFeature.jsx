import React, { useState } from "react";
import HealthDashboard from "./HealthDashboard";
import HealthFixComp from "./HealthFixComp";
import ConnsultationComp from "./ConnsultationComp";
import SafeSpaceComp from "./SafeSpaceComp";
import OfflineActivity from "./OfflineActivity";
import HealthPacks from "./HealthPacks";
import { FaPlus } from "react-icons/fa";

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
  return (
    <div className="w-full px-[150px]">
      <div className="flex justify-center items-center flex-col py-[100px]">
        <div>
          <h1 className="text-[42px] font-[700] leading-[46px] text-center">
            Our Premium Features
          </h1>
          <p className="font-[400] text-[22px] leading-[30px] text-center text-[#375069] mt-3">
            Deploy Tecton in your existing environment and immediately benefit
            from a central source of truth to
          </p>
          <p className="font-[400] text-[22px] leading-[30px] text-center text-[#375069]">
            design, orchestrate, and serve fresh features across the
            organization.
          </p>
        </div>
        <div className="flex gap-8 mt-[63px]">
          <h1 className="flex">
            <span className="text-[36px] font-[600] leading-[46px]">
              Health
            </span>
            <span>
              <FaPlus className="font-[600] text-[28px]" />
            </span>
          </h1>
          <div className="font-[400] text-[24px] leading-[35px] text-[#000000]">
            <p>
              Empower your employees to thrive with Inimble Health's access to
              personalized sessions,
            </p>
            <p className="font-[400] text-[24px] leading-[35px] text-[#000000]">
              expert consultations, and curated health packs. Dive into a wealth
              of healthand wellness{" "}
            </p>
          </div>
        </div>
        <div className="w-[100%] flex justify-between mt-[60px]">
          {tabButton?.map((val) => (
            <button
              key={val?.id}
              className={`text-center py-1 px-5 text-[21px] font-[600] leading-[30px] border-b-2 hover:text-[#1A73E8] ${
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
        {/* -----------------components------------ */}
        <div className="w-full h-auto transition-all duration-600 ease-linear">
          {activeTab === 1 && <HealthDashboard />}
          {activeTab === 2 && <HealthFixComp />}
          {activeTab === 3 && <ConnsultationComp />}
          {activeTab === 4 && <SafeSpaceComp />}
          {activeTab === 5 && <OfflineActivity />}
          {activeTab === 6 && <HealthPacks />}
        </div>
      </div>
    </div>
  );
};

export default PremiumFeature;
