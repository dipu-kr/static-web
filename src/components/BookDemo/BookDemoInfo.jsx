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
      <div className="w-full h-full bookDemoInfoBgImg rounded-r-md">
        <div className="h-full flex flex-col justify-around p-8">
          <div>
            <h1 className="text-[18px] font-bold tracking-wide mb-3">
              Heading Name
            </h1>
            <p className="text-[15px] tracking-wide">
              Get a chance to explore our exciting modules for free “Book Now”
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <img src={tab4} className="w-[60px] object-cover" alt="Icon" />
              <p className="flex items-center gap-1">
                <span>Engage</span>
                <span className="pb-2">
                  <HiPlus />
                </span>
              </p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <img src={tab5} className="w-[60px] object-cover" alt="Icon" />
              <p className="flex items-center gap-1">
                <span>Grow</span>
                <span className="pb-2">
                  <HiPlus />
                </span>
              </p>
            </div>
            <div className="flex items-end flex-col">
              <div className="mr-2">
                <img src={tab2} className="w-[60px] object-cover" alt="Icon" />
              </div>
              <p className="flex items-center gap-1">
                <span>Meet</span>
                <span className="pb-2">
                  <HiPlus />
                </span>
              </p>
            </div>
            <div>
              <img src={tab3} className="w-[60px] object-cover" alt="Icon" />
              <p className="flex items-center gap-1">
                <span>Health</span>
                <span className="pb-2">
                  <HiPlus />
                </span>
              </p>
            </div>
            <div className="flex justify-start items-center flex-col">
              <img src={tab6} className="w-[60px] object-cover" alt="Icon" />
              <p className="flex items-center gap-1">
                <span>Robo</span>
                <span className="pb-2">
                  <HiPlus />
                </span>
              </p>
            </div>
            <div className="flex items-end flex-col">
              <div className="mr-2">
                <img src={tab1} className="w-[60px] object-cover" alt="Icon" />
              </div>
              <p className="flex items-center gap-1">
                <span>Market</span>
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
