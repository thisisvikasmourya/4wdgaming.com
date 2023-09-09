import React from "react";
import Image from "next/image";
import About from "../../../public/images/new/5.gif";
import Navigationbar from "@/components/Navbar/Navigationbar";

const CreatorsandInfluencers = () => {
  const data2 = [
    {
      title: "Getting More Friends:",
      cont: "Meet the friends of our friends – top gaming influencers. They know how to get more people to notice your brand. Imagine reaching new gamers who didn't know you existed!",
    },
    {
      title: "Real Talk and Real Fans:",
      cont: "In the gaming world, being real is everything. Our teamwork with influencers means your brand gets talked about in a way that feels genuine. Their fans totally get what you're all about.",
    },
    {
      title: "Getting Friendly with Your Gang:",
      cont: "Creators and influencers are like bridges between you and gamers. They make gamers feel at home with your brand. You'll be closer to gamers than ever before.",
    },
    {
      title: "Partnerships That Fit You:",
      cont: "Your gaming brand is one of a kind, and so are our partnerships. We create collabs that match your style, values, and the gamers you want to connect with.",
    },
    {
      title: "Seeing Results in Numbers:",
      cont: "We're all about results, not just cool collabs. Our team keeps an eye on how these partnerships help your brand. You'll know exactly what's working and what's not.",
    },
    {
      title: "Nailing the Right Influencers:",
      cont: "Finding the right influencers in the gaming world can be a puzzle. But relax, we got this. We find the perfect players for your brand and make the whole thing smooth.",
    },
    {
      title: "Friends for the Long Run:",
      cont: "We're not just in it for the moment. We're here to build friendships with gaming creators and influencers. These friendships keep growing and keep your brand shining.",
    },
    {
      title: "Tapping into Influencer Magic:",
      cont: "Influencers aren't just big in gaming; they're stars everywhere. Moram Napu can help you use this magic to make your gaming brand huge, trusted, and loved by gamers all around.",
    },
  ];
  const data = [
    {
      title: "Boosting Your Gaming Brand:",
      cont: "Guess what? Creators and influencers are the cool kids of the gaming gang. We get that at Moram Napu. We team up with these awesome players to make your gaming brand super popular.",
    },
    {
      title: "Making Trust and Fame:",
      cont: "Those gaming content creators and influencers? They've got fans who trust them. When we team up with them, your brand gets a trust badge. Plus, you become the cool topic in the gaming world.",
    },
  ];
  const navData = [
    {
      href: "/services/strategy-and-digitalmarketing",
      name: "Strategy and Digital Marketing",
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
    <div>
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#eee2dc] py-16  px-4">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Creators & Influencers
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6  pt-10  px-4 bg-[#eee2dc]">
            <div>
              <Image src={About} alt="hello" layout="" className="rounded-lg" />
            </div>
            <div>
              <p className="py-1 text-[#123c69] text-[20px]">
                Ready to kick your gaming brand up a notch? Well, at Moram Napu,
                we&apos;re not your typical PR folks. We&apos;re more like brand
                builders who know how to make your gaming brand shine in the
                media and PR world.
              </p>

              {data.map((items, key) => (
                <div key={key}>
                  <p className="text-[#ac3b61] text-[18px]">{items.title}</p>
                  <p className="pb-3 text-[#123c69] text-[18px]">
                    {" "}
                    {items.cont}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4  grid lg:grid-cols-2 grid-cols-1 gap-2 px-4 bg-[#eee2dc]">
            {data2.map((items, key) => (
              <div key={key}>
                <p className="text-[#ac3b61] text-xl text-[18px]">
                  {items.title}
                </p>
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

export default CreatorsandInfluencers;
