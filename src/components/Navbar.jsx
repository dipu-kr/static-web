import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "../css/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const menuControl = () => {
    setMenu(!menu);
  };
  return (
    <div className="w-full h-[89px] mx-auto bg-[#ffffff] fixed top-0 z-50">
      <nav className="nav-main max-w-[1535px] mx-auto">
        <div className="w-full flex justify-between items-center">
          <div className="logo-div">
            <NavLink to="/">
              <div className="logo">
                <img src={logo} alt="logo" className="object-cover w-[100%]" />
              </div>
            </NavLink>
          </div>
          <div className="menu-div" onClick={menuControl}>
            {menu ? (
              <AiOutlineClose className="close-icon" />
            ) : (
              <GiHamburgerMenu className="open-icon" />
            )}
          </div>
          <ul className={menu ? "openMenu" : "openMenu closeMenu"}>
            <NavLink
              to="/solution"
              style={({ isActive }) => ({
                color: isActive ? "#FF7301" : "#000E21",
              })}
            >
              <li
                onClick={menuControl}
                className="list-none font-[600] text-[16px] leading-[19.5px]  hover:text-[#FF7301] nav_bg_1"
              >
                Solution
              </li>
            </NavLink>
            <NavLink
              to="/pricing"
              style={({ isActive }) => ({
                color: isActive ? "#FF7301" : "#000E21",
              })}
            >
              <li
                onClick={menuControl}
                className="list-none font-[600] text-[16px] leading-[19.5px]  hover:text-[#FF7301] nav_bg_3"
              >
                Pricing
              </li>
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#FF7301" : "#000E21",
              })}
            >
              <li
                onClick={menuControl}
                className="list-none font-[600] text-[16px] leading-[19.5px]  hover:text-[#FF7301]"
              >
                Contact Us
              </li>
            </NavLink>

            <button className="lg:w-[154px] lg:h-[40px] md:ml-8 text-[14.4px] font-[600] leading-[21px] text-[#092B59]  border-2 border-[#FF7301] rounded-full hover:bg-[#FF7301] hover:text-white transition-all duration-250 ease-in-out">
              Login
            </button>
            <button
              onClick={() => navigate("/book-demo")}
              className="lg:w-[154px] lg:h-[40px] md:ml-5 text-[14.4px] font-[600] leading-[21px] border-2 border-[#FF7301] rounded-full bg-[#FF7301] text-white transition-all duration-250 ease-in-out"
            >
              Book Demo
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
