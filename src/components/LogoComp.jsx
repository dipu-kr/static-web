import React from "react";
import logo1 from "../assets/images/logo1.svg";
import logo2 from "../assets/images/logo2.svg";
import logo3 from "../assets/images/logo3.svg";

const LogoComp = () => {
  return (
    <div className="w-full bg-[#F0F4F7]">
      <div className="w-full max-w-[1535px] mx-auto px-[150px]">
        <div className="h-[200px] flex flex-col justify-center items-center gap-5">
          <h5 className=" text-[17px] font-[600] text-[#092B59] leading-[]28px">
            From the team who pioneered the first feature store at Uber, Tecton
            powers trillions of AI predictions, from startups to the Fortune 50.
          </h5>
          <div className="flex gap-10">
            <img src={logo3} className="w-[164px] bg-contain" />
            <img src={logo1} className="w-[56px] bg-contain" />
            <img src={logo2} className="w-[166px] bg-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoComp;
