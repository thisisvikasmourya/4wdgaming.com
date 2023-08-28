import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navigationbar = ({ navData }) => {
  return (
    <div className="bg-[#f0ebd7]">
      <div className="  max-w-screen-xl mx-auto md:px-8 py-10 ">
        <h1 className="px-5 py-1">Read more Services: </h1>
        <ul className="grid lg:grid-cols-5 grid-cols-1 gap-2 py-1  px-4 bg-[#f0ebd7]">
          {navData.map((items, key) => (
            <Link
              className="bg-[#4d326b] flex items-center text-[18px] rounded-lg place-content-center py-3 hover:bg-[#f0ebd7] hover:border-white hover:border hover:animate-bounce delay-100	"
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
