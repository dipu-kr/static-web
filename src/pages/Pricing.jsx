import React, { useEffect } from "react";
import AOS from "aos";
import Layout from "../components/Layout/Layout";
import PricingQNA from "../components/Pricing/PricingQNA";
import MicroPriceCard from "../components/Pricing/MicroPriceCard";
import SmallPriceCard from "../components/Pricing/SmallPriceCard";
import MediumPriceCard from "../components/Pricing/MediumPriceCard";
import LargePriceCard from "../components/Pricing/LargePriceCard";

const Pricing = () => {
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
          <div className="h-[430px] sm:h-[375px] lg:h-[350px] px-[20px] sm:px-[40px] lg:px-[100px] xl:px-[150px] bg-[#092B59]">
            <div className="w-full max-w-[1535px] mx-auto pt-[40px] lg:pt-[60px]">
              <h1
                className="text-[24px] lg:text-[40px] font-[600] text-[#FCF6F5] leading-[49px]"
                data-aos="fade-up"
              >
                Pricing & Plans
              </h1>
              <p
                className="text-[16px] lg:text-[18px] font-[400] leading-[25px] lg:leading-[30px] text-[#FCF6F5]"
                data-aos="fade-up"
              >
                is your workplace helper. Here, Employee Engagement isn't just a
                buzzword - ( Basic Feature description)
              </p>
            </div>
          </div>
          <div className="w-full max-w-[1535px] mx-auto h-[1880px] sm:h-[900px] xl:h-[400px]"></div>
          <div className=" w-[90%] lg:w-[80%] max-w-[1535px]  min-h-[300px] h-auto  absolute top-[230px] sm:top-[210px] lg:top-[195px] xl:top-[165px] mx-auto left-0 right-0 z-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              <MicroPriceCard />
              <SmallPriceCard />
              <MediumPriceCard />
              <LargePriceCard />
            </div>
          </div>
        </div>
        <div className="w-full h-auto pb-[30px] lg:pb-[90px]">
          <div
            className="w-[90%] lg:w-[80%] max-w-[1535px] min-h-[300px] h-auto flex gap-10 bg-white lg:border border-gray-200 rounded-[14px] mx-auto py-[20px] lg:p-8 z-10"
            data-aos="zoom-in-up"
          >
            <PricingQNA />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
