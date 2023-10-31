import React from "react";
import Image from "next/image";
import About from "../../../public/images/new/10.gif";
import Navigationbar from "@/components/Navbar/Navigationbar";

const GrowthMarketing = () => {
  const data = [
    {
      title: "Smart Plans: ",
      cont: "We create growth plans that make your gaming brand stand out. We make sure your brand keeps growing in the gaming, Web3 gaming, and esports worlds.",
    },
    {
      title: "Web3 Gaming Excitement: ",
      cont: "Web3 gaming is the future, and we're here to introduce gamers to it. We help them discover blockchain gaming and decentralized fun, putting your brand in the spotlight.",
    },
    {
      title: "Esports Promotion: ",
      cont: "Esports events are where legends are born. We're experts at promoting your brand during esports tournaments, making sure it gets the recognition it deserves.",
    },
  ];

  const data2 = [
    {
      cont: " At Moram Napu, we're gamers and growth wizards. Our mission is to make your gaming brand grow and thrive in the gaming, Web3 gaming, and esports realms. Whether you're a gaming company, a Web3 gaming pioneer, or an esports enthusiast, our Growth Marketing services are your secret to taking your brand to the next level.",
      cont: "Ready to level up your gaming brand's growth? Contact us today, and let's begin the journey to make your brand a standout success in the gaming, Web3 gaming, and esports communities",

      //   title: "Rocking the Latest Game Trends:",
    },
  ];

  const navData = [
    {
      href: "/services/strategy-and-digitalmarketing",
      name: "Strategy and Digital Marketing",
    },
    {
      href: "/services/creator-and-influencers",
      name: "Creator and Influencer",
    },
    {
      href: "/services/digital-brand-communication",
      name: "Digital Brand Communication",
    },
    {
      href: "/services/data-driven-gaming-insight",
      name: "Data Driven Gaming-Insight",
    },
    {
      href: "/services/outreachs-and-outreach",
      name: " Outreach",
    },
    {
      href: "/services/digital-gaming-events-and-expo",
      name: " Gaming Events and Expo",
    },
    {
      href: "/services/performance-marketing",
      name: "Performance Marketing",
    },
    {
      href: "/services/gaming-product-launches",
      name: "Gaming Product Launches",
    },
    {
      href: "/services/social-media-management-marketing",
      name: "Social Media Management Marketing",
    },
    {
      href: "/services/community-building-marketing",
      name: "Community Building Marketing",
    },
    {
      href: "/services/go-global-pr-marketing",
      name: "Go Global OutreachMarketing",
    },
  ];

  return (
    <div className="bg-[#eee2dc]">
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#eee2dc] py-16  px-4 ">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Growth Marketing
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto md:px-8" data-aos="zoom-in">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4   px-4 pt-10 bg-[#eee2dc]">
          <div>
            <Image src={About} alt="hello" layout="" className="rounded-lg" />
          </div>
          <div>
            <p className="py-1 text-[#123c69] text-[20px]">
              Gaming is more than just playing; it&apos;s about making your
              brand shine. Our Growth Marketing services are like your
              brand&apos;s mentors, showing it the way through the gaming galaxy
              with strategies that gamers love.
            </p>
            {data.map((items, key) => (
              <div key={key}>
                <p className="text-[#ac3b61] font-bold text-xl text-[20px]">
                  {items.title}
                </p>
                <p className=" pb-3 text-[#123c69] text-[18px]">
                  {" "}
                  {items.cont}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" grid lg:grid-cols-2 grid-cols-1 gap-2  px-4 bg-[#eee2dc]">
          {data2.map((items, key) => (
            <div key={key}>
              <p className="text-[#ac3b61] font-bold text-xl text-[20px]">
                {items.title}
              </p>
              <p className=" pb-3 text-[#123c69] text-[18px]"> {items.cont}</p>
            </div>
          ))}
        </div>
      </div>
      <Navigationbar navData={navData} />
    </div>
  );
};

export default GrowthMarketing;
