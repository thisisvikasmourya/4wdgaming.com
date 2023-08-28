import React from "react";
import Image from "next/image";
import About from "../../../public/images/cover.jpg";
import Navigationbar from "@/components/Navbar/Navigationbar";

const CreatorsandInfluencers = () => {
  const data2 = [
    {
      title: "Expanding Your Audience Reach:",
      cont: "Our strategic partnerships with top gaming influencers allow your brand to tap into a wider audience. Reach out to potential gamers who may not have discovered your brand otherwise.",
    },
    {
      title: "Engaging and Authentic Content:",
      cont: "Authenticity is key in the gaming world. Our collaborations with gaming influencers ensure that your brand is promoted in an engaging and genuine manner, resonating with their audience on a personal level.",
    },
    {
      title: "Connecting with Your Community:",
      cont: "Creators and influencers are an essential link between your brand and the gaming community. Through their content, they foster a sense of belonging and connection, drawing gamers closer to your brand.",
    },
    {
      title: "Tailored Partnerships for Your Brand:",
      cont: "We understand that each gaming brand is unique. Our team crafts tailored partnerships that align with your brand's values, voice, and target audience, ensuring maximum impact and relevance.",
    },
    {
      title: "Measuring Impact and ROI:",
      cont: "We believe in results-driven partnerships. Our team tracks and measures the impact of influencer collaborations, providing you with valuable insights on ROI and engagement metrics.",
    },
    {
      title: "Navigating the Gaming Influencer Landscape:",
      cont: "Navigating the gaming influencer landscape can be overwhelming. We simplify the process, identifying the right influencers for your brand and managing the collaboration from start to finish.",
    },
    {
      title: "Building Long-Term Relationships:",
      cont: "We focus on building lasting relationships with gaming content creators and influencers. These long-term partnerships foster continuous growth and sustained engagement for your gaming brand.",
    },
    {
      title: "Embrace the Power of Influence:",
      cont: "The influence of creators and influencers extends far beyond the gaming community. Let Moram Napu help you harness this power to amplify your gaming brand's reach, foster credibility, and create meaningful connections with gamers worldwide.",
    },
  ];
  const data = [
    {
      title: "Amplify Your Gaming Brand:",
      cont: "Creators and influencers are the heartbeat of the gaming community. At Moram Napu, we understand the value they bring to your brand. Through strategic partnerships, we amplify your gaming brand's reach and impact.",
    },
    {
      title: "Building Credibility and Trust:",
      cont: "Gaming content creators and influencers have a dedicated following that trusts their recommendations. By partnering with influential figures, your brand gains credibility and establishes a strong presence within the gaming community.",
    },
  ];
  const navData = [
    {
      href: "/services/strategy-and-marketing",
      name: "Strategy and Marketing",
    },
    {
      href: "/services/content-and-writing",
      name: "Content and Copywriting",
    },
    {
      href: "/services/crisis-communication",
      name: "Crisis Communication",
    },
    {
      href: "/services/data-driven-pr-insight",
      name: "Data Driven Pr-insight",
    },
    {
      href: "/services/public-relations",
      name: "Public Relations",
    },
    {
      href: "/services/digital-gaming-events",
      name: "Digital Gaming Events",
    },
    {
      href: "/services/esports-tournament-organization",
      name: "Esports Tournaments",
    },
    {
      href: "/services/international-pr-expansion",
      name: "International PR-Expansion",
    },
    {
      href: "/services/gaming-product-launches",
      name: "Gaming Product Launches",
    },
  ];
  return (
    <div>
      <div className="bg-[#f3efdf]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#f3efdf] py-16  px-4">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Creators & Influencers
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#f0ebd7]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6  pt-10  px-4 bg-[#f0ebd7]">
            <div>
              <Image src={About} alt="hello" layout="" className="rounded-lg" />
            </div>
            <div>
              <p className="py-1 text-black text-[20px]">
                Are you ready to take your gaming brand to the next level? At
                Moram Napu, we are not just any PR agency; we are brand builders
                who understand the immense power of a strong brand in attracting
                organic media and PR.
              </p>

              {data.map((items, key) => (
                <div key={key}>
                  <p className="text-[#4d326b] text-[18px]">{items.title}</p>
                  <p className="pb-3 text-black text-[18px]"> {items.cont}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4  grid lg:grid-cols-2 grid-cols-1 gap-2 px-4 bg-[#f0ebd7]">
            {data2.map((items, key) => (
              <div key={key}>
                <p className="text-[#4d326b] text-xl text-[18px]">
                  {items.title}
                </p>
                <p className="pb-3 text-black text-[18px]"> {items.cont}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigationbar navData={navData} />
    </div>
  );
};

export default CreatorsandInfluencers;
