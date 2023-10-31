import React from "react";
import Image from "next/image";
import About from "../../../public/images/new/6.gif";
import Navigationbar from "@/components/Navbar/Navigationbar";

const DigitalGamingEvents = () => {
  const data2 = [
    {
      title: "Fun and Games:",
      cont: "It's not just about winning – it's about the journey. We put together games and contests that add that extra thrill to your events. From friendly face-offs to intense showdowns, we keep everyone entertained.",
    },
    {
      title: "Fans in the Spotlight:",
      cont: "Fans aren't just watching; they're part of the action. We make sure your events include interactive sessions and live streams, keeping the energy high and the excitement real.",
    },
    {
      title: "Game Titles Take Center Stage:",
      cont: "Your games deserve the spotlight, and that's exactly where we put them. Our events are the perfect showcase for your game titles, making sure players are curious and excited to dive in.",
    },
    {
      title: "Gaming Community Vibes:",
      cont: "Events aren't just about playing; they're about belonging. We make sure your events bring gamers together, creating a strong sense of community around your brand.",
    },
    {
      title: "Connect and Collaborate:",
      cont: "Our events are networking goldmines. Gamers, developers, and industry experts get to meet, mingle, and form connections that could lead to epic collaborations.",
    },
    {
      title: "Unforgettable Memories:",
      cont: "We're not just about events; we're about memories that stick around. With our careful planning and attention to detail, we make sure everyone leaves with stories to tell and memories to cherish.",
    },
    {
      title: "Memories that Last:",
      cont: "With meticulous planning and execution, we create memories that last a lifetime for participants and gaming enthusiasts, establishing your brand as a leader in the gaming events space.",
    },
    {
      title: "Ready for Legendary Moments?",
      cont: "Moram Napu is here to take your gaming events to a whole new level. Let's create experiences that players will talk about for years. Get in touch, and let the gaming magic begin.",
    },
  ];
  const data = [
    {
      title: "Gaming Tournaments Gone Virtual:",
      cont: "Virtual gaming is the name of the game, and we're experts at hosting online tournaments that connect players worldwide. No more borders – just epic virtual battles that bring the gaming community together.",
    },
    {
      title: "Live Gaming Extravaganza:",
      cont: "We're all about that real-life thrill too! Our live gaming events are a blast, bringing gamers under one roof for an unforgettable experience. From LAN parties to massive championships, weve got the excitement covered.",
    },
    {
      title: "Pros Behind the Scenes::",
      cont: "We've got a team that's seen it all. From planning and organizing to spreading the word and making sure everything runs like clockwork, we've got you covered from A to Z.",
    },
    {
      title: "Events That Speak Your Brand:",
      cont: "Every gaming brand is unique, and we get that. Our events match your style and values, giving your brand a spotlight like no other. It's all about keeping things real and relevant to you.",
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
    {
      href: "/services/go-global-pr-marketing",
      name: "Go Global OutreachMarketing",
    },
  ];

  return (
    <div>
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#eee2dc] py-16  px-4">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Gaming Events and Expo
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6  pt-10  px-4 bg-[#eee2dc]">
            <div>
              <Image src={About} alt="hello" layout="" className="rounded-lg" />
            </div>
            <div>
              {data.map((items, key) => (
                <div key={key}>
                  <p className="text-[#ac3b61] text-[20px]">{items.title}</p>
                  <p className="pb-3 text-[#123c69] text-[18px]">
                    {" "}
                    {items.cont}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 grid lg:grid-cols-2 grid-cols-1 gap-2  px-4 bg-[#eee2dc]">
            {data2.map((items, key) => (
              <div key={key}>
                <p className="text-[#ac3b61] text-[20px]">{items.title}</p>
                <p className="pb-3 text-[#123c69] text-[18px]"> {items.cont}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigationbar navData={navData} />
    </div>
  );
};

export default DigitalGamingEvents;
