import React from "react";
import Image from "next/image";
import client1 from "../../../public/images/news/aaj.png";
import client2 from "../../../public/images/news/cp.jpg";
// import client3 from "../../../public/images/news/";
import client4 from "../../../public/images/news/ht.jpg";
import client5 from "../../../public/images/news/it.png";
import client6 from "../../../public/images/news/n18.jpg";
import client7 from "../../../public/images/news/tn.png";
import client8 from "../../../public/images/news/toi.png";
import client9 from "../../../public/images/news/ndtv.jpg";
import client10 from "../../../public/images/news/rp.jpg";
import client11 from "../../../public/images/news/news24.png";

const ClientReview = () => {
  return (
    <div className="bg-[#f3efdf]">
      <div
        className="py-20 bg-[#f3efdf] max-w-screen-xl mx-auto md:px-8"
        id="client"
        data-aos="zoom-in"
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-[#4d326b] text-3xl font-semibold sm:text-4xl">
              Moram Napu: Making Media Buzz
            </h3>
            <p className="text-black text-[20px] mt-3">
              We&apos;ll get the media talking about you!
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
              {/* LOGO 1 */}
              <li className="indi">
                <Image
                  src={client1}
                  alt="client1"
                  className="rounded-lg bg-white"
                  width={200}
                  height={100}
                />
              </li>

              {/* LOGO 2 */}
              <li className="indi">
                <Image
                  src={client2}
                  className="rounded-lg"
                  alt="client1"
                  width={200}
                  height={100}
                />
              </li>

              {/* LOGO 3 */}
              <li className="bg-white rounded-lg indi">
                <Image src={client8} alt="client1" width={200} height={100} />
              </li>

              {/* LOGO 4 */}
              <li className="bg-white indi">
                <Image
                  src={client4}
                  alt="client1"
                  className="rounded-lg"
                  width={200}
                  height={100}
                />
              </li>

              {/* LOGO 5 */}
              <li className="indi">
                <Image
                  src={client9}
                  alt="client1"
                  className="rounded-lg"
                  width={200}
                  height={100}
                />
              </li>

              {/* LOGO 6 */}
              <li className="indi">
                <Image
                  src={client6}
                  alt="client1"
                  className="rounded-lg"
                  width={200}
                  height={100}
                />
              </li>

              {/* LOGO 7 */}
              <li className="indi">
                <Image
                  src={client11}
                  alt="client1"
                  className="rounded-lg"
                  width={180}
                  height={100}
                />
              </li>

              {/* LOGO 8 */}
              <li className="indi">
                <Image
                  src={client7}
                  alt="client1"
                  className="rounded-lg"
                  width={200}
                  height={120}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
