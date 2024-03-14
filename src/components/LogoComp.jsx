import React from "react";
import logo1 from "../assets/images/logo1.svg";
import logo2 from "../assets/images/logo2.svg";
import logo3 from "../assets/images/logo3.svg";

const LogoComp = () => {
  return (
    <div className="bg-[#F0F4F7] px-[100px]">
      <div className="h-[200px] flex flex-col justify-center items-center gap-5">
        <h5 className="tracking-wide text-[18px]">
          From the team who pioneered the first feature store at Uber, Tecton
          powers trillions of AI predictions, from startups to the Fortune 50.
        </h5>
        <div className="flex gap-10">
          <img src={logo3} className="w-[130px] bg-contain" />
          <img src={logo1} className="w-[70px] bg-contain aspect-square" />
          <img src={logo2} className="w-[130px] bg-contain" />
        </div>
      </div>
    </div>
  );
};

export default LogoComp;
