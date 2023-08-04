import React from "react";
import bg from "../../public/images/bgg.jpg";
// import ClientScroll from "./Review/ClientScroll";
const Page2 = () => {
  return (
    <div className="bg-[#191c20]">
      <div
        className="lg:px-4 px-1  max-w-screen-xl mx-auto md:px-8 "
        data-aos="zoom-in"
        id="page2"
        // style={{
        //   backgroundImage: `url(${bg.src})`,
        //   backgroundSize: "cover",
        //   width: "100%",
        //   height: "100%",
        // }}
      >
        <div className="px-1 sm:px-2  rounded-lg py-20 bg-[#191c20]  ">
          <p className="lg:text-3xl text-[#c52326] text-2xl font-bold text-center py-1 ">
            WELCOME TO 4WD GAMING:
          </p>
          <p className="lg:text-2xl text-2xl text-white  text-center pb-3">
            INDIA&apos;S PREMIER GAMING PR & MARKETING CONSULTANCY
          </p>
          <p className="lg:text-3xl text-2xl font-semibold text-center border-b border-gray-300 pb-5 "></p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-4 py-10 text-white">
            <div className="p-4    text-[16px]" data-aos="zoom-in">
              <p className="text-[#c52326] font-semibold text-lg">
                We’re brand builders
              </p>
              At 4WD, we are the experts you can trust when it comes to all
              things gaming. As a premier gaming PR, Web3 gaming PR, and Esports
              PR consultancy in India, we bring a powerhouse of high-quality
              solutions to help you succeed in the gaming world.
              <div>
                We understand the unique challenges and opportunities that the
                gaming, Web3 gaming, and Esports industry offers. Whether you
                are an indie developer, a gaming company, or a professional
                Esports team, we have tailored PR strategies to meet your
                specific needs. Our comprehensive range of services includes
                media coverage, influencer partnerships, crisis communications,
                and thought leadership articles.
              </div>
            </div>

            <div
              className="p-4   border-gray-500 text-[16px] text-white"
              data-aos="zoom-in"
            >
              <p className="text-[#c52326] font-semibold text-lg">
                We’re pioneers
              </p>
              <div>
                With our strategic PR campaigns, your brand will shine under the
                spotlight it deserves. We focus on enhancing your reputation,
                establishing valuable partnerships, and attracting a broader
                audience to your gaming ventures.
              </div>
              Embrace the future of gaming with 4WD GAMING. Let us be your
              ammunition to conquer the world of gaming, Web3 gaming, and
              Esports. Get in touch with us today and ignite your success in
              this thrilling and ever-evolving industry.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
