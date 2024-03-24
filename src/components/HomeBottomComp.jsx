import React, { useEffect } from "react";
import bgImg2 from "../assets/images/bgImg2.png";
import bottomLogo from "../assets/images/bottomLogo.png";
import AOS from "aos";

const HomeBottomComp = () => {
  useEffect(() => {
    AOS.init({
      duration: 450,
      offset: 120,
      easing: "ease",
    });
  }, []);
  return (
    <>
      {/* -----------------for desktop---------------------- */}
      <div className="w-full h-[500px] classBgImg hidden lg:block">
        <div className="flex justify-center relative" data-aos="fade-up">
          <div className="px-[15px]">
            <img src={bgImg2} alt="Img" className="object-contain" />
          </div>
          <div className="h-full flex justify-center items-center flex-col gap-6 absolute px-[30px]">
            <img
              src={bottomLogo}
              alt="bottom_logo"
              className="w-[169px] h-[56px] object-contain"
            />
            <div>
              <h5 className="text-[23px] font-[400] leading-[29px] text-white text-center">
                Take Your Organisation Employee Engagement &
              </h5>
              <h5 className="text-[23px] font-[400] leading-[29px] text-white text-center">
                Wellbeing to Next Level!
              </h5>
            </div>
            <button className="w-[242px] h-[47px] flex justify-center items-center text-[14px] font-normal tracking-wide bg-[#FF7301] text-white border-none rounded-full">
              Book Demo
            </button>
          </div>
        </div>
      </div>
      {/* -------------------for mobile--------------- */}
      <div className="w-full h-[400px] bg-img-2 block lg:hidden">
        <div className="flex justify-center relative">
          <div className="w-full bg-[#092B59] h-[400px] lg:hidden opacity-[0.9]"></div>
          <div
            className="h-full flex justify-center items-center flex-col gap-6 absolute px-[30px]"
            data-aos="fade-up"
          >
            <img
              src={bottomLogo}
              alt="bottom_logo"
              className="w-[169px] h-[56px] object-contain z-10"
            />
            <div>
              <h5 className="text-[23px] font-[400] leading-[29px] text-white text-center">
                Take Your Organisation Employee Engagement &
              </h5>
              <h5 className="text-[23px] font-[400] leading-[29px] text-white text-center">
                Wellbeing to Next Level!
              </h5>
            </div>
            <button className="w-[242px] h-[47px] flex justify-center items-center text-[14px] font-normal tracking-wide bg-[#FF7301] text-white border-none rounded-full">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBottomComp;
