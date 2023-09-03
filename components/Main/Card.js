import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import Pr from "../../public/images/pr.jpg";
import esp from "../../public/images/esport.jpg";
import web from "../../public/images/cover.jpg";
import cont from "../../public/images/ddd.png";
// import esp from "../../public/images/marketing.jpg";
import crisis from "../../public/images/crisis.png";
import data from "../../public/images/datadriven.jpeg";
import game from "../../public/images/game.png";
import esports from "../../public/images/interpr.jpg";
import esportss2 from "../../public/images/esportss.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";
// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Card() {
  const posts = [
    {
      title: "Public Relation",
      img: esp,
      content:
        "We create a lot of buzz around games. It's like when a secret gets out and everyone wants to know more. We use social media, cool content, and smart marketing to get people talking about games.",
      link: "/pricing-page",
    },
    {
      title: "Gaming Product Launch",
      img: Pr,
      content:
        "We help game companies become friends with players. Imagine having a big party where everyone talks about games and has a blast. That's what we do online – connect players and make games more fun",
      link: "/pricing-page",
    },
    {
      title: "espategy and Marketing",
      img: cont,
      content:
        " We make sure game companies look really good. We team up with famous people and use clever tricks to show everyone that the games are super trustworthy and awesome.",
      link: "/pricing-page",
    },
    {
      title: "Digital Communication",
      img: esp,
      content:
        "We create a lot of buzz around games. It's like when a secret gets out and everyone wants to know more. We use social media, cool content, and smart marketing to get people talking about games.",
      link: "/pricing-page",
    },
    {
      title: "Esport Tournament",
      img: Pr,
      content:
        "We help game companies become friends with players. Imagine having a big party where everyone talks about games and has a blast. That's what we do online – connect players and make games more fun",
      link: "/pricing-page",
    },
    {
      title: "Data Driven PR-insight",
      img: cont,
      content:
        " We make sure game companies look really good. We team up with famous people and use clever tricks to show everyone that the games are super trustworthy and awesome.",
      link: "/pricing-page",
    },
    {
      title: "International PR-insight",
      img: esp,
      content:
        "We create a lot of buzz around games. It's like when a secret gets out and everyone wants to know more. We use social media, cool content, and smart marketing to get people talking about games.",
      link: "/pricing-page",
    },
    {
      title: "Creator and Influencers",
      img: Pr,
      content:
        "We help game companies become friends with players. Imagine having a big party where everyone talks about games and has a blast. That's what we do online – connect players and make games more fun",
      link: "/pricing-page",
    },
    {
      title: "Content and CopyWriting",
      img: cont,
      content:
        " We make sure game companies look really good. We team up with famous people and use clever tricks to show everyone that the games are super trustworthy and awesome.",
      link: "/pricing-page",
    },
    // {
    //   title: "Creators and Influencers",
    //   img: web,
    //   content: "We work with some of the top gaming content creators",
    //   link: "/services/public-relations",
    // },

    {
      title: "Digital Gaming Events",
      img: esp,
      content:
        "We help game companies become friends with players. Imagine having a big party where everyone talks about games and has a blast. That's what we do online – connect players and make games more fun",
      link: "/services/public-relations",
    },
  ];

  return (
    <>
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className=" px-4  py-20 bg-[#eee2dc] max-w-screen-xl mx-auto md:px-8">
          <Swiper
            slidesPerView={4}
                      spaceBetween={ 20 }
                      
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper bg-[#eee2dc]"
          >
            {posts.map((items, key) => (
              <SwiperSlide
                className="w-full rounded-lg shadow-md border grid gap-5 lg:grid-cols-3  grid-cols-1  lg:max-w-sm bg-[#bab2b5] indi"
                data-aos-duration="2000"
                key={key}
              >
                <div>
                  <Image
                    className="object-cover w-full rounded-lg h-48"
                    src={items.img}
                    alt="image"
                  />
                  <div className="p-4">
                    <Link
                      className="   font-bold text-[20px] text-[#ac3b61]"
                      href={items.link}
                    >
                      {items.title}
                    </Link>
                    <br />
                    <Link
                      className=" text-[18px]  text-[#123c69]  rounded "
                      href={items.link}
                    >
                      {items.content}
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
