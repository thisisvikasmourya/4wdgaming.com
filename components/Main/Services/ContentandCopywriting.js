import React from "react";
import Image from "next/image";
import About from "../../../public/images/ddd.png";
import Navigationbar from "@/components/Navbar/Navigationbar";

const ContentandCopywriting = () => {
  const data = [
    {
      title: "Getting You Moving:",
      cont: "Our words are like cheerleaders – they make players join, play, and have fun.",
    },
    {
      title: "Take Your Game Up a Notch:",
      cont: "Words have power, and we know how to use it. Moram Napu's here to make your game's story super awesome.",
    },
    {
      title: "Creating Brand Loyalty:",
      cont: "Effective content and copywriting go beyond words; they create emotional connections with your audience. We craft content that fosters brand loyalty, turning gamers into devoted fans.",
    },
  ];
  const data2 = [
    {
      title: "Telling Stories That Stick:",
      cont: "Meet our word wizards – they're pros at making stories that stick. It's like reading a cool game plot that also clicks with your gaming crew.",
    },
    {
      title: "Cool Stuff for Every Place:",
      cont: "Whether it's game blogs, social posts, in-game chats, or news blurbs, we're on it. We make words that fit each spot, so your gaming vibe is everywhere.",
    },
    {
      title: "Making Friends and Fans:",
      cont: "Words can make hearts connect, and that's our game. We write stuff that makes your fans super loyal, like they're in your gaming fan club.",
    },
    {
      title: "Put Your Game in the Spotlight.",
      cont: "Launching a game or talking about a gaming event? We've got the spotlight for that. We make sure your game shines bright, even brighter than other games out there.",
    },
    {
      title: "Friends with Search Engines Too:",
      cont: "We're not just word lovers; we're search engine buddies too. Our words are smart so your game pops up when players search.",
    },
    {
      title: "From Idea to Done:",
      cont: "We handle everything – from coming up with ideas to getting the final words in place. We make sure everything fits your game's style.",
    },
    {
      title: "Rocking the Latest Game Trends:",
      cont: "We know what's cool in gaming. We use the latest trends to make words that gamers love.",
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
              Content And Copywriting
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
              Ever thought about how to grab your gaming crew&apos;s attention?
              Well, Moram Napu&apos;s got your back. We know that cool content
              and catchy words are like magnets for your gaming gang.
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

export default ContentandCopywriting;
