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
        <div className="flex gap-8 mt-5">
          <h1 className="flex text-[20px] font-bold">
            <span>Health</span>
            <span>
              <FaPlus />
            </span>
          </h1>
          <div className="font-normal">
            <p>
              Empower your employees to thrive with Inimble Health's access to
              personalized sessions,
            </p>
            <p>
              expert consultations, and curated health packs. Dive into a wealth
              of healthand wellness{" "}
            </p>
          </div>
        </div>
        <div className="w-[100%] flex justify-between mt-[65px]">
          {tabButton?.map((val) => (
            <button
              className={`text-center py-1 px-5 text-[16px] font-bold border-b-2 border-white hover:bg-blue-100 ${
                activeTab === val?.tab ? "text-blue-500 border-blue-500" : ""
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
