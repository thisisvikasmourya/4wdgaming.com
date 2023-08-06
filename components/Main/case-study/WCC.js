import React from "react";
import Image from "next/image";

import About2 from "../../../public/images/wcc.png";
import CaseStudyBar from "@/components/Navbar/CaseStudyBar";

const WCC = () =>
{
  const caseData = [
    {
      href: "/case-study/nazara",
      name: "Nazara Technologies",
    },
    {
      href: "/case-study/tfg",
      name: "Trade Fantasy game",
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
                src={About2}
                alt="hello"
                width={350}
                height={500}
                className="rounded-lg bg-white"
              />
            </div>
            <div>
              <p className="py-1 text-xl text-[#c52326]">
                World Cricket Championship - From Gamer&apos;s Favorite to
                Global Sensation
              </p>
              {/* <p>Hands-on Nazara – India’s first Gaming IPO</p> */}
              <p className="py-1 text-white">
                World Cricket Championship, the highly acclaimed mobile cricket
                gaming franchise developed by Nextwave Multimedia Pvt. Ltd.,
                captured the hearts of gamers worldwide with its multiple
                editions and unique features. Despite its massive user base and
                popularity among cricket enthusiasts, the brand&apos;s presence
                was primarily limited to gaming circles.
              </p>
              <p className="py-1 text-white">
                When Sharmilee Daru PR assumed the mandate for the brand and its
                intellectual property, a transformational journey commenced. By
                crafting repeated and impactful messaging, we steered the
                brand&apos;s perception in the media and beyond, rightfully
                positioning it as The Largest Mobile Cricket Game in the world.
              </p>
              <p className="py-1 text-white">
                Through strategic PR initiatives, the studio, its spokesperson,
                and the product itself garnered widespread attention,
                captivating audiences across the globe. The brand&apos;s
                reputation soared, solidifying its place as one of India&apos;s
                most prominent game development studios and an exceptional IP
                crafted within the country.
              </p>
              <p className="py-1 text-white">
                With compelling media coverage and meaningful engagements, World
                Cricket Championship secured its spot in the media landscape,
                admired as a global sensation cherished by cricket enthusiasts
                and gaming aficionados alike.
              </p>
              <p className="py-1 text-white">
                The case study showcases how 4WD GAMING&apos;s strategic PR
                efforts successfully elevated World Cricket Championship from a
                beloved gaming franchise among gamers to a global sensation,
                recognized as the largest mobile cricket game in the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CaseStudyBar caseData={caseData} />
    </div>
  );
};

export default WCC;
