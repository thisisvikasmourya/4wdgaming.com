import React from "react";

const PricingPage = () => {
  const plans = [
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
                  <button className="px-3 py-3 rounded-lg w-full  text-sm duration-150 text-[#eee2dc] bg-[#ac3b61] hover:bg-[#edc7b7] hover:text-[#ac3b61] active:bg-[#ac3b61]">
                    <a href={"/contactUs"}>Get Started</a>
                  </button>
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
              &nbsp; Pricing Specific campaigns or short-term projects
            </p>
            <p className="text-[#123c69] flex py-1">
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
              &nbsp; Digital Communication Create website content - social media
              - 90,000/-
            </p>
            <p className="text-[#123c69] flex py-1">
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
              &nbsp; Traditional PR Craft press releases and secure media
              coverage - 99,000/-
            </p>
            <p className="text-[#123c69] flex py-1 ">
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
              &nbsp; Digital Events Management - 99,000/-
            </p>
            <p className="text-[#123c69] flex py-1">
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
              &nbsp; Influencer Marketing - Customised{" "}
            </p>
          </div>
          <div className="pt-10 text-[18px] ">
            <p className="text-[#ac3b61] text-xl">
              Why Choose Our Enhanced Pricing Strategy:
            </p>
            <p className="text-[#123c69] flex py-1">
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
              &nbsp; Comprehensive Offerings: Our packages encompass a wide
              range of PR services, ensuring a 360-degree approach to brand
              visibility and reputation management.
            </p>
            <p className="text-[#123c69] flex py-1">
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
              &nbsp; Industry Expertise: Our PR professionals are passionate
              about gaming, web3 gaming, and esports, giving you a competitive
              edge in these specialized fields.
            </p>
            <p className="text-[#123c69] flex py-1">
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
              &nbsp; Strategic Approach: With our tailored strategies, your
              brand will receive the right exposure to target audiences,
              influencers, and key industry players.
            </p>
            <p className="text-[#123c69] flex py-1 ">
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
              &nbsp; Proven Results: Our track record in driving brand success
              within the gaming landscape speaks for itself.
            </p>
            <p className="text-[#123c69] flex py-1">
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
              &nbsp; Flexibility: From startups to industry leaders, we have the
              right package to meet your unique needs and budget.{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
