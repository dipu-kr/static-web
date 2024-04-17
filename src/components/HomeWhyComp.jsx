import React, { useEffect } from "react";
import whyImg from "../assets/images/whyImg.svg";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import AOS from "aos";

const HomeWhyComp = () => {
  const data = [
    {
      id: 1,
      icon: <IoIosCheckmarkCircleOutline />,
      para: "Boost employee morale, productivity, and retention rates.",
    },
    {
      id: 2,
      icon: <IoIosCheckmarkCircleOutline />,
      para: "Simplify HR tasks and nurture continuous growth and innovation.",
    },
    {
      id: 3,
      icon: <IoIosCheckmarkCircleOutline />,
      para: "Enhance team collaboration and goal alignment.",
    },
    {
      id: 4,
      icon: <IoIosCheckmarkCircleOutline />,
      para: "Promote employee well-being and reduce absenteeism.",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 120,
      easing: "ease",
    });
  }, []);
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full max-w-[1535px] mx-auto px-[20px] sm:px-[40px] lg:px-[100px] xl:px-[150px]">
        <div
          className="w-full flex items-center justify-between flex-col-reverse lg:flex-row  py-8"
          data-aos="flip-left"
        >
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
                <p className="text-[16px] leading-[25px] font-[400]">
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
