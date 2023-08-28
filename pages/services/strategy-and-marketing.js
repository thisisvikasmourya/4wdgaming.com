import StrategyAndMarketing from "@/components/Main/Services/StrategyAndMarketing";
import React from "react";
import Head from "next/head";

const strategyandmarketing = () => {
  return (
    <div>
      <Head>
        <title>
          {" "}
          Strategy and Marketing - Propel Your Gaming Venture with Moram Napu
        </title>
        <meta
          name="description"
          content="Propel your gaming venture to success with Moram Napu's expert strategy and marketing services. Our seasoned experts analyze your goals, target audience, and competition to give your gaming endeavor a competitive edge. Let us be your strategic partner and navigate the gaming landscape with confidence."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StrategyAndMarketing />
    </div>
  );
};

export default strategyandmarketing;
