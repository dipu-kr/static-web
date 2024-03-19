import React from "react";
import Layout from "../components/Layout/Layout";
import PricingQNA from "../components/Pricing/PricingQNA";
import MicroPriceCard from "../components/Pricing/MicroPriceCard";
import SmallPriceCard from "../components/Pricing/SmallPriceCard";
import MediumPriceCard from "../components/Pricing/MediumPriceCard";
import LargePriceCard from "../components/Pricing/LargePriceCard";

const Pricing = () => {
  return (
    <Layout>
      <div className="w-full min-h-[100vh] h-auto">
        <div className="w-full relative">
          <div className="h-[350px] px-[150px] pt-[40px] bg-[#092B59]">
            <h1 className="text-[25px] font-bold text-white leading-6">
              Pricing & Plans
            </h1>
            <p className="text-[15px] font-normal text-white mb-5 ">
              is your workplace helper. Here, Employee Engagement isn't just a
              buzzword - ( Basic Feature description)
            </p>
          </div>
          <div className="w-full h-[380px]"></div>
          <div className="w-[80%] min-h-[300px] h-auto  absolute top-[100px] mx-auto left-0 right-0 z-10">
            <div className="w-full grid grid-cols-4 gap-8">
              <MicroPriceCard />
              <SmallPriceCard />
              <MediumPriceCard />
              <LargePriceCard />
            </div>
          </div>
        </div>
        <div className="w-full h-auto pb-[80px]">
          <div className="w-[80%] min-h-[300px] h-auto flex gap-10 bg-white border border-gray-200 rounded-md mx-auto  p-8 z-10">
            <PricingQNA />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
