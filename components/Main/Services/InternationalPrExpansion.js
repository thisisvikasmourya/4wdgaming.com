import React from "react";
import Image from "next/image";
import About from "../../../public/images/interpr.jpg";
import Navigationbar from "@/components/Navbar/Navigationbar";

const InternationalPrExpansion = () => {
  const data2 = [
    {
      title: "Customized PR Strategies:",
      cont: "We tailor our PR strategies to align with the preferences and interests of international gaming communities. Our customized approach ensures that your brand's messaging and engagement tactics appeal to players worldwide.",
    },
    {
      title: "Global Event Promotion:",
      cont: "Participating in international gaming events can boost your brand's global presence. We promote your gaming brand at international gaming expos, tournaments, and conferences, creating buzz and attracting a broader audience.",
    },
    {
      title: "Local Partnerships and Collaborations:",
      cont: "Forming local partnerships and collaborations is key to international success. Our team fosters valuable alliances with international gaming influencers, content creators, and industry experts to amplify your brand's reach.",
    },
    {
      title: "Brand Reputation Management:",
      cont: "Maintaining a positive brand reputation is critical in international markets. We diligently manage your brand's reputation, promptly addressing any issues and safeguarding your brand's integrity.",
    },
    {
      title: "Unleash Global Gaming Success:",
      cont: "With Moram Napu's international PR expansion services, unleash your gaming brand's global success. Our expertise in cultural adaptation, language localization, and global media outreach propels your brand to new heights.",
    },
    {
      title: "Contact Us Today:",
      cont: "Embark on a journey of international gaming success. Contact Moram Napu today and let our international PR experts unlock global opportunities for your gaming brand.",
    },
  ];
  const data = [
    {
      title: "Expand Your Gaming Brand Globally:",
      cont: "At Moram Napu, we understand the significance of expanding your gaming brand to international markets. Our international PR expansion services open the door to global opportunities, connecting your brand with gaming enthusiasts worldwide.",
    },
    {
      title: "Cultural Expertise and Nuances:",
      cont: "Navigating international markets requires a deep understanding of cultural nuances. Our expert team is well-versed in cultural sensitivities, ensuring that your brand's messages resonate with players from diverse backgrounds.",
    },
    {
      title: "Localization and Language Mastery:",
      cont: "Language barriers can hinder global expansion. We offer expert localization and language mastery services to ensure that your brand's messaging is clear, impactful, and culturally relevant to international audiences.",
    },
    {
      title: "Global Media Outreach:",
      cont: "With a vast network of international media contacts, we facilitate global media outreach for your gaming brand. Our PR experts secure coverage in leading international publications, gaming blogs, and influential media outlets.",
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
      href: "/services/creator-and-influencers",
      name: "Creator and Influencer",
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
      href: "/services/gaming-product-launches",
      name: "Gaming Product Launches",
    },
  ];
  return (
    <div>
      <div className="bg-[#17191d]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#17191d] py-16  px-4">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              International PR-Expansion
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#191C20]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6  pt-10  px-4 bg-[#191C20]">
            <div>
              <Image src={About} alt="hello" layout="" className="rounded-lg" />
            </div>
            <div>
              {data.map((items, key) => (
                <div key={key}>
                  <p className="text-[#c52326] text-[20px]">{items.title}</p>
                  <p className="pb-3 text-white text-[18px]"> {items.cont}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4  grid lg:grid-cols-2 grid-cols-1 gap-2  px-4 bg-[#191C20]">
            {data2.map((items, key) => (
              <div key={key}>
                <p className="text-[#c52326] text-[20px]">{items.title}</p>
                <p className="pb-3 text-white text-[18px]"> {items.cont}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigationbar navData={navData} />
    </div>
  );
};

export default InternationalPrExpansion;
