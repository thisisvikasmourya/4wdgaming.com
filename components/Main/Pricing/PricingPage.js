import React from "react";

const PricingPage = () => {
  const pricing = [
    {
      title: "Fits Your Budget:",
      desc: "Our pricing strategy is like a tailor-made suit, designed to fit your budget perfectly, whether you're a small gaming startup or a big esports giant.",
    },
    {
      title: "Proven Success:",
      desc: "We've got a track record of delivering results for gaming, Web3 gaming, and esports brands, making our pricing strategy a reliable choice.",
    },
    {
      title: "All-in-One Package:",
      desc: " Our pricing strategy covers everything you need, from marketing to branding, making it easy-peasy for you to get all the tools in one go.",
    },
    {
      title: "Clear and Simple:",
      desc: "We believe in keeping it crystal clear. With our pricing, you'll always know what you're paying for and can make wise decisions for your gaming brand.",
    },
    {
      title: "Gaming Gurus:",
      desc: "Years of gaming industry experience, our pricing strategy knows the ins and outs of gaming, Web3 gaming, and esports",
    },
    {
      title: "Always Fresh:",
      desc: "We keep our pricing strategy updated to match the latest trends and changes in the gaming world, keeping your brand in the game.",
    },
    {
      title: "All About You:",
      desc: "Our pricing strategy is all about you. We work closely with you to make sure it's just what you need for your gaming success.",
    },
    {
      title: "Bang for Your Buck:",
      desc: "We're all about giving you more value for your money. Our pricing strategy is designed to make every penny count.",
    },
    {
      title: "Happy Clients: ",
      desc: "Our clients love what we do. Our pricing strategy has made many gaming brands smile, and we're here to make you the next happy client",
    },
    {
      title: "Go Global:",
      desc: "Our pricing strategy is like a passport for your brand. It'll help you explore new horizons and connect with gamers around the world.",
    },
  ];
  const plans = [
    {
      name: "Gaming Buzz Builder",
      desc: "We create a lot of buzz around games. It's like when a secret gets out and everyone wants to know more. We use social media, cool content, and smart marketing to get people talking about games.",
      price: "$999",
      isMostPop: false,
      features: [
        "Brand Messaging",
        "Poster, Carousel, and Video Designing",
        "Social and Digital Marketing",
        // "Social Media Content Creation ",
        // "Manage social media presence",
        "Social Media handling & Management",
        // "Outreach",
        // "Duis non diam vel tortor",
      ],
    },
    {
      name: "Player connection Pro",
      desc: "We help game companies become friends with players. Imagine having a big party where everyone talks about games and has a blast. That's what we do online – connect players and make games more fun",
      price: "$2,999",
      isMostPop: true,
      features: [
        "All feature of the Gaming Buzz Builder",
        "Digital Strategic Content Creation and Copywriting",
        "Growth Marketing",
        "Performance Marketing",
        "Paid Media Solutions",
        "Targeted online advertising",
        "$500 in Ads Credit",
      ],
    },
    {
      name: "Trusted Game Partner",
      desc: "We make sure game companies look really good. We team up with famous people and use clever tricks to show everyone that the games are super trustworthy and awesome.",
      price: "$3,999",
      isMostPop: false,
      features: [
        "All features of the Gaming Buzz Builder",
        "All features of the Player connection Pro",
        "Digital Profile Optimization",
        "Community Building & Management",
        "Outreach- Marketing",
        "Outreach",
        "$1,000 in Ads Credit",
      ],
    },
  ];
  const plans2 = [
    {
      name: "Gaming Buzz Builder",
      desc: "We create a lot of buzz around games. It's like when a secret gets out and everyone wants to know more. We use social media, cool content, and smart marketing to get people talking about games.",
      price: "45,000/- + GST",
      isMostPop: false,
      features: [
        "Brand Messaging",
        "Consistent and compelling messaging",
        "Social and Digital Marketing",
        "Social Media Content Creation ",
        "Manage social media presence",
        "Social Media handling & Management",
        "Outreach",
        // "Duis non diam vel tortor",
      ],
    },
    {
      name: "Player connection Pro",
      desc: "We help game companies become friends with players. Imagine having a big party where everyone talks about games and has a blast. That's what we do online – connect players and make games more fun",
      price: "129,000/- + GST",
      isMostPop: true,
      features: [
        "All feature of the Gaming Buzz Builder",
        "Growth Marketing",
        "Performance Marketing",
        "Paid Media Solutions",
        "Targeted online advertising",
      ],
    },
    {
      name: "Trusted Game Partner",
      desc: "We make sure game companies look really good. We team up with famous people and use clever tricks to show everyone that the games are super trustworthy and awesome.",
      price: "189,000/- + GST",
      isMostPop: false,
      features: [
        "All features of the Gaming Buzz Builder",
        "All features of the Player connection Pro",
        "Search Engine Optimization (SEO)",
        "Community building & Management",
      ],
    },
  ];
  return (
    <div>
      <section className="py-14 bg-[#eee2dc]">
        <div className="max-w-screen-xl mx-auto px-4 bg-[#eee2dc] md:px-8">
          <div className="relative max-w-xl mx-auto text-center">
            <h3 className="text-[#ac3b61] text-3xl font-semibold sm:text-4xl">
              Pricing for all sizes
            </h3>
            <div className="mt-3 max-w-xl text-[#123c69]">
              <p className="text-[#123c69] text-[20px]">
                We believe in fairness and giving game companies choices that
                suit them. Our pricing strategy is designed to offer flexibility
                and value for every budget:
              </p>
            </div>
          </div>
          <div className="mt-16  text-[18px] justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
            {plans.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 border-[#a32b61] mt-6 sm:mt-0 ${
                  item.isMostPop ? "mt-10" : ""
                }`}
              >
                {item.isMostPop ? (
                  <span class="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">
                    Most popular
                  </span>
                ) : (
                  ""
                )}
                <div className="p-8 space-y-4 border-b">
                  <span className="text-[#ac3b61] font-medium">
                    {item.name}
                  </span>
                  <div className="text-[#ac3b61] text-3xl font-semibold">
                    {item.price}{" "}
                    <span className="text-xl text-[#123c69] font-normal">
                      /mo
                    </span>
                  </div>
                  <p className="text-[#123c69]">{item.desc}</p>
                  <a href={"/contactUs"}>
                    <button className="px-3 py-3 rounded-lg w-full  text-sm duration-150 text-[#eee2dc] bg-[#ac3b61] hover:bg-[#edc7b7] hover:text-[#ac3b61] active:bg-[#ac3b61]">
                      Get Started
                    </button>
                  </a>
                </div>
                <ul className="p-8 space-y-3">
                  <li className="pb-2 text-[#ac3b61] font-medium">
                    <p>Features</p>
                  </li>
                  {item.features.map((featureItem, idx) => (
                    <li
                      key={idx}
                      className="flex text-[#123c69] items-center gap-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#ac3b61]"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {featureItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-10 text-[18px] ">
            <p className="text-[#ac3b61] text-xl">Project-Based :</p>
            <p className="text-[#123c69] flex py-1">
              Pricing Specific campaigns or short-term projects
            </p>
            <p className="text-[#123c69] flex py-1">
              Digital Communication Create website content - social media -
              $1200/-
            </p>
            <p className="text-[#123c69] flex py-1">
              Traditional OutreachCraft press releases and secure media coverage
              - $1500/-
            </p>
            <p className="text-[#123c69] flex py-1 ">
              Digital Events Management - $900/-
            </p>
            <p className="text-[#123c69] flex py-1">
              Influencer Marketing - Customized{" "}
            </p>
          </div>
          <div className="pt-10 text-[18px] ">
            <p className="text-[#ac3b61] text-xl">Why Our Pricing Strategy:</p>
            {pricing.map((item, idx) => (
              <p className="text-[#123c69]  flex lg:py-1 py-3" key={idx}>
                {item.title}&nbsp;{item.desc}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
