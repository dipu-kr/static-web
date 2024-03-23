import React from "react";
import Layout from "../components/Layout/Layout";
import BookDemoForm from "../components/BookDemo/BookDemoForm";
import BookDemoInfo from "../components/BookDemo/BookDemoInfo";
import BookDemoQNA from "../components/BookDemo/BookDemoQNA";

const BookDemo = () => {
  return (
    <Layout>
      <div className="w-full h-auto">
        <div className="w-full relative">
          <div className="h-[350px] px-[150px] pt-[40px] bg-[#092B59]">
            <div className="w-full max-w-[1535px] mx-auto">
              <h1 className="text-[40px] font-[600] text-[#FCF6F5] leading-[49px]">
                Book Demo{" "}
              </h1>
              <p className="text-[18px] font-[400] leading-[30px] text-[#FCF6F5]">
                We love to respond to your queries
              </p>
            </div>
          </div>
          <div className="w-full h-[530px]"></div>
          <div className="w-[80%] max-w-[1535px]  min-h-[300px] h-auto flex shadow-lg overflow-hidden rounded-[14px]  absolute top-[165px] mx-auto left-0 right-0  z-10">
            <BookDemoForm />
            <BookDemoInfo />
          </div>
        </div>
        <div className="w-full h-auto pb-[90px]">
          <div className="w-[80%] max-w-[1535px] min-h-[300px] h-auto flex gap-10 bg-white border border-gray-200 rounded-[14px] mx-auto  p-8 z-10">
            <BookDemoQNA />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDemo;
