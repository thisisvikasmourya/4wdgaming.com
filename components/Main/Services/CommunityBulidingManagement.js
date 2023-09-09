import React from "react";
import Image from "next/image";
import About from "../../../public/images/new/4.gif";
import Navigationbar from "@/components/Navbar/Navigationbar";

const CommunityBulidingManagement = () => {
  const data = [
    {
      title: "Bring Gamers Together: ",
      cont: "Think of us as the matchmakers for gamers. We know how to create a sense of togetherness that keeps gamers excited and engaged.",
    },
    {
      title: "Friendly Community Care: ",
      cont: "Community management isn't just about keeping the peace. We handle it all – from answering questions quickly to keeping the community buzzing with excitement.",
    },
   ];

  const data2 = [
    {
      title: "Fun Events Galore:  ",
      cont: "We love throwing gaming parties, virtually speaking. Our team sets up fun events, tournaments, and challenges to keep the excitement alive.",
    },
    {
      title: "Feedback Matters:  ",
      cont: "Your community's opinions are gold. We gather and analyze feedback, helping you make improvements based on what they say.",
    },

    {
      title: "Everyone's Welcome: ",
      cont: "Building and managing a lively gaming community isn't just about getting likes and shares. It's about creating a loyal following that sticks around. Here's why our Building and Managing Gaming Communities  service is crucial:",
    },
    {
      title: "Loyal Fans and Advocates:",
      cont: "A well-run community turns players into loyal fans who not only enjoy your games but also spread the word about your brand.",
    },
    {
      title: "Awesome User-Created Content: ",
      cont: "Your community generates amazing content that shows off your games in unique ways, spreading your brand's reach.",
    },
    {
      title: "Feedback = Improvement:",
      cont: " Direct feedback from your community helps you make your games even better, ensuring they match what your players want.",
    },
    {
      title: "Long-Term Success:",
      cont: "  A thriving community sets the stage for your gaming brand's long-term success. It's about building a legacy.",
    },
    {
      cont: " Community Management? Reach out to us today, and let's begin crafting your gaming community's success story together.",

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
              Community Buliding Management
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
              At Moram Napu, we get it - in the gaming world, your fans are more
              than just players; they&apos;re your biggest supporters.
              That&apos;s where our Building and Managing Gaming Communities
              service comes in.
            </p>
            <h1 className="py-1 text-[#123c69] text-[22px]">What We Do:</h1>
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

export default CommunityBulidingManagement;
