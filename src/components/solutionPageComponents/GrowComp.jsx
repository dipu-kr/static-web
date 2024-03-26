import React, { useState, useEffect } from "react";
import solutionGrowimg from "../../assets/images/solutionGrowimg.svg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const GrowComp = ({ id }) => {
  const data = [
    {
      id: 1,
      icon: <IoIosCheckmarkCircleOutline />,
      para: "Amplify voices, share updates, and uncover insights with a diverse array of features including articles, polls, announcements, surveys, and pulse checks.",
    },
    {
      id: 2,
      icon: <IoIosCheckmarkCircleOutline />,
      para: "Dive deep into employee sentiments and preferences to bridge perspectives and encourage active participation.",
    },
    {
      id: 3,
      icon: <IoIosCheckmarkCircleOutline />,
      para: " Inspire with insightful reads on industry trends and personal growth while keeping everyone aligned with essential updates.",
    },
  ];
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(false);
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 200);

    return () => clearTimeout(timeout);
  }, [id]);

  return (
    <>
      <div className="lg:hidden pt-[25px]">
        <h3 className="flex pl-3">
          <span className="flex text-[22px] font-[600] text-[#1A73E8] leading-[30px] border-b-2 border-[#1A73E8]">
            Grow
          </span>
          <span>
            <FaPlus size={15} className="text-[#1A73E8]" />
          </span>
        </h3>
      </div>
      <div className="w-full px-[12px] lg:px-[40px] bg-[#F0F4F7] rounded-[14px]">
        <div
          className="w-full flex items-center justify-between flex-col lg:flex-row gap-5 lg:gap-10 py-[20px] lg:py-[70px]"
          style={{
            opacity: showContent ? 1 : 0,
            transition: showContent ? "opacity 0.4s ease" : "",
          }}
        >
          <div className="w-full lg:w-[50%]">
            <img
              src={solutionGrowimg}
              alt="Image"
              className="w-full lg:w-[600px] object-cover"
            />
          </div>
          <div className="w-full lg:w-[50%]">
            <h3 className="flex text-[22px] lg:text-[24px] font-[600] text-[#000000] leading-[30px] pb-5">
              <span>Grow</span>
              <span>
                <FaPlus size={15} />
              </span>
            </h3>
            {data?.map((val) => (
              <div
                key={val?.id}
                className="flex justify-center items-center gap-[15px] mb-5"
              >
                <p className="text-[20px] mt-1 text-[#1A73E8]">{val?.icon}</p>
                <p className="font-[400] text-[14px] lg:text-[16px]">
                  {val?.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GrowComp;
