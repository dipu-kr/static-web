import React from "react";
import Layout from "../components/Layout/Layout";
import SolutionHeroComp from "../components/solutionPageComponents/SolutionHeroComp";
import KeyFeatureComp from "../components/solutionPageComponents/KeyFeatureComp";
import PremiumFeature from "../components/solutionPageComponents/PremiumFeature";
import SolutionRobo from "../components/solutionPageComponents/SolutionRobo";
import SolutionMeet from "../components/solutionPageComponents/SolutionMeet";

const Solution = () => {
  return (
    <Layout>
      <div className="h-auto">
        <SolutionHeroComp />
        <KeyFeatureComp />
        <PremiumFeature />
        <SolutionRobo />
        <SolutionMeet />
      </div>
    </Layout>
  );
};

export default Solution;
