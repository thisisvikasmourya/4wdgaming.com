import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import v1 from "../../public/images/new/1.gif";
import v2 from "../../public/images/new/2.gif";
import v3 from "../../public/images/new/3.gif";
import v4 from "../../public/images/new/4.gif";
import v5 from "../../public/images/new/5.gif";
import v6 from "../../public/images/new/6.gif";
import v7 from "../../public/images/new/7.gif";
import v8 from "../../public/images/new/8.gif";
import v9 from "../../public/images/new/9.gif";
import v10 from "../../public/images/new/10.gif";
import v11 from "../../public/images/new/11.gif";
import v12 from "../../public/images/new/12.gif";
import v13 from "../../public/images/new/13.gif";
import v14 from "../../public/images/new/14.gif";
import v15 from "../../public/images/new/15.gif";

export default function Card() {
  const posts = [
    {
      title: "Digital Brand Communication",
      img: v15,
      content:
        "We make sure your gaming brand talks to the right people online, telling exciting stories that gamers love.",
      link: "/services/digital-brand-communication",
    },
    {
      title: "Public Relation & Outreach",
      img: v14,
      content:
        " Like gaming gossip, we create buzz around your brand using smart strategies and social...",
      link: "/services/public-relations-and-outreach",
    },
    {
      title: "Content And Copywriting",
      img: v13,
      content:
        "  We craft cool stories and write awesome content that speaks to gamers and keeps them engaged.",
      link: "/content-and-writing",
    },
    {
      title: "Strategy And Digital Marketing",
      img: v12,
      content:
        "Strategy And Digital Marketing We're the game planners who ensure your brand looks...",
      link: "/services/strategy-and-digitalmarketing",
    },
    {
      title: "Social Media Management & Marketing",
      img: v11,
      content:
        " Just like your favorite gaming platforms, we make sure your brand rocks on Facebook,...",
      link: "/services/social-media-management-marketing",
    },
    {
      title: "Growth Marketing",
      img: v10,
      content:
        " We're the growth hackers who help your gaming brand get bigger and better using smart tricks.",
      link: "/services/growth-marketing",
    },
    {
      title: "Performance Marketing",
      img: v9,
      content:
        " We make sure your brand's marketing is like a top-tier gaming performance, getting results that matter.",
      link: "/services/performance-marketing",
    },
    {
      title: "Data Driven Gaming - Insights",
      img: v8,
      content:
        "We dig into the numbers to find out what's working and what's not, helping your gaming brand make smart...",
      link: "/services/data-driven-gaming-insight",
    },
    {
      title: "Gaming Product Launches",
      img: v7,
      content:
        "  We throw epic launch parties for your gaming products, making sure they're the talk of the gaming world.",
      link: "/services/gaming-product-launches",
    },
    {
      title: "Gaming Event and Expo",
      img: v6,
      content:
        " We're the event planners who make sure your gaming, Web3, and esports events...",
      link: "/services/digital-gaming-events-and-expo",
    },

    {
      title: "Creators & Influencers",
      img: v5,
      content:
        " We connect you with gaming stars and influencers who can boost your brand's popularity.",
      link: "/services/creator-and-influencers",
    },
    {
      title: "Community Building and Management",
      img: v4,
      content:
        " We're the architects of strong gaming communities, making sure gamers love your brand.",
      link: "/services/community-building-management",
    },
    {
      title: "Go Global",
      img: v3,
      content:
        "We help your gaming brand conquer the world, expanding your reach to gamers everywhere.",
      link: "/services/go-global-pr-marketing",
    },
  ];

  return (
    <>
      <div className="bg-[#eee2dc]" data-aos="zoom-in">
        <div className=" px-4  py-20 bg-[#eee2dc] max-w-screen-xl mx-auto md:px-8">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            navigation={true}
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
            modules={[Pagination, Navigation]}
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
