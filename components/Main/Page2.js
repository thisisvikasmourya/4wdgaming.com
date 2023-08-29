import React from "react";
import BackgroundImage from "../../public/images/bgscr.png";
// import bg from "../../public/images/bg/1.png";
// import ClientScroll from "./Review/ClientScroll";
const Page2 = () => {
  return (
    <div
      className="bg-[#f0ebd7]  "
      data-aos="zoom-in"
      // style={{
      //   backgroundImage: `url(${BackgroundImage.src})`,
      //   backgroundSize: "cover", // Adjust as needed
      //   backgroundRepeat: "no-repeat",
      //   width: "100%",
      //   // height: "100vh", // Adjust for desired height
      // }}
    >
      <div className="px-4  max-w-screen-xl mx-auto md:px-8 " id="page2">
        {/* bg-[#f0ebd7] */}
        <div className="  rounded-lg py-10   ">
          <p className="lg:text-6xl text-[#4d326b]  text-3xl font-bold text-center py-3 ">
            Welcome to Moram Napu:
          </p>
          <p className="lg:text-5xl text-3xl font-semibold text-black  text-center pb-1">
            Redefining Gaming PR & Marketing Strategies
          </p>
          <p className="lg:text-3xl text-2xl font-semibold text-center border-b border-gray-300 pb-5 "></p>
          <div className="max-w-3xl mx-auto text-center py-8 text-[20px] text-black">
            Guiding gaming companies to their ideal audience using
            Marketing,Digital Marketing, Content Marketing, Social Media
            Management, Growth and Performance Marketing,Public Relations,
            Community Building & Management. We also cultivate Brand Awareness
            and Trust in the audience
            <div className="    text-[20px] py-5" data-aos="zoom-in">
              We have Secret tricks to win in the gaming industries? CHEAT CODE
              - MORAM NAPU, Our special marketing powers are like cheat codes
              that help you do better, score more, and become a gaming superstar
              in no time.{" "}
              <div className="text-[20px] py-5">
                MORAM NAPU is like the friend who helps gaming brands and
                companies become famous and loved. We use our special tricks to
                tell everyone how awesome the games are. Our goal is to make
                games and gamers happy by connecting them in a fun and cool way.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
