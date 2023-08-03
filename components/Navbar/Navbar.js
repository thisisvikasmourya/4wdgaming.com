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
          className=" px-5  cursor-pointer hover:bg-[#c52326] py-3 rounded-lg hover:text-[#fff] "
        >
          Home
        </Link>
      </li>

      <li>
        <div className="dropdown">
          <button className="dropbtn">About Us</button>
          <div className="dropdown-content">
            <Link href="/about-us">About Company</Link>
            <Link href="/about-founder">About the Founder</Link>
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
            <a href={"/advisory-council-members"}>Advisory Council Members</a>
            {/* <a href={"/case-study"}>Case Studies</a> */}
            <a href={"#client"}>Clients</a>
            <a href="#">4WD Gaming in News</a>
          </div>
        </div>
      </li>
      <li>
        <div className="dropdown">
          <button className="dropbtn">Case Study</button>
          <div className="dropdown-content">
            <a href={"/case-study/nazara"} onClick={() => setOpen(false)}>
              Nazara Technologies
            </a>
            <a href={"/case-study/yudiz"} onClick={() => setOpen(false)}>
              Yudiz Solutions
            </a>
            <a href={"/case-study/tfg"} onClick={() => setOpen(false)}>
              Trade Fantasy Game
            </a>
            <a href="/case-study/wcc" onClick={() => setOpen(false)}>
              World Cricket Championship
            </a>
          </div>
        </div>
      </li>
      <li>
        <Link
          href="/blog"
          className=" px-5  cursor-pointer hover:bg-[#c52326] py-3 rounded-lg hover:text-[#fff] "
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
              <RiMenu4Line className="text-3xl" />
            ) : (
              <AiOutlineClose className="text-3xl" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="bg-[#191c20] text-[#fff] rounded w-full text-center   py-7 z-10  fixed">
          <ul className=" lg:hidden flex flex-col items-center gap-5 ">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className=" px-5  cursor-pointer hover:bg-[#c52326] py-3 rounded-lg hover:text-[#fff] "
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
                  <Link href="/about-founder" onClick={() => setOpen(false)}>
                    About the Founder
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
                  <a
                    href={"/advisory-council-members"}
                    onClick={() => setOpen(false)}
                  >
                    Advisory Council Members
                  </a>
                  <a href={"#client"} onClick={() => setOpen(false)}>
                    Clients
                  </a>
                  <a href="#" onClick={() => setOpen(false)}>
                    4WD Gaming in News
                  </a>
                </div>
              </div>
            </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn">Case Study</button>
                <div className="dropdown-content">
                  <a href={"/case-study/nazara"} onClick={() => setOpen(false)}>
                    Nazara Technologies
                  </a>
                  <a href={"/case-study/yudiz"} onClick={() => setOpen(false)}>
                    Yudiz Solutions
                  </a>
                  <a href={"/case-study/tfg"} onClick={() => setOpen(false)}>
                    Trade Fantasy Game
                  </a>
                  <a href="/case-study/wcc" onClick={() => setOpen(false)}>
                    World Cricket Championship
                  </a>
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/blog"
                onClick={() => setOpen(false)}
                className=" px-5  cursor-pointer hover:bg-[#c52326] py-3 rounded-lg hover:text-[#fff] "
              >
                Blog
              </Link>
            </li>
          </ul>
          &nbsp;&nbsp;&nbsp;
          <button className=" bg-[#c52326] text-white items-center px-5 py-3 rounded-lg shadow-lg shadow-red-500/50">
            <Link href={"/contactUs"}>Contact us</Link>
          </button>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
