import Image from "next/image";
import React from "react";
import About from "../../public/images/4wdlogo.jpg";
const AboutUs = () => {
  return (
    <div className="">
      <div className="content bg-[#17191d] py-16 lg:px-32 px-4">
        <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
          About 4WD Gaming
        </h1>
      </div>
      {/* <Image
        src={About}
        alt="hello about"
        className=""
        width={200}
        height={200}
      /> */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4  bg-[#191C20] py-10 lg:px-32 px-4">
        <div>
          <p className="text-[#c52326] font-semibold text-lg">
            We’re brand builders
          </p>
          <p className="text-[16px]">
            At 4WD GAMING, we are more than just a gaming PR agency. We are
            brand builders who understand the power of a strong brand in
            attracting organic media and PR. Our approach is simple but
            effective - we sit with you, plan, consult, and watch the magic
            happen! Listening to our clients and prioritizing ethics guide our
            every move. Working with us gives you an undeniable advantage, like
            using a secret code to gain a helicopter in a medieval battle. Our
            strength lies in our ability to listen and solve your challenges.
          </p>
        </div>
        <div>
          <p className="text-[#c52326] font-semibold text-lg">We’re pioneers</p>
          <p className="text-[16px]">
            We take pride in being pioneers in the gaming space. As the first
            ones here, we carved the path for the gaming PR ecosystem in India.
            Our journey as early adopters and proponents of gaming PR has
            witnessed the industry&apos;s evolution, from skill-based real money
            gaming to Web3 and blockchain gaming. We are part of every
            conversation that shapes the gaming landscape, fully understanding
            the niche, dynamic, and continuously evolving gaming industry of
            India.
          </p>
          {/* <p className="text-[16px]">
            From the ongoing battle for regulation and skill-based real money
            gaming or Web3 and the growing potential for esports and content
            creation, we’re a part of every conversation. We understand the
            niche, unique, continuously evolving, and extremely dynamic gaming
            industry of India.
          </p> */}
        </div>
        <div>
          <p className="text-[#c52326] font-semibold text-lg">
            We understand gaming
          </p>
          <p className="text-[16px]">
            Gaming is our domain, and we understand it profoundly. With years of
            experience in building communication strategies for Nazara
            Technologies Limited and a diverse range of Indian and global gaming
            companies, we&apos;ve mastered multiple genres of gaming. Whether
            it&apos;s fantasy sports, esports, game development, publishing,
            gamified education, Web3, or blockchain, 4WD stands as a leading
            name in the Indian gaming ecosystem.
          </p>
          {/* <p className="text-[16px]">
            With experience in multiple genres of gaming be it fantasy sports,
            esports, game development, publishing, sports & esports media,
            gamified education, Web3 & blockchain, real money gaming among
            others, 4WD has anchored its position as a leading name in the
            Indian gaming ecosystem.
          </p> */}
        </div>
        <div>
          <p className="text-[#c52326] font-semibold text-lg">
            We’re forward-thinking
          </p>
          <p className="text-[16px]">
            Our forward-thinking approach sets us apart. As early entrants in
            this nascent space, we understand the ecosystem, anticipate
            challenges, and predict industry trends. We&apos;re excited to share
            our expertise with Indian and international gaming brands, helping
            them break into the mainstream. Always ahead of the curve, we
            embrace the latest trends to keep our clients at the forefront of
            the gaming industry.
          </p>
          {/* <p className="text-[16px]">
            These are exciting times and we look forward to sharing our
            expertise with Indian and international gaming brands, helping them
            successfully crossover into the mainstream. We’re ahead of the curve
            and always ready to adapt and embrace the latest trends in this
            space.
          </p> */}
        </div>
        <div>
          <p className="text-[#c52326] font-semibold text-lg">
            We don’t just do PR
          </p>
          <p className="text-[16px]">
            Though PR is our forte, we&apos;re more than that. We&apos;re
            marketers, brand planners, and reputation managers. From designing
            to execution, we&apos;ve led Nazara through their public listing
            process, establishing them as India&apos;s first listed gaming
            company. Coffee with us is an opportunity to discuss your goals and
            align your publicity and marketing with your PR objectives. Let us
            tackle your challenges and provide solutions.
          </p>
          {/* <p className="text-[16px]">
            All the way from design to execution while managing reputation, we
            successfully led Nazara through their public listing process to
            become India’s first listed gaming company.
          </p>
          <p className="text-[16px]">
            Meet us for coffee and give us the opportunity to have a
            conversation about your goals and what needs to be done to achieve
            them. Does your publicity and marketing match your PR goals and
            objectives? Does it match up to your metrics? Is there recall, the
            desired perception, imagery? Let us answer them!
          </p> */}
        </div>
        <div>
          <p className="text-[#c52326] font-semibold text-lg">
            Our gaming brands:
          </p>
          <p className="text-[16px]">
            Our gaming portfolio includes major brands and IPs like Nextwave
            Multimedia, Evenbet Gaming, HalaPlay, Trinity Gaming India,
            Nordanvind Investments Ltd., and more. The founder, Sharmilee Daru,
            an alumnus of prestigious institutions, is one of the pioneers in
            successful communication for gaming solutions. With her experience,
            we assure guidance, training, and strategic direction that creates
            successful brands.
          </p>
          {/* <p className="text-[16px]">
            These are exciting times and we look forward to sharing our
            expertise with Indian and international gaming brands, helping them
            successfully crossover into the mainstream. We’re ahead of the curve
            and always ready to adapt and embrace the latest trends in this
            space.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
