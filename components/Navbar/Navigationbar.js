import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {FaWpforms} from "react-icons/fa"
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Navigationbar = ({ navData }) => {
  return (
    <div className="bg-[#eee2dc]">
      <div className="  max-w-screen-xl mx-auto md:px-8 py-10 ">
        <h1 className="px-5 py-1 text-[#ac3b61] font-bold text-xl">
          Contact us:
        </h1>
        <div className="pb-5 text-lg text-[#123c69]">
          <Link
            href={"/contactUs"}
            className="px-5 py-1 flex items-center gap-2"
          >
            <FaWpforms /> Fill Contact Us Form
          </Link>{" "}
          
          <a
            href="tel:9833196480"
            className="px-5 py-1 flex items-center gap-2"
          >
            <FiPhoneCall /> Call Us
          </a>
          
          <a
            href="mailto:arjun@moramnapu.com"
            className="px-5 py-1 flex items-center gap-2"
          >
            <MdEmail /> Send a Email
          </a>
        </div>
        <h1 className="px-5 py-1">Read more Services: </h1>
        <ul className="grid lg:grid-cols-3 grid-cols-1 gap-2 py-1  px-4 bg-[#eee2dc]">
          {navData.map((items, key) => (
            <Link
              className="bg-[#bab2b5] flex items-center text-[18px] text-[#123c69] rounded-lg place-content-center py-3 hover:bg-[#eee2dc] hover:border-[#ac3b61] hover:border 	"
              href={items.href}
              key={key}
            >
              <MdOutlineKeyboardArrowRight /> {items.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigationbar;
