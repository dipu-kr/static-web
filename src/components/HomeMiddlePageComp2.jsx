import React from "react";
import user1 from "../assets/images/user1.svg";
import user2 from "../assets/images/user2.svg";
import user3 from "../assets/images/user3.svg";
import aiml from "../assets/images/aiml.svg";

const HomeMiddlePageComp2 = () => {
  const data = [
    {
      id: 1,
      icon: user1,
      title: "Employees",
    },
    {
      id: 1,
      icon: user3,
      title: "Human Resource",
    },
    {
      id: 1,
      icon: user2,
      title: "Leader",
    },
  ];
  return (
    <div className="bg-[#F0F4F7] px-[150px]">
      <div className="min-h-[90vh] h-auto pb-4 pt-[70px] flex flex-col justify-center">
        <div className="text-center">
          <h6 className="text-[18px] uppercase text-[#FF7301]">
            A complete platform
          </h6>
          <h1 className="text-[30px] font-bold">
            Design and Manage the Entire ML Feature Lifecycle
          </h1>
          <p className="w-[68%] text-[16px] mx-auto text-[#4C4C4C] mt-3">
            From simple declarative transformation logic to fresh feature values
            you can store, serve, and monitor, all in real-time.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-4 mt-5">
            {data?.map((val) => (
              <div
                key={val?.id}
                className="flex flex-col justify-center items-center gap-1"
              >
                <img src={val?.icon} alt="Icon" />
                <span className="text-[13px]">{val?.title}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <img src={aiml} alt="svg-img" className=" object-conatin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddlePageComp2;
