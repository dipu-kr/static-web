import React from "react";
import engage from "../assets/images/engage.svg";
import grow from "../assets/images/grow.svg";
import meet from "../assets/images/meet.svg";
import market from "../assets/images/market.svg";
import { GoArrowRight } from "react-icons/go";

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
    <div className=" bg-white px-[150px] overflow-y-hidden">
      <div className=" h-auto py-[91px] flex flex-col justify-around">
        <div className="text-center">
          <h6 className="text-[16.2px] font-[600] leading-[19.98px] uppercase text-[#092B59] mb-5">
            More than just a feature store
          </h6>
          <h1 className="text-[38px] font-[600] text-[#000E21] leading-[46px]">
            Making Work Fun with Super Features
          </h1>
          <h1 className="text-[38px] font-[600] text-[#000E21] leading-[46px]">
            for Super Teams
          </h1>
          <p className="w-[70%] text-[24px] font-[400] leading-[35px] mx-auto text-[#4C4C4C] mt-3">
            Empower your workforce for an ever-changing landscape with TAVA's
            dynamic features. Adapt, evolve, and excel effortlessly. Streamline
            operations, harness insights, and craft engaging experiences.
            Welcome to the future of employee engagement.
          </p>
        </div>
        <div className="flex gap-6 mt-[90px]">
          {data?.map((item) => (
            <div
              key={item?.id}
              className="flex-1 flex flex-col gap-4 justify-between items-center"
            >
              <div className="w-[128px] h-[128px]">
                <img
                  src={item?.img}
                  alt="svg-img"
                  className="w-full object-contain"
                />
              </div>
              <h4>
                <span className="text-[26px] font-[600] leading-[31.85px]">
                  {item?.heading}
                </span>
                <span className="text-[45px] font-[400] leading-[55.13px]">
                  +
                </span>
              </h4>
              <p className="text-center text-[16px] font-[400] text-[#000000] leading-[19.41px]">
                {item?.para}
              </p>
              <button className="w-[180px] h-[42px] bg-[#FF7301] text-[16px] leading-[600] text-[#FFFFFF] flex items-center justify-center gap-1 rounded">
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
