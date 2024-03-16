import React from "react";
import logo from "../assets/images/logo.svg";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="w-full h-[85px] px-[150px] flex justify-center items-center">
      <div className="w-full flex justify-between">
        <div className="">
          <img src={logo} alt="logo" className="object-cover" />
        </div>
        <div className="flex gap-[50px]">
          <ul className="flex gap-[50px] justify-center items-center">
            <li className="list-none flex gap-1 items-center relative group text-[18px] hover:text-[#FF7301]">
              <span>Solution</span>
              <span>
                <IoIosArrowDown />
              </span>
            </li>
            <li className="list-none text-[18px] hover:text-[#FF7301] ">
              Pricing
            </li>
            <li className="list-none text-[18px] hover:text-[#FF7301] ">
              Contact Us
            </li>
          </ul>
          <div className="flex gap-8 justify-center items-center">
            <button className="w-[160px] text-[16px] font-[gilroy-bold] border-2 border-[#FF7301] rounded-full px-[50] py-[5px] hover:bg-[#FF7301] hover:text-white transition-all duration-250 ease-in-out">
              Login
            </button>
            <button className="w-[160px] text-[16px] font-[gilroy-bold] border-2 border-[#FF7301] bg-[#FF7301] text-white rounded-full px-[50] py-[5px] hover:bg-transparent hover:text-[#000] transition-all duration-250 ease-in-out">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
