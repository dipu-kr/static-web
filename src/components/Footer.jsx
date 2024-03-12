import React from "react";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full h-[400px] px-[100px] bg-[#1F1F1F] text-white">
      <div className=" grid grid-cols-4 gap-8 font-[Montserrat]">
        <div className="border">
          <h6>Contact Us</h6>
          <div>
            <p className="font-[Montserrat]">Sales Ph No.</p>
            <p className="flex gap-2 items-center font-[Montserrat]">
              <span>
                <IoIosCall />
              </span>
              <span>+91 8328 211 174</span>
            </p>
          </div>
          <div>
            <p className="font-[Montserrat]">Sales Mail ID</p>
            <p className="flex gap-2 items-center font-[Montserrat]">
              <span>
                <MdEmail />
              </span>
              <span>sales@tava.one</span>
            </p>
          </div>
        </div>
        <div className="border">
          <h6>Key Features</h6>
        </div>
        <div className="border">
          <h6>Premium Features</h6>
        </div>
        <div className="border">
          <h6>Quick Links</h6>
        </div>
        <div className="border">
          <h6>Address</h6>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <p>@2024 TAVA Technologies Pvt. Ltd. All right reserved</p>
        <p className="flex gap-6">
          <span>Terms of service</span>
          <span>Privacy Policy</span>
          <span>Security Policy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
