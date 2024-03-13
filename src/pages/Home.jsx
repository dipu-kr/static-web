import React from "react";
import Layout from "../components/Layout/Layout";
import HeroLeftComp from "../components/HeroLeftComp";
import HeroRightComp from "../components/HeroRightComp";

const Home = () => {
  return (
    <Layout>
      <div className="h-[85vh] flex">
        <div className="ml-[100px] flex-1">
          <HeroLeftComp />
        </div>
        <div className="flex-1 pb-5">
          <HeroRightComp />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
