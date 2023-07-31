import React from "react";
import Pr from "../../public/images/publicrelations-1.jpg";
import esp from "../../public/images/esport.jpg";
import web from "../../public/images/webs.png";
import cont from "../../public/images/content.jpg";
import str from "../../public/images/0x0.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const posts = [
    {
      title: "Strategy and Marketing",
      img: str,
      content: "Like in any game, at 4WD, we believe in strategizing.",
      link: "/services/public-relations",
    },
    {
      title: "Public Relations",
      img: Pr,
      content: "At 4WD Gaming, we're PR and gaming specialists",
      link: "/services/public-relations",
    },
    {
      title: "Content and Copywriting",
      img: cont,
      content: "Like in gaming, we prefer to create a world for you.",
      link: "/services/public-relations",
    },
    {
      title: "Creators and Influencers",
      img: web,
      content: "We work with some of the top gaming content creators and ...",
      link: "/services/public-relations",
    },

    {
      title: "Digital Gaming Events",
      img: esp,
      content: "Your events will be the talk of the gaming community",
      link: "/services/public-relations",
    },
  ];
  return (
    <>
      <div className="lg:px-16 px-4  py-20 bg-[#191c20]" data-aos="zoom-in">
        {/* <h1>Our Service</h1> */}
        <div className="max-w-xl sm:text-center py-10 md:mx-auto">
          <h3
            className="text-[#c52326] text-3xl font-semibold sm:text-4xl text-center "
            data-aos="flip-up"
          >
            Our Services
          </h3>
          <p className="mt-3 text-white">
            Whatever your game, we bring the ammo!
          </p>
        </div>

        {/* <p className="lg:text-3xl text-[#c52326] text-2xl font-bold text-center py-1 ">
          OUR SERVICES
        </p>
        <p className="lg:text-2xl text-2xl border-b  text-center pb-3">
          INDIA&apos;S PREMIER GAMING PR & MARKETING CONSULTANCY
        </p> */}
        <div className="grid gap-5 lg:grid-cols-5 pt-5">
          {posts.map((items, key) => (
            <div
              className="w-full rounded-lg shadow-md lg:max-w-sm bg-[#1a1a1a] hover:bg-[#191c20]"
              data-aos="fade-up"
              data-aos-duration="2000"
              key={key}
            >
              <Image
                className="object-cover w-full h-48"
                src={items.img}
                alt="image"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-[#c52326]">
                  {items.title}
                </h4>
                <p className="mb-2 leading-normal text-[16px]">
                  {items.content}
                </p>
                <Link
                  className="px-4 py-2 text-sm text-blue-100 bg-[#c52326]  rounded shadow"
                  href={items.link}
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
