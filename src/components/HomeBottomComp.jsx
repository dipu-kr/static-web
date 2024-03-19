import React from "react";
import bgImg2 from "../assets/images/bgImg2.png";
import bottomLogo from "../assets/images/bottomLogo.png";

const HomeBottomComp = () => {
  return (
    <div className="w-full h-[500px] classBgImg">
      <div className="flex justify-center relative">
        <div>
          <img src={bgImg2} alt="Img" className="object-contain" />
        </div>
        <div className="h-full flex justify-center items-center flex-col gap-6 absolute">
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
  );
};

export default HomeBottomComp;
