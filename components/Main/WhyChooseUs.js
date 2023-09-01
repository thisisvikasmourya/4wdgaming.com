import Image from "next/image";
import React from "react";
import object from "../../public/images/rE7ypN.gif";
import WhyChoose from "./WhyChoose";
import BackgroundImage from "../../public/images/bg123.png";

const WhyChooseUs = () => {
  const data = [
    {
      text: "We Know gaming: Our team loves gaming folks and knows all about them. We're like gaming experts!",
    },
    {
      text: "We're Super Creative: We make new and exciting ideas just for each gaming brand. No boring stuff here!",
    },
    {
      text: "We Change with the Times: Gaming changes, and we change too. We always know what's new and cool.",
    },
    {
      text: "We Show Results: We don't just talk—our work shows real results. More people will know and like the games.",
    },
    {
      text: "We're Team Players: We work closely with game companies to make sure we're all on the same page. It's like teamwork!",
    },
    {
      text: "MORAM NAPU is like the friend who helps games become famous and loved. We use our special tricks to tell everyone how awesome the games are. Our goal is to make games and gamers happy by connecting them in a fun and cool way.",
    },
  ];
  return (
    <div
      className="bg-[#eee2dc]"
      data-aos="zoom-in"

      // style={{
      //   backgroundImage: `url(${BackgroundImage.src})`,
      //   backgroundSize: "cover", // Adjust as needed
      //   backgroundRepeat: "no-repeat",
      //   width: "100%",
      //   // height: "100vh", // Adjust for desired height
      // }}
    >
      <div
        className="  px-4 py-16 max-w-screen-xl mx-auto md:px-8"
        data-aos="zoom-in"
      >
        <div className="max-w-xl sm:text-center py-1 md:mx-auto">
          <h3
            className="text-[#ac3b61] text-3xl font-semibold sm:text-4xl text-center "
            data-aos="flip-up"
          >
            Why You&apos;ll Like Us:
          </h3>
          <p className="mt-3 mb-4 text-[20px] text-[#123c69] text-center">
            Gaming Enthusiasts, Gaming Experts
          </p>
        </div>
        <div className="flex lg:flex-row flex-col py-2 gap-6 items-center ">
          <div>
            <WhyChoose />{" "}
          </div>
          <div>
            {data.map((items, key) => (
              <p
                className="py-1 text-[20px] text-[#123c69] text-center"
                key={key}
              >
                {items.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
