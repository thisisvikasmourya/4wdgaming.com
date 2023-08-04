import React from "react";
import Image from "next/image";
import About from "../../../public/images/webs.png";
import Navigationbar from "@/components/Navbar/Navigationbar";

const EsportsTournament = () => {
  const data2 = [
    {
      title: "Thrilling Live Tournaments:",
      cont: "For live events, we orchestrate thrilling esports tournaments that captivate participants and spectators alike. From venue selection to event logistics, we handle every detail to create unforgettable experiences.",
    },

    {
      title: "Tailored Tournament Formats:",
      cont: "Every gaming community is unique, and we understand the importance of tailoring tournament formats to suit the preferences and skill levels of players. Our flexible approach ensures maximum participation and excitement.",
    },
    {
      title: "Top-notch Production Value:",
      cont: "Spectators crave excitement, and we deliver it through high-quality production value. Our esports tournament organization includes professional broadcasting, engaging commentary, and captivating visuals.",
    },
    {
      title: "Community Engagement:",
      cont: "Our tournaments go beyond the game itself. We foster community engagement through interactive elements, fan zones, and opportunities to meet gaming influencers and esports stars.",
    },
    {
      title: "Safeguarding Fair Play:",
      cont: "Fair play is at the core of our esports tournament organization. We implement stringent measures to prevent cheating, ensuring a level playing field for all participants.",
    },
    {
      title: "Comprehensive Event Management:",
      cont: "From pre-event planning to post-event analysis, we provide comprehensive event management solutions to ensure the success of your esports tournaments.",
    },
    {
      title: "Collaboration with Partners:",
      cont: "We collaborate with industry partners, sponsors, and gaming brands to elevate the profile of your esports tournaments and attract a wider audience.",
    },
    {
      title: "International Reach:",
      cont: "Our expertise extends globally, allowing us to organize esports tournaments that reach a diverse international audience.",
    },
    {
      title: "Unforgettable Experiences:",
      cont: "With 4WD Gaming at the helm, your esports tournaments are guaranteed to leave a lasting impression, turning participants into loyal fans and spectators into enthusiastic supporters.",
    },
    {
      title: "Contact Us Today:",
      cont: "Ready to level up your gaming events? Contact 4WD Gaming today and let our esports tournament organization services elevate your gaming experiences to new heights.",
    },
  ];
  const data = [
    {
      title: "Experience Gaming at Its Best:",
      cont: "At 4WD Gaming, we take esports tournament organization to a whole new level. Our team of seasoned experts is passionate about delivering top-notch gaming experiences that resonate with both players and fans.",
    },
    {
      title: "Seamless Virtual Tournaments:",
      cont: "In the virtual realm, we excel at organizing seamless esports tournaments that bring together players from across the globe. Our sophisticated online platforms ensure smooth operations and fair competition.",
    },
    ];
  return (
    <div>
      <div className="bg-[#17191d]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#17191d] py-16  px-4">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Esports Tournament Organizations
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#191C20]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 pt-10  px-4 bg-[#191C20]">
            <div>
              <Image src={About} alt="hello" layout="" className="rounded-lg" />
            </div>
            <div>
              <p className="py-1 text-white">
                Captivate your gaming community with powerful storytelling. At
                4WD Gaming, we understand the significance of content and
                copywriting in creating meaningful connections with your
                audience.
              </p>

              {data.map((items, key) => (
                <div key={key}>
                  <p className="text-[#c52326] text-xl">{items.title}</p>
                  <p className="py-1 text-white"> {items.cont}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 grid lg:grid-cols-2 grid-cols-1 gap-1  px-4 bg-[#191C20]">
            {data2.map((items, key) => (
              <div key={key}>
                <p className="text-[#c52326] text-xl">{items.title}</p>
                <p className="py-1 text-white"> {items.cont}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigationbar/>
    </div>
  );
};

export default EsportsTournament;
