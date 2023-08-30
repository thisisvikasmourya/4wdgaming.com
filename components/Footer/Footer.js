import React from "react";
import logo from "../../public/images/MORAM.png";
import Image from "next/image";
// import {AiOutlineInstagram} from "react-icons/ai"
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  const footerNavs = [
    {
      label: "About Us",
      items: [
        {
          href: "/about-us",
          name: "About Company",
        },
        {
          href: "/about-us/#whatwedo",
          name: "What We Do & How We Do It",
        },
        {
          href: "/about-us/#advisory",
          name: "Advisory Council Members",
        },
      ],
    },
    {
      label: "Services",
      items: [
        {
          href: "/services/public-relations",
          name: "Game Buzz Builder",
        },
        {
          href: "/services/strategy-and-marketing",
          name: " Player Connection Pro",
        },
        {
          href: "/services/content-and-writing",
          name: "Trusted Game Partner",
        },
      ],
    },
  ];

  return (
    <div className="bg-[#f0ebd7]">
      <footer className="text-black  px-4 py-10 max-w-screen-xl mx-auto md:px-8">
        <div className="gap-20 justify-between md:flex lg:flex-row">
          <div className="flex">
            <div className="max-w-xs py-3">
              <Image src={logo} alt="Logo" className="w-32" />
              <p className="leading-relaxed mt-2 text-[20px] text-black">
                Elevating Gaming PR & Marketing
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  space-y-3 lg:gap-10  gap-3 justify-between sm:flex md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
              <ul className="" key={idx}>
                <h2 className="flex-1 text-[#4d326b] text-[20px] font-bold">
                  {item.label}
                </h2>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <Link
                      href={el.href}
                      className="hover:underline text-black text-[18px] hover:text-[#4d326b] "
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className=" py-6 border-t items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            &copy; MoramNapu 2023. All Rights Reserved .
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 border rounded-xl flex items-center justify-center">
                <a href="https://www.instagram.com/4wd.gaming/">
                  <BiLogoInstagram />{" "}
                </a>
              </li>

              <li className="w-10 h-10 border rounded-xl flex items-center justify-center">
                <a href="https://twitter.com/4wdGaming">
                  <BiLogoTwitter />
                </a>
              </li>

              <li className="w-10 h-10 border rounded-xl flex items-center justify-center">
                <a href="https://www.linkedin.com/company/4wd-gaming/">
                  <BiLogoLinkedin />{" "}
                </a>
              </li>

              {/* <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="javascript:void()">
                  <BiLogoFacebook />{" "}
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <style jsx>{`
          .svg-icon path,
          .svg-icon polygon,
          .svg-icon rect {
            fill: currentColor;
          }
        `}</style>
      </footer>
    </div>
  );
};

export default Footer;
