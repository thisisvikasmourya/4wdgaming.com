import React from "react";
import Image from "next/image";
import About from "../../../public/images/marketing.jpg";
import Navigationbar from "@/components/Navbar/Navigationbar";

const StrategyAndMarketing = () => {
  const data = [
    {
      title: "Understanding What I Want and Who's Interested:",
      cont: "MN takes a real good look at what I want and who's actually excited about my gaming brand. They even check out what the competition is up to. This deep dive helps them come up with plans that totally match what my brand is about.",
    },
    {
      title: "Cooking Up Plans for Success:",
      cont: "You know how in games you need a strategy to conquer? Well, it's the same in the real world. With these MN folks by my side, I know I'm set to make my mark and stand out among the gaming crowd.",
    },
    {
      title: "Navigating the Gaming Maze:",
      cont: "Oh, the gaming world, always changing and evolving! But guess what? MN folks are like the gaming GPS that helps me stay on the right path. They know what's new and make sure I'm ready to jump on exciting opportunities.",
    },
  ];
  const data2 = [
    {
      title: "Putting My Gaming brand in the Spotlight:",
      cont: "I've got some killer ideas in the gaming industry, and I want the world to see and love them. These plans they make? They're all about making my brand shine, teaming up with awesome partners, and getting more fans to notice and love my gameing brand.",
    },
    {
      title: "Success Stories Speak for Themselves:",
      cont: "Our track record of success speaks for itself. We have helped numerous gaming ventures achieve their goals and reach new heights of success in the gaming industry.",
    },
    {
      title: "More Than Just Plans:",
      cont: "MN guys aren't just about plans. They're like the ultimate gaming buddies who know everything about games,web3 and esports. We're your secret weapon to make sure my gaming ideas are beyond awesome.",
    },
    {
      title: "Navigate with Confidence:",
      cont: "Navigating through the gaming world can be tricky, but I've got these experts in my corner. They're like my trusty sidekicks, guiding me through every challenge with confidence.",
    },
    {
      title: "Game Plans for Every Game:",
      cont: "Whether I'm starting small or already a big deal in the gaming world, MN plans fit like a glove. We get that every gaming brand is unique, and their ideas match thier style perfectly.",
    },
    {
      title: "Beyond Strategy:",
      cont: "I'm all in for making my gaming dream epic, and MN team totally gets that. ",
    },
    {
      title: "Let's chat and see how my journey can reach new heights! ",
      // cont: "Navigating the gaming industry can be challenging, but with Moram Napu as your strategic partner, you can move forward with confidence. Our expertise and experience will guide you every step of the way.",
    },
  ];
  const navData = [
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
              Strategy And Marketing
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6  pt-10  px-4 bg-[#eee2dc]">
            <div>
              <Image
                src={About}
                alt="hello"
                layout="responsive"
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="py-1 text-[#123c69] text-[20px]">
                You&apos;ve got this amazing gaming dream, right? But how do you
                make it shine in the huge gaming world?
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
          <div className="p-4 grid lg:grid-cols-2 grid-cols-1 gap-2  px-4 bg-[#eee2dc]">
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

export default StrategyAndMarketing;
