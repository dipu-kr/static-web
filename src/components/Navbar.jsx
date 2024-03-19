import React from "react";
import logo from "../assets/images/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full h-[87px] px-[150px] flex justify-center items-center fixed top-0 bg-white z-20">
      <div className="w-full flex justify-between">
        <NavLink to="/">
          <div className="w-[168.66px] h-[56.6px]">
            <img src={logo} alt="logo" className="object-cover w-[100%]" />
          </div>
        </NavLink>
        <div className="flex gap-[50px]">
          <ul className="flex gap-[50px] justify-center items-center">
            <NavLink
              to="/solution"
              style={({ isActive }) => ({
                color: isActive ? "#FF7301" : "",
              })}
            >
              <li className="list-none flex gap-1 items-center group font-[600] text-[16px] leading-[19.5px] text-[#000E21] hover:text-[#FF7301]">
                <span>Solution</span>
                <span>
                  <IoIosArrowDown />
                </span>
              </li>
            </NavLink>
            <NavLink
              to="/pricing"
              style={({ isActive }) => ({
                color: isActive ? "#FF7301" : "",
              })}
            >
              <li className="list-none font-[600] text-[16px] leading-[19.5px] text-[#000E21] hover:text-[#FF7301] ">
                Pricing
              </li>
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FF7301" : "",
              })}
            >
              <li className="list-none font-[600] text-[16px] leading-[19.5px] text-[#000E21] hover:text-[#FF7301] ">
                Contact Us
              </li>
            </NavLink>
          </ul>
          <div className="flex gap-8 justify-center items-center">
            <button className="w-[154px] h-[40px] text-[14.4px] font-[600] leading-[21px] text-[#092B59]  border-2 border-[#FF7301] rounded-full hover:bg-[#FF7301] hover:text-white transition-all duration-250 ease-in-out">
              Login
            </button>
            <button
              onClick={() => navigate("/book-demo")}
              className="w-[154px] h-[40px] text-[14.4px] font-[600] leading-[21px] border-2 border-[#FF7301] rounded-full bg-[#FF7301] text-white transition-all duration-250 ease-in-out"
            >
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
