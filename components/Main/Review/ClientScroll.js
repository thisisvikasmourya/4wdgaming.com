import Image from "next/image";
import React from "react";
import client1 from "../../../public/images/client2.png";
import client2 from "../../../public/images/Add-a-heading-15.png";
// import client3 from "../../../public/images/Add-a-heading-13-1.png";
import client4 from "../../../public/images/halaplay-1.png";
import client5 from "../../../public/images/evenbet.png";
import client6 from "../../../public/images/sportskeeda.png";
import client7 from "../../../public/images/Untitled-design-88.png";
import client8 from "../../../public/images/Untitled-design-93.png";
// import client9 from "../../../public/images/Yudiz-Solutions-Limited-Logo.png";
import client10 from "../../../public/images/wcc.png";
import client11 from "../../../public/images/trinity.png";
import client12 from "../../../public/images/gl.png";

const ClientScroll = () => {
  return (
    <div className=" py-5 bg-[#191c20]">
      <div className="marquee max-w-screen-xl mx-auto md:px-8">
        <ul className="marquee-content">
          <li className="marquee-item indi">
            {" "}
            <Image
              src={client1}
              alt="client1"
              className="rounded-lg bg-white"
              width={200}
              height={100}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="marquee-item">
            {" "}
            <Image
              src={client2}
              alt="client1"
              className="rounded-lg bg-white"
              width={200}
              height={100}
            />
          </li>
          {/* <li className="marquee-item">
            {" "}
            <Image
              src={client12}
              alt="client1"
              className="rounded-lg"
              width={200}
              height={100}
            />
          
          </li> */}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li className="marquee-item">
            {" "}
            <Image
              src={client4}
              alt="client1"
              className="rounded-lg bg-white"
              width={180}
              height={100}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="marquee-item">
            {" "}
            <Image
              src={client5}
              alt="client1"
              className="rounded-lg bg-white"
              width={180}
              height={90}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="marquee-item">
            {" "}
            <Image
              src={client6}
              alt="client1"
              className="rounded-lg bg-white"
              width={180}
              height={100}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="marquee-item">
            {" "}
            <Image
              src={client7}
              alt="client1"
              className="rounded-lg bg-white"
              width={180}
              height={100}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="marquee-item">
            {" "}
            <Image
              src={client8}
              alt="client1"
              className="rounded-lg bg-white"
              width={160}
              height={90}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="marquee-item">
            {" "}
            <Image
              src={client10}
              alt="client1"
              className="rounded-lg bg-white"
              width={180}
              height={100}
            />
            &nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="marquee-item">
            {" "}
            <Image
              src={client11}
              alt="client1"
              className="rounded-lg"
              width={200}
              height={100}
            />
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li className="marquee-item">
            {" "}
            <Image
              src={client1}
              alt="client1"
              className="rounded-lg bg-white"
              width={200}
              height={100}
            />
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li className="marquee-item">
            {" "}
            <Image
              src={client2}
              alt="client1"
              className="rounded-lg bg-white"
              width={200}
              height={100}
            />
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <li className="marquee-item">
            {" "}
            <Image
              src={client4}
              alt="client1"
              className="rounded-lg bg-white"
              width={180}
              height={100}
            />
          </li>
          <li className="marquee-item">
            {" "}
            <Image
              src={client5}
              alt="client1"
              className="rounded-lg bg-white"
              width={180}
              height={100}
            />
          </li>
          <li className="marquee-item">
            {" "}
            <Image
              src={client6}
              alt="client1"
              className="rounded-lg bg-white"
              width={180}
              height={100}
            />
          </li>
          <li className="marquee-item">
            {" "}
            <Image
              src={client7}
              alt="client1"
              className="rounded-lg bg-white"
              width={180}
              height={100}
            />
          </li>
          <li className="marquee-item">
            {" "}
            <Image
              src={client8}
              alt="client1"
              className="rounded-lg bg-white"
              width={160}
              height={90}
            />
          </li>
          <li className="marquee-item">
            {" "}
            <Image
              src={client12}
              alt="client1"
              className="rounded-lg bg-white"
              width={160}
              height={90}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ClientScroll;
