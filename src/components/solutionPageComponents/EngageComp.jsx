import React from "react";
import solutionEngageimg from "../../assets/images/solutionEngageimg.svg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const EngageComp = () => {
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
    <div className="w-full px-[40px] bg-[#F0F4F7] rounded-[14px]">
      <div className="w-full flex items-center justify-between gap-10 py-[70px]">
        <div className="w-[50%]">
          <img
            src={solutionEngageimg}
            alt="Image"
            className="w-[600px] object-cover"
          />
        </div>
        <div className="w-[50%]">
          <h3 className="mb-5 flex">
            <span className="flex text-[24px] font-[600] text-[#000000] leading-[30px]">
              Engage
            </span>
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
              <p className="font-[400] text-[16px] text-justify">{val?.para}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngageComp;
