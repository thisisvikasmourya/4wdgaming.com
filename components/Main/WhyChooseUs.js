import Image from "next/image";
import React from "react";
import object from "../../public/images/rE7ypN.gif";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#14161a] lg:px-32 px-4 py-16">
      <div className="max-w-xl sm:text-center py-1 md:mx-auto">
        <h3
          className="text-[#c52326] text-3xl font-semibold sm:text-4xl text-center "
          data-aos="flip-up"
        >
          Why Choose Us
        </h3>
        <p className="mt-3 text-white text-center">
          Whatever your game, we bring the ammo!
        </p>
      </div>
      <div className="flex lg:flex-rowbflex-col py-2 gap-6 ">
        <div>
          <Image src={object} alt="hello" className="rounded-xl " width={600} />
        </div>
        <div>
          <p className="py-1">
            As pioneers of focused gaming PR, we&apos;ve set the trend for
            gaming coverage. We brought gaming news to mainstream media and made
            it a legitimate area of interest. Working closely with our clients,
            we ensure comprehensive coverage in every possible space.
          </p>
          <p className="py-1">
            With exceptional visibility for our gaming brands, we anchor their
            position as innovative leaders in the media space. Join us on an
            exciting journey where we propel your brand to the forefront of the
            gaming world with unmatched expertise and passion.
          </p>
          <p className="py-1">
            We made way for gaming news when it was too niche for mainstream
            media to cover. Faced with multiple challenges initially, as India
            was still an emerging gaming market, our aggressive push for gaming
            as a legit area to cover is bearing fruit now, with the ecosystem
            becoming an area of absolute interest for the media.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
