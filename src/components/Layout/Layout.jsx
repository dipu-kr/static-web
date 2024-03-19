import React from "react";
import Navbar from "../../components/Navbar";
import HomeBottomComp from "../HomeBottomComp";
import Footer from "../../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="max-w-[1535px] mx-auto min-h-[100vh] h-auto">
      <div className="h-[85px] relative">
        <Navbar />
      </div>
      <div className="w-full h-auto">{children}</div>
      <div>
        <HomeBottomComp />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
