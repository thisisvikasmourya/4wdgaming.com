import React from 'react'
import Image from "next/image";
import About from "../../../public/images/0x0.jpg";

const StrategyAndMarketing = () =>
{
  const data = [
    {
      title: "Analyzing Your Goals and Target Audience:",
      cont: "Our seasoned experts take the time to analyze your goals, understand your target audience, and assess your competition. This in-depth analysis forms the foundation for developing winning strategies that align with your brand's objectives.",
    },
    {
      title: "Strategize for Success:",
      cont: "ust like in any game, strategic planning is crucial for success. With 4WD Gaming as your strategic partner, you can be confident that your gaming venture will have the edge it needs to stand out in the crowded gaming industry.",
    },
    {
      title: "Navigating the Gaming Landscape:",
      cont: "The gaming industry is constantly evolving, with new trends and technologies shaping the landscape. Our forward-thinking approach ensures that your gaming venture stays ahead of the curve and makes the most of emerging opportunities.",
    },
    {
      title: "Tailored Solutions for Gaming Ventures:",
      cont: "Whether you're a budding indie developer or an established gaming company, our strategy and marketing services are tailored to suit your specific needs. We understand that each gaming venture is unique, and our solutions reflect that individuality.",
    },
   
  ];
  const data2 = [
    {
      title: "Brand Visibility and Engagement:",
      cont: "With our strategic marketing campaigns, you'll gain the spotlight you deserve in the gaming community and beyond. We focus on enhancing your brand's reputation, forging valuable partnerships, and attracting a broader audience to your gaming endeavors.",
    },
    {
      title: "Success Stories Speak for Themselves:",
      cont: "Our track record of success speaks for itself. We have helped numerous gaming ventures achieve their goals and reach new heights of success in the gaming industry.",
    },
    {
      title: "Beyond Strategy:",
      cont: "At 4WD Gaming, we go beyond just strategy. As gaming and esports specialists, we possess a deep understanding of the gaming ecosystem, enabling us to provide comprehensive guidance and support for your gaming venture.",
    },
    {
      title: "Navigate with Confidence:",
      cont: "Navigating the gaming industry can be challenging, but with 4WD Gaming as your strategic partner, you can move forward with confidence. Our expertise and experience will guide you every step of the way.",
    },
    {
      title:
        "Choose 4WD Gaming as your strategic partner, and let us propel your gaming venture to success. Get in touch with us today and take your gaming endeavor to the next level.",
      // cont: "Navigating the gaming industry can be challenging, but with 4WD Gaming as your strategic partner, you can move forward with confidence. Our expertise and experience will guide you every step of the way.",
    },
  ];
  return (
    <div>
      <div className="content bg-[#17191d] py-16 lg:px-32 px-4">
        <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
          Strategy & Marketing
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4 py-4 pt-6 lg:px-32 px-4 bg-[#191C20]">
        <div>
          <Image
            src={About}
            alt="hello"
            layout="responsive"
            className="rounded-lg"
          />
        </div>
        <div>
          <p className="py-1 text-white">
            Are you ready to elevate your gaming venture to new heights? At 4WD
            Gaming, we understand that successful gaming companies need a
            strategic approach to thrive in the competitive landscape.
          </p>
          {data.map((items, key) => (
            <div key={key}>
              <p className="text-[#c52326] text-xl">{items.title}</p>
              <p className="py-1 text-white"> {items.cont}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 grid lg:grid-cols-2 grid-cols-1 gap-2 lg:px-32 px-4 bg-[#191C20]">
        {data2.map((items, key) => (
          <div key={key}>
            <p className="text-[#c52326] text-xl">{items.title}</p>
            <p className="py-1 text-white"> {items.cont}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StrategyAndMarketing
