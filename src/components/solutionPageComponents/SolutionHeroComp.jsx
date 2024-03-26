import React, { useEffect } from "react";
import solutionheroimg from "../../assets/images/solutionheroimg.svg";
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
          <div
            className="w-full lg:flex-1 mt-[30px] lg:mt-[142px]"
            data-aos="zoom-in-up"
          >
            <h1 className="text-[26px] lg:text-[50px] font-[600] leading-[30px] lg:leading-[53px]">
              Real-Time ML Drives
            </h1>
            <h1 className="text-[26px] lg:text-[50px] font-[600] leading-[30px] lg:leading-[53px]">
              Real Value
            </h1>
            <p className="text-[16px]  lg:text-[18px] font-[400] leading-[26px] lg:leading-[32px] mt-4">
              Whether you’re already deploying real-time predictions or about
              to, Tecton connects to leading infrastructure solutions and tools
              to make your real- time ML journey as successful as possible.
            </p>
          </div>
          <div className="w-full lg:flex-1 mt-[60px]" data-aos="zoom-in-up">
            <img
              src={solutionheroimg}
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
