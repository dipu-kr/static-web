import React from "react";
import engage from "../assets/images/engage.svg";
import grow from "../assets/images/grow.svg";
import meet from "../assets/images/meet.svg";
import market from "../assets/images/market.svg";
import { GoArrowRight } from "react-icons/go";
import { FaPlus } from "react-icons/fa";

const HomeMiddlePageComp = () => {
  const data = [
    {
      id: 1,
      img: engage,
      heading: "Engage",
      para: "Create happy moments that foster teamwork and joy.",
    },
    {
      id: 2,
      img: grow,
      heading: "Grow",
      para: "Elevate team spirit and cultivate shared experiences",
    },
    {
      id: 3,
      img: meet,
      heading: "Meet",
      para: "Fuel growth one lesson at a time.",
    },
    {
      id: 4,
      img: market,
      heading: "Market",
      para: "Fuel growth one lesson at a time.",
    },
  ];
  return (
    <div className=" bg-white px-[100px]">
      <div className="min-h-[90vh] h-auto py-4 flex flex-col justify-around">
        <div className="text-center">
          <h6 className="text-[18px] uppercase text-[#092B59]">
            More than just a feature store
          </h6>
          <h1 className="text-[30px] font-bold">
            Making Work Fun with Super Features
          </h1>
          <h1 className="text-[30px] font-bold">for Super Teams</h1>
          <p className="w-[68%] text-[17px] mx-auto text-[#4C4C4C] mt-3">
            Empower your workforce for an ever-changing landscape with TAVA's
            dynamic features. Adapt, evolve, and excel effortlessly. Streamline
            operations, harness insights, and craft engaging experiences.
            Welcome to the future of employee engagement.
          </p>
        </div>
        <div className="flex gap-4">
          {data?.map((item) => (
            <div
              key={item?.id}
              className="flex-1 flex flex-col gap-4 justify-between items-center"
            >
              <div className="w-[130px] h-[130px]">
                <img
                  src={item?.img}
                  alt="svg-img"
                  className="w-full object-contain"
                />
              </div>
              <h4 className="text-[20px] font-bold relative">
                <span>{item?.heading}</span>
                <span className="absolute bottom-[6px] ml-[5px] text-[20px]">
                  <FaPlus />
                </span>
              </h4>
              <p className="text-center leading-4">{item?.para}</p>
              <button className="bg-[#FF7301] text-white flex items-center gap-2 px-6 py-2 rounded">
                Learn More
                <span>
                  <GoArrowRight />
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeMiddlePageComp;
