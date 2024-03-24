import React, { useEffect } from "react";
import safespace from "../../assets/images/safespace.svg";
import AOS from "aos";

const SafeSpaceComp = () => {
  useEffect(() => {
    AOS.init({
      duration: 450,
      offset: 120,
      easing: "ease",
    });
  }, []);
  return (
    <div className="w-full min-h-[380px] px-[12px] lg:px-[40px] bg-[#F0F4F7] rounded-[14px]">
      <div
        className="w-full flex items-center justify-between flex-col lg:flex-row gap-5 lg:gap-10 py-[20px] lg:py-[70px]"
        data-aos="zoom-in-up"
      >
        <div className="w-full lg:w-[50%]">
          <div className="lg:hidden">
            <h3 className="flex">
              <span className="flex text-[20px] font-[600] text-[#000000] leading-[30px] border-b-2 border-blue-500">
                Safe Space
              </span>
            </h3>
          </div>
          <img
            src={safespace}
            alt="Image"
            className="w-full lg:w-[600px] object-cover"
          />
        </div>
        <div className="w-full lg:w-[50%]">
          <h3 className="text-[20px] font-[600] leading-[40px]">Safe Space</h3>
          <p className="text-[14px] lg:text-[16px] font-[400] text-justify">
            Track health progress easily. Our dashboard consolidates activities
            and offers support, ensuring employee well-being stays a priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafeSpaceComp;
