import React from "react";
import bg from '../../public/images/bgg.jpg'
// import ClientScroll from "./Review/ClientScroll";
const Page2 = () => {
  return (
    <div
      className="lg:px-4 px-1 bg-[#191c20] "
      id="page2"
      // style={{
      //   backgroundImage: `url(${bg.src})`,
      //   backgroundSize: "cover",
      //   width: "100%",
      //   height: "100%",
      // }}
    >
      {/* <ClientScroll/> */}
      <div className="lg:px-32 sm:px-2  rounded-lg py-20 bg-[#191c20]  ">
        {/* <h1 className="text-center tracking-wider">WE ENVISION WITH A MISSION</h1> */}
        <p className="lg:text-3xl text-[#c52326] text-2xl font-bold text-center py-1 ">
          WELCOME TO 4WD GAMING:
        </p>
        <p className="lg:text-2xl text-2xl text-white  text-center pb-3">
          INDIA&apos;S PREMIER GAMING PR & MARKETING CONSULTANCY
        </p>
        <p className="lg:text-3xl text-2xl font-semibold text-center border-b border-gray-300 pb-5 ">
          {/* Whatever your game, we bring the ammo! */}
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-4 py-10 text-white">
          <div className="p-4    text-[16px]" data-aos="zoom-in">
            <p className="text-[#c52326] font-semibold text-lg">
              We’re brand builders
            </p>
            At 4WD GAMING, we are more than just a gaming PR agency. We are
            brand builders who understand the power of a strong brand in
            attracting organic media and PR. Our approach is simple but
            effective - we sit with you, plan, consult, and watch the magic
            happen! Listening to our clients and prioritizing ethics guide our
            every move. Working with us gives you an undeniable advantage, like
            using a secret code to gain a helicopter in a medieval battle. Our
            strength lies in our ability to listen and solve your challenges.
          </div>
          {/* <div
            className="p-4 pl-8  border-gray-500 text-[16px]"
            data-aos="zoom-in"
          >
            We’re specialists, we’ve left our markers all over the Indian gaming
            space as if it were a PUBG map. We’re trendsetters. The kind of
            consultants, who know how to lead trends while setting our own.
          </div> */}
          <div
            className="p-4   border-gray-500 text-[16px] text-white"
            data-aos="zoom-in"
          >
            <p className="text-[#c52326] font-semibold text-lg">
              We’re pioneers
            </p>
            We take pride in being pioneers in the gaming space. As the first
            ones here, we carved the path for the gaming PR ecosystem in India.
            Our journey as early adopters and proponents of gaming PR has
            witnessed the industry&apos;s evolution, from skill-based real money
            gaming to Web3 and blockchain gaming. We are part of every
            conversation that shapes the gaming landscape, fully understanding
            the niche, dynamic, and continuously evolving gaming industry of
            India.{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
