import React, { useEffect } from "react";
import user1 from "../assets/images/user1.svg";
import user2 from "../assets/images/user2.svg";
import user3 from "../assets/images/user3.svg";
import aiml from "../assets/images/aiml.svg";
import AOS from "aos";

const HomeMiddlePageComp2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 120,
      easing: "ease",
    });
  }, []);
  const data = [
    {
      id: 1,
      icon: user1,
      title: "Employees",
    },
    {
      id: 2,
      icon: user3,
      title: "Human Resource",
    },
    {
      id: 3,
      icon: user2,
      title: "Leader",
    },
  ];
  return (
    <div className="w-full bg-[#F0F4F7]">
      <div className="w-full max-w-[1535px] mx-auto px-[20px] sm:px-[40px] lg:px-[100px] xl:px-[150px]">
        <div className="pt-[35px] lg:pt-[70px] h-auto pb-4  flex flex-col justify-center">
          <div className="text-center" data-aos="fade-up">
            {/* <h6 className="text-[15px] lg:text-[18px] font-[700] leading-[19.98px] uppercase text-[#FF7301] mb-2 lg:mb-0">
              A complete platform
            </h6> */}
            <h1 className="text-[24px] lg:text-[36px] font-[600] text-[#022638] leading-[30px] lg:leading-[43.92px]">
              Elevating Employee Engagement
            </h1>
            <h1 className="text-[24px] lg:text-[36px] font-[600] text-[#FF7301] leading-[30px] lg:leading-[43.92px]">
              Introducing Inimble
            </h1>
            {/* <p className="text-[16px] lg:text-[18px] font-[400] text-[#022638] leading-[26px] lg:leading-[34.2px] mt-[10px]">
              From simple declarative transformation logic to fresh feature
              values you can store, serve, and monitor, all in real-time.
            </p> */}
          </div>
          <div>
            <div className="flex items-center justify-center gap-4 mt-5">
              {data?.map((val) => (
                <div
                  key={val?.id}
                  className="flex flex-col justify-center items-center gap-1"
                  data-aos="fade-up"
                >
                  <img
                    src={val?.icon}
                    alt="Icon"
                    className="w-[32.35px] h-[48px]"
                  />
                  <span className="text-[#000000] text-[10px] font-[400]">
                    {val?.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center  mb-[30px] mt-[25px] lg:mb-[50px] items-center ">
              <img
                src={aiml}
                alt="chart-img"
                className=" object-conatin"
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMiddlePageComp2;
