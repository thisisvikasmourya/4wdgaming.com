import React from "react";
import Image from "next/image";
import About4 from "../../../public/images/TFG-main-logo.-png-1-1024x707.png";
import CaseStudyBar from "@/components/Navbar/CaseStudyBar";

const TradeFantasyGame = () =>
{
  const caseData = [
    {
      href: "/case-study/nazara",
      name: "Nazara Technologies",
    },
    {
      href: "/case-study/wcc",
      name: "World Cricket Championship",
    },
    {
      href: "/case-study/yudiz",
      name: "yudiz solutins",
    },
  ];
  return (
    <div>
      <div className="bg-[#17191d]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#17191d] py-16  px-4">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Case Study
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#191C20]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="flex lg:flex-row flex-col gap-6 p-4 py-5  px-4 bg-[#191C20]">
            <div>
              <Image
                src={About4}
                alt="hello"
                width={500}
                height={500}
                className="rounded-lg bg-white"
              />
            </div>
            <div>
              <p className="py-1 text-xl text-[#c52326] ">
                Trade Fantasy Game (TFG)
              </p>
              {/* <p>Hands-on Nazara – India’s first Gaming IPO</p> */}
              <p className="py-1 text-white">
                Trade Fantasy Game (TFG), a premier fantasy platform set to
                compete with industry giants like Dream 11, My 11 circle, and My
                Fab 11, had a powerful ace up its sleeve - Indian International
                Cricketer Deepak Chahar. Tasked with showcasing Deepak Chahar as
                the brand ambassador and entrepreneur, 4WD GAMING eagerly
                embraced the challenge of spearheading the PR campaign for
                TFG&apos;s grand launch.
              </p>
              <p className="py-1 text-white">
                Our primary objective was to create awareness for TFG in the
                highly competitive fantasy gaming space and among cricket
                enthusiasts. Through strategic planning, we emphasized the
                brand&apos;s vision, ambitions, and unique product offerings,
                ensuring the right messaging reached the target audience through
                effective PR channels.
              </p>
              <p className="py-1 text-white">
                The launch had an additional challenge - introducing Jaya Chahar
                as the CEO and official spokesperson for TFG, taking the
                business forward. With a calculated approach, we secured
                interviews featuring Jaya Chahar in prominent business
                publications like ET, Moneycontrol, Inc 42, and leading games of
                skill publications. This strategic move aimed to build her
                publicity and prominence as the voice of the brand.
              </p>
              <p className="py-1 text-white">
                To maximize reach, we executed a multi-launch strategy,
                targeting geographies across the country, including Tier 2 and
                Tier 3 cities with a substantial fantasy gaming audience. Our
                efforts paid off as TFG&apos;s launch announcement echoed not
                only in metropolitan cities but also reached a vast audience in
                Tier 2 and 3 cities through top business papers, key language
                media, and dedicated gaming media coverage. The response was
                phenomenal, with the brand witnessing 50,000 sign-ups within the
                initial weeks.
              </p>
              <p className="py-1 text-white">
                As proactive advisors, 4WD GAMING ensured TFG&apos;s brand
                reputation remained unscathed during unforeseen situations. We
                provided guidance and training to the spokesperson, positioning
                TFG among market leaders and enhancing its brand visibility
                through key industry stories and television features,
                particularly around decisions from MeitY.
              </p>
              <p className="py-1 text-white">
                Though a relatively early entrant, TFG has swiftly carved its
                niche, standing tall among leading fantasy platforms, thanks to
                its share of voice in the media and resonating presence in the
                gaming community.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CaseStudyBar caseData={caseData} />
    </div>
  );
};

export default TradeFantasyGame;
