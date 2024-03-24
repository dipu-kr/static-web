import React, { useState, useEffect } from "react";
import { HiPlus } from "react-icons/hi";
import HomeElevateDetails from "./HomeElevateDetails";
import AOS from "aos";

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

  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 120,
      easing: "ease",
    });
  }, []);

  return (
    <div className="w-full  bg-[#ffffff]">
      <div className="w-full max-w-[1535px] mx-auto px-[20px] sm:px-[40px] lg:px-[100px] xl:px-[150px]">
        <div className="mt-5" data-aos="fade-up">
          {/* -------------tab- div------ */}
          <div className="hidden lg:block">
            <div className="w-full flex justify-between px-4">
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
          </div>

          {/* -------------content div--------------- */}
          <div className="w-[100%] lg:bg-[#F0F4F7] border border-white rounded-[14px] lg:mb-5">
            <HomeElevateDetails activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeElevateNav;
