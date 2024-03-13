import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full min-h-[400px] h-auto px-[100px] py-10 flex justify-center items-center flex-col gap-10 bg-[#1F1F1F] text-white font-[Roboto] tracking-wide">
      <div className=" grid grid-cols-5 gap-6">
        <div className="flex flex-col gap-4">
          <h6>Contact Us</h6>
          <div>
            <p className="font-[Montserrat] text-[13px]">Sales Ph No.</p>
            <p className="flex gap-2 items-center font-[Montserrat]">
              <span className="text-[18px]">
                <IoIosCall />
              </span>
              <span className="text-[12px] font-[400]">+91 8328 211 174</span>
            </p>
          </div>
          <div>
            <p className="font-[Montserrat] text-[13px]">Sales Mail ID</p>
            <p className="flex gap-2 items-center font-[Montserrat]">
              <span className="text-[17px]">
                <MdEmail />
              </span>
              <span className="text-[12px] font-[300]">sales@tava.one</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h6>Key Features</h6>
          <p className="text-[12px] font-[300]">Engage</p>
          <p className="text-[12px] font-[300]">Learning Management</p>
          <p className="text-[12px] font-[300]">Vendor Market Place</p>
          <p className="text-[12px] font-[300]">Events</p>
        </div>
        <div className="flex flex-col gap-4">
          <h6>Premium Features</h6>
          <p className="text-[12px] font-[300]">Candidate Analyser</p>
          <p className="text-[12px] font-[300]">L10 Application</p>
          <p className="text-[12px] font-[300]">Health</p>
        </div>
        <div className="flex flex-col gap-4">
          <h6>Quick Links</h6>
          <p className="text-[12px] font-[300]">Perspective Corner</p>
          <p className="text-[12px] font-[300]">Pricing</p>
          <p className="text-[12px] font-[300]">Contact US</p>
        </div>
        <div className="flex flex-col gap-4">
          <h6>Address</h6>
          <div className="flex gap-2 justify-center">
            <span className="text-[17px]">
              <FaLocationDot />
            </span>
            <p className="text-[12px] font-[300]">
              3rd Floor, Trendz BSR, Plot No: 25, 10, Greenland Colony, Madhava
              Reddy Colony, Gachibowli, Hyderabad, Telangana 500032
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center gap-10 flex-col">
        <div className="w-full flex justify-between">
          <p className="text-[13px] font-[400]">
            @2024 TAVA Technologies Pvt. Ltd. All right reserved
          </p>
          <p className="flex gap-6 text-[13px] font-[400]">
            <span>Terms of service</span>
            <span>Privacy Policy</span>
            <span>Security Policy</span>
          </p>
        </div>
        <div>
          <button>Back to top</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
