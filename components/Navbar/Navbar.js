import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiMenu4Line } from "react-icons/ri";
import logo from "../../public/images/Logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  

  const menuItems = (
    <>
      <li>
        <Link
          href="/"
          className="font-semibold px-5  cursor-pointer hover:bg-[#c52326] py-3 rounded-lg hover:text-[#fff] "
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
        <div className="dropdown">
          <button className="dropbtn">Services</button>
          <div className="dropdown-content">
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
        </div>
      </li>
      <li>
        <div className="dropdown">
          <button className="dropbtn">Our Work</button>
          <div className="dropdown-content">
            <a href={"/advisory-council-members"}>Advisory Council Members</a>
            <a href={ "/case-study" }>Case Studies</a>
            <a href={"#client"}>Clients</a>
            <a href="#">4WD Gaming in News</a>
          </div>
        </div>
      </li>
      <li>
        <Link
          href="/blog"
          className="font-semibold px-5  cursor-pointer hover:bg-[#c52326] py-3 rounded-lg hover:text-[#fff] "
        >
          Blog
        </Link>
      </li>

      {/* <li>
        <Link
          href="/#testimonials"
          className="font-semibold px-5 py-3.5 cursor-pointer hover:text-[#fff] hover:bg-[#c52326]"
        >
          Contact Us
        </Link>
      </li> */}
    </>
  );

  // console.log(open);

  return (
    <>
      <nav
        className=" flex items-center justify-between py-6 lg:px-20 px-4 bg-[#191c20]"
        id="home"
      >
        {/* <h2 className="text-2xl font-bold cursor-pointer">DentFirst</h2> */}
        <Image src={logo} alt={"this is logo"} width={80} height={50} />

        <ul className="hidden lg:flex  lg:flex-row items-center gap-4 ">
          {menuItems}
        </ul>
        <div className="flex">
          <button className=" bg-[#c52326] text-white px-5 py-3 rounded-lg shadow-lg shadow-red-500/50">
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
        <div className="bg-[#191c20] text-[#fff] rounded w-full   py-7 z-10  fixed">
          <ul className=" lg:hidden flex flex-col items-center gap-5 ">
            {menuItems}
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
