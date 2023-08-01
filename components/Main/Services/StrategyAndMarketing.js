import React from 'react'
import Image from "next/image";
import About from "../../../public/images/0x0.jpg";

const StrategyAndMarketing = () => {
  return (
    <div>
      <div className="content bg-[#17191d] py-16 lg:px-32 px-4">
        <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
          Strategy & Marketing
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4 py-16 lg:px-32 px-4 bg-[#191C20]">
        <div>
          <Image src={About} alt="hello" layout="" />
        </div>

        <p>
          Like in any game, at 4WD, we believe in strategizing. We work with
          gamers to figure out your goals and build you a strategy. We like to
          plan complete, customized campaigns that will give you great results.
          If you want to win, take us on your team.
        </p>
        <p>
          Additionally, we are differentiating ourselves from others as we will
          assist and advise the promoters on business strategy and
          communication-related plans and programs basis current developments.
          We will work closely with the company and management to understand the
          needs and objectives basis positioning to create the desired brand
          perception in turn enabling us to implement and achieve brand
          recognition in the crowded market.
        </p>
        <p>
          Devising a PR strategy for the brand to understand company direction,
          approach, and outreach so as to create long-term recall, is the first
          step. On the basis of that, we understand the targeted cohort and then
          select the channels and messages which need to be disseminated.
        </p>
        <p>
          Apart from strategizing, we manage all functions of digital marketing.
          Including Social Media Marketing (SMM), SEO, SEM, analytics,
          performance marketing. We take care of it all!
        </p>
      </div>
    </div>
  );
}

export default StrategyAndMarketing
