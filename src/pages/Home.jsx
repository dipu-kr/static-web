import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import HeroLeftComp from "../components/HeroLeftComp";
import HeroRightComp from "../components/HeroRightComp";
import LogoComp from "../components/LogoComp";
import HomeMiddlePageComp from "../components/HomeMiddlePageComp";
import HomeMiddlePageComp2 from "../components/HomeMiddlePageComp2";
import HomeElevateComp from "../components/HomeElevateComp";
import HomeElevateNav from "../components/HomeElevateNav";
import HomeWhyComp from "../components/HomeWhyComp";
import CustomerStoriesComp from "../components/CustomerStoriesComp";
import HomeFeatureComp from "../components/HomeFeatureComp";

const Home = () => {
  return (
    <Layout>
      <div className="h-auto relative">
        <div className="w-full max-w-[1535px] mx-auto h-auto flex flex-col-reverse lg:flex-row items-center pb-[60px]">
          <div className="flex-1 lg:ml-[150px]">
            <HeroLeftComp />
          </div>
          <div className="flex-1">
            <HeroRightComp />
          </div>
        </div>
        <LogoComp />
        <HomeMiddlePageComp />
        <HomeMiddlePageComp2 />
        <HomeElevateComp />
        <HomeElevateNav />
        <HomeWhyComp />
        <CustomerStoriesComp />
        <HomeFeatureComp />
      </div>
    </Layout>
  );
};

export default Home;
