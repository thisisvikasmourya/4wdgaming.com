import Image from "next/image";
import React from "react";
import object from "../../public/images/rE7ypN.gif";

const WhyChooseUs = () => {
  const data = [
    {
      text: "While we at Sharmilee Daru set the trend for focused gaming PR in the country with Nazara Technologies Ltd. since 2016 and still going, for their corporate communication services and consumer PR. We also managed to bring gaming into the mainstream!",
    },
    {
      text: "We made way for gaming news when it was too niche for mainstream media to cover. Faced with multiple challenges initially, as India was still an emerging gaming market, our aggressive push for gaming as a legit area to cover is bearing fruit now, with the ecosystem becoming an area of absolute interest for the media.",
    },
    {
      text: "As a dedicated team, we take our clients very seriously and unjustified criticism of them very personally. We are deeply involved in the day-to-day actions of our clientele. Equipped with dedicated resources, suggestions, and implementation strategies, we make sure the coverage for our clients is present in every possible space and we never miss an opportunity.",
    },
    {
      text: "We spend time understanding ever-evolving client needs and media trends and work hand-in-hand with the brands to ensure success.",
    },
    {
      text: "Most of our gaming brands have managed exceptional visibility and anchored their position as innovative leaders in the media space. Just a click on the mouse and you will find out how our brands’ visibility explodes relatively within a short span of time.",
    },
  ];
  return (
    <div className="bg-[#17191d]" data-aos="zoom-in">
      <div
        className="bg-[#17191d]  px-4 py-16 max-w-screen-xl mx-auto md:px-8"
        data-aos="zoom-in"
      >
        <div className="max-w-xl sm:text-center py-1 md:mx-auto">
          <h3
            className="text-[#c52326] text-3xl font-semibold sm:text-4xl text-center "
            data-aos="flip-up"
          >
            Why Choose Us
          </h3>
          <p className="mt-3 mb-4 text-white text-center">
            Whatever your game, we bring the ammo!
          </p>
        </div>
        <div className="flex lg:flex-row flex-col py-2 gap-6 items-center ">
          <div>
            <Image
              src={object}
              alt="hello"
              className="rounded-xl "
              // width={ 800 }
              layout="responsive"
            />
          </div>
          <div>
            {data.map((items, key) => (
              <p className="py-1 text-[20px] text-white" key={ key }>{ items.text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
