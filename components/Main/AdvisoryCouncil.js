import Image from "next/image";
import React from "react";
import About from "../../public/pro.png";
// import About2 from "../../public/images/vami.jpg";
import Link from "next/link";

const AdvisoryCouncil = () => {
  return (
    <div id="advisory">
      <div className="bg-[#fff]" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="bg-[#fff]">
            <div className="content bg-[#fff] py-16  px-4">
              <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
                Advisory Council Members
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-[#fff]">
          <div className="max-w-screen-xl mx-auto md:px-8">
            <div className="flex lg:flex-row justify-center flex-col  space-between gap-6 p-4 py-10  px-4 ">
              <div className="text-center">
                <Image
                  src={About}
                  data-aos="zoom-in"
                  alt="hello"
                  className="rounded-xl"
                  layout="responsive"
                  width={300}
                />
              </div>
              <div className="py-3 text-[20px]">
                <p className="text-lg text-[#4d326b] mt-2">Lorem ipsum</p>
                <p className="text-lg text-black">
                  {" "}
                  dummy text of the printing and typesetting
                </p>
                <p className="text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p className="text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>

            <div className="flex lg:flex-row justify-center flex-col  space-between gap-6 p-4 py-10  px-4 ">
              <div className="text-center">
                <Image
                  src={About}
                  data-aos="zoom-in"
                  alt="hello"
                  className="rounded-xl"
                  width={300}
                  layout="responsive"
                />
              </div>
              <div className="py-3 text-[20px]">
                <p className="text-xl text-[#4d326b] mt-2">Lorem ipsum</p>
                <p className="text-lg text-black">
                  dummy text of the printing and typesetting
                </p>
                <p className="text-black">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvisoryCouncil;
