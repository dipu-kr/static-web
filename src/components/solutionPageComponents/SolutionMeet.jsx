import React, { useState, useEffect } from "react";
import AOS from "aos";
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
        <div className="flex justify-center items-center flex-col lg:pt-[50px] pb-[20px] lg:pb-[80px]">
          <div
            className="flex gap-3 lg:gap-8 flex-col lg:flex-row mb-[35px]"
            data-aos="fade-up"
          >
            <h1 className="flex">
              <span className="text-[26px] lg:text-[36px] font-[600] leading-[46px]">
                Meet
              </span>
              <span>
                <FaPlus className="font-[600] text-[28px]" />
              </span>
            </h1>
            <div className="font-[400] text-[16px] lg:text-[24px] leading-[24px] lg:leading-[35px] text-[#000000] text-justify">
              <p>
                Empower your employees to thrive with Inimble Health's access to
                personalized sessions,
              </p>
              <p className="font-[400] text-[16px] lg:text-[24px] leading-[24px] lg:leading-[35px] text-[#000000] text-justify">
                expert consultations, and curated health packs. Dive into a
                wealth of healthand wellness{" "}
              </p>
            </div>
          </div>
          <div className="w-full hidden lg:block" data-aos="fade-up">
            <div className="w-[100%] flex justify-between mt-[65px] px-[9px]">
              {tabButtons?.map((val) => (
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
          </div>
          {/* -----------------components------------ */}
          <div
            className="w-full h-auto transition-all duration-600 ease-linear"
            data-aos="fade-up"
          >
            <PerformanceDashboard activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionMeet;
