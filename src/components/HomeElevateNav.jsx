import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";

import HomeElevateDetails from "./HomeElevateDetails";

const HomeElevateNav = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const tabList = [
    {
      id: 1,
      tab: 1,
      title: "Engage",
    },
    {
      id: 2,
      tab: 2,
      title: "Grow",
    },
    {
      id: 3,
      tab: 3,
      title: "Meet",
    },
    {
      id: 4,
      tab: 4,
      title: "Health",
    },
    {
      id: 5,
      tab: 5,
      title: "Robo",
    },
    {
      id: 6,
      tab: 6,
      title: "Market",
    },
  ];

  return (
    <div className="w-full px-[150px]">
      <div className="mt-5">
        {/* -------------tab- div------ */}
        <div className="w-full  flex justify-between">
          {/* {data?.map((val) => (
            <div
              key={val?.id}
              className="flex items-center gap-3 mb-3 py-1 px-2 "
            >
              <h4 className="flex">
                <span className="text-[22px] font-[600]">{val?.title}</span>
                <span className="text-[22px] font-[600]">
                  <HiPlus />
                </span>
              </h4>
            </div>
          ))} */}
          {tabList?.map((val) => (
            <button
              key={val?.id}
              className={`flex text-center py-1 text-[21px] font-[600] leading-[30px] border-b-2 hover:text-[#1A73E8] ${
                activeTab === val?.tab
                  ? "text-blue-500 border-[#1A73E8]"
                  : "border-white"
              }`}
              onClick={() => handleTabClick(val?.tab)}
            >
              <span className="text-[22px] font-[600]">{val?.title}</span>
              <span className="text-[22px] font-[600]">
                <HiPlus />
              </span>
            </button>
          ))}
        </div>
        {/* -------------content div--------------- */}
        <div className="w-[100%] bg-[#F0F4F7] border border-white rounded-md mb-5">
          <HomeElevateDetails activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
};

export default HomeElevateNav;
