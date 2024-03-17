import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import PerformanceDashboard from "./PerformanceDashboard";

const SolutionMeet = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const tabButtons = [
    {
      id: 1,
      tab: 1,
      title: "Performance Dashboard",
    },
    {
      id: 2,
      tab: 2,
      title: "Milestones",
    },
    {
      id: 3,
      tab: 3,
      title: "To-Dos",
    },
    {
      id: 4,
      tab: 4,
      title: "Meetings",
    },
    {
      id: 5,
      tab: 5,
      title: "Processes",
    },
    {
      id: 6,
      tab: 6,
      title: "Strategy Cockpit",
    },
  ];
  return (
    <div className="w-full px-[150px]">
      <div className="flex justify-center items-center flex-col pt-[50px] pb-[80px]">
        <div className="flex gap-8 mt-5">
          <h1 className="flex text-[23px] font-bold">
            <span>Meet</span>
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
          {tabButtons?.map((val) => (
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
          <PerformanceDashboard activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default SolutionMeet;
