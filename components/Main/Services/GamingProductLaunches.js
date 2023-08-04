import React from "react";
import Image from "next/image";
import About from "../../../public/images/content.jpg";

const GamingProductLaunches = () => {
  const data2 = [
    {
      title: "Strategic Marketing Campaigns:",
      cont: "Our gaming product launches are backed by strategic marketing campaigns that build anticipation and excitement among your target audience. From teaser trailers to influencer partnerships, we ensure your product gains momentum before it hits the shelves.",
    },

    {
      title: "Media Coverage and Publicity:",
      cont: "Our extensive media network allows us to secure comprehensive media coverage for your gaming product launch. We create compelling press releases, arrange media interviews, and leverage industry connections to put your product in the spotlight.",
    },
    {
      title: "Engaging Content Creation:",
      cont: "Content is king, and we create engaging content that tells the story of your gaming product, captivating players and building hype around its release.",
    },
    {
      title: "Seamless Launch Execution:",
      cont: "On the big day, we ensure a seamless launch execution, coordinating all aspects of the launch to deliver a smooth and memorable experience for players and fans.",
    },
    {
      title: "Post-Launch Support:",
      cont: "The launch is just the beginning. We provide post-launch support, analyzing performance metrics and gathering player feedback to optimize your gaming product's success.",
    },
    {
      title: "Collaboration with Influencers:",
      cont: "We collaborate with gaming influencers and content creators to showcase your product to their dedicated fanbase, expanding your reach and attracting new players.",
    },
    {
      title: "Industry Partnerships:",
      cont: "Our strong industry partnerships allow us to create strategic alliances that enhance the visibility and reach of your gaming product.",
    },
    {
      title: "Captivate Players Worldwide:",
      cont: "With 4WD Gaming's expertise, your gaming product launch is set to captivate players worldwide, establishing your brand as a force to be reckoned with in the gaming industry.",
    },
    {
      title: "Contact Us Today:",
      cont: "Ready to ignite success with your gaming product launch? Contact 4WD Gaming today and let our expert strategies take your gaming masterpiece to new heights.",
    },
  ];
  const data = [
    {
      title: "Launching Your Gaming Masterpiece:",
      cont: "At 4WD Gaming, we understand that launching a gaming product is more than just a release; it's an opportunity to make a lasting impact on the gaming industry. Our gaming product launches are meticulously crafted to ensure your masterpiece gets the attention it deserves.",
    },
    {
      title: "Tailored Launch Strategies:",
      cont: "Every gaming product is unique, and we believe in tailored launch strategies that cater to your specific goals and target audience. Whether you're an indie developer or a well-established gaming company, we have the expertise to create a launch plan that resonates with players worldwide.",
    },
    {
      title: "Comprehensive Pre-Launch Planning:",
      cont: "A successful gaming product launch starts with a well-executed pre-launch plan. We collaborate with you to understand your vision, analyze market trends, and identify the best launch window for maximum impact.",
    },
  
  ];
  return (
    <div>
      <div className="bg-[#17191d]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#17191d] py-16  px-4">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Gaming Product Launches
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
                  <p className="text-[#c52326] text-xl">{items.title}</p>
                  <p className="py-1 text-white"> {items.cont}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 grid lg:grid-cols-2 grid-cols-1 gap-2   px-4 bg-[#191C20]">
            {data2.map((items, key) => (
              <div key={key}>
                <p className="text-[#c52326] text-xl">{items.title}</p>
                <p className="py-1 text-white"> {items.cont}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingProductLaunches;

