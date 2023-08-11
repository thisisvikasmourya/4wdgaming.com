import React from 'react'
import logo from "../../public/images/okaylogowhite.png";
import Image from 'next/image';
// import {AiOutlineInstagram} from "react-icons/ai"
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoInstagram,
} from "react-icons/bi";
import Link from 'next/link';

const Footer = () =>
{
      const footerNavs = [
        {
          label: "About Us",
          items: [
            {
              href: "/about-us/#founder",
              name: "About the Founder",
            },
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
          label: "Case Study",
          items: [
            {
              href: "/case-study/nazara",
              name: "Nazara Technologies",
            },
            {
              href: "/case-study/wcc",
              name: "World Cricket ChampionShip",
            },

            {
              href: "/case-study/yudiz",
              name: "Yudiz Solutions",
            },

            {
              href: "/case-study/tfg",
              name: "Trade Fanstay Game",
            },
          ],
        },
        {
          label: "Services",
          items: [
            {
              href: "/services/public-relations",
              name: "Public Relations",
            },
            {
              href: "/services/strategy-and-marketing",
              name: "Strategy & Marketing",
            },
            {
              href: "/services/content-and-writing",
              name: "Content & CopyWriting",
            },
            {
              href: "/services/creator-and-influencers",
              name: "Creator & Influencers",
            },
            {
              href: "/services/digital-gaming-events",
              name: "Digital Gaming Events",
            },
          ],
        },
        {
          label: " ",
          items: [
            {
              href: "/services/crisis-communication",
              name: "Crisis Communication",
            },
            {
              href: "/services/international-pr-expansion",
              name: "International PR-Expansion",
            },
            {
              href: "/services/gaming-product-launches",
              name: "Gaming Product Launches",
            },
            {
              href: "/services/data-driven-pr-insight",
              name: "Data Driven PR-Insights",
            },
            {
              href: "/services/esports-tournament-organization",
              name: "Esports Tournament Organization",
            },
          ],
        },
      ];

  return (
    <div className="bg-[#191c20]">
      <footer className="text-white  px-4 py-10 max-w-screen-xl mx-auto md:px-8">
        <div className="gap-20 justify-between md:flex">
          <div className="flex">
            <div className="max-w-xs">
              <Image src={logo} alt="Logo" className="w-32" />
              <p className="leading-relaxed mt-2 text-[15px] text-white">
                LET&apos;S BRING TOMORROW CLOSER
              </p>
            </div>
          </div>
          <div className="flex-1 mt-10 space-y-6  justify-between sm:flex md:space-y-0 md:mt-0">
            {footerNavs.map((item, idx) => (
              <ul className="space-y-4" key={idx}>
                <h2 className="text-[#c52326] text-[20px] font-bold">
                  {item.label}
                </h2>
                {item.items.map((el, idx) => (
                  <li key={idx}>
                    <Link
                      href={el.href}
                      className="hover:underline text-white text-[18px] hover:text-[#c52326] "
                    >
                      {el.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            &copy; Sharmilee Daru 2023. All Rights Reserved .
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="https://www.instagram.com/4wd.gaming/">
                  <BiLogoInstagram />{" "}
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="https://twitter.com/4wdGaming">
                  <BiLogoTwitter />
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
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
}

export default Footer
