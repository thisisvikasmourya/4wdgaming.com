import React from "react";
import Image from "next/image";
import About from "../../../public/images/content.jpg";

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
      cont: "With 4WD Gaming's international PR expansion services, unleash your gaming brand's global success. Our expertise in cultural adaptation, language localization, and global media outreach propels your brand to new heights.",
    },
    {
      title: "Contact Us Today:",
      cont: "Embark on a journey of international gaming success. Contact 4WD Gaming today and let our international PR experts unlock global opportunities for your gaming brand.",
    },
 
  ];
  const data = [
    {
      title: "Expand Your Gaming Brand Globally:",
      cont: "At 4WD Gaming, we understand the significance of expanding your gaming brand to international markets. Our international PR expansion services open the door to global opportunities, connecting your brand with gaming enthusiasts worldwide.",
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
  return (
    <div>
      <div className="content bg-[#17191d] py-16 lg:px-32 px-4">
        <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
          International Pr-Expansion
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6  pt-10 lg:px-32 px-4 bg-[#191C20]">
        <div>
          <Image src={About} alt="hello" layout="" className="rounded-lg" />
        </div>
        <div>
          {data.map((items, key) => (
            <div key={key}>
              <p className="text-[#c52326] text-xl">{items.title}</p>
              <p className="py-1 text-white"> {items.cont}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4  grid lg:grid-cols-2 grid-cols-1 gap-2 lg:px-32 px-4 bg-[#191C20]">
        {data2.map((items, key) => (
          <div key={key}>
            <p className="text-[#c52326] text-xl">{items.title}</p>
            <p className="py-1 text-white"> {items.cont}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternationalPrExpansion;
