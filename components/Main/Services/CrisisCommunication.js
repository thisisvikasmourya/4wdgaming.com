import React from "react";
import Image from "next/image";
import About from "../../../public/images/crisis.png";
import Navigationbar from "@/components/Navbar/Navigationbar";

const CrisisCommunication = () => {
  const data = [
    {
      title: "Protecting Your Gaming Brand:",
      cont: "In the fast-paced and interconnected world of gaming, unforeseen crises can arise at any moment. At Moram Napu, we understand the importance of protecting your gaming brand during turbulent times.",
    },
    {
      title: "Swift and Strategic Response:",
      cont: "Our crisis communications team is adept at crafting swift and strategic responses to address crises promptly. We work tirelessly to mitigate potential damage to your brand's reputation.",
    },
    {
      title: "Transparent Communication:",
      cont: "In times of crisis, transparent communication is vital. We guide you in communicating openly and honestly with your stakeholders, building trust and credibility.",
    },
  ];
  const data2 = [
    {
      title: "Preserving Brand Image:",
      cont: "We recognize the significance of preserving your brand's image, even during challenging situations. Our team ensures that your core values and identity remain intact.",
    },
    {
      title: "Digital Reputation Management:",
      cont: "In today's digital age, reputation management extends to online platforms. We monitor and manage your digital reputation, safeguarding your brand's online presence.",
    },
    {
      title: "Regaining Stakeholder Trust:",
      cont: "Our strategic crisis communication approach focuses on regaining stakeholder trust and confidence in your gaming brand, facilitating a swift recovery.",
    },
    {
      title: "Industry Expertise:",
      cont: "With our deep understanding of the gaming industry, we are uniquely positioned to address crisis situations specific to the gaming ecosystem.",
    },
    {
      title: "Confidentiality and Trust:",
      cont: "We prioritize confidentiality and maintain the highest level of trust with our clients, ensuring sensitive information remains secure.",
    },
    {
      title: "Expert Guidance in Crisis:",
      cont: "When navigating turbulent waters, trust Moram Napu to be your expert guide. Our crisis communications services provide the support and expertise you need to steer through challenging situations with confidence.",
    },
    {
      title: "24/7 Crisis Support:",
      cont: "Crisis situations don't follow a schedule. That's why our crisis communications team is available 24/7 to provide immediate support and guidance whenever you need it. ",
    },
    {
      title: "Proactive Crisis Planning:",
      cont: "Preparation is key. Our team proactively develops crisis management plans tailored to your gaming brand, enabling you to respond effectively to various scenarios.",
    },
    {
      title: "Media Relations Management:",
      cont: "We handle media relations with finesse, ensuring that accurate information is conveyed to the public and the media during crisis situations.",
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
      <div className="bg-[#fff]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#fff] py-16  px-4">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Crisis Communication
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#fff]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 pt-10  px-4 bg-[#fff]">
            <div>
              <Image src={About} alt="hello" layout="" className="rounded-lg" />
            </div>
            <div>
              <p className="py-1 text-black text-[20px]">
                Captivate your gaming community with powerful storytelling. At
                Moram Napu, we understand the significance of content and
                copywriting in creating meaningful connections with your
                audience.
              </p>

              {data.map((items, key) => (
                <div key={key}>
                  <p className="text-[#4d326b] text-[20px]">{items.title}</p>
                  <p className="pb-3 text-black text-[18px]"> {items.cont}</p>
                </div>
              ))}
            </div>
          </div>
          <div className=" grid lg:grid-cols-2 grid-cols-1 gap-2    px-4 bg-[#fff]">
            {data2.map((items, key) => (
              <div key={key}>
                <p className="text-[#4d326b] text-[20px]">{items.title}</p>
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

export default CrisisCommunication;
