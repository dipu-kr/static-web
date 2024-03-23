import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import mapviewimg from "../../assets/images/mapviewimg.svg";

const ContactInfo = () => {
  return (
    <div className="flex-1">
      <h3 className="text-[24px] font-[600] leading-[28px] text-[#000000] mb-4">
        Contact Info
      </h3>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-[400] leading-[40px] text-[16px] md:text-[18px] text-[#000000]">
            Call
          </span>
          <p className="flex items-center gap-2">
            <span>
              <IoMdCall className="text-[19px] md:text-[22px]" />
            </span>
            <span className="text-[14px] md:text-[16px] font-[400] leading-[24px] text-[#000000]">
              +91 8328 211 174
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-[400] leading-[40px] text-[16px] md:text-[18px] text-[#000000]">
            Mail Us
          </span>
          <p className="flex items-center gap-2">
            <span>
              <MdEmail className="text-[19px] md:text-[22px]" />
            </span>
            <span className="text-[14px] md:text-[16px] font-[400] leading-[24px] text-[#000000]">
              sales@Inimble.one
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-[400] leading-[40px] text-[16px] md:text-[18px] text-[#000000]">
            Address
          </span>
          <p className="flex items-center gap-2">
            <span>
              <MdLocationPin className="text-[19px] md:text-[22px]" />
            </span>
            <span className="text-[14px] md:text-[16px] font-[400] leading-[24px] text-[#000000]">
              3rd Floor, Trendz BSR, Plot No: 25, 10, Greenland Colony, Madhava
              Reddy Colony, Gachibowli, Hyderabad, Telangana 500032
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <label className="font-[400] leading-[40px] text-[16px] md:text-[18px] text-[#000000]">
            Map View
          </label>
          <div>
            <img src={mapviewimg} alt="map-img" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
