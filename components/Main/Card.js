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
      title: "Digital Brand Communication",
      img: esp,
      content:
        "We make sure your gaming brand talks to the right people online, telling exciting stories that gamers love.",
      link: "/pricing-page",
    },
    {
      title: "Public Relation & Outreach",
      img: Pr,
      content:
        " Like gaming gossip, we create buzz around your brand using smart strategies and social media to get people talking.",
      link: "/pricing-page",
    },
    {
      title: "Content And Copywriting",
      img: cont,
      content:
        "  We craft cool stories and write awesome content that speaks to gamers and keeps them engaged.",
      link: "/pricing-page",
    },
    {
      title: "Strategy And Digital Marketing",
      img: esp,
      content:
        "Strategy And Digital Marketing We're the game planners who ensure your brand looks good and gets noticed with clever marketing tactics.",
      link: "/pricing-page",
    },
    {
      title: "Social Media Management & Marketing",
      img: Pr,
      content:
        " Just like your favorite gaming platforms, we make sure your brand rocks on Facebook, Instagram, Twitter, and more.",
      link: "/pricing-page",
    },
    {
      title: "Growth Marketing",
      img: cont,
      content:
        " We're the growth hackers who help your gaming brand get bigger and better using smart tricks.",
      link: "/pricing-page",
    },
    {
      title: "Performance Marketing",
      img: esp,
      content:
        " We make sure your brand's marketing is like a top-tier gaming performance, getting results that matter.",
      link: "/pricing-page",
    },
    {
      title: "Data Driven Gaming - Insights",
      img: Pr,
      content:
        "We dig into the numbers to find out what's working and what's not, helping your gaming brand make smart decisions.",
      link: "/pricing-page",
    },
    {
      title: "Gaming Product Launches",
      img: cont,
      content:
        "  We throw epic launch parties for your gaming products, making sure they're the talk of the gaming world.",
      link: "/pricing-page",
    },
    {
      title: "Gaming Event and Expo",
      img: web,
      content:
        " We're the event planners who make sure your gaming, Web3, and esports events shine like never before.",
      link: "/services/public-relations",
    },

    {
      title: "Creators & Influencers",
      img: esp,
      content:
        " We connect you with gaming stars and influencers who can boost your brand's popularity.",
      link: "/services/public-relations",
    },
    {
      title: "Community Building and Management",
      img: esp,
      content:
        " We're the architects of strong gaming communities, making sure gamers love your brand.",
      link: "/services/public-relations",
    },
    {
      title: "Go Global",
      img: esp,
      content:
        "We help your gaming brand conquer the world, expanding your reach to gamers everywhere.",
      link: "/services/public-relations",
    },
  ];

  return (
    <>
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className=" px-4  py-20 bg-[#eee2dc] max-w-screen-xl mx-auto md:px-8">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
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
