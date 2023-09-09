import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiMenu4Line } from "react-icons/ri";
import logo from "../../public/images/MORAM.png";
import Button from "../Main/Button";
import Button2 from "../Main/Button2";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dstate, setDstate] = useState(true);

  const menuItems = (
    <>
      <li>
        <Link
          href="/"
          className=" px-5 text-[#123c69]  cursor-pointer hover:bg-[#ac3b61] transition-all duration-500 py-3 rounded-lg hover:text-[#fff] "
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/about-us"
          className=" px-5 text-[#123c69]  cursor-pointer hover:bg-[#ac3b61] transition-all duration-500 py-2.5 rounded-lg hover:text-[#fff] "
        >
          About Us
        </Link>
      </li>
      <li>
        <div className="dropdown ">
          <button className="dropbtn px-5 text-[#123c69]  cursor-pointer hover:bg-[#ac3b61] transition-all duration-500 py-2.5 rounded-lg hover:text-[#fff]">
            <span className="text-[#123c69] hover:text-[#fff]">Services</span>
          </button>
          <div className="dropdown-content ">
            <div>
              <Link href="/services/public-relations-and-outreach">
                Public Relation and Outreach
              </Link>
              <Link href="/services/strategy-and-digitalmarketing">
                Strategy And Digital Marketing
              </Link>
              <Link href="/services/content-and-writing">
                Content And Copywriting
              </Link>
              <Link href="/services/creator-and-influencers">
                Creator and Influencer
              </Link>
              <Link href="/services/digital-brand-communication">
                Digital Brand Communication
              </Link>
              <Link href="/services/data-driven-gaming-insight">
                Data Driven Gaming - Insights
              </Link>
              <Link href="/services/growth-marketing">Growth Marketing</Link>
              <Link href="/services/performance-marketing">
                Performance Marketing
              </Link>
              <Link href="/services/digital-gaming-events-and-expo">
                Gaming Event and Expo
              </Link>
              <Link href="/services/gaming-product-launches">
                Gaming Product Launches
              </Link>
              <Link href="/services/community-building-management">
                Community building and Management
              </Link>
              <Link href="/services/social-media-management-marketing">
                Social Media Management Marketing
              </Link>
              <Link href="/services/go-global-pr-marketing">Go Global PR Marketing</Link>
            </div>
          </div>
        </div>
      </li>
     
      <li>
        <Link
          href="/pricing-page"
          onClick={() => setOpen(false)}
          className=" px-5 text-[#123c69] cursor-pointer transition-all duration-500 hover:bg-[#ac3b61] py-3 rounded-lg hover:text-[#fff] "
        >
          Pricing
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className=" px-5 text-[#123c69]  cursor-pointer transition-all duration-500 hover:bg-[#ac3b61] py-3 rounded-lg hover:text-[#fff] "
        >
          Blog
        </Link>
      </li>
    </>
  );

  return (
    <>
      {dstate ? (
        <div className="bg-[#123c69]">
          <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-start justify-between text-white md:px-8">
            <div className="flex gap-x-4">
              <div className="w-10 h-10 flex-none rounded-lg bg-[#0e3054] flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                  />
                </svg>
              </div>
              <p className="py-2 font-medium">
                Get in early and save big! For the first 5 clients, enjoy a
                whopping 55% off our regular prices.{" "}
                <a
                  href="javascript:(0)"
                  className="font-semibold underline duration-150 hover:text-indigo-100"
                ></a>
              </p>
            </div>
            <button
              className="p-2 rounded-lg duration-150 hover:bg-[#0e3054] ring-offset-2 focus:ring"
              onClick={() => setDstate(!dstate)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        " "
      )}
      <nav
        className=" flex text-[18px] justify-between py-5 border-gray-300 border-b lg:px-20 px-4 bg-[#eee2dc] items-center"
        id="home"
      >
        <Link href={"/"}>
          <Image src={logo} alt={"this is logo"} width={90} height={50} />
        </Link>

        <ul
          className="hidden lg:flex  lg:flex-row items-center gap-4 "
          onClick={() => setOpen(false)}
        >
          {menuItems}
        </ul>
        <div className="flex">
          <Button
            href={"/contactUs"}
            buttonText={"Contact Us"}
            className={"hidden lg:block text-white"}
          />
          &nbsp;
          <button onClick={() => setOpen(!open)} className="block lg:hidden ">
            {!open ? (
              <RiMenu4Line className="text-3xl text-[#ac3b61]" />
            ) : (
              <AiOutlineClose className="text-3xl text-[#ac3b61]" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="bg-[#eee2dc] h-screen text-[18px] text-[#fff] rounded w-full text-center z-10 pb-5 fixed navv ">
          <ul className=" lg:hidden flex flex-col items-center gap-10  ">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className=" px-5 text-[#123c69]  cursor-pointer hover:bg-[#ac3b61] py-3 rounded-lg hover:text-[#fff] "
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about-us"
                onClick={() => setOpen(false)}
                className=" px-5 text-[#123c69]  cursor-pointer hover:bg-[#ac3b61] py-3 rounded-lg hover:text-[#fff] "
              >
                About Us
              </Link>
            </li>
            <li>
              <div className="dropdown ">
                <button className="dropbtn px-5 text-[#123c69]  cursor-pointer hover:bg-[#ac3b61] transition-all duration-500 py-2.5 rounded-lg hover:text-[#fff]">
                  <span className="text-[#123c69] hover:text-[#fff]">
                    Services
                  </span>
                </button>
                <div className="dropdown-content ">
                  <div>
                    <Link href="/services/public-relations-and-outreach">
                      Public Relation and Outreach
                    </Link>
                    <Link href="/services/strategy-and-digitalmarketing">
                      Strategy And Digital Marketing
                    </Link>
                    <Link href="/services/content-and-writing">
                      Content And Copywriting
                    </Link>
                    <Link href="/services/creator-and-influencers">
                      Creator and Influencer
                    </Link>
                    <Link href="/services/digital-brand-communication">
                      Digital Brand Communication
                    </Link>
                    <Link href="/services/data-driven-gaming-insight">
                      Data Driven Gaming - Insights
                    </Link>
                    <Link href="/services/growth-marketing">
                      Growth Marketing
                    </Link>
                    <Link href="/services/performance-marketing">
                      Performance Marketing
                    </Link>
                    <Link href="/services/digital-gaming-events-and-expo">
                      Gaming Event and Expo
                    </Link>
                    <Link href="/services/gaming-product-launches">
                      Gaming Product Launches
                    </Link>
                    <Link href="/services/community-building-management">
                      Community building and Management
                    </Link>
                    <Link href="/services/social-media-management-marketing">
                      Social Media Management Marketing
                    </Link>
                    <Link href="/services/go-global-pr-marketing">
                      Go Global PR Marketing
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            {/* <li>
              <div className="dropdown">
                <button className="dropbtn text-[#123c69]">Case Study</button>
                <div className="dropdown-content">
                  <Link
                    href={"/case-study/nazara"}
                    onClick={() => setOpen(false)}
                  >
                    Nazara Technologies
                  </Link>
                  <Link
                    href={"/case-study/yudiz"}
                    onClick={() => setOpen(false)}
                  >
                    Yudiz Solutions
                  </Link>
                  <Link href={"/case-study/tfg"} onClick={() => setOpen(false)}>
                    Trade Fantasy Game
                  </Link>
                  <Link href="/case-study/wcc" onClick={() => setOpen(false)}>
                    World Cricket Championship
                  </Link>
                </div>
              </div>
            </li> */}
            <li>
              <Link
                href="/pricing-page"
                onClick={() => setOpen(false)}
                className=" px-5 text-[#123c69] cursor-pointer hover:bg-[#ac3b61] py-3 rounded-lg hover:text-[#fff] "
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => setOpen(false)}
                className=" px-5 text-[#123c69] cursor-pointer hover:bg-[#ac3b61] py-3 rounded-lg hover:text-[#fff] "
              >
                Blog
              </Link>
            </li>
          </ul>
          <br />

          <Button2
            href={"/contactUs"}
            buttonText={"Contact Us"}
            className="block lg:hidden"
            onClick={() => setOpen(false)}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
