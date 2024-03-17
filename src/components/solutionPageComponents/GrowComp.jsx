import React from "react";
import solutionGrowimg from "../../assets/images/solutionGrowimg.svg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const GrowComp = () => {
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
  return (
    <div className="w-full px-[150px] bg-[#F0F4F7] rounded-md">
      <div className="w-full flex items-center justify-between gap-10 py-[70px]">
        <div className="w-[45%]">
          <img src={solutionGrowimg} alt="Image" className="object-cover" />
        </div>
        <div className="w-[45%]">
          <h3 className="text-[18px] font-bold mb-5 flex">
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
              <p className="font-normal text-justify">{val?.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrowComp;
