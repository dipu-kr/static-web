import React, { useEffect } from "react";
import AOS from "aos";
import Layout from "../components/Layout/Layout";
import BookDemoForm from "../components/BookDemo/BookDemoForm";
import BookDemoInfo from "../components/BookDemo/BookDemoInfo";
import BookDemoQNA from "../components/BookDemo/BookDemoQNA";

const BookDemo = () => {
  useEffect(() => {
    AOS.init({
      duration: 450,
      offset: 120,
      easing: "ease",
    });
  }, []);

  return (
    <Layout>
      <div className="w-full h-auto">
        <div className="w-full relative">
          <div className="w-full h-[350px] px-[20px] sm:px-[40px] lg:px-[100px] xl:px-[150px] pt-[40px] bg-[#092B59]">
            <div className="w-full max-w-[1535px] mx-auto">
              <h1
                className="text-[24px] lg:text-[40px] font-[600] text-[#FCF6F5] leading-[35px] lg:leading-[49px]"
                data-aos="fade-up"
              >
                Book Demo{" "}
              </h1>
              <p
                className="text-[16px] lg:text-[18px] font-[400] leading-[25px] lg:leading-[30px] text-[#FCF6F5]"
                data-aos="fade-up"
              >
                We love to respond to your queries
              </p>
            </div>
          </div>
          <div className="w-full h-[780px] lg:h-[530px]"></div>
          <div
            className="w-[90%] lg:w-[80%] max-w-[1535px]  min-h-[300px] h-auto flex flex-col-reverse lg:flex-row shadow-lg overflow-hidden rounded-[14px]  absolute top-[135px] lg:top-[165px] mx-auto left-0 right-0  z-10"
            data-aos="fade-up"
          >
            <BookDemoForm />
            <BookDemoInfo />
          </div>
        </div>
        <div className="w-full h-auto pb-[30px] lg:pb-[90px]">
          <div
            className="w-[90%] lg:w-[80%] max-w-[1535px] min-h-[300px] h-auto flex gap-10 bg-white lg:border border-gray-200 rounded-[14px] mx-auto py-[20px] lg:p-8 z-10"
            data-aos="fade-up"
          >
            <BookDemoQNA />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDemo;
