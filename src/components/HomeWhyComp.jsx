import React from "react";
import whyImg from "../assets/images/whyImg.svg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const HomeWhyComp = () => {
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
    {
      id: 4,
      icon: <IoIosCheckmarkCircleOutline />,
      para: " Inspire with insightful reads on industry trends and personal growth while keeping everyone aligned with essential updates.",
    },
  ];
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full max-w-[1535px] mx-auto px-[20px] sm:px-[40px] lg:px-[100px] xl:px-[150px]">
        <div className="w-full flex items-center justify-between flex-col-reverse lg:flex-row  py-8">
          <div className="w-full lg:w-[50%] flex justify-center">
            <img src={whyImg} alt="Image" className="object-cover" />
          </div>
          <div className="w-full lg:w-[50%]">
            <h3 className="text-[26px] font-[600] leading-[32px] mb-5">
              Why choose Inimble{" "}
            </h3>
            {data?.map((val) => (
              <div key={val?.id} className="flex gap-[6px] mb-5">
                <p className="text-[20px] mt-1 text-[#1A73E8]">{val?.icon}</p>
                <p className="text-[16px] leading-[25px] font-[400] text-justify">
                  {val?.para}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyComp;
