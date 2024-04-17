import React, { useEffect } from "react";
import solutionHeroImg from "../../assets/images/solutionHeroImg.svg";
import AOS from "aos";

const SolutionHeroComp = () => {
  useEffect(() => {
    AOS.init({
      duration: 550,
      offset: 120,
      easing: "ease",
    });
  }, []);
  return (
    <div className="w-full bg-[#ffffff]">
      <div className="w-full max-w-[1535px] mx-auto px-[20px] sm:px-[40px] lg:px-[100px] xl:px-[150px]">
        <div className="flex h-auto flex-col-reverse lg:flex-row gap-10 mb-[40px] lg:mb-[150px]">
          <div className="w-full lg:flex-1 mt-[30px] lg:mt-[100px]">
            <h1 className="text-[26px] lg:text-[50px] font-[600] leading-[30px] lg:leading-[53px]">
              Elevating Employee Engagement
            </h1>
            <h1 className="text-[#FF7301] text-[26px] lg:text-[50px] font-[600] leading-[30px] lg:leading-[53px]">
              Introducing Inimble
            </h1>
            <p className="text-[16px]  lg:text-[18px] font-[400] leading-[26px] lg:leading-[32px] mt-4">
              In today's dynamic workplace landscape, enhancing employee
              engagement and growth has become paramount for organizations
              striving to stand out amongst evolving engagement challenges.
              Recognizing the shifting needs of the modern workforce, Inimble
              emerges as a beacon of innovation, offering a holistic solution
              designed to enhance employee engagement, development, and overall
              wellbeing.
            </p>
          </div>
          <div className="w-full lg:flex-1 mt-[30px] lg:mt-[80px]">
            <img
              src={solutionHeroImg}
              alt="Image"
              className="w-[100%] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionHeroComp;
