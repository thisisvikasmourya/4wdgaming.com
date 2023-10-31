import Image from "next/image";
import React from "react";
import About from "../../public/images/4wdlogo.jpg";
import vamsi from "../../public/images/Vamsi-Krishna-Talasila-1-1024x936.jpg";
import jay from "../../public/images/Jay-Sayta-3-1-2.jpg";
import About1 from "../../public/images/1.png";
import AdvisoryCouncil from "./AdvisoryCouncil";
import WhatWeDo from "./WhatWeDo";
import About2 from "../../public/images/2.png";
import About3 from "../../public/images/3.png";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="content bg-[#eee2dc] py-20  px-4" data-aos="zoom-in">
            <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
              About Moram Napu
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          {/* <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4  bg-[#eee2dc] py-10  px-4">
            <div>
              <p className="text-[#ac3b61] font-semibold text-[20px]">
                We’re brand builders
              </p>
              <p className="text-[18px] text-[#123c69]">
                At Moram Napu, we are more than just a gaming Outreachagency. We are
                brand builders who understand the power of a strong brand in
                attracting organic media and Outreach. Our approach is simple but
                effective - we sit with you, plan, consult, and watch the magic
                happen! Listening to our clients and prioritizing ethics guide
                our every move. Working with us gives you an undeniable
                advantage, like using a secret code to gain a helicopter in a
                medieval battle. Our strength lies in our ability to listen and
                solve your challenges.
              </p>
            </div>
            <div>
              <p className="text-[#ac3b61] font-semibold text-[20px]">
                We’re pioneers
              </p>
              <p className="text-[18px] text-[#123c69]">
                We take pride in being pioneers in the gaming space. As the
                first ones here, we carved the path for the gaming Outreachecosystem
                in India. Our journey as early adopters and proponents of gaming
                Outreachhas witnessed the industry&apos;s evolution, from skill-based
                real money gaming to Web3 and blockchain gaming. We are part of
                every conversation that shapes the gaming landscape, fully
                understanding the niche, dynamic, and continuously evolving
                gaming industry of India.
              </p>
            </div>
            <div>
              <p className="text-[#ac3b61] font-semibold text-[20px]">
                We understand gaming
              </p>
              <p className="text-[18px] text-[#123c69]">
                Gaming is our domain, and we understand it profoundly. With
                years of experience in building communication strategies for
                Nazara Technologies Limited and a diverse range of Indian and
                global gaming companies, we&apos;ve mastered multiple genres of
                gaming. Whether it&apos;s fantasy sports, esports, game
                development, publishing, gamified education, Web3, or
                blockchain, 4WD stands as a leading name in the Indian gaming
                ecosystem.
              </p>
            </div>
            <div>
              <p className="text-[#ac3b61] font-semibold text-[20px] ">
                We’re forward-thinking
              </p>
              <p className="text-[18px] text-[#123c69]">
                Our forward-thinking approach sets us apart. As early entrants
                in this nascent space, we understand the ecosystem, anticipate
                challenges, and predict industry trends. We&apos;re excited to
                share our expertise with Indian and international gaming brands,
                helping them break into the mainstream. Always ahead of the
                curve, we embrace the latest trends to keep our clients at the
                forefront of the gaming industry.
              </p>
            </div>
            <div>
              <p className="text-[#ac3b61] font-semibold text-[20px]">
                We don’t just do Outreach
              </p>
              <p className="text-[18px] text-[#123c69]">
                Though Outreachis our forte, we&apos;re more than that. We&apos;re
                marketers, brand planners, and reputation managers. From
                designing to execution, we&apos;ve led Nazara through their
                public listing process, establishing them as India&apos;s first
                listed gaming company. Coffee with us is an opportunity to
                discuss your goals and align your publicity and marketing with
                your Outreachobjectives. Let us tackle your challenges and provide
                solutions.
              </p>
            </div>
            <div>
              <p className="text-[#ac3b61] font-semibold text-[20px]">
                Our gaming brands:
              </p>
              <p className="text-[18px] text-[#123c69]">
                Our gaming portfolio includes major brands and IPs like Nextwave
                Multimedia, Evenbet Gaming, HalaPlay, Trinity Gaming India,
                Nordanvind Investments Ltd., and more. The founder, Sharmilee
                Daru, an alumnus of prestigious institutions, is one of the
                pioneers in successful communication for gaming solutions. With
                her experience, we assure guidance, training, and strategic
                direction that creates successful brands.
              </p>
            </div>
          </div> */}
          <div className="p-4 text-[18px] text-[#123c69]  bg-[#eee2dc] py-10  px-4">
            At MORAM NAPU, we&apos;re the ones who make games stand out and get
            all the attention they deserve. Think of us as the boosters that
            help game companies reach players who can&apos;t wait to dive into
            their games. Our secret recipe includes creative ideas and smart
            strategies that make games famous and loved.
          </div>
        </div>
      </div>
      <div id="founder">
        <div>
          <div className="bg-[#eee2dc] py-18" data-aos="zoom-in">
            <div className="max-w-screen-xl mx-auto md:px-8 ">
              <div data-aos="zoom-in">
                <div className="content bg-[#eee2dc] py-20  px-4">
                  <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
                    About the Team
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#eee2dc]" data-aos="zoom-in">
            <div className="max-w-screen-xl mx-auto md:px-8 py-10">
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 p-4 py-10 items-center px-4 bg-[#eee2dc]">
                <div>
                  <Image
                    src={About1}
                    alt="hello"
                    layout="responsive"
                    className="rounded-lg"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl text-[#ac3b61] mt-2">
                        Mallikarjun Reddy
                      </p>
                      <p className="text-lg text-[#123c69]">Founder CEO</p>
                    </div>
                    <Link
                      href={
                        "https://www.linkedin.com/in/mallikarjun-reddy-195676144/"
                      }
                    >
                      <BsLinkedin className="text-[50px] text-[#0072b1]" />
                    </Link>{" "}
                  </div>
                </div>
                <div>
                  <Image
                    src={About3}
                    alt="hello"
                    layout="responsive"
                    className="rounded-lg"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl text-[#ac3b61] mt-2">
                        Claris Micheal
                      </p>
                      <p className="text-lg text-[#123c69]">Advisor (Web3)</p>
                    </div>
                    <Link
                      href={
                        "https://www.linkedin.com/in/claris-michael-a3942119b"
                      }
                    >
                      <BsLinkedin className="text-[50px] text-[#0072b1]" />
                    </Link>{" "}
                  </div>
                </div>
                <div>
                  <Image
                    src={About2}
                    alt="hello"
                    layout="responsive"
                    className="rounded-lg"
                  />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl text-[#ac3b61] mt-2">Luis Ruiz</p>
                      <p className="text-lg text-[#123c69]">
                        Advisor (Gaming, Esport, RMG)
                      </p>
                    </div>
                    <Link href={"https://www.linkedin.com/in/luiseruiz/"}>
                      <BsLinkedin className="text-[50px] text-[#0072b1]" />
                    </Link>
                  </div>
                </div>

                <div>
                  {/* <p className="py-2 text-[#123c69] text-[18px]">
                    An alumnus of St. Xaviers’ College, Mumbai and a post
                    graduate from the Xavier’s Institute of Communication,
                    Mumbai, Sharmilee Daru is one of the pioneers of focused and
                    curated, successful communication for gaming solutions in
                    the country and is one of the most noted names in the space.
                  </p>
                  <p className="py-2 text-[#123c69] text-[18px]">
                    With a proven track record in establishing gaming as a
                    formidable niche in the media, Sharmilee Daru, branched out
                    to etch more success stories. She recently launched 4WD
                    Gaming, the first of its kind specialised gaming Outreachand
                    marketing consultancy in the country for Indian and
                    international brands. She believes in the seamless merger of
                    gaming into the Indian mainstream ecosystem while enabling
                    sectoral growth.
                  </p> */}
                </div>
              </div>

              {/* <p className="py-2 text-[#123c69] text-[18px]">
                Managing the communication mandate for Nazara Technologies Ltd.
                somehow, allowed Sharmilee Daru to set the path for the gaming
                Outreachecosystem in the country. She has been instrumental to
                Nazara’s growth story. Starting the corporate communication
                department for a gaming company seemed farfetched at the time in
                March 2018. Architecting plans and strong execution, while
                managing reputation, she saw the company through the public
                listing process. Today, it stands as India’s only listed online
                skill-based gaming firm enabling her to be among the pioneers
                for gaming communication in the country.
              </p>
              <p className="py-2 text-[#123c69] text-[18px]">
                With more than two decades of experience in the communication
                space, Sharmilee Daru has been instrumental in creating
                successful brands by providing guidance, training and strategic
                direction. From consulting with big names of the industry like
                RIL and HUL to emerging gaming start-ups, her experience as a
                communication advisor with a sharp eye for detail and strong
                domain knowledge has culminated into the inception of 4WD
                GAMING.
              </p>
              <p className="py-3 text-[18px] text-[#123c69]">
                Being among the early adopter and proponent of gaming
                communication, she has seen the industry evolve. Be it the
                ongoing battle for regulation and skill based real money gaming
                or the introduction of Web3 among other trends setting in, she
                has an advantage having managed all gaming categories. Be it the
                fantasy sports space, esports, sports media space, gamified
                learning, real money or the casual gaming space, she has managed
                to gain a strong foothold in the Indian gaming ecosystem.
              </p>
              <p className=" text-[#123c69] text-[18px]">
                When she is not working, she loves to spend her time horse
                riding, swimming or simply at the gym.
              </p> */}
              <div className="  px-4 bg-[#eee2dc] text-[#123c69]"></div>
            </div>
          </div>
        </div>
      </div>
      <WhatWeDo />
      {/* <AdvisoryCouncil /> */}
    </div>
  );
};

export default AboutUs;
