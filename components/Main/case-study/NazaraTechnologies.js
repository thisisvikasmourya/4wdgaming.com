import React from "react";
import Image from "next/image";
import About from "../../../public/images/nazara.jpg";
import CaseStudyBar from "@/components/Navbar/CaseStudyBar";

const NazaraTechnologies = () =>
{
  const caseData = [
    {
      href: "/case-study/tfg",
      name: "Trade Fantasy game",
    },
    {
      href: "/case-study/wcc",
      name: "World Cricket Championship",
    },
    {
      href: "/case-study/yudiz",
      name: "Yudiz Solutions",
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
                src={About}
                alt="hello"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="py-1 text-[24px] font-bold  text-[#c52326]">
                Nazara Technologies Ltd.
              </p>
              <p className="text-white text-[20px]">
                Hands-on Nazara – India’s first Gaming IPO
              </p>
              <p className="py-1 text-white text-[18px]">
                When 4WD GAMING, India&apos;s premier gaming PR, Web3 gaming PR,
                and Esports PR consultancy, partnered with Nazara Technologies
                Ltd., a leading gaming company, in 2016, our mission was clear -
                to establish Nazara as the foremost gaming brand in India and
                attract investors and funding through strategic PR initiatives.
              </p>
              <p className="py-1 text-white text-[18px]">
                Our hands-on approach to PR began with a focused PR program
                targeting bi-monthly coverage in leading Indian business
                newspapers and publications, including Economic Times, Mint,
                YourStory, Inc42, and even the prestigious Times of India. By
                strategically crafting news features, industry stories, and
                management profiling, we ensured Nazara&apos;s consistent
                presence in the media space, captivating the attention of
                potential investors.
              </p>
              <p className="py-1 text-white text-[18px]">
                As pioneers in gaming PR, we were committed to showcasing
                Nazara&apos;s potential to the gaming industry. With dedicated
                efforts, we attracted investments from renowned names like IIFL
                and Rakesh Jhunjhunwala within just two years.
              </p>
              <p className="py-1 text-white text-[18px]">
                Our strategic PR initiatives expanded beyond print publications
                to encompass top online news blogs, TV channels, and interviews,
                amplifying Nazara&apos;s brand reach across diverse media
                platforms.
              </p>
              <p className="py-1 text-white text-[18px]">
                The seamless execution of well-curated communication played a
                pivotal role in enhancing Nazara&apos;s perception as a gaming
                leader, leading to two more substantial investments over the
                next three years. This positioning culminated in a
                groundbreaking achievement - Nazara became the first Indian
                gaming company to go public with its highly successful Initial
                Public Offering (IPO) in March 2021. The response was
                phenomenal, with the IPO being subscribed 175 times in a mere
                three days.
              </p>
              <p className="py-1 text-white text-[18px]">
                Our strategic advisory further elevated Nazara&apos;s prominence
                through participation in notable thought leadership events,
                securing media recognitions, and positioning the company for
                continued growth.
              </p>
              <p className="py-1 text-white text-[18px]">
                As gaming specialists with a deep understanding of the Indian
                gaming ecosystem, our dedication and expertise have contributed
                significantly to Nazara&apos;s remarkable growth story, firmly
                establishing them as a trailblazer in the gaming industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CaseStudyBar caseData={caseData} />
    </div>
  );
};

export default NazaraTechnologies;
