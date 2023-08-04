import React from "react";
import Pr from "../../public/images/publicrelations-1.jpg";
import esp from "../../public/images/esport.jpg";
import web from "../../public/images/webs.png";
import cont from "../../public/images/content.jpg";
import str from "../../public/images/0x0.jpg";
import Image from "next/image";
import Link from "next/link";
import {HiArrowLongRight} from "react-icons/hi"

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
  const posts2 = [
    {
      title: "Crisis Communication",
      img: str,
      content:
        "Crisis Communications - Navigating Turbulent Waters with Expertise",
      link: "/services/crisis-communication",
    },
    {
      title: "Esports Tournament Organization ",
      img: Pr,
      content: "Esports Tournament Organization - Level Up Your Gaming Events",
      link: "/services/esports-tournament-organization",
    },
    {
      title: "Data Driven Pr-Insights",
      img: cont,
      content:
        " Data-driven PR Insights - Unlocking the Power of Analytics in Gaming",
      link: "/services/data-driven-pr-insight",
    },
    {
      title: "Gaming Product Launches",
      img: web,
      content:
        "Gaming Product Launches - Igniting Success in the Gaming Industry",
      link: "/services/gaming-product-launches",
    },

    {
      title: "International Pr-Expansion",
      img: esp,
      content:
        " International PR Expansion - Unlocking Global Opportunities for Gaming Brands",
      link: "/services/international-pr-expansion",
    },
  ];
  return (
    <div className="bg-[#17191d]">
      <div
        className="lg:px-1 px-4  py-20 bg-[#17191d] max-w-screen-xl mx-auto md:px-8"
        data-aos="zoom-in"
      >
        {/* <h1>Our Service</h1> */}
        <div className="max-w-xl sm:text-center py-10 md:mx-auto">
          <h3
            className="text-[#c52326] text-3xl font-semibold sm:text-4xl text-center "
            data-aos="flip-up"
          >
            Our Services
          </h3>
          <p className="mt-3 text-white text-center">
            Whatever your game, we bring the ammo!
          </p>
        </div>

        {/* <p className="lg:text-3xl text-[#c52326] text-2xl font-bold text-center py-1 ">
          OUR SERVICES
        </p>
        <p className="lg:text-2xl text-2xl border-b  text-center pb-3">
          INDIA&apos;S PREMIER GAMING PR & MARKETING CONSULTANCY
        </p> */}
        <div
          className="grid gap-5 lg:grid-cols-5 pt-5"
          data-aos="fade-down-right"
        >
          {posts.map((items, key) => (
            <div
              className="w-full rounded-lg shadow-md border  lg:max-w-sm bg-[#14161a] "
              data-aos-duration="2000"
              key={key}
            >
              <Image
                className="object-cover w-full rounded-lg h-48"
                src={items.img}
                alt="image"
              />
              <div className="p-4">
                <Link
                  className=" text-xl font-semibold text-[#c52326]"
                  href={items.link}
                >
                  {items.title}
                </Link>
                <br />
                <Link
                  className=" text-sm text-blue-100  rounded shadow underline-offset-4"
                  href={items.link}
                >
                  {items.content}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div
          className="grid gap-5 lg:grid-cols-5 pt-5"
          data-aos="fade-down-right"
        >
          {posts2.map((items, key) => (
            <div
              className="w-full rounded-lg shadow-md border  lg:max-w-sm bg-[#14161a] "
              data-aos-duration="2000"
              key={key}
            >
              <Image
                className="object-cover w-full rounded-lg h-48"
                src={items.img}
                alt="image"
              />
              <div className="p-4">
                <Link
                  className=" text-xl font-semibold text-[#c52326]"
                  href={items.link}
                >
                  {items.title}
                </Link>
                <br />
                <Link
                  className=" text-sm text-blue-100  rounded shadow underline-offset-4"
                  href={items.link}
                >
                  {items.content}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
