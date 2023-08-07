import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiMenu4Line } from "react-icons/ri";
import logo from "../../public/images/okayLogo.png";
import Button from "../Main/Button";
import Button2 from "../Main/Button2";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = (
    <>
      <li>
        <Link
          href="/"
          className=" px-5 text-white  cursor-pointer hover:bg-[#c52326] transition-all duration-500 py-3 rounded-lg hover:text-[#fff] "
        >
          Home
        </Link>
      </li>

      <li>
        <Link
          href="/about-us"
          className=" px-5 text-white  cursor-pointer hover:bg-[#c52326] transition-all duration-500 py-2.5 rounded-lg hover:text-[#fff] "
        >
          About Us
        </Link>
      </li>
      <li>
        <div className="dropdown ">
          <button className="dropbtn px-5 text-white  cursor-pointer hover:bg-[#c52326] transition-all duration-500 py-2.5 rounded-lg hover:text-[#fff]">
            Services
          </button>
          <div className="dropdown-content">
            <div>
              <Link href="/services/strategy-and-marketing">
                Strategy And Marketing
              </Link>
              <Link href="/services/content-and-writing">
                Content and Copywriting
              </Link>
              <Link href="/services/public-relations">Public Relations</Link>
              <Link href="/services/digital-gaming-events">
                Digital Gaming Events
              </Link>
              <Link href="/services/creator-and-influencers">
                Creators and Influencers
              </Link>
            </div>
            <div>
              <Link href="/services/crisis-communication">
                Crisis Communication
              </Link>
              <Link href="/services/data-driven-pr-insight">
                Data Driven PR-Insights
              </Link>
              <Link href="/services/esports-tournament-organization">
                Esports Tournament Organization
              </Link>
              <Link href="/services/gaming-product-launches">
                Gaming Product Launches
              </Link>
              <Link href="/services/international-pr-expansion">
                International PrExpansion
              </Link>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div className="dropdown">
          <button className="dropbtn px-5 text-white  cursor-pointer hover:bg-[#c52326] py-3 transition-all duration-500 rounded-lg hover:text-[#fff]">
            Case Study
          </button>
          <div className="dropdown-content">
            <Link href={"/case-study/nazara"} onClick={() => setOpen(false)}>
              Nazara Technologies
            </Link>
            <Link href={"/case-study/yudiz"} onClick={() => setOpen(false)}>
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
      </li>
      <li>
        <Link
          href="/pricing-page"
          onClick={() => setOpen(false)}
          className=" px-5 text-white cursor-pointer transition-all duration-500 hover:bg-[#c52326] py-3 rounded-lg hover:text-[#fff] "
        >
          Pricing
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className=" px-5 text-white  cursor-pointer transition-all duration-500 hover:bg-[#c52326] py-3 rounded-lg hover:text-[#fff] "
        >
          Blog
        </Link>
      </li>
    </>
  );

  return (
    <>
      <nav
        className=" flex items-center  justify-between py-5 lg:px-20 px-4 bg-[#191c20]"
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
            className={"hidden lg:block"}
          />
          &nbsp;
          <button onClick={() => setOpen(!open)} className="block lg:hidden ">
            {!open ? (
              <RiMenu4Line className="text-3xl text-[#c52326]" />
            ) : (
              <AiOutlineClose className="text-3xl text-[#c52326]" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div
          className={`bg-[#191c20] h-screen text-[#fff] rounded w-full text-center z-10 pb-5 fixed ${
            open ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 transition-max-h`}
        >
          <ul className=" lg:hidden flex flex-col items-center gap-10  ">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className=" px-5 text-white  cursor-pointer hover:bg-[#c52326] py-3 rounded-lg hover:text-[#fff] "
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about-us"
                onClick={() => setOpen(false)}
                className=" px-5 text-white  cursor-pointer hover:bg-[#c52326] py-3 rounded-lg hover:text-[#fff] "
              >
                About Us
              </Link>
            </li>
            <li>
              <div className="dropdown ">
                <button className="dropbtn">Services</button>
                <div className="dropdown-content">
                  <Link
                    href="/services/strategy-and-marketing"
                    onClick={() => setOpen(false)}
                  >
                    Strategy And Marketing
                  </Link>
                  <Link
                    href="/services/content-and-writing"
                    onClick={() => setOpen(false)}
                  >
                    Content and Copywriting
                  </Link>
                  <Link
                    href="/services/public-relations"
                    onClick={() => setOpen(false)}
                  >
                    Public Relations
                  </Link>
                  <Link
                    href="/services/digital-gaming-events"
                    onClick={() => setOpen(false)}
                  >
                    Digital Gaming Events
                  </Link>
                  <Link
                    href="/services/creator-and-influencers"
                    onClick={() => setOpen(false)}
                  >
                    Creators and Influencers
                  </Link>

                  <Link
                    href="/services/crisis-communication"
                    onClick={() => setOpen(false)}
                  >
                    Crisis Communication
                  </Link>
                  <Link
                    href="/services/data-driven-pr-insight"
                    onClick={() => setOpen(false)}
                  >
                    Data Driven PR-Insights
                  </Link>
                  <Link
                    href="/services/esports-tournament-organization"
                    onClick={() => setOpen(false)}
                  >
                    Esports Tournament Organization
                  </Link>
                  <Link
                    href="/services/gaming-product-launches"
                    onClick={() => setOpen(false)}
                  >
                    Gaming Product Launches
                  </Link>
                  <Link
                    href="/services/international-pr-expansion"
                    onClick={() => setOpen(false)}
                  >
                    International PrExpansion
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn">Case Study</button>
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
            </li>
            <li>
              <Link
                href="/pricing-page"
                onClick={() => setOpen(false)}
                className=" px-5 text-white cursor-pointer hover:bg-[#c52326] py-3 rounded-lg hover:text-[#fff] "
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => setOpen(false)}
                className=" px-5 text-white cursor-pointer hover:bg-[#c52326] py-3 rounded-lg hover:text-[#fff] "
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
