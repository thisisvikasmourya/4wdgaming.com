import Image from "next/image";
import React from "react";
import About from "../../public/images/jay.png";
import About2 from "../../public/images/vami.jpg";
import Link from "next/link";

const AdvisoryCouncil = () => {
  return (
    <div className="bg-[#17191d] py-20">
      <div className=" bg-[#17191d]">
        <h3
          className="text-[#c52326] text-3xl font-semibold sm:text-4xl text-center "
          data-aos="flip-up"
        >
          Advisory Council Members
        </h3>
        <p className="mt-3 text-white text-center">
          Whatever your game, we bring the ammo!
        </p>
      </div>

      <div className="flex lg:flex-row justify-center flex-col text-center space-between gap-6 p-4 py-10 lg:px-32 px-4 bg-[#17191d]">
        <div className="text-center">
          <Image
            src={About}
            data-aos="zoom-in"
            alt="hello"
            className="rounded-full"
            width={300}
          />
          <p className="text-xl text-[#c52326] mt-2">Jay Sayta </p>
          <p className="text-lg">Technology and Gaming Lawyer in India</p>
          <Link href={"/advisory-council-members"} className="text-[#c52326]">
            Readmore..
          </Link>
        </div>
        {/* <hr /> */}
        <div className="text-center">
          <Image
            src={About2}
            data-aos="zoom-in"
            alt="hello"
            layout=""
            className="rounded-full"
            width={300}
          />
          <p className="text-xl text-[#c52326] mt-2">Vamsi Talasila</p>
          <p className="text-lg ">Gaming Technology and Digital Marketing</p>
          <Link href={"/advisory-council-members"} className="text-[#c52326]">
            Readmore..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryCouncil;
