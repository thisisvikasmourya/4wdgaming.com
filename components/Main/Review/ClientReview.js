import React from 'react'
import Image from "next/image";
import client1 from "../../../public/images/client2.png";
import client2 from "../../../public/images/Add-a-heading-15.png";
// import client3 from "../../public/images/Add-a-heading-13-1.png";
import client4 from "../../../public/images/halaplay-1.png";
import client5 from "../../../public/images/evenbet.png";
import client6 from "../../../public/images/sportskeeda.png";
import client7 from "../../../public/images/Untitled-design-88.png";
import client8 from "../../../public/images/Untitled-design-93.png";
import client9 from "../../../public/images/Yudiz-Solutions-Limited-Logo.png";
import client10 from "../../../public/images/wcc.png";
import client11 from "../../../public/images/trinity.png";

const ClientReview = () => {
  return (
    <div>
      <div className="py-20 bg-[#17191d] " id="client" data-aos="zoom-in">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-[#c52326] text-3xl font-semibold sm:text-4xl">
              Clients
            </h3>
            <p className="text-white mt-3">
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
                  className="rounded-lg"
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
                <Image src={client10} alt="client1" width={200} height={100} />
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
                  src={client5}
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
                  src={client7}
                  alt="client1"
                  className="rounded-lg"
                  width={200}
                  height={100}
                />
              </li>

              {/* LOGO 8 */}
              <li>
                <Image
                  src={client8}
                  alt="client1"
                  className="rounded-lg"
                  width={200}
                  height={100}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientReview
