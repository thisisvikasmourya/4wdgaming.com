import React from "react";
import Image from "next/image";
import About from "../../../public/images/new/9.gif";
import Navigationbar from "@/components/Navbar/Navigationbar";

const PerformanceMarketing = () =>
{
    
  const data = [
    {
      title: "Results That Speak:",
      cont: "We create marketing plans that deliver real, tangible results. We ensure your gaming brand shines in the gaming, Web3 gaming, and esports arenas.",
    },
    {
      title: "Web3 Gaming Exploration:",
      cont: "Web3 gaming is the future, and we're here to lead the way. We introduce gamers to blockchain gaming and decentralized excitement, ensuring your brand takes the spotlight.",
    },
    {
      title: "Esports Promotion Mastery",
      cont: "Esports events are where champions are born. We're experts at promoting your brand during esports tournaments, ensuring it stands out.",
    },
    
  ];
    
  const data2 = [
    {
      //   title: "Rocking the Latest Game Trends:",
      cont: " At Moram Napu, we're gamers and marketing experts. Our mission is to make your gaming brand perform exceptionally in the gaming, Web3 gaming, and esports realms. Whether you're a gaming company, a Web3 gaming pioneer, or an esports enthusiast, our Performance Marketing services are your secret weapon for reaching new heights.",
      cont: "Ready to supercharge your gaming brand's success? Contact us today, and let's begin the journey to make your brand a performance powerhouse in the gaming, Web3 gaming, and esports communities.",
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
               Performance Marketing
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
              Gaming is more than just playing; it&apos;s about achieving
              greatness. Our Performance Marketing services are like
              turbochargers for your gaming brand, propelling it to new heights
              with strategies that gamers can&apos;t resist.
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

export default PerformanceMarketing;

