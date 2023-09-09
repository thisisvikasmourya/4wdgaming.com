import React from "react";
import Image from "next/image";
import About from "../../../public/images/new/15.gif";
import Navigationbar from "@/components/Navbar/Navigationbar";

const DigitalBrandCommunication = () => {
  const data = [
    {
      title: "Shielding Your Gaming Brand:",
      cont: "In the speedy world of gaming, unexpected problems can pop up. But guess what? Moram Napu gets that keeping your gaming brand safe during tough times is super important.",
    },
    {
      title: "Fast and Smart Response:",
      cont: "When things get rocky, we've got your back. Our team jumps into action with smart responses to handle problems ASAP. We're on a mission to save your brand's reputation. ",
    },
    {
      title: "Honesty Matters:",
      cont: "When things go haywire, honesty is key. We'll help you talk to the people who care about your brand, being open about what's happening. This honesty builds trust and makes you look even cooler.",
    },
  ];
  const data2 = [
    {
      title: "Keeping Your Cool:",
      cont: "Even when things are crazy, we make sure your brand still shines. Your style and values won't change – we'll keep them intact, no matter what's going on.",
    },
    {
      title: "Being a Pro Online:",
      cont: "In today's digital world, your rep online is everything. We keep an eye on what's being said about your brand and make sure it stays awesome.",
    },
    {
      title: "Winning Trust Back:",
      cont: "Our plan is simple: get back the trust people have in your brand. We work hard to make sure everyone believes in your brand again, and you'll be back on top in no time.",
    },
    {
      title: "Knowing Gaming Inside Out:",
      cont: "We're like gaming experts, knowing all the tricks and moves. So, when a crisis hits in the gaming world, we know just what to do.",
    },
    {
      title: "Your Secrets Are Safe:",
      cont: "When you're in trouble, we've got your back. Everything we talk about is confidential, so your secrets are safe with us.",
    },
    {
      title: "Guiding You Like a Pro:",
      cont: "When things get tough, don't worry. Moram Napu is like your GPS through the storm. Our crisis services give you all the help and advice you need to sail through it.",
    },
    {
      title: "24/7 Help:",
      cont: "Trouble doesn't wait for office hours, and neither do we. Our team is ready to help 24/7, anytime you need us.",
    },
    {
      title: "Getting Ready for Anything:",
      cont: "The secret to handling problems is being ready. That's why we make plans ahead of time, tailored just for your gaming brand. When things go wild, you'll be prepared.",
    },
    {
      title: "Dealing with the Media Like a Boss:",
      cont: "We're like media maestros, making sure everyone hears the right story. Even in a crisis, we handle the media like pros.",
    },
    {
      title: "Ready to level up your brand communication?",
      // cont: "We're like media maestros, making sure everyone hears the right story. Even in a crisis, we handle the media like pros.",
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
              Digital Brand Communication
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
                Want to wow your gaming gang with some seriously cool stories?
                Well, at Moram Napu, we know that having an awesome connection
                with your audience is a big deal.
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
          <div className=" grid lg:grid-cols-2 grid-cols-1 gap-2    px-4 bg-[#eee2dc]">
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

export default DigitalBrandCommunication;
