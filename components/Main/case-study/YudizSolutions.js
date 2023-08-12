import React from "react";
import Image from "next/image";
import About3 from "../../../public/images/Yudiz-Logo-1024x1024.png";
import CaseStudyBar from "@/components/Navbar/CaseStudyBar";

const YudizSolutions = () =>
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
      href: "/case-study/wcc",
      name: "World Cricket Championship",
    },
  ];
  return (
    <div>
      <div className="bg-[#17191d]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content  py-16  px-4 max-w-screen-xl mx-auto md:px-8">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Case Study
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#191C20]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="flex lg:flex-row flex-col gap-6 p-4 py-5  px-4 bg-[#191C20] ">
            <div>
              <Image
                src={About3}
                alt="hello"
                width={390}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="py-1 text-[20px] font-bold text-[#c52326]">
                Yudiz Solutions Ltd. - A Groundbreaking IPO in the Converging
                Tech Landscape
              </p>
              {/* <p>Hands-on Nazara – India’s first Gaming IPO</p> */}
              <p className="py-1 text-white text-[18px]">
                Yudiz Solutions Ltd., a lesser-known yet dynamic tech entity,
                sought to make a mark in the constantly evolving and competitive
                tech landscape. With the aspiration to launch their IPO within a
                few months, Yudiz aimed to build brand awareness and unveil
                their strategic plans for the future.
              </p>
              <p className="py-1 text-white text-[18px]">
                For 4WD GAMING, the opportunity to work on this project was
                exhilarating, especially after successfully handling the Nazara
                Technologies IPO - the first in the gaming space. Yudiz&apos;s
                IPO was unique, combining elements of blockchain, AI, and
                gaming, making it a landmark event in the tech industry.
              </p>
              <p className="py-1 text-white text-[18px]">
                Our PR strategy began by reworking Yudiz&apos;s brand
                positioning to create strong brand awareness and garner
                attention from the media. Our goal was to establish credibility
                and showcase market readiness for the upcoming IPO.
              </p>
              <p className="py-1 text-white text-[18px]">
                We strategically shared profiles and established key
                relationships with top-tier media outlets, including prominent
                business publications like FE and Mint, along with TV and blogs
                catering to investor-specific audiences. Regular features and
                impactful thought leadership opportunities were meticulously
                curated, positioning Yudiz as a leading tech brand in the
                country.
              </p>
              <p className="py-1 text-white text-[18px]">
                With a constant presence alongside industry experts, Yudiz
                Solutions Ltd. captured the attention of the media, investors,
                and tech enthusiasts alike. The resounding success of their IPO
                launch became a testament to our effective PR initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CaseStudyBar caseData={caseData} />
    </div>
  );
};

export default YudizSolutions;
