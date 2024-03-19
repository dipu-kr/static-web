import React from "react";
import Layout from "../components/Layout/Layout";
import BookDemoForm from "../components/BookDemo/BookDemoForm";
import BookDemoInfo from "../components/BookDemo/BookDemoInfo";
import BookDemoQNA from "../components/BookDemo/BookDemoQNA";

const BookDemo = () => {
  return (
    <Layout>
      <div className="w-full min-h-[100vh] h-auto">
        <div className="w-full relative">
          <div className="h-[350px] px-[150px] pt-[40px] bg-[#092B59]">
            <h1 className="text-[25px] font-bold text-white leading-6">
              Book Demo{" "}
            </h1>
            <p className="text-[15px] font-normal text-white mb-5 ">
              We love to respond to your queries
            </p>
          </div>
          <div className="w-full h-[300px]"></div>
          <div className="w-[80%] min-h-[300px] h-auto flex shadow-lg rounded-md overflow-hidden  absolute top-[100px] mx-auto left-0 right-0  z-10">
            <BookDemoForm />
            <BookDemoInfo />
          </div>
        </div>
        <div className="w-full h-auto pb-[80px]">
          <div className="w-[80%] min-h-[300px] h-auto flex gap-10 bg-white border border-gray-200 rounded-md mx-auto  p-8 z-10">
            <BookDemoQNA />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDemo;
