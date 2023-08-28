import React from "react";
import Image from "next/image";
import About from "../../../public/images/pr.jpg";
import Navigationbar from "@/components/Navbar/Navigationbar";

const PublicRelations = () => {
  const data2 = [
    {
      title: "Comprehensive Suite of PR Services:",
      cont: "From media coverage and influencer partnerships to crisis communications and thought leadership articles, we offer a comprehensive suite of PR services. Our aim is to enhance your brand's reputation, forge valuable partnerships, and attract a broader audience to your gaming endeavors.",
    },
    {
      title: "Pioneers in Gaming PR:",
      cont: "We take pride in being pioneers in gaming PR, having played a crucial role in shaping the gaming PR ecosystem in India. Our journey as early adopters and advocates of gaming PR has witnessed the industry's evolution from skill-based real money gaming to the exciting world of Web3 and blockchain gaming.",
    },
    {
      title: "Forward-Thinking Approach:",
      cont: "As part of every conversation that shapes the gaming landscape, we possess a deep understanding of the niche, dynamic, and continuously evolving gaming industry in India. Our forward-thinking approach sets us apart, as we anticipate challenges and predict industry trends to keep our clients at the forefront of the gaming industry.",
    },
    {
      title: "Beyond PR:",
      cont: "While PR is our forte, we go beyond that - we are marketers, brand planners, and reputation managers. Our expertise extends to helping gaming companies navigate the complexities of public listing processes, positioning them as industry leaders.",
    },
    {
      title: "Impressive Gaming Portfolio:",
      cont: "With an impressive gaming portfolio that includes major brands and IPs, we have garnered valuable experience in successful communication for gaming solutions. As industry pioneers, we assure guidance, training, and strategic direction that create successful brands.",
    },
    {
      title: "Challenge the Norms:",
      cont: "Moram Napu's public relations strategies are designed to challenge the norms of traditional agencies. We focus on your brand objectives and goals, blending traditional media ideals with new-age strategies to capture the new-age media for our brands.",
    },
    {
      title: "Partner for Success:",
      cont: "We understand evolving client needs and media trends, working hand-in-hand with you to ensure success, escalate your brand image, and optimize communication strategies. Our success is measured by the success of our partner brands.",
    },
    {
      title:
        "Choose Moram Napu as your PR partner, and let us be your ammunition to conquer the world of gaming, Web3 gaming, and esports. Get in touch with us today and ignite your success in this thrilling and ever-evolving industry.",
    },
  ];
  const data = [
    {
      title: "Expert Gaming and Esports PR Strategies:",
      cont: "Our primary mission is to establish your gaming brand as a dominant force in the industry. Whether you're a gaming company seeking increased visibility, an esports team looking to build a loyal fan base, or a game developer aiming for widespread recognition, our PR strategies are custom-tailored to suit your specific needs.",
    },
    {
      title: "In-Depth Understanding of Gaming Industry:",
      cont: "With years of experience in the gaming and esports industry, we understand the unique challenges and opportunities you face. Our team of dedicated PR specialists is well-versed in the intricacies of the gaming world, enabling us to craft PR campaigns that resonate with your target audience.",
    },
  ];
  const navData = [
    {
      href: "/services/strategy-and-marketing",
      name: "Strategy and Marketing",
    },
    {
      href: "/services/content-and-writing",
      name: "Content and Copywriting",
    },
    {
      href: "/services/creator-and-influencers",
      name: "Creator and Influencer",
    },
    {
      href: "/services/crisis-communication",
      name: "Crisis Communication",
    },
    {
      href: "/services/data-driven-pr-insight",
      name: "Data Driven Pr-insight",
    },
    {
      href: "/services/digital-gaming-events",
      name: "Digital Gaming Events",
    },
    {
      href: "/services/esports-tournament-organization",
      name: "Esports Tournaments",
    },
    {
      href: "/services/international-pr-expansion",
      name: "International PR-Expansion",
    },
    {
      href: "/services/gaming-product-launches",
      name: "Gaming Product Launches",
    },
  ];
  return (
    <div>
      <div className="bg-[#f3efdf]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#f3efdf] py-16  px-4">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              Public Relations
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#f0ebd7]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 pt-10  px-4 bg-[#f0ebd7]">
            <div>
              <Image src={About} alt="hello" layout="" className="rounded-lg" />
            </div>
            <div>
              <p className="py-1 text-black text-[20px]">
                Are you ready to take your gaming brand to the next level? At
                <span className="text-[#c32326]"> Moram Napu</span>, we are not
                just any PR agency; we are brand builders who understand the
                immense power of a strong brand in attracting organic media and
                PR.
              </p>

              {data.map((items, key) => (
                <div key={key}>
                  <p className="text-[#4d326b] text-[20px]">{items.title}</p>
                  <p className="pb-3 text-black text-[18px]"> {items.cont}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 grid lg:grid-cols-2 grid-cols-1 gap-2   px-4 bg-[#f0ebd7]">
            {data2.map((items, key) => (
              <div key={key}>
                <p className="text-[#4d326b] text-[20px]">{items.title}</p>
                <p className="pb-3 text-black text-[18px]"> {items.cont}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigationbar navData={navData} />
    </div>
  );
};

export default PublicRelations;
