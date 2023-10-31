import React from "react";
import Image from "next/image";
import About from "../../../public/images/new/14.gif";
import Navigationbar from "@/components/Navbar/Navigationbar";

const PublicRelations = () => {
  const data2 = [
    {
      title: "All the OutreachTricks:",
      cont: "From getting the media excited to teaming up with cool influencers, and even handling those times when things get tricky – we've got a bag full of Outreachtricks. Our goal? Make your brand stand out, get those cool partnerships, and get more fans into your gaming world..",
    },
    {
      title: "Game Changers in Gaming Outreach:",
      cont: "We're not just saying it – we've actually played a big part in shaping the gaming Outreachscene in India. Our journey started from traditional gaming to the amazing world of Web3 and blockchain gaming.",
    },
    {
      title: "Looking Ahead:",
      cont: "We're not just part of the gaming world; we're shaping it. We're always thinking about what's next and making sure you're ahead of the game. Challenges don't scare us – we predict them and help you tackle them head-on.",
    },
    {
      title: "More Than Outreach:",
      cont: "Sure, Outreachis our thing, but we're not stopping there. We're like the wizards of marketing, brand planning, and managing your rep. We're even pros at guiding gaming companies through tricky stuff like going public.",
    },
    {
      title: "Impressive Gaming Lineup:",
      cont: "We've teamed up with some big names and top-notch games. Our portfolio is like a badge of honor that proves we're good at this stuff. We're not just here to give advice – we're here to create legends.",
    },
    {
      title: "Breaking the Mold:",
      cont: "We're not like the usual Outreachfolks. We're all about mixing classic Outreachwith fresh, new ideas that rock the modern media scene. We're all about making you shine in the new media age.",
    },
    {
      title: "Your Partner in Power:",
      cont: "We know you're different, and we get that media trends change like the weather. We're by your side, making sure you shine, your brand grows, and your message gets across loud and clear. Your win is our win.",
    },
    {
      title: "Ready for the Adventure?",
    },
    {
      title:
        "Moram Napu is your go-to Outreachsidekick. Let us be the secret weapon that takes your gaming, Web3 gaming, and esports dreams to the stars. Give us a shout, and let's conquer the exciting gaming world together.",
    },
  ];
  const data = [
    {
      title: "Game-Changing Outreachfor Gaming and Esports:",
      cont: "Our goal? Make your gaming brand a true powerhouse. Whether you're a gaming company looking to shine bright, an esports team aiming to build a fan club, or a game developer dreaming of fame, our Outreachtricks are all about you.",
    },
    {
      title: "Gaming Know-How:",
      cont: "We've been around the gaming and esports block, so we know the ins and outs. Our Outreachpros are experts in the gaming world, so we make sure our plans hit the bullseye with your players.",
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
      name: "Go Global OutreachMarketing",
    },
  ];

  return (
    <div>
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#eee2dc] py-16  px-4">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Outreach
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
                Ready to take your gaming dreams to the next level? Well, Moram
                Napu is here to be more than just your average Outreachagency.
                We&apos;re brand builders who know the magic of a strong brand
                when it comes to getting all that media buzz and attention.
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
          <div className="p-4 grid lg:grid-cols-2 grid-cols-1 gap-2   px-4 bg-[#eee2dc]">
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

export default PublicRelations;
