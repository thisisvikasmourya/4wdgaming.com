import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiMenu4Line } from "react-icons/ri";
import logo from "../../public/images/okayLogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = (
    <>
      <li>
        <Link
          href="/"
          className=" px-5 text-white  cursor-pointer hover:bg-[#c52326] py-3 rounded-lg hover:text-[#fff] "
        >
          Home
        </Link>
      </li>

      <li>
        <div className="dropdown">
          <button className="dropbtn">About Us</button>
          <div className="dropdown-content">
            <Link href="/about-us">About Company</Link>
            {/* <Link href="/about-founder">About the Founder</Link> */}
            <Link href="/what-we-do-and-how-we-do">
              What we do & How we do it
            </Link>
            <Link href="/services/digital-gaming-events">Why Choose Us</Link>
          </div>
        </div>
      </li>
      <li>
        <div className="dropdown ">
          <button className="dropbtn">Services</button>
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
          <button className="dropbtn">Our Work</button>
          <div className="dropdown-content">
            {/* <Link href={"/advisory-council-members"}>
              Advisory Council Members
            </Link> */}
            {/* <Link href={"/case-study"}>Case Studies</Link> */}
            <Link href={"#client"}>Clients</Link>
            <Link href="#">4WD Gaming in News</Link>
          </div>
        </div>
      </li>
      <li>
        <div className="dropdown">
          <button className="dropbtn">Case Study</button>
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
          className=" px-5 text-white cursor-pointer hover:bg-[#c52326] py-3 rounded-lg hover:text-[#fff] "
        >
          Pricing
        </Link>
      </li>
      <li>
        <Link
          href="/blog"
          className=" px-5 text-white  cursor-pointer hover:bg-[#c52326] py-3 rounded-lg hover:text-[#fff] "
        >
          Blog
        </Link>
      </li>
    </>
  );

  return (
    <>
      <nav
        className=" flex items-center justify-between py-6 lg:px-20 px-4 bg-[#191c20]"
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
          <button className="hidden lg:block bg-[#c52326] text-white px-5 py-3 rounded-lg shadow-lg shadow-red-500/50">
            <Link href={"/contactUs"}>Contact us</Link>
          </button>
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
        <div className="bg-[#191c20] text-[#fff] rounded w-full text-center z-10 pb-5 fixed">
          <ul className=" lg:hidden flex flex-col items-center gap-5  ">
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
              <div className="dropdown">
                <button className="dropbtn">About Us</button>
                <div className="dropdown-content">
                  <Link href="/about-us" onClick={() => setOpen(false)}>
                    About Company
                  </Link>
                  <Link
                    href="/what-we-do-and-how-we-do"
                    onClick={() => setOpen(false)}
                  >
                    What we do & How we do it
                  </Link>
                  <Link
                    href="/services/digital-gaming-events"
                    onClick={() => setOpen(false)}
                  >
                    Why Choose Us
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown ">
                <button className="dropbtn">Services</button>
                <div className="dropdown-content">
                  <div>
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
                  </div>
                  <div>
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
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn">Our Work</button>
                <div className="dropdown-content">
                  {/* <Link
                    href={"/advisory-council-members"}
                    onClick={() => setOpen(false)}
                  >
                    Advisory Council Members
                  </Link> */}
                  <Link href={"#client"} onClick={() => setOpen(false)}>
                    Clients
                  </Link>
                  <Link href="#" onClick={() => setOpen(false)}>
                    4WD Gaming in News
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

          <Link
            className=" bg-[#c52326] text-white items-center px-5 py-3 rounded-lg shadow-lg shadow-red-500/50"
            href={"/contactUs"}
          >
            Contact us
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
