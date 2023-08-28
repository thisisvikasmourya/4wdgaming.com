import Image from "next/image";
import React from "react";
import About from "../../public/images/jay.png";
import About2 from "../../public/images/vami.jpg";
import Link from "next/link";

const AdvisoryCouncil = () => {
  return (
    <div id="advisory">
      <div className="bg-[#f3efdf]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="bg-[#f3efdf]">
            <div className="content bg-[#f3efdf] py-16  px-4">
              <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
                Advisory Council Members
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-[#f0ebd7]">
          <div className="max-w-screen-xl mx-auto md:px-8">
            <div className="flex lg:flex-row justify-center flex-col  space-between gap-6 p-4 py-10  px-4 ">
              <div className="text-center">
                <Image
                  src={About2}
                  data-aos="zoom-in"
                  alt="hello"
                  className="rounded-xl"
                  layout="responsive"
                  width={300}
                />
              </div>
              <div className="py-3 text-[20px]">
                <p className="text-lg text-[#4d326b] mt-2">Vamsi Talasila</p>
                <p className="text-lg text-black">
                  {" "}
                  Gaming Technology and Digital Marketing
                </p>
                <p className="text-black">
                  Vamsi Talasila is a veteran and dynamic technology leader with
                  two decades of experience in building technology for gaming,
                  esports, and sports domains. He is an expert in converting
                  various business problems into feasible technology solutions.
                  For nearly a decade at Nazara Technologies Ltd., he led
                  technology transformation initiatives across multiple lines of
                  businesses and functions facilitating growth and rapid
                  expansion of the company’s gaming services globally, enabling
                  it to become India’s first listed gaming company.
                </p>
                <p className="text-black">
                  Vamsi has worked with new-age technology strategies and
                  solutions across gaming verticals like subscription, freemium
                  games, real money games, fantasy sports, and betting games
                  along with performance marketing, analytics, and loyalty
                  programs. He is also known for having built large consumer
                  platforms and solutions catering to millions of subscribers,
                  addressing critical factors like scalability, availability,
                  security, analytics, and consumer experience.
                </p>
              </div>
            </div>

            <div className="flex lg:flex-row justify-center flex-col  space-between gap-6 p-4 py-10  px-4 ">
              <div className="text-center">
                <Image
                  src={About}
                  data-aos="zoom-in"
                  alt="hello"
                  className="rounded-xl"
                  width={300}
                  layout="responsive"
                />
              </div>
              <div className="py-3 text-[20px]">
                <p className="text-xl text-[#4d326b] mt-2">Jay Sayta </p>
                <p className="text-lg text-black">
                  Technology and Gaming Lawyer in India
                </p>
                <p className="text-black">
                  Jay Sayta is a technology and gaming lawyer in India. He is
                  well known in the media fraternity and is an expert on gaming
                  laws. He has contributed through research and written
                  extensively on gambling and betting laws. He has spoken on the
                  issues of gaming legislation at various key industry forums
                  and bodies like the Indian Merchants’ Chambers (IMC),
                  Confederation of Indian Industry (CII), Federation of Indian
                  Chambers of Commerce and Industry (FICCI), ICE Totally Gaming,
                  All India Gaming Federation (AIGF) among others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryCouncil;
