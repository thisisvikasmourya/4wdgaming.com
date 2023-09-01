import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import client1 from "../../public/images/client2.png";
import client2 from "../../public/images/Add-a-heading-15.png";
import client3 from "../../public/images/Add-a-heading-13-1.png";
import client4 from "../../public/images/halaplay-1.png";
import client5 from "../../public/images/evenbet.png";
import client6 from "../../public/images/sportskeeda.png";
import client7 from "../../public/images/Untitled-design-88.png";
import client8 from "../../public/images/Untitled-design-93.png";
import client9 from "../../public/images/Yudiz-Solutions-Limited-Logo.png";
import client10 from "../../public/images/wcc.png";
import client11 from "../../public/images/trinity.png";

export default function OurClient() {
  return (
    <>
      <div className="px-32 py-20 bg-[#eee2dc]">
        <h1 className="text-center text-2xl text-[#ac3b61] py-10 font-bold">
          Our Client
        </h1>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          slidesPerView={3}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <Image src={client1} alt="client1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={client2} alt="client1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={client3} alt="client1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={client4} alt="client1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={client5} alt="client1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={client6} alt="client1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={client7} alt="client1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={client8} alt="client1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={client9} alt="client1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={client10} alt="client1" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Image src={client11} alt="client1" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
