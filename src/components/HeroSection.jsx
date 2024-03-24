import React, { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
// import heroImg from "../assets/images/homeimg.png";
import heroImg2 from "../assets/images/heroImg2.png";
import AOS from "aos";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      offset: 100,
      easing: "ease",
    });
  }, []);
  return (
    <div className="w-full max-w-[1535px] mx-auto h-auto flex flex-col-reverse lg:flex-row items-center pb-[60px]">
      <div
        className="w-[100%] lg:w-[50%] px-[12px] sm:px-[40px] lg:pl-[100px] xl:pl-[150px]"
        data-aos="zoom-in-up"
      >
        <div className="w-full flex pt-[30px] sm:pt-[60px] md:pt-[140px] lg:pt-[85.92px]">
          <div className="w-full">
            <p className="flex mb-2 gap-4 text-[#092B59]">
              <span className="font-[600] text-[11px] lg:text-[16.2px] leading-[19.98px]">
                ENGAGE
                <span className="font-[600] text-[20px] lg:text-[26.2px] leading-[19.98px]">
                  +
                </span>{" "}
                <span className="font-[600] text-[16.] leading-[19.98px]">
                  .
                </span>
              </span>{" "}
              <span className="font-[600] text-[11px] lg:text-[16.2px] leading-[19.98px]">
                GROW
                <span className="font-[600] text-[20px] lg:text-[26.2px] leading-[19.98px]">
                  +
                </span>{" "}
                <span className="font-[600] text-[16.] leading-[19.98px]">
                  .
                </span>
              </span>{" "}
              <span className="font-[600] text-[11px] lg:text-[16.2px] leading-[19.98px]">
                MEET
                <span className="font-[600] text-[20px] lg:text-[26.2px] leading-[19.98px]">
                  +
                </span>{" "}
                <span className="font-[600] text-[16.] leading-[19.98px]">
                  .
                </span>
              </span>{" "}
              <span className="font-[600] text-[11px] lg:text-[16.2px] leading-[19.98px]">
                HEALTH
                <span className="font-[600] text-[20px] lg:text-[26.2px] leading-[19.98px]">
                  +
                </span>{" "}
                <span className="font-[600] text-[16.] leading-[19.98px]">
                  .
                </span>
              </span>{" "}
            </p>
            <h1 className="text-[24px] lg:text-[38px] font-[600] leading-[30px] lg:leading-[46px]">
              Make Your{" "}
              <span className="text-[#FF7301]">workplace awesome</span> with{" "}
              <span className="text-[#FF7301]">Employee Engagement!</span>
            </h1>
            <p className="w-full sm:w-[100%] lg:w-[90%] mt-[16px] text-justify font-[400] text-[16px] lg:text-[24px] leading-[24px] lg:leading-[30px] text-[#092B59]">
              Empower your workforce for an ever-changing landscape with
              Inimble's dynamic features. Adapt, evolve, and excel effortlessly.
            </p>
            <div className="mt-7 flex justify-between gap-5 md:justify-start">
              <input
                placeholder="Work email*"
                className="w-[185px] lg:w-[250px] h-[40px] border border-gray-300 bg-[#F0F4F7] px-3 outline-none py-[6px] rounded-[40px] placeholder:text-[15px] text-[15px"
              />
              <button className="w-[126px] h-[40px]  rounded-full flex justify-center items-center text-[14.2px] pt-[3px] border-2 border-[#FF7301] bg-[#FF7301] text-white">
                Book Demo
              </button>
            </div>
            <div className="mt-5">
              <button className="border-none text-[14.4px] text-[#1A73E8] font-[400] leading-[30.4px] flex items-center gap-1">
                <span>Or contact sales</span>
                <span>
                  <GoArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* -------------right content-------------- */}
      <div className="w-[100%] lg:w-[50%] h-[270px] sm:h-[440px] md:h-[500px] lg:h-[500px] relative">
        <div className="w-full pl-4 lg:pl-0 lg:flex lg:justify-end  absolute right-[-65px] top-[-15px] sm:top-[-70px] sm:right-[-150px] md:top-[-40px] md:right-[-170px] lg:top-[-50px] lg:right-[-148px]">
          <img
            src={heroImg2}
            alt="img"
            className="w-full lg:w-[100%] bg-cover"
            data-aos="zoom-in-up"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
