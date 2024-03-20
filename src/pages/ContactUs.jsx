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
          <div className="h-[350px] px-[150px] pt-[40px] bg-[#092B59]">
            <div className="w-full max-w-[1535px] mx-auto">
              <h1 className="text-[40px] font-[600] text-[#FCF6F5] leading-[49px]">
                Contact us{" "}
              </h1>
              <p className="text-[18px] font-[400] leading-[30px] text-[#FCF6F5]">
                We love to respond to your queries
              </p>
            </div>
          </div>
          <div className="w-full h-[580px]"></div>
          <div className="w-[80%] max-w-[1535px] min-h-[300px] h-auto flex gap-10 bg-white shadow-lg rounded-md  absolute top-[165px] mx-auto left-0 right-0 py-[50px] p-[30px] z-10">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
        <div className="w-full h-auto pb-[90px] mt-[90px]">
          <div className="w-[80%] max-w-[1535px] min-h-[300px] h-auto flex gap-10 bg-white border border-gray-200 rounded-md mx-auto  p-8 z-10">
            <QuestionsSection />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
