import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    const duration = 1500;
    const start = window.pageYOffset;
    const startTime =
      "now" in window.performance ? performance.now() : new Date().getTime();

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const scroll = () => {
      const currentTime =
        "now" in window.performance ? performance.now() : new Date().getTime();
      const timeElapsed = currentTime - startTime;
      window.scrollTo(0, easeInOutQuad(timeElapsed, start, -start, duration));
      if (timeElapsed < duration) {
        requestAnimationFrame(scroll);
      } else {
        window.scrollTo(0, 0);
      }
    };

    scroll();
  };

  return (
    <div className="bg-[#1F1F1F]">
      <footer className="w-full max-w-[1535px] mx-auto min-h-[400px] h-auto px-[12px] sm:px-[30px] lg:px-[50px] xl:px-[100px] py-10 flex justify-center items-center flex-col gap-10 bg-[#1F1F1F] text-white tracking-wide">
        <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-6 px-4 md:px-6 lg:px-0">
          <div className="flex flex-col">
            <h6 className="font-[600] text-[16px] leading-[20px]">
              Contact Us
            </h6>
            <div className="mt-2 md:mt-0">
              <p className="text-[14px] lg:text-[15px] font-[400] leading-[30px]">
                Sales Ph No.
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[18px]">
                  <IoIosCall />
                </span>
                <span className="text-[12px] lg:text-[14px] font-[400]">
                  +91 8328 211 174
                </span>
              </p>
            </div>
            <div className="mt-2 md:mt-0">
              <p className=" text-[14px] lg:text-[15px] font-[400] leading-[30px]">
                Sales Mail ID
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[15px]">
                  <MdEmail />
                </span>
                <span className="text-[12px] lg:text-[14px] font-[400]">
                  sales@tava.one
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-[600] text-[16px] leading-[20px]">
              Key Features
            </h6>
            <p className="text-[12px] lg:text-[14px] font-[400]">Engage</p>
            <p className="text-[12px] lg:text-[14px] font-[400]">
              Learning Management
            </p>
            <p className="text-[12px] lg:text-[14px] font-[400]">
              Vendor Market Place
            </p>
            <p className="text-[12px] lg:text-[14px] font-[400]">Events</p>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-[600] text-[16px] leading-[20px]">
              Premium Features
            </h6>
            <p className="text-[12px] lg:text-[14px] font-[400]">
              Candidate Analyser
            </p>
            <p className="text-[12px] lg:text-[14px] font-[400]">
              L10 Application
            </p>
            <p className="text-[12px] lg:text-[14px] font-[400]">Health</p>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-[600] text-[16px] leading-[20px]">
              Quick Links
            </h6>
            <p className="text-[12px] lg:text-[14px] font-[400]">
              Perspective Corner
            </p>
            <p className="text-[12px] lg:text-[14px] font-[400]">Pricing</p>
            <p className="text-[12px] lg:text-[14px] font-[400]">Contact US</p>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-[600] text-[16px] leading-[20px]">Address</h6>
            <div className="flex gap-2 justify-center">
              <span className="text-[17px]">
                <FaLocationDot />
              </span>
              <p className="text-[12px] lg:text-[14px] font-[400] leading-[24px]">
                3rd Floor, Trendz BSR, Plot No: 25, 10, Greenland Colony,
                Madhava Reddy Colony, Gachibowli, Hyderabad, Telangana 500032
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-10 flex-col">
          <div className="w-full flex flex-col md:flex-row gap-5 lg:gap-0 sm:justify-between  md:px-6 lg:px-0 text-center">
            <p className="text-[11px] leading-[14px] lg:text-[14px] font-[600] lg:leading-[20px]">
              @2024 Inimble Technologies Pvt. Ltd. All right reserved
            </p>
            <p className="flex justify-between gap-6 md:gap-0 text-[11px] leading-[14px] lg:text-[14px] font-[600] lg:leading-[20px]">
              <span className="text-center">Terms of service</span>
              <span className="text-center">Privacy Policy</span>
              <span className="text-center">Security Policy</span>
            </p>
          </div>
          <div>
            <button
              onClick={scrollToTop}
              className="text-[14px] lg:text-[16px] font-[600] leading-[20px] hover:bg-slate-900 border-none px-8 py-[9px] rounded-full"
            >
              Back to top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
