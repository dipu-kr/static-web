import React from "react";
import Layout from "../components/Layout/Layout";
import HeroSection from "../components/HeroSection";
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
        {/* <HeroSection /> */}
        {/* <LogoComp /> */}
        {/* <HomeMiddlePageComp /> */}
        {/* <HomeMiddlePageComp2 /> */}
        {/* <HomeElevateComp /> */}
        <HomeElevateNav />
        <HomeWhyComp />
        <CustomerStoriesComp />
        <HomeFeatureComp />
      </div>
    </Layout>
  );
};

export default Home;
