import React from "react";
import Image from "next/image";
import About from "../../../public/images/datadriven.jpeg";
import Navigationbar from "@/components/Navbar/Navigationbar";

const DataDrivenPrInsights = () => {
  const data2 = [
    {
      title: "Checking If It's a Win:",
      cont: "With our data-driven smarts, you can see exactly how well your plans are doing. We use important numbers to check if things are working, giving you real-time info on how you're doing.",
    },

    {
      title: "Seeing What Others Are Up To:",
      cont: "Knowing what the competition is doing is like secret info in the gaming world. We check out what others are up to and see how your efforts are doing compared to theirs, so you can stay ahead in the gaming world.",
    },
    {
      title: "Talking to the Right Folks:",
      cont: "To get it right, you need to know who's listening. Our data insights help us figure out who's who, so we can talk to different types of players in a way that makes them excited.",
    },
    {
      title: "Using Data to Make Magic:",
      cont: "We're all about using data to make our magic. With the numbers to back us up, we make plans that match what you want for your gaming brand. This helps your brand look amazing and gets players talking.",
    },
    {
      title: "Always Watching the Game:",
      cont: "The gaming world never stops moving, so we're always keeping an eye out. We look at data all the time to help you change your game plan when something cool is happening.",
    },
    {
      title: "Seeing Is Believing:",
      cont: "Numbers can be tricky, but our tricks make them easy to understand. We show you the important stuff in ways that make sense, so you can see how your efforts are making waves.",
    },
    {
      title: "Getting More Players Excited:",
      cont: "Our data smarts help us figure out the best ways to get players interested. We know where to talk and what to say to make sure more people know about your brand and want to be part of it.",
    },
    {
      title: "Get Ahead with Moram Napu:",
      cont: "If you want to be a star in the gaming world, you need data to back you up. Moram Napu is your go-to crew for data-based smarts that help your gaming brand shine. We're pros at reading numbers and making your brand the talk of the gaming town.",
    },
  ];
  const data = [
    {
      title: "Getting Smart with Data in Gaming:",
      cont: "Guess what? At Moram Napu, we totally get how important data is for shaping super effective plans. Our data-based smarts give you the full picture of how your gaming brand is doing, so you can make the best choices for a big impact.",
    },
    {
      title: "Digging Deep into Data:",
      cont: "We dive deep into all kinds of gaming info – from social media stuff to how players are hanging out. By doing this, we find super useful stuff that helps you see what's cool, what's hot, and what could be even better.",
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
              Data Driven Pr-Insights
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
                Ready to level up your gaming crew&apos;s excitement? Well, at
                Moram Napu, we know that building a strong bond with your
                audience is key.
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
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 p-4   px-4 bg-[#eee2dc]">
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

export default DataDrivenPrInsights;
