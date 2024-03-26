import React, { useState, useEffect } from "react";

import languageproficiency from "../../assets/images/languageproficiency.svg";
import culturalfitassesment from "../../assets/images/culturalfitassesment.svg";
import comparativeanalysis from "../../assets/images/comparativeanalysis.svg";

const LanguageProficiency = ({ activeTab }) => {
  const cardData = [
    {
      id: 1,
      title: "Language Proficiency",
      des: "Track health progress easily. Our dashboard consolidates activities and offers support, ensuring employee well-being stays a priority",
      image: languageproficiency,
    },
    {
      id: 2,
      title: "Cultural Fit Assessment",
      des: "Track health progress easily. Our dashboard consolidates activities and offers support, ensuring employee well-being stays a priority",
      image: culturalfitassesment,
    },
    {
      id: 3,
      title: "Comparative Analysis",
      des: "Track health progress easily. Our dashboard consolidates activities and offers support, ensuring employee well-being stays a priority",
      image: comparativeanalysis,
    },
  ];
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 250);

    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <div className="w-full min-h-[380px] lg:px-[40px] lg:bg-[#F0F4F7] rounded-[14px]">
      <div className="hidden lg:block">
        {cardData?.map(
          (val) =>
            val?.id === activeTab && (
              <div
                className="w-full flex items-center justify-between gap-10 py-[70px]"
                key={val?.id}
                style={{
                  opacity: showContent ? 1 : 0,
                  transition: showContent ? "opacity 0.4s ease" : "",
                }}
              >
                <div className="w-[50%]">
                  <h3 className="text-[20px] font-[600] leading-[40px]">
                    {val?.title}
                  </h3>
                  <p className="text-[16px] font-[400]">{val?.des}</p>
                </div>
                <div className="w-[50%]">
                  <img
                    src={val?.image}
                    alt="Image"
                    className="w-full lg:w-[600px] object-cover"
                  />
                </div>
              </div>
            )
        )}
      </div>
      {/* -----------for mobile and tab screen---------- */}
      <div className="lg:hidden">
        {cardData?.map((val) => (
          <div key={val?.id}>
            <div className="lg:hidden">
              <h3 className="flex pl-3">
                <span className="flex text-[22px] font-[600] text-[#1A73E8] leading-[30px] border-b-2 border-[#1A73E8]">
                  {val?.title}
                </span>
              </h3>
            </div>
            <div
              className="w-full bg-[#F0F4F7] flex items-center justify-between flex-col-reverse lg:flex-row gap-5 lg:gap-10 px-[12px] py-[20px] lg:py-[70px] rounded-[14px] mb-[30px]"
              data-aos="fade-up"
            >
              <div className="w-full lg:w-[50%]">
                <h3 className="text-[20px] font-[600] leading-[40px]">
                  {val?.title}
                </h3>
                <p className="text-[14px] lg:text-[16px] font-[400]">
                  {val?.des}
                </p>
              </div>
              <div className="w-full lg:w-[50%]">
                <img
                  src={val?.image}
                  alt="Image"
                  className="w-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageProficiency;
