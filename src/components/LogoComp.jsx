import React, { useEffect } from "react";
import logo1 from "../assets/images/logo1.svg";
import logo2 from "../assets/images/logo2.svg";
import logo3 from "../assets/images/logo3.svg";
import logo4 from "../assets/images/logo4.svg";
import logo5 from "../assets/images/logo5.svg";
import AOS from "aos";

const LogoComp = () => {
  useEffect(() => {
    AOS.init({
      duration: 450,
      offset: 120,
      easing: "ease",
    });
  }, []);
  return (
    <div className="w-full bg-[#F0F4F7]" data-aos="fade-up">
      <div className="w-full max-w-[1535px] mx-auto  lg:px-[40px]">
        <div className="h-auto lg:h-[146px] flex flex-col justify-center items-center gap-5 py-2">
          {/* <h5 className="text-[15px] lg:text-[17px] font-[600] text-[#092B59] leading-[]28px text-center">
            From the team who pioneered the first feature store at Uber, Tecton
            powers trillions of AI predictions, from startups to the Fortune 50.
          </h5> */}
          <div className="flex items-center gap-[20px] sm:gap-[80px] lg:gap-[80px]">
            <img
              src={logo5}
              className="w-[70px] sm:-[135px] lg:w-[164px] lg:h-[45px] bg-contain"
            />
            <img
              src={logo3}
              className="w-[70px] sm:-[135px] lg:w-[164px] bg-contain"
            />
            {/* <img
              src={logo1}
              className="w-[50px] sm:w-[53px] lg:w-[56px] bg-contain"
            /> */}
            <img
              src={logo2}
              className="w-[70px] sm:-[135px] lg:w-[166px] bg-contain"
            />
            <img
              src={logo4}
              className="w-[70px] sm:-[135px] lg:w-[164px] lg:h-[45px] bg-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoComp;
