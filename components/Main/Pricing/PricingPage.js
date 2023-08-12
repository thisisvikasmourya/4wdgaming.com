import React from 'react'

const PricingPage = () =>
{
    const plans = [
      {
        name: "Silver Package",
        desc: "Ideal for startups and small businesses looking to establish their presence:",
        price: "1 Lakh",
        isMostPop: false,
        features: [
          "4 Press Release Drafting, Dissemination, and Coverage",
          "2 Interviews / Spokesperson Quotes",
          "Daily Industry Updates and Reporting",
          "Social Media Content Creation ",
          "Management for Brand Visibility",
          "Media Monitoring and Coverage Analysis",
          // "Duis non diam vel tortor",
        ],
      },
      {
        name: "Gold Package",
        desc: "Designed for companies aiming for broader exposure and brand recognition:",
        price: "2.5 Lakhs",
        isMostPop: true,
        features: [
          "All features of the silver Package",
          "2 Stand-alone Interviews for Brand Stories",
          "2 Thought Leadership or Authored Articles",
          "Dissemination of Press Releases / Info Notes around Announcements",
          "Relationship Building Meetings with Key Media",
        ],
      },
      {
        name: "Platinum Package",
        desc: "Tailored to meet the specific needs of established brands and ambitious campaigns:.",
        price: "Customized Pricing",
        isMostPop: false,
        features: [
          "All features of the Gold Package",
          "2 Speakership Opportunities or Award Nominations",
          "Comprehensive Quarterly Reports with In-depth Analysis",
          "Influencer Marketing Campaign Planning and Execution",
          "Crisis Management and Reputation Repair Advisory",
          "Customized PR Strategies Aligned with Brand Goals",
          "Inclusion in Industry-Specific Articles and Features",
        ],
      },
      // {
      //   name: " Package",
      //   desc: "Tailored to meet the specific needs of established brands and ambitious campaigns:.",
      //   price: "Customized Pricing",
      //   isMostPop: false,
      //   features: [
      //     "Event Planning and Coverage for Game Launches or Esports Tournaments",
      //     "Web3 Gaming Integration and PR for Blockchain-Based Projects",
      //     // "Praesent quis venenatis ipsum",
      //     // "Duis non diam vel tortor",
      //   ],
      // },
    ];
  return (
    <div>
      <section className="py-14 bg-[#14161a]">
        <div className="max-w-screen-xl mx-auto px-4 bg-[#14161a] md:px-8">
          <div className="relative max-w-xl mx-auto text-center">
            <h3 className="text-[#c52326] text-3xl font-semibold sm:text-4xl">
              Pricing for all sizes
            </h3>
            <div className="mt-3 max-w-xl text-white">
              <p className="text-white">Choose your Favourite Plan </p>
            </div>
          </div>
          <div className="mt-16  text-[18px] justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
            {plans.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${
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
                  <span className="text-[#c52326] font-medium">
                    {item.name}
                  </span>
                  <div className="text-[#c52326] text-3xl font-semibold">
                    {item.price}{" "}
                    <span className="text-xl text-white font-normal">/mo</span>
                  </div>
                  <p className="text-white">{item.desc}</p>
                  <button className="px-3 py-3 rounded-lg w-full  text-sm duration-150 text-white bg-[#c52326] hover:bg-[#c52426] active:bg-[#c52326]">
                    <a href={"/contactUs"}>Get Started</a>
                  </button>
                </div>
                <ul className="p-8 space-y-3">
                  <li className="pb-2 text-[#c52326] font-medium">
                    <p>Features</p>
                  </li>
                  {item.features.map((featureItem, idx) => (
                    <li
                      key={idx}
                      className="flex text-white items-center gap-5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-[#c52326]"
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
            <p className="text-[#c52326] text-xl">
              Why Choose Our Enhanced Pricing Strategy:
            </p>
            <p className="text-white flex py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#c52326]"
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
            <p className="text-white flex py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#c52326]"
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
            <p className="text-white flex py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#c52326]"
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
            <p className="text-white flex py-1 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#c52326]"
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
            <p className="text-white flex py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#c52326]"
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
}

export default PricingPage
