import React from "react";
import Link from "next/link";

const Button2 = ({ href, buttonText }) => {
  return (
    <div>
      <Link
        href={href}
        className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#ac3b61] rounded-xl group"
      >
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#452d60] rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#5f477a] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-[#123c69] transition-colors duration-200 ease-in-out group-hover:text-white">
          {buttonText}
        </span>
      </Link>
    </div>
  );
};

export default Button2;
