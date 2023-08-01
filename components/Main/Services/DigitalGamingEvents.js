import React from 'react'
import Image from "next/image";
import About from "../../../public/images/content.jpg";

const DigitalGamingEvents = () => {
  return (
    <div>
      <div className="content bg-[#17191d] py-16 lg:px-32 px-4">
        <h1 className=" outline text-center lg:text-9xl md:text-6xl text-4xl text-[#fff] outline-4 font-semibold">
          Digital Gaming Events
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 p-4 py-16 lg:px-32 px-4 bg-[#191C20]">
        <div>
          <Image src={About} alt="hello" layout="" className="rounded-lg" />
        </div>

        <p>
          We are online. Just like gaming, we manage a smooth and quick
          transition into the online and digital space with events. We can help
          you organize and manage online gaming events and conferences. Events
          help create a buzz for your organization and with our expertise, every
          event will be that much better!
        </p>
      </div>
    </div>
  );
}

export default DigitalGamingEvents
