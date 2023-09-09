import React from "react";
import Image from "next/image";
import About from "../../../public/images/new/11.gif";
import Navigationbar from "@/components/Navbar/Navigationbar";

const SocialMediaManagementMarketing = () => {
  const data = [
    {
      title: "Awesome Posts: ",
      cont: "We make social media posts that gamers love. From exciting game news to cool updates, we keep your social media pages buzzing.",
    },
    {
      title: "Discover Web3 Gaming: ",
      cont: "Web3 gaming is the next big thing, and we'll introduce gamers to it through social media. We make blockchain gaming and decentralized fun easy to understand.",
    },
    {
      title: "Esports Excitement: ",
      cont: "Esports events are where legends are made. We're experts at promoting esports tournaments on social media, ensuring your brand is in the spotlight.",
    },
  ];

  const data2 = [
    {
      //   title: "Rocking the Latest Game Trends:",
      cont: " At Moram Napu, we're gamers and social media pros. Our goal is to make your gaming brand famous on social media. Whether you're a gaming company, a Web3 gaming pioneer, or an esports fan, our Social Media Management & Marketing services are your ticket to social media success.",
      cont: "Ready to level up your gaming brand on social media? Contact us today, and let's start a journey to make your brand a social media sensation in the gaming, Web3 gaming, and esports communities.",
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
      href: "/services/community-building-marketing",
      name: "Community Building Marketing",
    },
    {
      href: "/services/go-global-pr-marketing",
      name: "Go Global PR Marketing",
    },
  ];

  return (
    <div className="bg-[#eee2dc]">
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#eee2dc] py-16  px-4 ">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Social Media Management Marketing
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
              Gaming is not just about playing; it&apos;s about being part of a
              cool club. Our Social Media Management & Marketing services are
              like your social media superheroes, creating posts that gamers
              can&apos;t resist.
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

export default SocialMediaManagementMarketing;


