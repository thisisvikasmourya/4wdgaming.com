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
          <p className="lg:text-6xl text-[#4d326b] text-3xl font-bold text-center py-3 ">
            WELCOME TO Moram Napu:
          </p>
          <p className="lg:text-5xl text-3xl font-semibold text-black  text-center pb-1">
            INDIA&apos;S PREMIER GAMING PR & MARKETING CONSULTANCY
          </p>
          <p className="lg:text-3xl text-2xl font-semibold text-center border-b border-gray-300 pb-5 "></p>
          <div className="max-w-2xl mx-auto text-center py-8 text-black">
            <div className="    text-[20px] py-5" data-aos="zoom-in">
              Years of experience in the Indian gaming space with Sharmilee Daru
              PR give us an early mover advantage. It’s the kind of advantage
              your brand should make the most of. Like in a game of Age of
              Empires, we helped to cultivate and nurture the barren land of
              gaming in India. The experience that came with it is unparalleled.
              <div className="text-[20px] py-5">
                We’re specialists, we’ve left our markers all over the Indian
                gaming space as if it were a PUBG map. We’re trendsetters. The
                kind of consultants, who know how to lead trends while setting
                our own.
              </div>
              <div className="text-[20px] ">
                We love to build brands and we love our brands – if anything
                unfounded is said about you, we’ll jump in with you and bring
                the ammo. Bring us your problems and sit with us for some free
                initial suggestions and coffee!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
