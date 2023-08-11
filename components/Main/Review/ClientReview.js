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
    <div className="bg-[#17191d]">
      <div
        className="py-20 bg-[#17191d] max-w-screen-xl mx-auto md:px-8"
        id="client"
        data-aos="zoom-in"
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-[#c52326] text-3xl font-semibold sm:text-4xl">
              4WD GAMING in News
            </h3>
            <p className="text-white text-[20px] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              dignissim nibh nisl, vel egestas magna rhoncus at. Nunc elementum
              efficitur tortor in laoreet.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            <ul className="inline-grid grid-cols-2 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-4">
              {/* LOGO 1 */}
              <li>
                <Image
                  src={client1}
                  alt="client1"
                  className="rounded-lg bg-white"
                  width={200}
                  height={100}
                />
              </li>

              {/* LOGO 2 */}
              <li>
                <Image
                  src={client2}
                  className="rounded-lg"
                  alt="client1"
                  width={200}
                  height={100}
                />
              </li>

              {/* LOGO 3 */}
              <li className="bg-white rounded-lg">
                <Image src={client8} alt="client1" width={200} height={100} />
              </li>

              {/* LOGO 4 */}
              <li className="bg-white">
                <Image
                  src={client4}
                  alt="client1"
                  className="rounded-lg"
                  width={200}
                  height={100}
                />
              </li>

              {/* LOGO 5 */}
              <li>
                <Image
                  src={client9}
                  alt="client1"
                  className="rounded-lg"
                  width={200}
                  height={100}
                />
              </li>

              {/* LOGO 6 */}
              <li>
                <Image
                  src={client6}
                  alt="client1"
                  className="rounded-lg"
                  width={200}
                  height={100}
                />
              </li>

              {/* LOGO 7 */}
              <li>
                <Image
                  src={client11}
                  alt="client1"
                  className="rounded-lg"
                  width={180}
                  height={100}
                />
              </li>

              {/* LOGO 8 */}
              <li>
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
