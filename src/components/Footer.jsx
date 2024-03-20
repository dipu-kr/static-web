import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="bg-[#1F1F1F]">
      <footer className="w-full max-w-[1535px] mx-auto min-h-[400px] h-auto px-[100px] py-10 flex justify-center items-center flex-col gap-10 bg-[#1F1F1F] text-white tracking-wide">
        <div className=" grid grid-cols-5 gap-6">
          <div className="flex flex-col gap-4">
            <h6 className="font-[600] text-[16px] leading-[20px]">
              Contact Us
            </h6>
            <div>
              <p className="text-[15px] font-[400] leading-[30px]">
                Sales Ph No.
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[18px]">
                  <IoIosCall />
                </span>
                <span className="text-[14px] font-[400]">+91 8328 211 174</span>
              </p>
            </div>
            <div>
              <p className="text-[15px] font-[400] leading-[30px]">
                Sales Mail ID
              </p>
              <p className="flex gap-2 items-center">
                <span className="text-[15px]">
                  <MdEmail />
                </span>
                <span className="text-[14px] font-[400]">sales@tava.one</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-[600] text-[16px] leading-[20px]">
              Key Features
            </h6>
            <p className="text-[14px] font-[400]">Engage</p>
            <p className="text-[14px] font-[400]">Learning Management</p>
            <p className="text-[14px] font-[400]">Vendor Market Place</p>
            <p className="text-[14px] font-[400]">Events</p>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-[600] text-[16px] leading-[20px]">
              Premium Features
            </h6>
            <p className="text-[14px] font-[400]">Candidate Analyser</p>
            <p className="text-[14px] font-[400]">L10 Application</p>
            <p className="text-[14px] font-[400]">Health</p>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-[600] text-[16px] leading-[20px]">
              Quick Links
            </h6>
            <p className="text-[14px] font-[400]">Perspective Corner</p>
            <p className="text-[14px] font-[400]">Pricing</p>
            <p className="text-[14px] font-[400]">Contact US</p>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-[600] text-[16px] leading-[20px]">Address</h6>
            <div className="flex gap-2 justify-center">
              <span className="text-[17px]">
                <FaLocationDot />
              </span>
              <p className="text-[14px] font-[400]">
                3rd Floor, Trendz BSR, Plot No: 25, 10, Greenland Colony,
                Madhava Reddy Colony, Gachibowli, Hyderabad, Telangana 500032
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-10 flex-col">
          <div className="w-full flex justify-between">
            <p className="text-[14px] font-[600] leading-[20px]">
              @2024 TAVA Technologies Pvt. Ltd. All right reserved
            </p>
            <p className="flex gap-6 text-[14px] font-[600] leading-[20px]">
              <span>Terms of service</span>
              <span>Privacy Policy</span>
              <span>Security Policy</span>
            </p>
          </div>
          <div>
            <button
              onClick={scrollToTop}
              className="text-[16px] font-[600] leading-[20px] hover:bg-gray-900 border-none px-6 py-[6px] rounded-md"
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
