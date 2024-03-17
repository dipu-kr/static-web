import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="max-w-[1535px] mx-auto min-h-[100vh] h-auto">
      <div>
        <Navbar />
      </div>
      <div className="w-full h-auto">{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
