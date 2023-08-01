import React from 'react'
import Image from "next/image";
import About from "../../../public/images/0x0.jpg";

const StrategyAndMarketing = () => {
  return (
    <div>
      <div className="content bg-[#17191d] py-16 lg:px-32 px-4">
        <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
          Strategy & Marketing
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4 py-16 lg:px-32 px-4 bg-[#191C20]">
        <div>
          <Image src={About} alt="hello" layout="" />
        </div>

        <p>
          At 4WD Gaming, we’re specialists. We don’t just do just media and PR,
          we’re great at it! We have direct access to leading journalists and
          influencers in India and across the world. We make sure your message
          is heard – exactly what you want to say, turn it into exactly what
          your target audience wants to hear. To achieve this, we will also
          conduct media training which ensures that the communications with the
          media persons are clear and no information is shared which can
          jeopardize the business. Selecting the right media outlets,
          journalists are just the tip of the iceberg. Results are shown via the
          quality stories, interviews, opinionated articles by the company. With
          a strong foothold in the gaming media space, we believe no
          communication is complete without the appropriate strategy. Apart from
          strategizing media content, the other ways of building thought
          leadership will be via conferences, webinars and conclave, awards, and
          recognition. From corporate communication service offerings to brand
          building and perception and reputation management to crisis
          communication. We do it all.
        </p>
      </div>
    </div>
  );
}

export default StrategyAndMarketing
