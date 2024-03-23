import React from "react";
import Layout from "../components/Layout/Layout";
import ContactForm from "../components/contactUs/ContactForm";
import ContactInfo from "../components/contactUs/ContactInfo";
import QuestionsSection from "../components/contactUs/QuestionsSection";

const ContactUs = () => {
  return (
    <Layout>
      <div className="w-full min-h-[100vh] h-auto">
        <div className="w-full relative">
          <div className="h-[350px] px-[20px] sm:px-[40px] lg:px-[100px] xl:px-[150px] pt-[40px] bg-[#092B59]">
            <div className="w-full max-w-[1535px] mx-auto">
              <h1 className="text-[24px] lg:text-[40px] font-[600] text-[#FCF6F5] leading-[35px] lg:leading-[49px]">
                Contact us{" "}
              </h1>
              <p className="text-[16px] lg:text-[18px] font-[400] leading-[20px] lg:leading-[30px] text-[#FCF6F5]">
                We love to respond to your queries
              </p>
            </div>
          </div>
          <div className="w-full h-[1050px] lg:h-[580px]"></div>
          <div className="w-[90%] lg:w-[80%] max-w-[1535px] min-h-[300px] h-auto flex flex-col lg:flex-row gap-10 bg-white shadow-lg rounded-[14px]  absolute top-[130px] lg:top-[165px] mx-auto left-0 right-0 p-[10px] py-[20px] lg:p-[30px] z-10">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
        <div className="w-full h-auto pb-[40px] lg:pb-[90px] mt-0 lg:mt-[90px]">
          <div className="w-[90%] lg:w-[80%] max-w-[1535px] min-h-[300px] h-auto flex gap-10 bg-white lg:border border-gray-200 rounded-[14px] mx-auto py-[20px] lg:p-8 z-10">
            <QuestionsSection />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
