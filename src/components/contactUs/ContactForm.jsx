import React from "react";

const ContactForm = () => {
  return (
    <div className="flex-1">
      <h3 className="text-[18px] font-bold mb-4">Ask us anything here</h3>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-[15px]">Name</label>
          <input
            type="text"
            placeholder="Enter the full name"
            className="w-[90%] h-[40px] rounded-md pl-4 border border-gray-400 outline-none hover:ring"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-[15px]">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[90%] h-[40px] rounded-md pl-4 border border-gray-400 outline-none hover:ring"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-[15px]">Phone</label>
          <input
            type="text"
            placeholder="Enter phone No."
            className="w-[90%] h-[40px] rounded-md pl-4 border border-gray-400 outline-none hover:ring"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-[15px]">Message</label>
          <textarea
            type="text"
            rows={6}
            placeholder="Write your view"
            className="w-[90%] rounded-md pl-4 border border-gray-400 outline-none hover:ring resize-none py-1"
          />
        </div>
        <div className="flex justify-center items-center mt-5">
          <button className="w-[150px] h-[42px] bg-[#FF7301] shadow-lg rounded-md px-8 py-[8px] text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
