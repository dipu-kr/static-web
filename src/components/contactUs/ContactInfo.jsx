import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import mapviewimg from "../../assets/images/mapviewimg.svg";

const ContactInfo = () => {
  return (
    <div className="flex-1">
      <h3 className="text-[18px] font-bold mb-4">Contact Info</h3>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-[15px]">Call</span>
          <p className="flex items-center gap-2">
            <span>
              <IoMdCall size={22} />
            </span>
            <span>+91 8328 211 174</span>
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-[15px]">Mail Us</span>
          <p className="flex items-center gap-2">
            <span>
              <MdEmail size={22} />
            </span>
            <span>sales@Inimble.one</span>
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-[15px]">Address</span>
          <p className="flex items-center gap-2">
            <span>
              <MdLocationPin size={22} />
            </span>
            <span>
              3rd Floor, Trendz BSR, Plot No: 25, 10, Greenland Colony, Madhava
              Reddy Colony, Gachibowli, Hyderabad, Telangana 500032
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <label className="font-semibold text-[15px]">Map View</label>
          <div>
            <img src={mapviewimg} alt="map-img" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
