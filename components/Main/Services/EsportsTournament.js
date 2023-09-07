import React from "react";
import Image from "next/image";
import About from "../../../public/images/esportss.png";
import Navigationbar from "@/components/Navbar/Navigationbar";

const EsportsTournament = () => {
  const data2 = [
    {
      title: "Live Action Thrills:",
      cont: "Live events are where the excitement hits its peak. We pull off electrifying esports tournaments that keep players and fans at the edge of their seats. From picking the perfect venue to handling the nitty-gritty details, we've got it all covered.",
    },

    {
      title: "Tournaments Your Way:",
      cont: "We know every gaming community is unique. That's why our tournaments are tailor-made to suit the preferences and skills of players. It's all about making sure everyone gets a chance to shine.",
    },
    {
      title: "Production Like No Other:",
      cont: "We're not just about the game – we're about the show. Our tournaments come with high-quality production that includes top-notch broadcasting, awesome commentary, and visuals that amp up the excitement.",
    },
    {
      title: "More Than a Game:",
      cont: "Our tournaments are a whole experience. We create engagement through interactive zones, fan activities, and chances to connect with gaming stars and influencers.",
    },
    {
      title: "Playing Fair:",
      cont: "Fairness is non-negotiable. We put strict measures in place to keep things clean and competitive, making sure everyone plays on a level field.",
    },
    {
      title: "From Start to Finish:",
      cont: "We've got your back every step of the way. From planning before the event to analyzing after it's done, our comprehensive event management ensures everything runs like clockwork.",
    },
    {
      title: "Partnerships that Shine:",
      cont: "We team up with industry players, sponsors, and gaming brands to give your tournaments that extra shine. This way, we attract a bigger and more diverse audience.",
    },
    {
      title: "Going Global:",
      cont: "Our reach knows no boundaries. We're here to organize tournaments that span the globe, bringing gamers from all walks of life together.",
    },
    {
      title: "Unforgettable Moments:",
      cont: "With Moram Napu in charge, your esports tournaments aren't just events – they're memories that stick. We turn participants into die-hard fans and spectators into your biggest supporters.",
    },
    {
      title: "Let's Level Up:",
      cont: "Ready to elevate your gaming scene? Get in touch with Moram Napu today and let's make your esports tournaments the stuff of legends.",
    },
  ];
  const data = [
    {
      title: "Esports Excellence:",
      cont: "At Moram Napu, we're not just about organizing tournaments – we're about crafting gaming journeys. Our team is made up of gaming fanatics who are all about creating epic experiences for players and fans alike.",
    },
    {
      title: "Virtual Showdowns:",
      cont: "When it comes to virtual tournaments, we're on top of our game. We set up online tournaments that connect players from all corners of the world. Our tech makes sure everything runs smoothly and fairly.",
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
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#eee2dc] py-16  px-4">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Gaming Event and Expo
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 pt-10  px-4 bg-[#eee2dc]">
            <div>
              <Image src={About} alt="hello" layout="" className="rounded-lg" />
            </div>
            <div>
              <p className="py-1 text-[#123c69] text-[20px]">
                Esports tournaments? Moram Napu is here to make sure your gaming
                community gets an unforgettable gaming experience that&apos;s
                second to none.
              </p>

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
          <div className="p-4 grid lg:grid-cols-2 grid-cols-1 gap-1  px-4 bg-[#eee2dc]">
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

export default EsportsTournament;
