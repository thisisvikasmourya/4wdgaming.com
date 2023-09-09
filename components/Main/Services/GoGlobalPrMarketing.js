import React from "react";
import Image from "next/image";
import About from "../../../public/images/new/3.gif";
import Navigationbar from "@/components/Navbar/Navigationbar";

const GoGlobalPrMarketing = () => {
  const data = [
    {
      title: "Global PR Strategy:",
      cont: "We craft PR campaigns that reach gaming communities worldwide. We ensure your brand's message resonates in the gaming, Web3, and esports realms.",
    },
    {
      title: "Web3 Digital Marketing:",
      cont: "Web3 is reshaping digital landscapes, and we're here to navigate it for you. We introduce your brand to blockchain gaming and decentralized enthusiasts, expanding your global footprint.",
    },
    {
      title: "Esports Global Outreach",
      cont: "Esports events transcend borders. We specialize in global outreach during esports tournaments, making your brand a global sensation.",
    },
  ];

  const data2 = [
    {
      cont: " Ready to take your brand to the world stage? Contact us today, and let's embark on a journey to expand your reach in the gaming, Web3 gaming, and esports global communities.",

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
      href: "/services/public-relations-and-outreach",
      name: "Public Relations and Outreach",
    },
    {
      href: "/services/digital-gaming-events-and-expo",
      name: " Gaming Events and Expo",
    },
    {
      href: "/services/growth-marketing",
      name: "Growth Marketing",
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
  ];

  return (
    <div className="bg-[#eee2dc]">
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#eee2dc] py-16  px-4 ">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Go Global PR Marketing
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
              Gaming, Web3, and esports know no boundaries, and neither should
              your brand. Our services are like your passport to global success,
              ensuring your brand conquers the gaming, Web3 gaming, and esports
              markets worldwide.
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

export default GoGlobalPrMarketing;
