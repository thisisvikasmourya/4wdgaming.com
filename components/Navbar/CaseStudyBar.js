import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CaseStudyBar = () => {
  const data = [
    {
      href: "/case-study/nazara",
      name: "Nazara Technologies",
    },
    {
      href: "/case-study/tfg",
      name: "Trade Fantasy game",
    },
    {
      href: "/case-study/wcc",
      name: "World Cricket Championship",
    },
    {
      href: "/case-study/yudiz",
      name: "yudiz solutins",
    },
  ];
  return (
    <div className="bg-[#191C20]">
      <div className="px-4  max-w-screen-xl mx-auto md:px-8 ">
        <ul className="grid lg:grid-cols-4 grid-cols-1 gap-6 p-4 py-10  px-4 bg-[#191C20]">
          {data.map((items, key) => (
            <Link
              className="bg-[#c52326] flex items-center  rounded-lg place-content-center py-3 hover:bg-[#191c20] hover:border-white hover:border hover:animate-bounce delay-100	"
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

export default CaseStudyBar;
