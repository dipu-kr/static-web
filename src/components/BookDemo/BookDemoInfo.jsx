import React from "react";
import tab1 from "../../assets/images/tab1.svg";
import tab2 from "../../assets/images/tab2.svg";
import tab3 from "../../assets/images/tab3.svg";
import tab4 from "../../assets/images/tab4.svg";
import tab5 from "../../assets/images/tab5.svg";
import tab6 from "../../assets/images/tab6.svg";
import { HiPlus } from "react-icons/hi";

const BookDemoInfo = () => {
  return (
    <div className="w-[50%] text-white">
      <div className="w-full h-full bookDemoInfoBgImg rounded-r-[14px]">
        <div className="h-full flex flex-col justify-around p-8">
          <div>
            <h1 className="text-[34px] font-[600] text-[#F3F3F3] leading-[42px] tracking-wide pb-3">
              Heading Name
            </h1>
            <p className="text-[24px] font-[400] text-[#F3F3F3] leading-[29px]">
              Get a chance to explore our exciting modules for free “Book Now”
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <img src={tab4} className="w-[64px] object-cover" alt="Icon" />
              <p className="flex items-center gap-1">
                <span className="text-[18px] font-[400] leading-[31px]">
                  Engage
                </span>
                <span className="pb-2">
                  <HiPlus />
                </span>
              </p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <img src={tab5} className="w-[64px] object-cover" alt="Icon" />
              <p className="flex items-center gap-1">
                <span className="text-[18px] font-[400] leading-[31px]">
                  Grow
                </span>
                <span className="pb-2">
                  <HiPlus />
                </span>
              </p>
            </div>
            <div className="flex items-end flex-col">
              <div className="mr-2">
                <img src={tab2} className="w-[64px] object-cover" alt="Icon" />
              </div>
              <p className="flex items-center gap-1">
                <span className="text-[18px] font-[400] leading-[31px]">
                  Meet
                </span>
                <span className="pb-2">
                  <HiPlus />
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <img src={tab3} className="w-[60px] h-[58px]" alt="Icon" />
              <p className="flex items-center gap-1">
                <span className="text-[18px] font-[400] leading-[31px]">
                  Health
                </span>
                <span className="pb-2">
                  <HiPlus />
                </span>
              </p>
            </div>
            <div className="flex justify-start items-center gap-1 flex-col">
              <img src={tab6} className="w-[60px] object-cover" alt="Icon" />
              <p className="flex items-center gap-1">
                <span className="text-[18px] font-[400] leading-[31px]">
                  Robo
                </span>
                <span className="pb-2">
                  <HiPlus />
                </span>
              </p>
            </div>
            <div className="flex items-end flex-col">
              <div className="mr-2">
                <img src={tab1} className="w-[64px] object-cover" alt="Icon" />
              </div>
              <p className="flex items-center gap-1">
                <span className="text-[18px] font-[400] leading-[31px]">
                  Market
                </span>
                <span className="pb-2">
                  <HiPlus />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemoInfo;
